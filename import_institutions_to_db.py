import json
import re
import sqlite3
from pathlib import Path


WORKDIR = Path(r"C:\Users\Administrator\Desktop\map")
HTML_PATH = WORKDIR / "gaza_vaccination_mapenv2.html"
DB_PATH = WORKDIR / "institutions.db"


def load_support_facilities():
    text = HTML_PATH.read_text(encoding="utf-8")
    match = re.search(r"const SUPPORT_FACILITIES = (\[.*?\]);\s*\n", text, re.S)
    if not match:
        raise RuntimeError("SUPPORT_FACILITIES array was not found in the HTML file.")
    return json.loads(match.group(1))


def build_db(rows):
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()

    cur.executescript(
        """
        PRAGMA foreign_keys = ON;

        DROP TABLE IF EXISTS institutions;
        DROP TABLE IF EXISTS organizations;

        CREATE TABLE organizations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            team_org TEXT
        );

        CREATE TABLE institutions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            source_id INTEGER NOT NULL UNIQUE,
            governorate TEXT,
            address TEXT,
            name_ar TEXT,
            name_en TEXT,
            organization_id INTEGER,
            organization_name TEXT,
            team_org TEXT,
            latitude REAL,
            longitude REAL,
            source_file TEXT NOT NULL,
            FOREIGN KEY (organization_id) REFERENCES organizations(id)
        );
        """
    )

    org_pairs = {}
    for row in rows:
        name = (row.get("org") or "").strip()
        team_org = (row.get("team_org") or "").strip()
        if name and name not in org_pairs:
            org_pairs[name] = team_org or None

    cur.executemany(
        "INSERT INTO organizations(name, team_org) VALUES(?, ?)",
        sorted(org_pairs.items(), key=lambda item: item[0].lower()),
    )

    org_id_by_name = {
        name: org_id
        for org_id, name in cur.execute("SELECT id, name FROM organizations").fetchall()
    }

    cur.executemany(
        """
        INSERT INTO institutions(
            source_id,
            governorate,
            address,
            name_ar,
            name_en,
            organization_id,
            organization_name,
            team_org,
            latitude,
            longitude,
            source_file
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """,
        [
            (
                row.get("id"),
                row.get("gov"),
                row.get("address"),
                row.get("name_ar"),
                row.get("name_en"),
                org_id_by_name.get((row.get("org") or "").strip()),
                (row.get("org") or "").strip() or None,
                (row.get("team_org") or "").strip() or None,
                row.get("lat"),
                row.get("lon"),
                HTML_PATH.name,
            )
            for row in rows
        ],
    )

    cur.execute(
        "CREATE INDEX idx_institutions_governorate ON institutions(governorate)"
    )
    cur.execute(
        "CREATE INDEX idx_institutions_organization_name ON institutions(organization_name)"
    )

    conn.commit()
    conn.close()


def main():
    rows = load_support_facilities()
    build_db(rows)
    print(f"Created database: {DB_PATH}")
    print(f"Imported institutions: {len(rows)}")


if __name__ == "__main__":
    main()
