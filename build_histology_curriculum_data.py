from __future__ import annotations

import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parent
TEXT_PATH = ROOT / "curriculum_extract.txt"
OUTPUT_PATH = ROOT / "histology_curriculum_data.js"


CHAPTERS = [
    {
        "id": "intro-microscopy",
        "start": 1,
        "end": 11,
        "title": {
            "ar": "المدخل والمجهر",
            "en": "Introduction & Microscopy",
        },
        "description": {
            "ar": "تعريف الهستولوجي، مستويات التنظيم، وأنماط المجهر الضوئي التي يفتتح بها المنهج.",
            "en": "Histology foundations, levels of organization, and the light microscopy modes that open the course.",
        },
        "keywords": ["Histology", "Microscopy", "Resolution", "Fluorescence", "Phase-contrast"],
    },
    {
        "id": "prep-special",
        "start": 12,
        "end": 24,
        "title": {
            "ar": "تحضير الأنسجة والطرق الخاصة",
            "en": "Tissue Preparation & Special Methods",
        },
        "description": {
            "ar": "تسلسل التحضير المخبري والطرق الخاصة مثل الكيمياء النسيجية والمناعية والتهجين.",
            "en": "Laboratory tissue-preparation workflow and special techniques such as histochemistry, immunocytochemistry, and hybridization.",
        },
        "keywords": ["Fixation", "Embedding", "Staining", "Histochemistry", "FISH"],
    },
    {
        "id": "cell-biology",
        "start": 25,
        "end": 161,
        "title": {
            "ar": "الخلية والعضيات",
            "en": "Cell Biology & Organelles",
        },
        "description": {
            "ar": "بنية الخلية، الغشاء، العضيات، الهيكل الخلوي، ثم النواة ومكوناتها.",
            "en": "Cell structure, membrane, organelles, cytoskeleton, and later the nucleus and its components.",
        },
        "keywords": ["Cell", "Membrane", "Mitochondria", "Golgi", "Lysosomes", "Nucleus"],
    },
    {
        "id": "epithelium",
        "start": 162,
        "end": 234,
        "title": {
            "ar": "النسيج الظهاري والغدد",
            "en": "Epithelial Tissue & Glands",
        },
        "description": {
            "ar": "تصنيف الظهارة، طبقاتها، تخصصاتها القمية والجانبية، ثم تصنيف الغدد.",
            "en": "Epithelium classification, layers, apical/lateral specializations, and gland classification.",
        },
        "keywords": ["Epithelium", "Basement membrane", "Glands", "Microvilli", "Cell junctions"],
    },
    {
        "id": "connective",
        "start": 235,
        "end": 377,
        "title": {
            "ar": "النسيج الضام",
            "en": "Connective Tissue",
        },
        "description": {
            "ar": "الخلايا والألياف والمادة الأساسية وأنواع النسيج الضام الرخو والكثيف والدهني والشبكي.",
            "en": "Cells, fibers, ground substance, and the loose, dense, adipose, and reticular connective tissue types.",
        },
        "keywords": ["Connective tissue", "Fibers", "Matrix", "Fibroblasts", "Adipocytes"],
    },
    {
        "id": "blood",
        "start": 378,
        "end": 507,
        "title": {
            "ar": "الدم والخلايا المناعية",
            "en": "Blood & Immune Cells",
        },
        "description": {
            "ar": "كريات الدم الحمراء والبيضاء، الصفائح، التفاضل الخلوي، والمناعة الدموية واللمفاوية.",
            "en": "Red cells, leukocytes, platelets, differential counts, and the blood/lymphoid immune components.",
        },
        "keywords": ["Blood", "RBC", "Leukocytes", "Lymphocytes", "Platelets"],
    },
    {
        "id": "cartilage",
        "start": 508,
        "end": 558,
        "title": {
            "ar": "الغضروف",
            "en": "Cartilage",
        },
        "description": {
            "ar": "خصائص الغضروف، خلاياه ومحيطه وأنواعه: الزجاجي والمرن والليفي.",
            "en": "Cartilage properties, cells, perichondrium, and the hyaline, elastic, and fibrocartilage types.",
        },
        "keywords": ["Cartilage", "Chondroblasts", "Chondrocytes", "Perichondrium"],
    },
    {
        "id": "bone",
        "start": 559,
        "end": 607,
        "title": {
            "ar": "العظم والتعظم والمفاصل",
            "en": "Bone, Ossification & Joints",
        },
        "description": {
            "ar": "وظائف العظم، خلاياه، الصفائح، التعظم داخل الغشاء والغضروف، ثم مداخل المفاصل.",
            "en": "Bone functions, cells, lamellae, intramembranous and endochondral ossification, then the joint overview.",
        },
        "keywords": ["Bone", "Osteoblasts", "Osteocytes", "Ossification", "Joints"],
    },
    {
        "id": "nervous",
        "start": 608,
        "end": 637,
        "title": {
            "ar": "النسيج العصبي",
            "en": "Nervous Tissue",
        },
        "description": {
            "ar": "العصبونات وأجسامها ومحاورها والألياف العصبية وترتيب النسيج العصبي.",
            "en": "Neurons, cell bodies, axons, nerve fibers, and the tissue-level nervous system organization.",
        },
        "keywords": ["Nervous tissue", "Neurons", "Perikaryon", "Nerve fibers"],
    },
]


TITLE_KEYWORDS = (
    "cell",
    "microscopy",
    "histology",
    "histochemistry",
    "immuno",
    "hybridization",
    "tissue",
    "epithe",
    "connective",
    "blood",
    "cartilage",
    "bone",
    "nervous",
    "gland",
    "membrane",
    "nucleus",
    "cyto",
    "leukocyte",
    "lymph",
    "platelet",
    "ossification",
)

GENERIC_HEADINGS = {
    "general histology",
    "histopathology",
    "introduction",
    "definition",
    "functions",
    "function",
    "sites",
    "site",
    "structure",
    "lm",
    "em",
    "types",
    "staining",
    "characters",
    "origin",
    "nucleus",
    "cytoplasm",
    "features",
    "classification",
    "shape",
    "content",
    "diameter",
    "number",
    "composition",
    "matrix",
    "cells",
    "types of cartilage",
    "functions of lymphocytes",
    "cell body",
    "processes",
}

AUTHOR_NOISE = (
    "dr_",
    "consultant",
    "hospital",
    "faculty",
    "department",
    "alanqar",
    "el shifa",
)


def normalize_line(raw: str) -> str:
    line = raw.strip()
    line = (
        line.replace("", " ")
        .replace("", " ")
        .replace("", " ")
        .replace("■", " ")
        .replace("", " ")
        .replace("•", " ")
        .replace("–", "-")
        .replace("—", "-")
        .replace("―", "-")
    )
    line = " ".join(line.split())
    return line.strip(" -")


def normalized_key(text: str) -> str:
    key = re.sub(r"[^a-z0-9\s]", "", text.lower())
    return " ".join(key.split())


def is_page_number(line: str) -> bool:
    return bool(re.fullmatch(r"\d+", line))


def is_author_noise(line: str) -> bool:
    lower = line.lower()
    if is_page_number(line):
        return True
    if re.match(r"^dr[\s./_:-]*[a-z]", lower):
        return True
    return any(token in lower for token in AUTHOR_NOISE)


def is_generic_heading(line: str) -> bool:
    key = normalized_key(line.rstrip(":"))
    if not key:
        return True
    return key in GENERIC_HEADINGS


def title_score(line: str) -> int:
    if not line:
        return -10
    words = line.split()
    lower = line.lower()
    score = 0

    if 1 <= len(words) <= 8:
        score += 2
    elif len(words) <= 14:
        score += 1

    if len(line) <= 86:
        score += 1
    if not line.endswith("."):
        score += 1
    if line == line.upper() or line == line.title():
        score += 1
    if ":" in line and len(words) <= 7:
        score += 1
    if any(keyword in lower for keyword in TITLE_KEYWORDS):
        score += 3
    if re.match(r"^\d+[-.)]", line):
        score -= 3
    if line[:1].islower():
        score -= 1
    if is_generic_heading(line):
        score -= 3
    if is_author_noise(line):
        score -= 6
    return score


def shorten_title(line: str) -> str:
    text = line.strip()
    if ":" in text:
        left, right = text.split(":", 1)
        left_key = normalized_key(left)
        if left_key in GENERIC_HEADINGS:
            text = left.strip()
        elif 1 <= len(left.split()) <= 7 and left_key not in GENERIC_HEADINGS:
            text = left.strip()
        elif 1 <= len(left.split()) <= 4 and right.strip():
            text = f"{left.strip()}: {right.strip().split('.')[0].strip()}"
    if len(text) > 96:
        words = text.split()
        text = " ".join(words[:12]).rstrip(",:;") + "..."
    return text


def extend_incomplete_title(title: str, lines: list[str]) -> str:
    if not title:
        return title
    if title.split()[-1].lower() not in {"of", "for", "and", "to"}:
        return title
    for line in lines:
        if line == title or is_author_noise(line):
            continue
        extra = shorten_title(line).strip(":")
        if not extra:
            continue
        combined = f"{title} {extra}".strip()
        if len(combined) <= 96:
            return combined
        return title
    return title


def chapter_for_page(page_number: int) -> dict:
    for chapter in CHAPTERS:
        if chapter["start"] <= page_number <= chapter["end"]:
            return chapter
    return CHAPTERS[-1]


def strip_inline_page_prefix(line: str, page_number: int) -> str:
    prefix = f"{page_number} "
    if line.startswith(prefix):
        return line[len(prefix):].strip()
    return line


def pick_title_candidate(lines: list[str]) -> str:
    pool = lines[:8]
    if not pool:
        return ""

    first_line = pool[0]
    if title_score(first_line) >= 4 and not is_generic_heading(first_line):
        return first_line

    decorated = []
    for index, line in enumerate(pool):
        adjusted = title_score(line) - index
        decorated.append((adjusted, index, line))
    decorated.sort(reverse=True)
    return decorated[0][2]


def build_slide_records(text: str) -> list[dict]:
    pages = text.split("\f")
    slides: list[dict] = []
    last_context_by_chapter: dict[str, str] = {}

    for page_number, page in enumerate(pages, start=1):
        chapter = chapter_for_page(page_number)
        raw_lines = [normalize_line(line) for line in page.splitlines()]
        raw_lines = [strip_inline_page_prefix(line, page_number) for line in raw_lines]
        raw_lines = [line for line in raw_lines if line]
        content_lines = [line for line in raw_lines if not is_page_number(line)]
        useful_lines = [line for line in content_lines if not is_author_noise(line)]

        candidate = pick_title_candidate(useful_lines)
        candidate_is_strong = bool(candidate and title_score(candidate) >= 4 and not is_generic_heading(candidate))
        context = last_context_by_chapter.get(chapter["id"])

        if candidate_is_strong:
            title = shorten_title(candidate)
            last_context_by_chapter[chapter["id"]] = title
        elif candidate:
            generic = shorten_title(candidate.rstrip(":"))
            if context:
                title = f"{context} - {generic}" if generic else f"{context} - Continued"
            else:
                title = f"{chapter['title']['en']} - {generic}" if generic else f"{chapter['title']['en']} - Continued"
        elif context:
            title = f"{context} - Continued"
        else:
            title = f"{chapter['title']['en']} - Continued"

        title = extend_incomplete_title(title, useful_lines[:5])

        preview_candidates = []
        for line in useful_lines:
            if line == candidate:
                continue
            if is_author_noise(line):
                continue
            preview_candidates.append(line)

        preview = " ".join(preview_candidates[:2]).strip()
        if not preview:
            preview = f"Continuation slide inside {chapter['title']['en']}."
        if len(preview) > 220:
            preview = preview[:217].rstrip() + "..."

        excerpt = useful_lines[:6]
        if not excerpt:
            excerpt = [f"This slide appears mostly visual or empty in the text extraction. Review the surrounding slides within {chapter['title']['en']}."]

        slides.append(
            {
                "id": f"slide-{page_number}",
                "page": page_number,
                "chapterId": chapter["id"],
                "chapterTitle": chapter["title"],
                "title": title,
                "preview": preview,
                "excerpt": excerpt,
                "searchText": " ".join(
                    [
                        title,
                        preview,
                        chapter["title"]["en"],
                        chapter["title"]["ar"],
                        *useful_lines[:12],
                    ]
                ),
            }
        )

    return slides


def build_chapter_records(slides: list[dict]) -> list[dict]:
    grouped: dict[str, list[dict]] = {chapter["id"]: [] for chapter in CHAPTERS}
    for slide in slides:
        grouped[slide["chapterId"]].append(slide)

    records = []
    for chapter in CHAPTERS:
        items = grouped[chapter["id"]]
        highlights: list[str] = []
        for slide in items:
            title = slide["title"]
            if "Continued" in title:
                continue
            if title in highlights:
                continue
            if any(title in existing or existing in title for existing in highlights):
                continue
            highlights.append(title)
            if len(highlights) == 4:
                break

        records.append(
            {
                "id": chapter["id"],
                "title": chapter["title"],
                "description": chapter["description"],
                "pageStart": chapter["start"],
                "pageEnd": chapter["end"],
                "slideCount": len(items),
                "keywords": chapter["keywords"],
                "highlights": highlights,
            }
        )
    return records


def main() -> None:
    text = TEXT_PATH.read_text(encoding="utf-8", errors="ignore")
    slides = build_slide_records(text)
    chapters = build_chapter_records(slides)

    payload = {
        "pageCount": len(slides),
        "chapterCount": len(chapters),
        "chapters": chapters,
        "slides": slides,
    }

    OUTPUT_PATH.write_text(
        "window.histologyCurriculumData = "
        + json.dumps(payload, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )

    print(f"Wrote {OUTPUT_PATH.name} with {len(slides)} slides across {len(chapters)} chapters.")


if __name__ == "__main__":
    main()
