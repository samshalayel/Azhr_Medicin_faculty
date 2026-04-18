const ui = {
  ar: {
    documentTitle: "استوديو الهستولوجي",
    toolbarPill: "منصة ثنائية اللغة مع فهرس كامل للمنهج",
    langToggle: "English",
    eyebrow: "مبني على استخراج نصي كامل من 637 صفحة من ملف الهستولوجي",
    heroTitle: "استوديو الهستولوجي",
    heroIntro: "منصة مذاكرة تجمع بين فهرس المنهج الكامل القابل للبحث، ثم طبقات مراجعة سريعة: خريطة ذهنية، وحدات مركزة، بنك صور، محاكاة، وبطاقات واختبار.",
    ctaModules: "المنهج الكامل",
    ctaGallery: "بنك الصور",
    ctaLab: "المختبر",
    ctaQuiz: "الاختبار",
    coverTitle: "ما الجديد الآن؟",
    coverTips: [
      "فهرس فعلي مبني على 637 صفحة من الملف، وليس تلخيصًا يدويًا لعدة عناوين فقط.",
      "بحث مباشر داخل عناوين الشرائح ومقتطفاتها، مع تقسيم المنهج إلى 9 أبواب رئيسية.",
      "طبقات مراجعة سريعة تبقى أسفل الفهرس لتسهيل التثبيت بعد استعراض المنهج الكامل."
    ],
    stats: [
      "صفحة مفهرسة من الملف.",
      "أبواب رئيسية في الفهرس.",
      "شرائح قابلة للبحث والمعاينة.",
      "طبقات مراجعة سريعة أسفل الفهرس."
    ],
    explorerHead: "المنهج الكامل",
    explorerDesc: "فهرس قابل للبحث مبني على الصفحات المستخرجة من الملف نفسه، مع أبواب رئيسية وتفاصيل لكل شريحة.",
    explorerPagesLabel: "صفحة مفهرسة",
    explorerChaptersLabel: "أبواب رئيسية",
    explorerResultsLabel: "نتيجة معروضة",
    explorerSearchLabel: "ابحث بعنوان، مصطلح، أو نص داخل الشرائح",
    explorerSearchPlaceholder: "مثال: epithelial, cartilage, osteoblast, lymphocyte",
    clearExplorerSearch: "مسح البحث",
    explorerAllChapters: "كل الأبواب",
    explorerStatus: (count, total, chapter, query) =>
      query
        ? `يعرض ${count} من ${total} نتيجة للبحث عن "${query}".`
        : chapter
          ? `يعرض ${count} شريحة من باب ${chapter}.`
          : `يعرض ${count} شريحة من المنهج الكامل.`,
    explorerSelection: (chapter, page) => `${chapter} • صفحة ${page}`,
    slidePage: (page) => `صفحة ${page}`,
    chapterRange: (start, end, count) => `الصفحات ${start}-${end} • ${count} شريحة`,
    prevSlide: "السابق",
    nextSlide: "التالي",
    slideSummaryLabel: "ملخص السلايد",
    slideExcerptLabel: "المحتوى المستخرج",
    slideImageLabel: "معاينة مرئية",
    slideContinuationSummary: (chapter) => `هذه الشريحة تكمل الفكرة السابقة داخل باب ${chapter}.`,
    slideTextFallback: "النص المستخرج محدود في هذه الصفحة، لذلك اعتمد على العنوان والتنقل بين السلايدات المجاورة.",
    slideVisualOnly: "هذه الصفحة تعتمد أكثر على الرسم أو الصورة، لذلك قد يكون النص المستخرج منها محدودًا.",
    explorerEmpty: "لا توجد نتائج مطابقة. غيّر كلمة البحث أو عد إلى كل الأبواب.",
    compareHead: "مختبر المقارنة",
    compareDesc: "اختر مسار مقارنة ثم عنصرين، وستظهر الفروق العالية العائد التي تختصر الحفظ وتمنع الخلط.",
    compareLeftLabel: "العنصر الأول",
    compareRightLabel: "العنصر الثاني",
    compareFocusHead: "ما الذي تلتقطه العين سريعًا؟",
    compareRowSummary: "الفكرة",
    compareRowLook: "ابحث عن",
    compareRowSites: "أماكن شائعة",
    compareRowFunction: "وظيفة / دلالة",
    compareRowTrap: "لا تخلط مع",
    classifierHead: "شجرة قرار الظهارة",
    classifierDesc: "جاوب خطوة خطوة كما لو أنك تقرأ شريحة تحت المجهر، وسيقودك المسار إلى أقرب تصنيف.",
    classifierReset: "إعادة الشجرة",
    classifierPathHead: "المسار الحالي",
    classifierPending: "ابدأ من السؤال الأول، وسيظهر التصنيف النهائي هنا.",
    classifierResultBadge: "التصنيف الأقرب",
    classifierWhyHead: "لماذا هذا التصنيف؟",
    classifierExamplesHead: "أمثلة وأماكن شائعة",
    classifierStep: (step) => `الخطوة ${step}`,
    mindmapHead: "خريطة مراجعة سريعة",
    mindmapDesc: "هذه خريطة اختصار للخطوط الكبرى فقط، بينما الفهرس الكامل بالأعلى يغطي الشرائح كلها. اضغط على أي فرع لفتح الوحدة المطابقة.",
    mindmapBadge: "الصورة الكبرى",
    mindmapCoreTitle: "الهستولوجي",
    mindmapCoreDesc: "من الخلية إلى الأنسجة، ومن التقنيات المجهرية إلى قراءة الشرائح وفهم البنية النسيجية.",
    mindmapHint: "هذه الخريطة سريعة للمراجعة، أما الاستعراض الكامل فهو في قسم المنهج بالأعلى.",
    modulesHead: "وحدات مراجعة سريعة",
    modulesDesc: "اختر أي محور لتظهر لك نقاط التركيز والكلمات المفتاحية التي تستحق المراجعة بعد المرور على الفهرس الكامل.",
    galleryHead: "بنك الصور الداعم",
    galleryDesc: "رسومات تعليمية أوضح ومبنية على العناوين التي ظهرت في المنهج: الخلية، المجهر، تحضير الأنسجة، الظهاري، الغدد، والتخصصات القمية.",
    syllabusGalleryHead: "صور من سلايدات المنهج",
    syllabusGalleryDesc: "مقتطفات مرئية مستخرجة من الـ PDF نفسه، مرتبة حسب الأبواب حتى ترى الرسومات والمخططات الأصلية التي ظهرت في السلايدات.",
    syllabusGalleryAll: "كل الصور",
    diagramGalleryHead: "رسومات تعليمية",
    diagramGalleryDesc: "هذه الرسومات صُممت لتقريب الفكرة بسرعة وتبسيط المقارنات الأساسية.",
    realGalleryHead: "شرائح حقيقية",
    realGalleryDesc: "صور هستولوجي حقيقية من مصادر تعليمية عامة، مضافة كأمثلة أوضح داخل نفس الموضوعات.",
    galleryNote: "اضغط للتكبير",
    sourceLink: "المصدر",
    licenseLink: "الترخيص",
    labHead: "محاكاة عملية",
    labDesc: "سيناريو عملي يحاكي مسار خزعة مخاطية روتينية من الاستلام حتى قرار القراءة المجهرية، مع قرارات أقرب لأسلوب العملي في كلية الطب.",
    simBadge: "حالة عملية: خزعة مخاطية روتينية",
    simCaseHead: "ملف الحالة",
    resetSim: "إعادة المحاولة",
    simWrongPrefix: "ليست هذه الخطوة الصحيحة الآن.",
    simCorrectTag: "لماذا هذا هو القرار الأدق؟",
    simWrongTag: "لماذا هذا الاختيار غير مناسب؟",
    simDoneTitle: "أحسنت، اكتمل مسار العينة",
    simDonePrompt: "أكملت المسار الروتيني لعينة خزعية بنظام البارافين: تثبيت جيد، توجيه صحيح، تقطيع مناسب، H&E أولًا، ثم قراءة تبدأ بالقوة المنخفضة قبل القرار النهائي.",
    labTipsHead: "تذكير مهم",
    labTips: [
      "في الخزعات المخاطية الصغيرة، جودة التوجيه Orientation قد تكون أهم من مجرد إكمال الخطوات بالترتيب.",
      "البارافين ليس خطوة واحدة؛ يسبقه Dehydration وClearing ثم Infiltration قبل التضمين النهائي.",
      "ابدأ دائمًا بالمسح بالقوة المنخفضة لتقييم كفاية العينة واتجاه القطع قبل الغوص في التفاصيل.",
      "الـ H&E هو الصبغ الروتيني الأول، أما الصبغات الخاصة فتُطلب بسؤال نوعي لا كبديل مباشر."
    ],
    reviewHead: "بطاقات مراجعة سريعة",
    reviewDesc: "بنك فلاش كارد موسع يضم 150 بطاقة موزعة على أبواب المنهج لتثبيت التفاصيل العالية العائد.",
    reviewTipsHead: "طريقة الاستخدام",
    reviewTips: [
      "ابدأ بتصفية الباب الذي تراجعه الآن، ثم ارجع إلى كل البطاقات لاحقًا.",
      "جاوب أولًا ثم اقلب البطاقة، واستخدم العشوائي لكسر الحفظ التسلسلي.",
      "إذا أخطأت، ارجع مباشرة إلى السلايدات أو بنك الصور المرتبطين بنفس الباب."
    ],
    flashAllChapters: "كل الأبواب",
    flashStatus: (visible, total, chapter) => chapter
      ? `يعرض ${visible} بطاقة من باب ${chapter} من أصل ${total}.`
      : `يعرض ${visible} بطاقة من أصل ${total}.`,
    flashSelection: (chapter) => chapter || "كل الأبواب",
    prevFlash: "السابق",
    flipFlash: "اقلب البطاقة",
    nextFlash: "التالي",
    shuffleFlash: "عشوائي",
    flashEmpty: "لا توجد بطاقات في هذا الباب بعد. جرّب بابًا آخر أو ارجع إلى كل الأبواب.",
    quizHead: "اختبار ذكي بعد الاستعراض",
    quizDesc: "بنك كويزات مبني على نفس بنك الفلاش كارد، مع تصفية حسب الباب وتوليد مجموعة أسئلة جديدة في كل مرة.",
    quizAllChapters: "كل الأبواب",
    quizStatus: (setCount, bankCount, total, chapter) => chapter
      ? `يعرض اختبارًا من ${setCount} أسئلة من باب ${chapter} (${bankCount} سؤالًا متاحًا من أصل ${total}).`
      : `يعرض اختبارًا من ${setCount} أسئلة من أصل ${total} سؤالًا في البنك.`,
    quizSelection: (chapter) => chapter || "كل الأبواب",
    gradeQuiz: "احسب الدرجة",
    resetQuiz: "إعادة الاختبار",
    shuffleQuiz: "مجموعة جديدة",
    quizEmpty: "لا توجد أسئلة متاحة لهذا الباب حاليًا. جرّب بابًا آخر أو ارجع إلى كل الأبواب.",
    quizExcellent: "ممتاز. فهمك للخطوط الكبرى قوي.",
    quizMid: "جيد، لكن ما زالت هناك نقاط تحتاج تثبيت.",
    quizLow: "ابدأ من الوحدات ثم أعد المحاكاة والبطاقات.",
    quizScore: (score, total, percent, note) => `درجتك ${score} من ${total} (${percent}%). ${note}`,
    footerText: "هذه الصفحة أصبحت تضم فهرسًا كاملًا للمنهج فوق، وتبقي طبقات المراجعة السريعة أسفله لتسهيل التثبيت.",
    lightboxClose: "إغلاق",
    flashMeta: (chapter, category, index, total) => `${chapter} • ${category} • البطاقة ${index} من ${total}`
  },
  en: {
    documentTitle: "Histology Studio",
    toolbarPill: "Bilingual study page with a full curriculum index",
    langToggle: "العربية",
    eyebrow: "Built from a full text extraction of 637 pages from the histology file",
    heroTitle: "Histology Studio",
    heroIntro: "A study page that now combines a searchable full-curriculum explorer with quick-review layers: mind map, focused modules, image bank, lab flow, flashcards, and quiz.",
    ctaModules: "Full Curriculum",
    ctaGallery: "Image Bank",
    ctaLab: "Lab Flow",
    ctaQuiz: "Quiz",
    coverTitle: "What changed?",
    coverTips: [
      "A real index built from all 637 extracted pages, not a hand-made summary of a few broad headings.",
      "Direct search through slide titles and excerpts, with the syllabus grouped into 9 major chapters.",
      "Quick-review layers remain below the explorer so revision stays fast after browsing the full course."
    ],
    stats: [
      "Indexed pages from the source file.",
      "Major chapters in the explorer.",
      "Searchable slide previews.",
      "Quick review layers below the explorer."
    ],
    explorerHead: "Full Curriculum",
    explorerDesc: "A searchable explorer built from the extracted pages of the source file, with chapter filters and per-slide details.",
    explorerPagesLabel: "Indexed pages",
    explorerChaptersLabel: "Major chapters",
    explorerResultsLabel: "Visible results",
    explorerSearchLabel: "Search by title, term, or slide text",
    explorerSearchPlaceholder: "Example: epithelial, cartilage, osteoblast, lymphocyte",
    clearExplorerSearch: "Clear search",
    explorerAllChapters: "All chapters",
    explorerStatus: (count, total, chapter, query) =>
      query
        ? `Showing ${count} of ${total} results for "${query}".`
        : chapter
          ? `Showing ${count} slides from ${chapter}.`
          : `Showing ${count} slides from the full curriculum.`,
    explorerSelection: (chapter, page) => `${chapter} • Page ${page}`,
    slidePage: (page) => `Page ${page}`,
    chapterRange: (start, end, count) => `Pages ${start}-${end} • ${count} slides`,
    prevSlide: "Previous",
    nextSlide: "Next",
    slideSummaryLabel: "Slide summary",
    slideExcerptLabel: "Extracted content",
    slideImageLabel: "Visual preview",
    slideContinuationSummary: (chapter) => `This slide continues the previous idea within ${chapter}.`,
    slideTextFallback: "The extracted text is limited on this page, so rely on the title and navigate to nearby slides for context.",
    slideVisualOnly: "This page is mostly visual, so the text extraction may be limited.",
    explorerEmpty: "No matching results. Change the search term or return to all chapters.",
    compareHead: "Compare Lab",
    compareDesc: "Choose a comparison track and then any two items. The page will surface the high-yield differences that prevent confusion.",
    compareLeftLabel: "First item",
    compareRightLabel: "Second item",
    compareFocusHead: "What should your eye catch first?",
    compareRowSummary: "Core idea",
    compareRowLook: "Look for",
    compareRowSites: "Common sites",
    compareRowFunction: "Function / meaning",
    compareRowTrap: "Do not confuse with",
    classifierHead: "Epithelial Decision Tree",
    classifierDesc: "Answer step by step as if you are reading a slide under the microscope, and the path will lead you to the closest classification.",
    classifierReset: "Reset tree",
    classifierPathHead: "Current path",
    classifierPending: "Start with the first question and the final classification will appear here.",
    classifierResultBadge: "Closest classification",
    classifierWhyHead: "Why this classification?",
    classifierExamplesHead: "Examples and common sites",
    classifierStep: (step) => `Step ${step}`,
    mindmapHead: "Quick Review Map",
    mindmapDesc: "This is a compressed big-picture map only; the full explorer above covers the whole slide set. Click any branch to open the matching module.",
    mindmapBadge: "Big picture",
    mindmapCoreTitle: "Histology",
    mindmapCoreDesc: "From the cell to tissues, and from microscopic techniques to slide reading and tissue architecture.",
    mindmapHint: "This map is for quick revision; the full-course explorer is above.",
    modulesHead: "Quick Review Modules",
    modulesDesc: "Choose any topic to see high-yield points and keywords after browsing the full curriculum explorer.",
    galleryHead: "Support Image Bank",
    galleryDesc: "Clearer teaching diagrams built around the topics that appeared in the syllabus: cell, microscopy, tissue preparation, epithelium, glands, and apical specializations.",
    syllabusGalleryHead: "Visuals From the Syllabus Slides",
    syllabusGalleryDesc: "Visual extracts taken from the PDF itself, arranged by chapter so the original course diagrams and slide figures are easy to browse.",
    syllabusGalleryAll: "All visuals",
    diagramGalleryHead: "Teaching Diagrams",
    diagramGalleryDesc: "These diagrams were made to simplify the idea quickly and make key comparisons easier.",
    realGalleryHead: "Real Histology Slides",
    realGalleryDesc: "Real histology images from public educational sources, added as clearer examples for the same topics.",
    galleryNote: "Click to enlarge",
    sourceLink: "Source",
    licenseLink: "License",
    labHead: "Practical Simulation",
    labDesc: "A case-based practical drill that follows a routine mucosal biopsy from accession to microscopic-readout decisions, closer to a medical-school lab style.",
    simBadge: "Practical case: routine mucosal biopsy",
    simCaseHead: "Case file",
    resetSim: "Try again",
    simWrongPrefix: "That is not the correct step right now.",
    simCorrectTag: "Why is this the best decision?",
    simWrongTag: "Why is this choice not ideal?",
    simDoneTitle: "Well done, the workflow is complete",
    simDonePrompt: "You completed the routine paraffin-biopsy workflow: solid fixation, correct orientation, proper sectioning, H&E first, and low-power scanning before final interpretation.",
    labTipsHead: "Key reminder",
    labTips: [
      "In small mucosal biopsies, orientation quality can matter as much as simply completing the processing order.",
      "Paraffin work is not one single move: dehydration and clearing must precede infiltration and final embedding.",
      "Always start with low-power scanning to judge adequacy and orientation before zooming in.",
      "H&E is the routine first stain; special stains are question-driven rather than default replacements."
    ],
    reviewHead: "Quick Flashcards",
    reviewDesc: "An expanded flashcard bank with 150 cards distributed across the curriculum chapters for high-yield review.",
    reviewTipsHead: "How to use them",
    reviewTips: [
      "Start with the chapter you are revising now, then return to the full deck later.",
      "Answer first, then flip the card, and use random mode to avoid memorizing the order.",
      "If you miss one, jump back to the related slides or image bank for the same chapter."
    ],
    flashAllChapters: "All chapters",
    flashStatus: (visible, total, chapter) => chapter
      ? `Showing ${visible} cards from ${chapter}, out of ${total}.`
      : `Showing ${visible} cards out of ${total}.`,
    flashSelection: (chapter) => chapter || "All chapters",
    prevFlash: "Previous",
    flipFlash: "Flip card",
    nextFlash: "Next",
    shuffleFlash: "Random",
    flashEmpty: "No flashcards are available for this chapter yet. Try another chapter or return to all chapters.",
    quizHead: "Smart Quiz After Review",
    quizDesc: "A quiz bank built from the same flashcard bank, with chapter filters and a fresh generated set each time.",
    quizAllChapters: "All chapters",
    quizStatus: (setCount, bankCount, total, chapter) => chapter
      ? `Showing a ${setCount}-question quiz from ${chapter} (${bankCount} available out of ${total}).`
      : `Showing a ${setCount}-question quiz from a bank of ${total} questions.`,
    quizSelection: (chapter) => chapter || "All chapters",
    gradeQuiz: "Grade quiz",
    resetQuiz: "Reset quiz",
    shuffleQuiz: "New set",
    quizEmpty: "No quiz questions are available for this chapter right now. Try another chapter or return to all chapters.",
    quizExcellent: "Excellent. Your grasp of the main course lines is strong.",
    quizMid: "Good, but a few points still need reinforcement.",
    quizLow: "Start with the modules, then repeat the simulation and flashcards.",
    quizScore: (score, total, percent, note) => `Your score is ${score} out of ${total} (${percent}%). ${note}`,
    footerText: "This page now includes a full syllabus explorer at the top and keeps the quick-review layers below for reinforcement.",
    lightboxClose: "Close",
    flashMeta: (chapter, category, index, total) => `${chapter} • ${category} • Card ${index} of ${total}`
  }
};

const content = {
  ar: {
    modules: [
      {
        tag: "الخلية",
        title: "الخلية ومكوناتها",
        summary: "يضع هذا المحور أساس المنهج: تعريف الخلية، الفرق بين بدائية النواة وحقيقية النواة، ثم العضيات ووظيفة كل منها.",
        keywords: ["Prokaryotic", "Eukaryotic", "Membrane", "Mitochondria", "Golgi", "Lysosomes"],
        focus: [
          "احفظ وظيفة كل عضية مع تركيبها، لا الاسم فقط.",
          "فرّق بين الشبكة الخشنة والملساء ووظيفة كل واحدة.",
          "الميتوكوندريا، الغشاء الخلوي، وغولجي تصلح كأسئلة مقارنة."
        ]
      },
      {
        tag: "المجهر",
        title: "المجهر الضوئي وأنواعه",
        summary: "يشمل المجهر التقليدي والفلوري والتباين الطوري والاستقطابي، مع التركيز على التكبير والدقة ومتى يُستخدم كل نوع.",
        keywords: ["Magnification", "Resolution", "Fluorescence", "Phase-contrast", "Polarizing"],
        focus: [
          "التكبير غير الدقة، والخلط بينهما خطأ شائع.",
          "اربط كل نوع من المجاهر بهدفه العملي.",
          "الخلايا الحية أو غير المصبوغة ترتبط غالبًا بالتباين الطوري."
        ]
      },
      {
        tag: "التحضير",
        title: "تحضير الأنسجة للفحص المجهري",
        summary: "هذا هو العمود العملي للمنهج: تثبيت، تضمين، تقطيع، وصبغ، وهي سلسلة يجب فهمها كتسلسل سببي واضح.",
        keywords: ["Fixation", "Embedding", "Sectioning", "Staining", "Paraffin"],
        focus: [
          "رتّب الخطوات ذهنيًا دائمًا بنفس الترتيب.",
          "اسأل: ما وظيفة كل مرحلة؟ هذا يثبتها أسرع من الحفظ المباشر.",
          "تقنية البارافين تستحق تركيزًا إضافيًا لأنها الأكثر شيوعًا."
        ]
      },
      {
        tag: "طرق خاصة",
        title: "الكيمياء النسيجية والطرق الخاصة",
        summary: "يتناول هذا الجزء الكيمياء النسيجية، الكيمياء المناعية، والتهجين الفلوري، مع التركيز على ما الذي تكشفه كل تقنية داخل النسيج.",
        keywords: ["Histochemistry", "Immunocytochemistry", "Antigen", "Antibody", "FISH"],
        focus: [
          "افهم ما الذي يتم كشفه في كل تقنية.",
          "اربط المناعة النسيجية بعلاقة المستضد والجسم المضاد.",
          "تقنية FISH مرتبطة بالكشف عن تسلسلات DNA محددة."
        ]
      },
      {
        tag: "الأنسجة",
        title: "الأنسجة الأساسية والظهارية",
        summary: "الملف يذكر الأنواع الأربعة للأنسجة ثم يتوسع أكثر في النسيج الظهاري، صفاته، وظائفه، وتسميته.",
        keywords: ["Epithelial", "Connective", "Muscular", "Nervous", "Basement membrane"],
        focus: [
          "ابدأ بالأنواع الأربعة كخريطة ذهنية عامة.",
          "التسمية في الظهاري تعتمد على الشكل وعدد الطبقات.",
          "الغشاء القاعدي والدعم من النسيج الضام نقطتان مهمتان للفهم."
        ]
      },
      {
        tag: "الغدد",
        title: "الغدد والتخصصات الظهارية",
        summary: "يظهر في المنهج تصنيف الغدد الصماء والخارجية وأنماط الإفراز مثل الميروكراين والأبوكراين والهولوكراين.",
        keywords: ["Endocrine", "Exocrine", "Merocrine", "Apocrine", "Holocrine", "Goblet cells"],
        focus: [
          "قارن بين نوع الغدة وطريقة الإفراز والمثال.",
          "الخلايا الكأسية مثال مهم على الغدد وحيدة الخلية.",
          "الأمثلة وحدها لا تكفي من غير فهم آلية الإفراز."
        ]
      }
    ],
    mindMap: [
      { short: "الخلية", points: ["تعريف الخلية", "بدائية/حقيقية النواة", "العضيات ووظائفها"] },
      { short: "المجهر", points: ["تكبير ودقة", "فلوري", "تباين طوري واستقطابي"] },
      { short: "التحضير", points: ["تثبيت", "تضمين", "تقطيع وصبغ"] },
      { short: "طرق خاصة", points: ["Histochemistry", "Immunocytochemistry", "FISH"] },
      { short: "الأنسجة", points: ["الأنواع الأربعة", "الظهاري", "الغشاء القاعدي"] },
      { short: "الغدد", points: ["Endocrine/Exocrine", "Merocrine", "Apocrine/Holocrine"] }
    ],
    compareGroups: [
      {
        id: "epithelium",
        title: "مقارنة الظهارات",
        intro: "هذا المسار ممتاز لتثبيت الفرق بين عدد الطبقات، شكل الخلايا السطحية، ووجود الأهداب أو الخلايا الكأسية.",
        focus: [
          "ابدأ دائمًا بعدد الطبقات قبل الشكل.",
          "في الظهارة الكاذبة الطبقات تبدو النوى على مستويات مختلفة، لكن كل الخلايا ترتكز على الغشاء القاعدي.",
          "العمودية البسيطة أطول من عرضها، بينما المكعبة تقارب الطول والعرض."
        ],
        options: [
          {
            id: "simple-squamous",
            title: "Simple squamous",
            summary: "طبقة واحدة من خلايا مفلطحة جدًا تسمح بالانتشار والترشيح السريع.",
            lookFor: ["خلايا رقيقة جدًا", "نوى مفلطحة بارزة", "سماكة قليلة جدًا"],
            sites: ["الأوعية الدموية", "الحويصلات الهوائية", "بطانة الأغشية المصلية"],
            function: "تسهيل الانتشار والترشيح وتقليل المسافة.",
            trap: "لا تخلطه مع endothelium و mesothelium؛ كلاهما صور متخصصة من نفس النمط."
          },
          {
            id: "simple-cuboidal",
            title: "Simple cuboidal",
            summary: "طبقة واحدة من خلايا مكعبة مناسبة للإفراز والامتصاص الخفيف.",
            lookFor: ["خلايا بارتفاع وعرض متقاربين", "نوى مستديرة مركزية", "لمعة صغيرة نسبيًا"],
            sites: ["أنابيب الكلية", "قنوات صغيرة", "جريبات الغدة الدرقية"],
            function: "الإفراز والامتصاص والبطانة البسيطة للقنوات.",
            trap: "لا تخلطه مع العمودية البسيطة؛ الأخيرة أطول بوضوح ونواتها تميل للقاعدية."
          },
          {
            id: "simple-columnar",
            title: "Simple columnar",
            summary: "طبقة واحدة من خلايا طويلة متخصصة في الامتصاص والإفراز وغالبًا ترافقها خلايا كأسية.",
            lookFor: ["خلايا أطول من عرضها", "نوى بيضوية باتجاه القاعدة", "قد ترى goblet cells أو microvilli"],
            sites: ["الأمعاء", "المعدة", "المرارة"],
            function: "الامتصاص والإفراز وتكوين حاجز سطحي فعال.",
            trap: "لا تخلطه مع الكاذبة الطبقات؛ في البسيطة العمودية تصطف النوى عادة في مستوى أقرب."
          },
          {
            id: "pseudostratified",
            title: "Pseudostratified ciliated columnar",
            summary: "تبدو متعددة الطبقات، لكن كل الخلايا تلامس الغشاء القاعدي وغالبًا تظهر أهداب وخلايا كأسية.",
            lookFor: ["نوى على مستويات مختلفة", "أهداب على السطح", "خلايا كأسية بينية"],
            sites: ["الرغامى", "الطرق التنفسية الكبيرة"],
            function: "الحماية وتحريك المخاط والمواد العالقة.",
            trap: "لا تخلطه مع الطبقية الحقيقية؛ المعيار الحاسم أن جميع الخلايا تصل للغشاء القاعدي."
          }
        ]
      },
      {
        id: "gland-types",
        title: "مقارنة الغدد",
        intro: "هذا المسار يوضح الفرق بين الصماء والخارجية وبين الخلية الكأسية كوحدة غدية وحيدة الخلية.",
        focus: [
          "اسأل أولًا: هل هناك قناة أم أن الإفراز يذهب مباشرة للدم؟",
          "الغدة الصماء تفقد القنوات وتحتاج شبكة شعيرية غنية.",
          "الخلايا الكأسية مثال مهم على غدة وحيدة الخلية داخل الظهارة."
        ],
        options: [
          {
            id: "endocrine",
            title: "Endocrine gland",
            summary: "غدة بلا قنوات تفرز مباشرة إلى الدم أو السائل الخلالي.",
            lookFor: ["غياب القنوات", "خلايا مرتبة حول شعيرات دموية", "إفراز هرموني"],
            sites: ["الغدة الدرقية", "النخامية", "الجزر البنكرياسية"],
            function: "تنظيم وظائف الجسم عبر الهرمونات.",
            trap: "لا تخلطها مع الإفراز الخارجي؛ وجود القناة غالبًا يحسم بسرعة."
          },
          {
            id: "exocrine",
            title: "Exocrine gland",
            summary: "غدة تفرز عبر قنوات إلى سطح ظهاري أو إلى تجويف.",
            lookFor: ["وجود قنوات", "وحدات إفرازية acini أو tubules", "اتصال بسطح ظهاري"],
            sites: ["الغدد اللعابية", "البنكرياس الخارجي", "الغدد العرقية"],
            function: "إيصال الإفرازات إلى سطح أو لمعة محددة.",
            trap: "قد تكون الغدة مختلطة وظيفيًا مثل البنكرياس؛ انتبه لأي جزء تقصده."
          },
          {
            id: "goblet",
            title: "Goblet cell",
            summary: "غدة وحيدة الخلية داخل الظهارة العمودية أو الكاذبة الطبقات تنتج mucus.",
            lookFor: ["خلية شاحبة أو ممتلئة بالمخاط", "نواة قاعدية", "ضمن ظهارة سطحية"],
            sites: ["الأمعاء", "الرغامى"],
            function: "إنتاج المخاط للترطيب والحماية.",
            trap: "لا تعتبرها غدة متعددة الخلايا؛ هي وحدة منفردة داخل بطانة ظهارية."
          },
          {
            id: "multicellular",
            title: "Multicellular gland",
            summary: "ترتيب من خلايا إفرازية متعددة قد يكون أنبوبيًا أو حويصليًا مع نظام قنوات أو بدونه.",
            lookFor: ["عدة خلايا منظمة", "وحدة إفرازية واضحة", "قد ترى قنوات أو حبالًا خلوية"],
            sites: ["اللعابية", "البنكرياس", "الدرقية"],
            function: "رفع القدرة الإفرازية وتنظيم توصيل المنتج.",
            trap: "لا تخلط بين شكل الوحدة الإفرازية وطريقة الإفراز؛ هما محوران مختلفان."
          }
        ]
      },
      {
        id: "secretion-modes",
        title: "مقارنة أنماط الإفراز",
        intro: "هذا المسار يفصل بين merocrine و apocrine و holocrine، وهي نقطة اختبارية مشهورة جدًا.",
        focus: [
          "السؤال الحاسم: هل تفقد الخلية جزءًا من سيتوبلازمها أم تبقى سليمة أم تتحطم كليًا؟",
          "Merocrine هو النمط الأهدأ والأكثر شيوعًا.",
          "Holocrine يعني أن الخلية نفسها تصبح جزءًا من الإفراز."
        ],
        options: [
          {
            id: "merocrine",
            title: "Merocrine",
            summary: "الإفراز يتم بالإخراج الخلوي دون فقدان جزء من جسم الخلية.",
            lookFor: ["خلايا تبقى سليمة", "حويصلات إفرازية", "لا ترى انقسام القمة الخلوية"],
            sites: ["البنكرياس الخارجي", "الغدد اللعابية", "معظم الغدد العرقية"],
            function: "إفراز مستمر وكفؤ دون تخريب الخلية.",
            trap: "لا تخلطه مع apocrine؛ هناك تفقد الخلية جزءًا من قطبها القمي."
          },
          {
            id: "apocrine",
            title: "Apocrine",
            summary: "جزء من القطب القمي ينفصل مع الإفراز، لذلك تُفقد قطعة من السيتوبلازم.",
            lookFor: ["بروز قمّي", "انفصال جزء من القمة", "مظهر decapitation في الوصف النظري"],
            sites: ["الغدد العرقية الأبوكراينية", "الغدة الثديية في بعض المراجع الوظيفية"],
            function: "إفراز منتج مع جزء من المادة الخلوية القمية.",
            trap: "لا تخلطه مع holocrine؛ في الأبوكراين تبقى الخلية حية."
          },
          {
            id: "holocrine",
            title: "Holocrine",
            summary: "الخلية كلها تتحطم وتصبح جزءًا من الإفراز.",
            lookFor: ["خلايا تتراكم ثم تتحلل", "لمعة ممتلئة بحطام خلوي", "معدل تعويض خلوي مستمر"],
            sites: ["الغدد الدهنية"],
            function: "إخراج مادة غنية بالدهن عبر تحلل الخلية كاملة.",
            trap: "أعلى درجة فقد خلوية بين الأنماط؛ لا تخلطه مع merocrine أو apocrine."
          }
        ]
      },
      {
        id: "cartilage",
        title: "مقارنة الغضاريف",
        intro: "هذا المسار يجعل الفرق بين hyaline و elastic و fibrocartilage أقرب بصريًا ووظيفيًا.",
        focus: [
          "انظر أولًا لنوع الألياف السائدة ثم وجود أو غياب الـ perichondrium.",
          "Hyaline هو الأكثر نعومة وشيوعًا.",
          "Fibrocartilage يتحمل الشد والضغط ويبدو أكثر خشونة وليفية."
        ],
        options: [
          {
            id: "hyaline",
            title: "Hyaline cartilage",
            summary: "غضروف زجاجي بمادة بينية ملساء نسبيًا وألياف دقيقة غير واضحة غالبًا في H&E.",
            lookFor: ["مصفوفة ملساء", "Chondrocytes in lacunae", "Perichondrium غالبًا موجود"],
            sites: ["القصبة الهوائية", "الأنف", "الأسطح المفصلية", "الغضروف الضلعي"],
            function: "الدعم المرن وتسهيل الحركة وتوفير قالب للتعظم.",
            trap: "لا تخلطه مع elastic؛ الأخير تظهر فيه ألياف مرنة واضحة أكثر."
          },
          {
            id: "elastic",
            title: "Elastic cartilage",
            summary: "غضروف غني بالألياف المرنة، لذلك يبدو أكثر مرونة وقابلية للعودة للشكل.",
            lookFor: ["شبكة ألياف مرنة", "Lacunae واضحة", "Perichondrium موجود"],
            sites: ["صيوان الأذن", "Epiglottis"],
            function: "الحفاظ على الشكل مع المرونة العالية.",
            trap: "لا تخلطه مع hyaline؛ وجود الألياف المرنة هو الفرق المفتاح."
          },
          {
            id: "fibrocartilage",
            title: "Fibrocartilage",
            summary: "غضروف غني بحزم كولاجين كثيفة يجمع بين صفات الغضروف والنسيج الضام الليفي.",
            lookFor: ["حزم كولاجين كثيفة", "خلايا غضروفية في صفوف", "Perichondrium غالبًا غائب"],
            sites: ["الأقراص بين الفقرات", "symphysis pubis", "بعض مناطق اتصال الأوتار"],
            function: "تحمل الشد والضغط معًا.",
            trap: "لا تخلطه مع dense connective tissue؛ وجود lacunae يساعدك على الحسم."
          }
        ]
      }
    ],
    classifier: {
      start: "layers",
      nodes: {
        layers: {
          question: "كم عدد الطبقات التي تراها أو تتوقعها على السطح؟",
          options: [
            { id: "single", label: "طبقة واحدة واضحة", next: "simple-shape" },
            { id: "pseudo", label: "تبدو عدة طبقات لكن كل الخلايا ترتكز على الغشاء القاعدي", next: "pseudo-cilia" },
            { id: "many", label: "عدة طبقات حقيقية", next: "stratified-shape" }
          ]
        },
        "simple-shape": {
          question: "ما شكل الخلايا السطحية أو الشكل العام للخلايا؟",
          options: [
            { id: "flat", label: "مفلطحة جدًا", next: "simple-squamous" },
            { id: "cube", label: "مكعبة تقريبًا", next: "simple-cuboidal" },
            { id: "tall", label: "عمودية وأطول من عرضها", next: "simple-columnar" }
          ]
        },
        "pseudo-cilia": {
          question: "هل ترى أهدابًا سطحية أو تتوقع وظيفة نقل المخاط؟",
          options: [
            { id: "yes", label: "نعم، أهداب أو مخاط وتنظيف", next: "pseudostratified-ciliated" },
            { id: "no", label: "لا، لكن ما زال المظهر كاذب الطبقات", next: "pseudostratified" }
          ]
        },
        "stratified-shape": {
          question: "ما شكل الخلايا في الطبقة السطحية الأبعد عن الغشاء القاعدي؟",
          options: [
            { id: "flat", label: "سطحية مفلطحة", next: "stratified-squamous" },
            { id: "cube", label: "سطحية مكعبة", next: "stratified-cuboidal" },
            { id: "column", label: "سطحية عمودية", next: "stratified-columnar" },
            { id: "change", label: "يتغير الشكل مع التمدد والانكماش", next: "transitional" }
          ]
        }
      },
      results: {
        "simple-squamous": {
          title: "Simple squamous epithelium",
          why: ["طبقة واحدة فقط.", "الخلايا مفلطحة والنوى رقيقة نسبيًا.", "الوظيفة الأساسية انتشار/ترشيح سريع."],
          examples: ["الحويصلات الهوائية", "بطانة الأوعية الدموية", "الأغشية المصلية"]
        },
        "simple-cuboidal": {
          title: "Simple cuboidal epithelium",
          why: ["طبقة واحدة.", "الخلايا مكعبة تقريبًا.", "غالبًا ترتبط بالإفراز أو الامتصاص الخفيف."],
          examples: ["أنابيب الكلية", "قنوات صغيرة", "جريبات الدرقية"]
        },
        "simple-columnar": {
          title: "Simple columnar epithelium",
          why: ["طبقة واحدة.", "الخلايا طويلة والنوى تميل للقاعدة.", "قد ترافقها goblet cells أو microvilli."],
          examples: ["الأمعاء", "المعدة", "المرارة"]
        },
        "pseudostratified-ciliated": {
          title: "Pseudostratified ciliated columnar epithelium",
          why: ["النوى على مستويات مختلفة فتبدو الطبقات متعددة.", "كل الخلايا تلامس الغشاء القاعدي.", "وجود الأهداب يدعم وظيفة نقل المخاط."],
          examples: ["الرغامى", "الشعب الهوائية الكبيرة"]
        },
        pseudostratified: {
          title: "Pseudostratified columnar epithelium",
          why: ["المظهر يوحي بتعدد الطبقات.", "لكن الارتكاز على الغشاء القاعدي يشمل جميع الخلايا.", "قد تختلف الخلايا في الارتفاع فلا تصطف النوى في مستوى واحد."],
          examples: ["بعض القنوات التناسلية", "الجزء غير الهدبي من بعض المقاطع الخاصة"]
        },
        "stratified-squamous": {
          title: "Stratified squamous epithelium",
          why: ["عدة طبقات حقيقية.", "الخلايا السطحية مفلطحة.", "الوظيفة الأساسية حماية من الاحتكاك."],
          examples: ["الجلد إذا كان متقرنًا", "المريء إذا كان غير متقرن"]
        },
        "stratified-cuboidal": {
          title: "Stratified cuboidal epithelium",
          why: ["عدة طبقات.", "الخلايا السطحية مكعبة.", "يظهر غالبًا في القنوات الأكبر لا في الأسطح الواسعة."],
          examples: ["قنوات الغدد العرقية الكبيرة", "بعض القنوات الغدية"]
        },
        "stratified-columnar": {
          title: "Stratified columnar epithelium",
          why: ["عدة طبقات.", "الخلايا السطحية عمودية.", "نوع نادر نسبيًا مقارنة بالأنماط الأخرى."],
          examples: ["بعض القنوات الكبيرة", "أجزاء محدودة من الملتحمة والإحليل في بعض المراجع"]
        },
        transitional: {
          title: "Transitional epithelium",
          why: ["عدة طبقات حقيقية.", "شكل الخلايا السطحية يتبدل مع الشد والارتخاء.", "مصمم للتمدد دون فقدان الحاجز الواقي."],
          examples: ["المثانة", "الحالب", "أجزاء من الحويضة الكلوية"]
        }
      }
    },
    simCase: {
      title: "خزعة مخاطية قولونية روتينية بنظام البارافين",
      summary: "المطلوب من طالب العملي أن يتابع 3 قطع خزعية صغيرة من لحظة الاستلام حتى أول قراءة مجهرية سليمة، مع اتخاذ القرار الأدق في كل محطة مخبرية.",
      facts: [
        { label: "العينة", value: "3 قطع خزعية صغيرة من مخاطية القولون داخل عبوة خزعات." },
        { label: "هدف العملي", value: "الحفاظ على الـ architecture مع إظهار الظهارة والـ lamina propria في مقطع صالح للقراءة." },
        { label: "المخرج النهائي", value: "شريحة H&E جيدة، خالية من أخطاء التوجيه الواضحة، ومناسبة للمسح منخفض القوة ثم التفصيل." },
        { label: "التركيز الامتحاني", value: "التثبيت، الـ gross orientation، processing، embedding، microtomy، H&E، ثم quality check." }
      ]
    },
    simData: [
      {
        short: "التثبيت",
        title: "المحطة 1: Accession & Fixation",
        prompt: "وصلت 3 قطع خزعية صغيرة من مخاطية القولون. ما الإجراء الأدق مباشرة بعد التأكد من بيانات المريض والعينة؟",
        notes: [
          { label: "المطلوب منك", value: "منع الـ autolysis والـ crush artifact من أول لحظة." },
          { label: "وضع العينة", value: "خزعات صغيرة سهلة الانطواء والتشوه إذا تأخر التثبيت." },
          { label: "خطأ شائع", value: "تأخير وضعها في المثبت أو استعمال حجم غير كافٍ من الفورمالين." }
        ],
        answer: "وضع القطع فورًا في 10% neutral buffered formalin بكمية كافية بعد توثيق العينة",
        explanation: "في الخزعات الصغيرة، السرعة في التثبيت تحفظ الظهارة والتفاصيل النووية وتمنع التحلل قبل أي خطوة لاحقة.",
        options: [
          { label: "وضع القطع فورًا في 10% neutral buffered formalin بكمية كافية بعد توثيق العينة", rationale: "هذا هو الترتيب الصحيح؛ التثبيت يسبق أي معالجة أو قرار صبغي." },
          { label: "بدء التقطيع مباشرة قبل التثبيت لتسريع العمل", rationale: "التعامل مع الخزعة قبل التثبيت يزيد التشوه ويعرّض البنية المخاطية للانضغاط والتحلل." },
          { label: "تركها في الماء المقطر ريثما تجهز باقي العينات", rationale: "الماء لا يثبّت النسيج ويزيد احتمال الـ autolysis وفقد التفاصيل." },
          { label: "اختيار الصبغة الخاصة المطلوبة قبل أي معالجة", rationale: "قرار الصبغات يأتي لاحقًا؛ لا معنى له قبل تثبيت وتحضير مقاطع قابلة للقراءة." }
        ]
      },
      {
        short: "Grossing",
        title: "المحطة 2: Grossing & Orientation",
        prompt: "بعد اكتمال التثبيت، كيف تتعامل مع هذه الخزعات الصغيرة على طاولة الـ grossing إذا كان الهدف رؤية الظهارة والغدد بوضوح؟",
        notes: [
          { label: "المطلوب منك", value: "الحفاظ على الاتجاه الصحيح بدل سحق الخزعة أو طيّها." },
          { label: "وضع العينة", value: "قطع صغيرة جدًا وقد تُقطع tangentially إذا تُركت بدون توجيه." },
          { label: "خطأ شائع", value: "إسقاط القطع عشوائيًا داخل الكاسيت من دون support أو orientation." }
        ],
        answer: "فرد الخزعات بلطف على ورق أو إسفنجة مناسبة مع الحفاظ على اتجاه المخاطية لقطع عمودي لاحقًا",
        explanation: "الـ orientation في الخزعات المخاطية خطوة عالية العائد؛ من دونه قد تحصل على مقطع tangential لا يُظهر العمق النسيجي بشكل صالح.",
        options: [
          { label: "فرد الخزعات بلطف على ورق أو إسفنجة مناسبة مع الحفاظ على اتجاه المخاطية لقطع عمودي لاحقًا", rationale: "هذا يثبت وضعية الخزعة ويساعد على تمثيل الظهارة والـ lamina propria في نفس المقطع." },
          { label: "ضغط الخزعات بالملقط حتى تستقر مسطحة تمامًا", rationale: "الضغط الزائد يسبب crush artifact ويشوّه الظهارة أكثر مما يفيد." },
          { label: "تجميع كل القطع في كتلة واحدة دون تمييز اتجاهها", rationale: "ذلك يزيد خطر فقدان orientation ويصعّب تقييم كفاية المقاطع لاحقًا." },
          { label: "قص الخزعة نصفين عشوائيًا للتأكد من حجمها", rationale: "الخزعات الصغيرة لا تحتمل قصًا عشوائيًا وقد تفقد جزءًا من الظهارة أو التمثيل الصحيح." }
        ]
      },
      {
        short: "Processing",
        title: "المحطة 3: Tissue Processing",
        prompt: "ما التسلسل المختبري الأدق قبل أن تصبح الخزعة جاهزة للتضمين في قالب بارافين؟",
        notes: [
          { label: "المطلوب منك", value: "استبدال الماء تدريجيًا بوسط يسمح بدخول البارافين دون تدمير العينة." },
          { label: "وضع العينة", value: "العينة مثبتة لكنها ما زالت غير قابلة لاختراق البارافين مباشرة." },
          { label: "خطأ شائع", value: "اعتبار التضمين خطوة منفصلة عن الـ dehydration والـ clearing." }
        ],
        answer: "Dehydration ثم clearing ثم paraffin infiltration قبل الـ embedding النهائي",
        explanation: "البارافين لا يدخل النسيج المائي مباشرة؛ لذلك يجب نزع الماء ثم الاستبدال بمذيب مناسب ثم تشريب العينة بالبارافين.",
        options: [
          { label: "Dehydration ثم clearing ثم paraffin infiltration قبل الـ embedding النهائي", rationale: "هذا هو التسلسل الروتيني الصحيح في معالجة عينات البارافين." },
          { label: "Paraffin infiltration مباشرة بعد الفورمالين من دون نزع الماء", rationale: "الماء يمنع اختراق البارافين، لذا تجاوز نزع الماء سيعطي معالجة رديئة." },
          { label: "الصبغ أولًا ثم الـ clearing ثم embedding", rationale: "الصبغ الروتيني يأتي بعد إعداد المقاطع على الشرائح وليس قبل processing." },
          { label: "التقطيع ثم dehydration ثم إعادة التثبيت", rationale: "التقطيع يسبقُه embedding ومعالجة كاملة، لا يحدث على خزعة غير مضمّنة." }
        ]
      },
      {
        short: "Embedding",
        title: "المحطة 4: Embedding Orientation",
        prompt: "أنت الآن عند محطة الـ embedding. ما orientation الأفضل لخزعة مخاطية إذا أردت رؤية السطح الظهاري والعمق تحت الظهارة في نفس المقطع؟",
        notes: [
          { label: "المطلوب منك", value: "إنتاج مقطع يمر عبر الظهارة بزاوية صحيحة لا بشكل tangential." },
          { label: "وضع العينة", value: "الخزعة صغيرة وسطحها المخاطي هو أهم مرجع للتوجيه." },
          { label: "خطأ شائع", value: "ترك المخاطية موازية لمستوى القطع فيظهر السطح فقط بلا عمق كافٍ." }
        ],
        answer: "توجيه سطح المخاطية بحيث يكون عموديًا على مستوى القطع قدر الإمكان",
        explanation: "التوجيه العمودي يسمح برؤية الظهارة والغدد والـ lamina propria ضمن مقطع واحد مقروء، وهو ما يحتاجه الطالب في العملي غالبًا.",
        options: [
          { label: "توجيه سطح المخاطية بحيث يكون عموديًا على مستوى القطع قدر الإمكان", rationale: "هذا هو التوجيه الأفضل للحصول على تمثيل كامل للمخاطية بدل مقطع سطحي فقط." },
          { label: "تسطيح الخزعة بحيث يكون السطح المخاطي موازيًا تمامًا للشفرة", rationale: "هذا يزيد احتمال المقاطع التماسية Tangential sections ويقلل قيمة الشريحة التعليمية." },
          { label: "وضع الخزعة بأي اتجاه لأن الميكروتوم سيصلح ذلك لاحقًا", rationale: "الـ microtome لا يعالج orientation سيئًا؛ الخطأ يبدأ من embedding." },
          { label: "غمرها ببارافين أكثر من المعتاد لتعويض الاتجاه الخاطئ", rationale: "زيادة البارافين لا تعوّض خطأ التوجيه." }
        ]
      },
      {
        short: "Microtomy",
        title: "المحطة 5: Sectioning & Slide Pickup",
        prompt: "ما الخيار الأنسب لإنتاج شريحة روتينية صالحة للقراءة من كتلة بارافين جيدة التوجيه؟",
        notes: [
          { label: "المطلوب منك", value: "مقاطع روتينية رفيعة ومتجانسة من دون طيات واضحة أو سماكة زائدة." },
          { label: "وضع العينة", value: "الكتلة جاهزة، والخطأ هنا يؤثر مباشرة على readability." },
          { label: "خطأ شائع", value: "مقاطع سميكة جدًا أو طيات كثيرة ثم محاولة تفسيرها وكأنها شريحة طبيعية." }
        ],
        answer: "قطع مقاطع رفيعة نحو 4-5 µm ثم فردها على حمام ماء دافئ مناسب وتحميلها على شريحة",
        explanation: "السماكة الروتينية مع فرد المقطع جيدًا تقلل الطيات والتراكب وتسمح بقراءة خلوية أفضل تحت المجهر.",
        options: [
          { label: "قطع مقاطع رفيعة نحو 4-5 µm ثم فردها على حمام ماء دافئ مناسب وتحميلها على شريحة", rationale: "هذا هو الإجراء الروتيني الأنسب للحصول على مقطع متوازن وقابل للصبغ والقراءة." },
          { label: "قص مقاطع سميكة جدًا لتقليل احتمال تمزقها", rationale: "المقاطع السميكة تقلل الجودة الضوئية وتخفي التفاصيل النووية والطبقية." },
          { label: "تحميل المقطع مباشرة على الشريحة دون فرد أو إزالة الطيات", rationale: "الطيات والتراكب سيشوّهان المشهد النسيجي ويصعّبان التفسير." },
          { label: "إعادة التثبيت بالفورمالين بعد القص بدل تجفيف الشريحة", rationale: "هذه ليست خطوة روتينية بعد القص ولا تعالج مشاكل section quality." }
        ]
      },
      {
        short: "H&E",
        title: "المحطة 6: Routine Staining",
        prompt: "أصبحت المقاطع على الشرائح. ما القرار الأدق كصبغة أولى في قراءة روتينية تعليمية؟",
        notes: [
          { label: "المطلوب منك", value: "اختيار الصبغة التي تعطيك architecture ونوى وسيتوبلازم بشكل متوازن أولًا." },
          { label: "وضع العينة", value: "خزعة روتينية لا يوجد سؤال نوعي محدد بعد." },
          { label: "خطأ شائع", value: "الانتقال مباشرة إلى special stain قبل أن ترى H&E الأساسية." }
        ],
        answer: "البدء بصبغة H&E أولًا ثم التفكير في special stain فقط إذا ظهر سؤال محدد",
        explanation: "الـ H&E هي نقطة الانطلاق القياسية لأنها تكشف البنية العامة، وتوجهك لاحقًا إن كنت تحتاج PAS أو immunostain أو غيره.",
        options: [
          { label: "البدء بصبغة H&E أولًا ثم التفكير في special stain فقط إذا ظهر سؤال محدد", rationale: "هذا هو منطق العمل الروتيني السليم في الهستولوجي والهستوباثولوجي." },
          { label: "اختيار PAS مباشرة لأن كل خزعة مخاطية تحتاجه", rationale: "الـ PAS ليس روتينيًا لكل عينات المخاطية بل يُطلب لسؤال نوعي." },
          { label: "طلب immunostain قبل رؤية H&E", rationale: "المناعة النسيجية مرحلة موجهة بالسؤال وليست بديلًا عن الشريحة الروتينية الأولى." },
          { label: "ترك الشريحة غير مصبوغة لأن orientation هو المهم فقط", rationale: "حتى مع orientation ممتاز، لن تحصل على قراءة خلوية مفيدة دون تباين صبغي مناسب." }
        ]
      },
      {
        short: "Low power",
        title: "المحطة 7: First Microscopic Pass",
        prompt: "الآن أصبحت الشريحة مصبوغة وجاهزة تحت المجهر. ما الخطوة الأكثر نضجًا قبل الدخول في التفاصيل الدقيقة؟",
        notes: [
          { label: "المطلوب منك", value: "تقييم adequacy وorientation والartifacts قبل تفسير الخلايا نفسها." },
          { label: "وضع العينة", value: "قد تكون الشريحة جيدة ظاهريًا لكنها غير ممثلة أو مقطوعة بزاوية غير مناسبة." },
          { label: "خطأ شائع", value: "البدء بعدسة oil/high power ثم فقدان الصورة الكبرى للعينة." }
        ],
        answer: "البدء بالمسح منخفض القوة لتقييم كفاية العينة واتجاهها والـ artifacts ثم الانتقال للتكبير الأعلى",
        explanation: "القراءة الناضجة تبدأ من الـ low power؛ عندها تقرر إن كانت العينة ممثلة، وهل تحتاج deeper levels، ثم تتدرج إلى القوى الأعلى.",
        options: [
          { label: "البدء بالمسح منخفض القوة لتقييم كفاية العينة واتجاهها والـ artifacts ثم الانتقال للتكبير الأعلى", rationale: "هذه هي البداية الصحيحة لأي قراءة مجهرية منهجية." },
          { label: "الدخول مباشرة على high power لأن التفاصيل الخلوية أهم من architecture", rationale: "من دون low-power survey قد تفوّت سوء التوجيه أو نقص التمثيل أو artefacts أساسية." },
          { label: "إعطاء انطباع أولي قبل فحص كامل الشريحة", rationale: "الحكم المبكر قبل survey شامل يعرضك لتفسير ناقص أو مضلل." },
          { label: "إعادة الصبغ تلقائيًا قبل استعمال المجهر", rationale: "لا تعاد الصبغة روتينيًا ما لم يكن هناك سبب تقني واضح." }
        ]
      },
      {
        short: "QC",
        title: "المحطة 8: Quality Check Before Sign-out",
        prompt: "إذا وجدت أن الظهارة ممثلة بشكل ناقص أو أن القطع تبدو tangentially sectioned، ما القرار العملي الأنضج؟",
        notes: [
          { label: "المطلوب منك", value: "حماية جودة التفسير بدل إجبار الشريحة على إعطاء معلومة غير موجودة." },
          { label: "وضع العينة", value: "المشكلة ليست في المجهر فقط؛ قد تكون في مستوى القطع أو تمثيل العينة." },
          { label: "خطأ شائع", value: "إعطاء تقرير نهائي أو انطباع تعليمي قاطع من شريحة غير كافية." }
        ],
        answer: "تسجيل محدودية الشريحة وطلب deeper levels أو إعادة التقطيع قبل أي استنتاج نهائي",
        explanation: "القرار الناضج ليس إكمال الخطوات فقط، بل معرفة متى تكون الشريحة غير كافية وتحتاج مستويات إضافية قبل التفسير.",
        options: [
          { label: "تسجيل محدودية الشريحة وطلب deeper levels أو إعادة التقطيع قبل أي استنتاج نهائي", rationale: "هذا يحافظ على جودة القراءة ويعالج مشكلة التمثيل أو مستوى القطع." },
          { label: "اعتبار الشريحة طبيعية لأن المشكلة على الأغلب في المجهر", rationale: "سوء التمثيل أو الـ tangential sectioning مشكلة تقنية حقيقية لا يجوز تجاهلها." },
          { label: "الانتقال مباشرة إلى صبغة خاصة لتعويض النقص", rationale: "الصبغات الخاصة لا تعالج غياب التمثيل أو مستوى القطع غير المناسب." },
          { label: "إصدار النتيجة ثم إضافة ملاحظة لاحقة إذا لزم الأمر", rationale: "القرار الصحيح هو معالجة مشكلة الجودة أولًا، لا توقيع شريحة ناقصة." }
        ]
      }
    ],
    flashcards: [
      {
        category: "المجهر",
        question: "ما الفرق بين التكبير والدقة؟",
        answer: "التكبير يزيد حجم الصورة، أما الدقة فهي القدرة على تمييز نقطتين متقاربتين كنقطتين منفصلتين."
      },
      {
        category: "التحضير",
        question: "لماذا يأتي التثبيت قبل بقية خطوات التحضير؟",
        answer: "لأنه يحفظ النسيج ويمنع التحلل قبل التضمين والتقطيع والصبغ."
      },
      {
        category: "الخلية",
        question: "ما الوظيفة الرئيسية للميتوكوندريا؟",
        answer: "إنتاج الطاقة عبر عمليات التنفس الخلوي."
      },
      {
        category: "الطرق الخاصة",
        question: "على أي مبدأ تقوم الكيمياء المناعية النسيجية؟",
        answer: "تعتمد على الارتباط النوعي بين المستضد والجسم المضاد ثم إظهار هذا الارتباط."
      },
      {
        category: "الأنسجة الظهارية",
        question: "على ماذا تعتمد تسمية كثير من الأنسجة الظهارية؟",
        answer: "تعتمد على شكل الخلايا وعدد الطبقات."
      }
    ],
    quizData: [
      {
        question: "ما أول خطوة في تحضير الأنسجة للفحص المجهري؟",
        choices: ["الصبغ", "التثبيت", "الفحص", "التقرير"],
        answer: "التثبيت"
      },
      {
        question: "أي نوع من المجاهر يفيد مع الخلايا غير المصبوغة نسبيًا؟",
        choices: ["التباين الطوري", "الإلكتروني", "الجراحي", "المكبر اليدوي"],
        answer: "التباين الطوري"
      },
      {
        question: "ما الوظيفة الأبرز لجهاز غولجي؟",
        choices: ["إنتاج الطاقة", "تعديل وتغليف الإفرازات", "تركيب DNA", "تكوين النواة"],
        answer: "تعديل وتغليف الإفرازات"
      },
      {
        question: "تقنية FISH ترتبط أساسًا بـ:",
        choices: ["الكشف عن تسلسلات DNA", "عد الكريات", "تثبيت الأنسجة", "قياس الضغط"],
        answer: "الكشف عن تسلسلات DNA"
      },
      {
        question: "أي مما يلي نسيج أساسي؟",
        choices: ["النسيج الظهاري", "الكبد", "الكلية", "البارافين"],
        answer: "النسيج الظهاري"
      },
      {
        question: "ما التقنية الأكثر شيوعًا في التحضير الروتيني حسب العرض؟",
        choices: ["التجميد", "البارافين", "التهجين", "الصبغ الفلوري"],
        answer: "البارافين"
      },
      {
        question: "الغدد التي تفرز مباشرة إلى الدم تُسمى:",
        choices: ["خارجية الإفراز", "صماء", "مصلية", "مخاطية"],
        answer: "صماء"
      },
      {
        question: "ما المقصود بالدقة Resolution؟",
        choices: ["عدد الشرائح", "شدة اللون", "التمييز بين نقطتين متقاربتين", "سرعة المجهر"],
        answer: "التمييز بين نقطتين متقاربتين"
      }
    ]
  },
  en: {
    modules: [
      {
        tag: "Cell",
        title: "The Cell and Its Components",
        summary: "This topic builds the course foundation: the definition of the cell, the difference between prokaryotic and eukaryotic cells, and the organelles with their functions.",
        keywords: ["Prokaryotic", "Eukaryotic", "Membrane", "Mitochondria", "Golgi", "Lysosomes"],
        focus: [
          "Memorize each organelle with its function, not the name alone.",
          "Differentiate rough and smooth ER clearly.",
          "Mitochondria, the cell membrane, and the Golgi apparatus are ideal comparison topics."
        ]
      },
      {
        tag: "Microscopy",
        title: "Light Microscopy and Its Types",
        summary: "This covers conventional light microscopy together with fluorescence, phase-contrast, and polarizing microscopy, with emphasis on magnification, resolution, and use cases.",
        keywords: ["Magnification", "Resolution", "Fluorescence", "Phase-contrast", "Polarizing"],
        focus: [
          "Magnification is not the same as resolution.",
          "Link each microscope type to its practical use.",
          "Living or unstained cells are strongly associated with phase-contrast microscopy."
        ]
      },
      {
        tag: "Preparation",
        title: "Tissue Preparation for Microscopy",
        summary: "This is the practical backbone of the course: fixation, embedding, sectioning, and staining as one causal sequence.",
        keywords: ["Fixation", "Embedding", "Sectioning", "Staining", "Paraffin"],
        focus: [
          "Keep the steps in order every time.",
          "Ask what problem each step solves.",
          "The paraffin technique deserves extra attention because it is the most common."
        ]
      },
      {
        tag: "Special Methods",
        title: "Histochemistry and Special Methods",
        summary: "This section covers histochemistry, immunocytochemistry, and FISH, with attention to what each method reveals in tissue.",
        keywords: ["Histochemistry", "Immunocytochemistry", "Antigen", "Antibody", "FISH"],
        focus: [
          "Understand what each technique detects.",
          "Link immunocytochemistry to the antigen-antibody reaction.",
          "FISH is tied to detecting specific DNA sequences."
        ]
      },
      {
        tag: "Tissues",
        title: "Basic Tissues and Epithelium",
        summary: "The syllabus lists the four basic tissues and then expands more clearly on epithelial tissue, its properties, functions, and naming.",
        keywords: ["Epithelial", "Connective", "Muscular", "Nervous", "Basement membrane"],
        focus: [
          "Start with the four basic tissues as your map.",
          "Epithelial naming depends on cell shape and number of layers.",
          "The basement membrane and connective tissue support are high-yield concepts."
        ]
      },
      {
        tag: "Glands",
        title: "Glands and Epithelial Specialization",
        summary: "The course includes endocrine and exocrine glands and secretion patterns such as merocrine, apocrine, and holocrine.",
        keywords: ["Endocrine", "Exocrine", "Merocrine", "Apocrine", "Holocrine", "Goblet cells"],
        focus: [
          "Compare gland type, secretion mode, and example together.",
          "Goblet cells are a key unicellular gland example.",
          "Examples alone are not enough without the secretion mechanism."
        ]
      }
    ],
    mindMap: [
      { short: "Cell", points: ["Cell definition", "Prokaryotic vs eukaryotic", "Organelles and roles"] },
      { short: "Microscopy", points: ["Magnification vs resolution", "Fluorescence", "Phase-contrast and polarizing"] },
      { short: "Preparation", points: ["Fixation", "Embedding", "Sectioning and staining"] },
      { short: "Special methods", points: ["Histochemistry", "Immunocytochemistry", "FISH"] },
      { short: "Tissues", points: ["Four basic tissues", "Epithelium", "Basement membrane"] },
      { short: "Glands", points: ["Endocrine vs exocrine", "Merocrine", "Apocrine and holocrine"] }
    ],
    compareGroups: [
      {
        id: "epithelium",
        title: "Epithelium comparison",
        intro: "This track is ideal for locking in layer count, surface cell shape, and the role of cilia or goblet cells.",
        focus: [
          "Always start with number of layers before cell shape.",
          "In pseudostratified epithelium, the nuclei sit at different levels but every cell still reaches the basement membrane.",
          "Simple columnar cells are obviously taller than wide, while cuboidal cells are closer to equal dimensions."
        ],
        options: [
          {
            id: "simple-squamous",
            title: "Simple squamous",
            summary: "A single layer of very flat cells built for rapid diffusion and filtration.",
            lookFor: ["Extremely thin cells", "Flattened nuclei", "Very little thickness overall"],
            sites: ["Blood vessels", "Alveoli", "Serous membranes"],
            function: "Minimizes diffusion distance and supports filtration.",
            trap: "Do not confuse it with endothelium or mesothelium; both are specialized examples of this same pattern."
          },
          {
            id: "simple-cuboidal",
            title: "Simple cuboidal",
            summary: "A single layer of cube-like cells suited for secretion and light absorption.",
            lookFor: ["Cells about as tall as they are wide", "Round central nuclei", "Relatively small lumen"],
            sites: ["Kidney tubules", "Small ducts", "Thyroid follicles"],
            function: "Secretion, absorption, and simple duct lining.",
            trap: "Do not confuse it with simple columnar; columnar cells are distinctly taller and often have more basal nuclei."
          },
          {
            id: "simple-columnar",
            title: "Simple columnar",
            summary: "A single layer of tall cells specialized for absorption and secretion, often with goblet cells.",
            lookFor: ["Cells taller than wide", "Oval nuclei toward the base", "Goblet cells or microvilli may be present"],
            sites: ["Intestine", "Stomach", "Gallbladder"],
            function: "Absorption, secretion, and efficient surface lining.",
            trap: "Do not confuse it with pseudostratified epithelium; nuclei in simple columnar are usually more aligned."
          },
          {
            id: "pseudostratified",
            title: "Pseudostratified ciliated columnar",
            summary: "Looks multilayered, but every cell contacts the basement membrane, often with cilia and goblet cells.",
            lookFor: ["Nuclei at different levels", "Cilia on the surface", "Goblet cells between lining cells"],
            sites: ["Trachea", "Large respiratory passages"],
            function: "Protection plus mucus movement and clearance.",
            trap: "Do not confuse it with a truly stratified epithelium; the basement membrane contact is the key."
          }
        ]
      },
      {
        id: "gland-types",
        title: "Gland comparison",
        intro: "This track separates endocrine from exocrine organization and keeps goblet cells in mind as the classic unicellular gland.",
        focus: [
          "Ask first: is there a duct, or does secretion go straight to blood/interstitium?",
          "Endocrine glands lose ducts and depend on rich capillary support.",
          "Goblet cells are key unicellular glands embedded inside epithelium."
        ],
        options: [
          {
            id: "endocrine",
            title: "Endocrine gland",
            summary: "A ductless gland that releases secretion directly into blood or interstitial fluid.",
            lookFor: ["No ducts", "Cells arranged around capillaries", "Hormonal output"],
            sites: ["Thyroid", "Pituitary", "Pancreatic islets"],
            function: "Systemic regulation through hormones.",
            trap: "Do not confuse it with exocrine secretion; the presence of a duct usually settles the question."
          },
          {
            id: "exocrine",
            title: "Exocrine gland",
            summary: "A gland that secretes through ducts onto a surface or into a lumen.",
            lookFor: ["Duct system", "Secretory acini or tubules", "Connection to an epithelial surface"],
            sites: ["Salivary glands", "Exocrine pancreas", "Sweat glands"],
            function: "Delivers secretion to a specific surface or cavity.",
            trap: "Some organs are mixed, like the pancreas, so stay clear about which component you mean."
          },
          {
            id: "goblet",
            title: "Goblet cell",
            summary: "A unicellular gland inside columnar or pseudostratified epithelium that produces mucus.",
            lookFor: ["Pale mucous-filled cell", "Basal nucleus", "Embedded inside a lining epithelium"],
            sites: ["Intestine", "Trachea"],
            function: "Mucus production for protection and lubrication.",
            trap: "Do not classify it as a multicellular gland; it is a single glandular cell."
          },
          {
            id: "multicellular",
            title: "Multicellular gland",
            summary: "An organized group of secretory cells that may be tubular or acinar, with or without ducts depending on type.",
            lookFor: ["Many secretory cells", "Distinct secretory unit", "Ducts or cell cords may be present"],
            sites: ["Salivary glands", "Pancreas", "Thyroid"],
            function: "Raises secretory capacity and organizes product delivery.",
            trap: "Do not mix secretory-unit shape with secretion mode; those are separate classification axes."
          }
        ]
      },
      {
        id: "secretion-modes",
        title: "Secretion mode comparison",
        intro: "This track separates merocrine, apocrine, and holocrine secretion, one of the most common test points.",
        focus: [
          "The key question is whether the cell loses cytoplasm, stays intact, or is destroyed completely.",
          "Merocrine is the calm, common default pattern.",
          "Holocrine means the whole cell becomes part of the secretion."
        ],
        options: [
          {
            id: "merocrine",
            title: "Merocrine",
            summary: "Secretion by exocytosis with no loss of cellular material.",
            lookFor: ["Cells remain intact", "Secretory vesicles", "No apical cell pinching"],
            sites: ["Exocrine pancreas", "Salivary glands", "Most sweat glands"],
            function: "Efficient repeated secretion without cell damage.",
            trap: "Do not confuse it with apocrine; in apocrine a piece of the apex is lost."
          },
          {
            id: "apocrine",
            title: "Apocrine",
            summary: "Part of the apical cytoplasm is pinched off with the secretion.",
            lookFor: ["Apical blebbing", "Loss of apical portion", "Decapitation pattern in theory descriptions"],
            sites: ["Apocrine sweat glands", "Mammary gland in some functional descriptions"],
            function: "Releases product together with part of the apical cytoplasm.",
            trap: "Do not confuse it with holocrine; the cell remains alive in apocrine secretion."
          },
          {
            id: "holocrine",
            title: "Holocrine",
            summary: "The whole cell disintegrates and becomes part of the secretion.",
            lookFor: ["Cells accumulate then break down", "Lumen filled with cellular debris", "Constant replacement from basal cells"],
            sites: ["Sebaceous glands"],
            function: "Delivers lipid-rich product through total cell breakdown.",
            trap: "This is the most destructive mode; do not mix it with merocrine or apocrine."
          }
        ]
      },
      {
        id: "cartilage",
        title: "Cartilage comparison",
        intro: "This track makes hyaline, elastic, and fibrocartilage easier to separate visually and functionally.",
        focus: [
          "Start with the dominant fiber type and whether a perichondrium is present.",
          "Hyaline is the smoothest and most common baseline pattern.",
          "Fibrocartilage looks tougher and more fibrous because it resists both tension and compression."
        ],
        options: [
          {
            id: "hyaline",
            title: "Hyaline cartilage",
            summary: "A glassy cartilage with a relatively smooth matrix and fine fibers that are often not obvious in H&E.",
            lookFor: ["Smooth matrix", "Chondrocytes in lacunae", "Perichondrium usually present"],
            sites: ["Trachea", "Nose", "Articular surfaces", "Costal cartilage"],
            function: "Flexible support, smooth movement, and a template for ossification.",
            trap: "Do not confuse it with elastic cartilage; elastic cartilage shows much clearer elastic fibers."
          },
          {
            id: "elastic",
            title: "Elastic cartilage",
            summary: "Cartilage rich in elastic fibers, built to keep shape while bending.",
            lookFor: ["Elastic fiber network", "Clear lacunae", "Perichondrium present"],
            sites: ["Auricle", "Epiglottis"],
            function: "Maintains shape with high flexibility.",
            trap: "Do not confuse it with hyaline; the elastic fibers are the decisive clue."
          },
          {
            id: "fibrocartilage",
            title: "Fibrocartilage",
            summary: "A collagen-rich cartilage combining cartilage features with dense fibrous support.",
            lookFor: ["Dense collagen bundles", "Chondrocytes in rows", "Perichondrium usually absent"],
            sites: ["Intervertebral discs", "Pubic symphysis", "Some tendon attachment zones"],
            function: "Resists both tension and compression.",
            trap: "Do not confuse it with dense connective tissue; lacunae help you make the call."
          }
        ]
      }
    ],
    classifier: {
      start: "layers",
      nodes: {
        layers: {
          question: "How many layers do you see or expect at the surface?",
          options: [
            { id: "single", label: "One clear layer", next: "simple-shape" },
            { id: "pseudo", label: "It looks multilayered but all cells still touch the basement membrane", next: "pseudo-cilia" },
            { id: "many", label: "Several true layers", next: "stratified-shape" }
          ]
        },
        "simple-shape": {
          question: "What is the main surface-cell shape?",
          options: [
            { id: "flat", label: "Very flat", next: "simple-squamous" },
            { id: "cube", label: "Approximately cuboidal", next: "simple-cuboidal" },
            { id: "tall", label: "Columnar and taller than wide", next: "simple-columnar" }
          ]
        },
        "pseudo-cilia": {
          question: "Do you see cilia or expect a mucus-moving function?",
          options: [
            { id: "yes", label: "Yes, cilia or mucus clearance", next: "pseudostratified-ciliated" },
            { id: "no", label: "No, but the tissue still looks pseudostratified", next: "pseudostratified" }
          ]
        },
        "stratified-shape": {
          question: "What is the shape of the most superficial cells?",
          options: [
            { id: "flat", label: "Flattened at the surface", next: "stratified-squamous" },
            { id: "cube", label: "Cuboidal at the surface", next: "stratified-cuboidal" },
            { id: "column", label: "Columnar at the surface", next: "stratified-columnar" },
            { id: "change", label: "The shape changes with stretching", next: "transitional" }
          ]
        }
      },
      results: {
        "simple-squamous": {
          title: "Simple squamous epithelium",
          why: ["Only one layer is present.", "The cells are extremely flat.", "The tissue is optimized for diffusion or filtration."],
          examples: ["Alveoli", "Blood vessels", "Serous membranes"]
        },
        "simple-cuboidal": {
          title: "Simple cuboidal epithelium",
          why: ["Only one layer is present.", "Cells are roughly cube-shaped.", "The tissue often supports secretion or limited absorption."],
          examples: ["Kidney tubules", "Small ducts", "Thyroid follicles"]
        },
        "simple-columnar": {
          title: "Simple columnar epithelium",
          why: ["Only one layer is present.", "Cells are tall and nuclei are often basal.", "Goblet cells or microvilli may be part of the picture."],
          examples: ["Intestine", "Stomach", "Gallbladder"]
        },
        "pseudostratified-ciliated": {
          title: "Pseudostratified ciliated columnar epithelium",
          why: ["Nuclei lie at different heights, creating a multilayered look.", "All cells still contact the basement membrane.", "Cilia support mucus transport."],
          examples: ["Trachea", "Large bronchi"]
        },
        pseudostratified: {
          title: "Pseudostratified columnar epithelium",
          why: ["The tissue appears stratified.", "Yet all cells reach the basement membrane.", "Variable cell height explains the uneven nuclear levels."],
          examples: ["Some reproductive ducts", "Selected non-ciliated special cases"]
        },
        "stratified-squamous": {
          title: "Stratified squamous epithelium",
          why: ["Several true cell layers are present.", "The most superficial cells are flat.", "The dominant function is protection from abrasion."],
          examples: ["Skin when keratinized", "Esophagus when non-keratinized"]
        },
        "stratified-cuboidal": {
          title: "Stratified cuboidal epithelium",
          why: ["Several layers are present.", "The superficial cells are cuboidal.", "It is typically seen in larger ducts rather than wide surfaces."],
          examples: ["Large sweat gland ducts", "Some glandular ducts"]
        },
        "stratified-columnar": {
          title: "Stratified columnar epithelium",
          why: ["Several layers are present.", "The superficial cells are columnar.", "It is relatively rare compared with other epithelial types."],
          examples: ["Some large ducts", "Selected parts of conjunctiva or urethra in some references"]
        },
        transitional: {
          title: "Transitional epithelium",
          why: ["Several true layers are present.", "The superficial-cell shape changes with distension and relaxation.", "The tissue is built for stretch without losing barrier function."],
          examples: ["Urinary bladder", "Ureter", "Parts of the renal pelvis"]
        }
      }
    },
    simCase: {
      title: "Routine paraffin workflow for a colonic mucosal biopsy",
      summary: "The learner follows three tiny mucosal biopsy fragments from accession to the first safe microscopic readout, making the most defensible laboratory decision at each station.",
      facts: [
        { label: "Specimen", value: "Three small colonic mucosal biopsy fragments in a biopsy container." },
        { label: "Practical target", value: "Preserve architecture while displaying epithelium and lamina propria in a readable section." },
        { label: "Desired output", value: "A good H&E slide with acceptable orientation, minimal artifacts, and a sensible low-power first survey." },
        { label: "High-yield checkpoints", value: "Fixation, gross orientation, processing, embedding, microtomy, H&E first, then quality review." }
      ]
    },
    simData: [
      {
        short: "Fixation",
        title: "Station 1: Accession & Fixation",
        prompt: "Three tiny colonic mucosal biopsies arrive in the lab. What is the most appropriate immediate action after confirming specimen identity?",
        notes: [
          { label: "Your goal", value: "Prevent autolysis and crush-related loss of morphology from the very beginning." },
          { label: "Specimen state", value: "Tiny mucosal fragments that can fold or distort easily if fixation is delayed." },
          { label: "Common pitfall", value: "Delaying fixation or using an insufficient volume of fixative." }
        ],
        answer: "Place the biopsy fragments immediately into an adequate volume of 10% neutral buffered formalin after accessioning",
        explanation: "Rapid fixation is the first quality checkpoint in small biopsies because it preserves epithelial detail, glandular outline, and nuclear morphology.",
        options: [
          { label: "Place the biopsy fragments immediately into an adequate volume of 10% neutral buffered formalin after accessioning", rationale: "This is the correct first move because fixation precedes all processing and staining decisions." },
          { label: "Start trimming and sectioning before fixation to save time", rationale: "Handling tiny fresh biopsies before fixation increases distortion and autolytic damage." },
          { label: "Leave the specimen in distilled water until the next batch is ready", rationale: "Water does not fix tissue and only increases the risk of structural breakdown." },
          { label: "Choose the special stain before any further handling", rationale: "Stain selection comes later; it cannot replace proper fixation and routine preparation." }
        ]
      },
      {
        short: "Grossing",
        title: "Station 2: Grossing & Orientation",
        prompt: "After fixation, how should these tiny mucosal biopsies be handled on the gross bench if your aim is to display the epithelial surface and deeper mucosa properly?",
        notes: [
          { label: "Your goal", value: "Preserve orientation rather than crushing or randomly folding the tissue." },
          { label: "Specimen state", value: "Very small fragments that may be cut tangentially if no orientation support is used." },
          { label: "Common pitfall", value: "Dropping all fragments into the cassette without support or deliberate orientation." }
        ],
        answer: "Gently spread the fragments on suitable paper or sponge support so the mucosal surface can later be cut in a perpendicular plane",
        explanation: "In small mucosal biopsies, gross orientation is a high-yield step; otherwise the final section may be tangential and educationally poor.",
        options: [
          { label: "Gently spread the fragments on suitable paper or sponge support so the mucosal surface can later be cut in a perpendicular plane", rationale: "This preserves orientation and improves the chance of seeing surface epithelium and lamina propria together." },
          { label: "Press the fragments flat with forceps until they stop moving", rationale: "Excess force creates crush artifact and may destroy the very surface you are trying to preserve." },
          { label: "Pool all pieces together without caring about their direction", rationale: "Random orientation increases the chance of tangential sections and poor representation." },
          { label: "Cut every biopsy fragment in half randomly to inspect size", rationale: "Random trimming in such tiny biopsies may waste epithelium and compromise representation." }
        ]
      },
      {
        short: "Processing",
        title: "Station 3: Tissue Processing",
        prompt: "Which sequence is most appropriate before the specimen can be embedded as a paraffin block?",
        notes: [
          { label: "Your goal", value: "Replace water stepwise with a medium that allows proper paraffin infiltration." },
          { label: "Specimen state", value: "The tissue is fixed, but paraffin still cannot directly replace water inside it." },
          { label: "Common pitfall", value: "Thinking that paraffin embedding is one isolated step without dehydration and clearing." }
        ],
        answer: "Dehydration, then clearing, then paraffin infiltration before final embedding",
        explanation: "Paraffin cannot enter water-rich tissue directly, so dehydration and clearing must come first to make infiltration possible.",
        options: [
          { label: "Dehydration, then clearing, then paraffin infiltration before final embedding", rationale: "This is the standard routine paraffin-processing sequence." },
          { label: "Paraffin infiltration immediately after fixation without dehydration", rationale: "Residual water blocks paraffin entry, so this sequence fails technically." },
          { label: "Staining first, then clearing, then embedding", rationale: "Routine staining is performed after sections are cut and mounted, not before tissue processing." },
          { label: "Sectioning first, then dehydration, then fixation again", rationale: "Sectioning comes after embedding, not before processing is complete." }
        ]
      },
      {
        short: "Embedding",
        title: "Station 4: Embedding Orientation",
        prompt: "At the embedding station, what is the best orientation for a mucosal biopsy if you want to see the epithelial surface together with the underlying lamina propria?",
        notes: [
          { label: "Your goal", value: "Produce a section that cuts across the mucosa rather than just skimming along its surface." },
          { label: "Specimen state", value: "The mucosal surface remains your most important landmark for proper orientation." },
          { label: "Common pitfall", value: "Leaving the mucosal surface parallel to the cutting plane, which leads to tangential sections." }
        ],
        answer: "Orient the mucosal surface as close to perpendicular to the cutting plane as possible",
        explanation: "A perpendicular orientation is what most reliably shows the epithelial surface, gland depth, and lamina propria in one meaningful section.",
        options: [
          { label: "Orient the mucosal surface as close to perpendicular to the cutting plane as possible", rationale: "This is the best way to obtain a full-thickness mucosal section rather than a superficial skim." },
          { label: "Flatten the biopsy so the mucosal surface lies parallel to the blade", rationale: "That setup encourages tangential sections and a poor educational slide." },
          { label: "Use any orientation because the microtome will correct it later", rationale: "The microtome cannot rescue an embedding orientation error." },
          { label: "Compensate for wrong orientation by adding more paraffin", rationale: "More paraffin does not fix orientation problems." }
        ]
      },
      {
        short: "Microtomy",
        title: "Station 5: Sectioning & Slide Pickup",
        prompt: "What is the most appropriate routine approach for producing a readable histology slide from a well-oriented paraffin block?",
        notes: [
          { label: "Your goal", value: "Generate uniform thin sections with minimal folds and acceptable optical clarity." },
          { label: "Specimen state", value: "The block is ready, and technical quality now directly affects readability." },
          { label: "Common pitfall", value: "Accepting sections that are too thick or heavily folded and trying to interpret them anyway." }
        ],
        answer: "Cut thin routine sections around 4-5 µm, float them on a suitable warm water bath, and pick them up on slides",
        explanation: "Routine thin sections with proper spreading reduce folds and overlap and make both architecture and nuclei easier to assess.",
        options: [
          { label: "Cut thin routine sections around 4-5 µm, float them on a suitable warm water bath, and pick them up on slides", rationale: "This is the standard practical approach for readable routine sections." },
          { label: "Cut markedly thick sections to reduce the chance of tearing", rationale: "Excessively thick sections reduce optical quality and hide key cytologic detail." },
          { label: "Mount the sections directly without removing folds", rationale: "Folds and overlaps distort architecture and can make the section misleading." },
          { label: "Refix the sections in formalin after cutting instead of drying the slide", rationale: "That is not a routine solution for section-quality problems." }
        ]
      },
      {
        short: "H&E",
        title: "Station 6: Routine Staining",
        prompt: "The sections are now on the slide. What is the most defensible first staining decision in a routine teaching biopsy workflow?",
        notes: [
          { label: "Your goal", value: "Choose the stain that best gives you overall architecture, nuclei, and cytoplasm as a starting point." },
          { label: "Specimen state", value: "This is a routine biopsy with no specific ancillary question yet." },
          { label: "Common pitfall", value: "Jumping to a special stain before you have even reviewed the H&E baseline." }
        ],
        answer: "Start with routine H&E, then request a special stain only if a specific question emerges",
        explanation: "H&E is the routine first-line stain because it reveals the overall tissue pattern and tells you whether a special stain is actually needed.",
        options: [
          { label: "Start with routine H&E, then request a special stain only if a specific question emerges", rationale: "That is the correct routine-first workflow in histology and histopathology." },
          { label: "Choose PAS immediately because every mucosal biopsy needs it", rationale: "PAS is question-driven, not a universal replacement for H&E." },
          { label: "Order immunostains before seeing the routine slide", rationale: "Immunostains are targeted adjuncts, not routine first-line substitutes." },
          { label: "Leave the section unstained because orientation is all that matters", rationale: "Even with good orientation, you still need stain contrast for useful microscopic interpretation." }
        ]
      },
      {
        short: "Low power",
        title: "Station 7: First Microscopic Pass",
        prompt: "The slide is stained and ready for microscopy. What is the most mature first move before focusing on fine cellular detail?",
        notes: [
          { label: "Your goal", value: "Judge adequacy, orientation, and artifact before committing to detailed interpretation." },
          { label: "Specimen state", value: "A technically acceptable-looking slide may still be poorly oriented or inadequately representative." },
          { label: "Common pitfall", value: "Starting straight at high power and missing the big architectural problem." }
        ],
        answer: "Begin with a low-power survey to assess adequacy, orientation, and artifacts before going to higher magnification",
        explanation: "A disciplined low-power survey is the safest first read because it tells you whether the specimen is representative and worth deeper interpretation.",
        options: [
          { label: "Begin with a low-power survey to assess adequacy, orientation, and artifacts before going to higher magnification", rationale: "This is the correct systematic beginning for any histology slide review." },
          { label: "Go immediately to high power because cytologic detail matters most", rationale: "Without a low-power overview you may miss poor representation or major orientation errors." },
          { label: "Write a preliminary impression before surveying the whole slide", rationale: "Early interpretation without a full overview is methodologically weak." },
          { label: "Restain the slide before using the microscope", rationale: "Restaining is not the default response unless there is a clear technical reason." }
        ]
      },
      {
        short: "QC",
        title: "Station 8: Quality Check Before Sign-out",
        prompt: "If the epithelium is only partially represented or the mucosa appears tangentially sectioned, what is the best practical decision before any final interpretation?",
        notes: [
          { label: "Your goal", value: "Protect interpretation quality instead of forcing meaning out of an inadequate slide." },
          { label: "Specimen state", value: "The problem may lie in the level of section or representativeness, not in the microscope itself." },
          { label: "Common pitfall", value: "Giving a final teaching conclusion from a technically limited slide." }
        ],
        answer: "Document the limitation and request deeper levels or recuts before making a final judgment",
        explanation: "Good practical judgment includes recognizing when the section is not yet good enough and asking for deeper levels or recuts before interpretation.",
        options: [
          { label: "Document the limitation and request deeper levels or recuts before making a final judgment", rationale: "This is the most defensible quality-focused next step." },
          { label: "Assume the section is normal because the problem is probably just the microscope", rationale: "Tangential sectioning and poor representation are real technical issues that must not be ignored." },
          { label: "Order a special stain to compensate for poor representation", rationale: "Special stains do not fix an unrepresentative or badly oriented section." },
          { label: "Issue the result first and adjust the comment later if needed", rationale: "Quality problems should be corrected before sign-out, not after it." }
        ]
      }
    ],
    flashcards: [
      {
        category: "Microscopy",
        question: "What is the difference between magnification and resolution?",
        answer: "Magnification enlarges the image, while resolution is the ability to distinguish two close points as separate."
      },
      {
        category: "Preparation",
        question: "Why does fixation come before the other preparation steps?",
        answer: "Because it preserves tissue architecture and prevents breakdown before embedding, sectioning, and staining."
      },
      {
        category: "Cell",
        question: "What is the main role of mitochondria?",
        answer: "They produce energy through cellular respiration."
      },
      {
        category: "Special Methods",
        question: "What principle underlies immunocytochemistry?",
        answer: "It depends on the specific binding between an antigen and an antibody and then visualizing that binding."
      },
      {
        category: "Epithelium",
        question: "What is the naming of many epithelial tissues based on?",
        answer: "It is based on cell shape and the number of layers."
      }
    ],
    quizData: [
      {
        question: "What is the first step in tissue preparation for microscopic examination?",
        choices: ["Staining", "Fixation", "Examination", "Reporting"],
        answer: "Fixation"
      },
      {
        question: "Which type of microscope is useful for relatively unstained cells?",
        choices: ["Phase-contrast", "Electron", "Surgical", "Hand lens"],
        answer: "Phase-contrast"
      },
      {
        question: "What is the most prominent role of the Golgi apparatus?",
        choices: ["Energy production", "Modification and packaging of secretions", "DNA synthesis", "Nuclear formation"],
        answer: "Modification and packaging of secretions"
      },
      {
        question: "FISH is mainly related to:",
        choices: ["Detection of DNA sequences", "Counting blood cells", "Tissue fixation", "Pressure measurement"],
        answer: "Detection of DNA sequences"
      },
      {
        question: "Which of the following is a basic tissue?",
        choices: ["Epithelial tissue", "Liver", "Kidney", "Paraffin"],
        answer: "Epithelial tissue"
      },
      {
        question: "What is the most common routine preparation technique mentioned in the syllabus?",
        choices: ["Freezing", "Paraffin", "Hybridization", "Fluorescent staining"],
        answer: "Paraffin"
      },
      {
        question: "Glands that release directly into the blood are called:",
        choices: ["Exocrine", "Endocrine", "Serous", "Mucous"],
        answer: "Endocrine"
      },
      {
        question: "What does resolution mean?",
        choices: ["Number of slides", "Color intensity", "Distinguishing two close points", "Microscope speed"],
        answer: "Distinguishing two close points"
      }
    ]
  }
};

const galleryItems = [
  {
    src: "assets/histology/cell-overview.svg",
    title: {
      ar: "خريطة الخلية والعضيات",
      en: "Cell and organelle overview"
    },
    tag: {
      ar: "الخلية",
      en: "Cell"
    },
    body: {
      ar: "رسم أوضح لفكرة الخلية والعضيات الأساسية مثل النواة، الميتوكوندريا، جهاز غولجي، والشبكات الغشائية.",
      en: "A clearer map of the cell and its major organelles such as the nucleus, mitochondria, Golgi apparatus, and membrane networks."
    },
    note: {
      ar: "مفيد لربط التركيب بالوظيفة قبل الدخول في التفاصيل.",
      en: "Useful for linking structure to function before going into detail."
    }
  },
  {
    src: "assets/histology/microscopy-modes.svg",
    title: {
      ar: "أنماط المجهر الضوئي",
      en: "Microscopy modes"
    },
    tag: {
      ar: "المجهر",
      en: "Microscopy"
    },
    body: {
      ar: "مقارنة بصرية مبسطة بين العرض التقليدي، الفلوري، التباين الطوري، والاستقطابي.",
      en: "A simplified visual comparison of conventional, fluorescence, phase-contrast, and polarizing views."
    },
    note: {
      ar: "يعطيك فرق المظهر بدل حفظ الأسماء فقط.",
      en: "Helps you remember the look of each mode, not only the names."
    }
  },
  {
    src: "assets/histology/tissue-prep.svg",
    title: {
      ar: "تسلسل تحضير الأنسجة",
      en: "Tissue preparation sequence"
    },
    tag: {
      ar: "التحضير",
      en: "Preparation"
    },
    body: {
      ar: "رسم يلخص الطريق من التثبيت إلى التضمين ثم التقطيع ثم الصبغ.",
      en: "A diagram that summarizes the path from fixation to embedding, sectioning, and staining."
    },
    note: {
      ar: "هذا الرسم يطابق العمود العملي للمنهج.",
      en: "This figure matches the practical backbone of the course."
    }
  },
  {
    src: "assets/histology/epithelium-panels.svg",
    title: {
      ar: "مقارنة الأنواع الظهارية",
      en: "Epithelial type comparison"
    },
    tag: {
      ar: "الظهاري",
      en: "Epithelium"
    },
    body: {
      ar: "لوحات توضح الفرق البصري بين البسيط الحرشفي والمكعبي والعمودي والصوري القريب من الكاذب الطبقات.",
      en: "Panels showing the visual difference between simple squamous, cuboidal, columnar, and pseudostratified-like arrangements."
    },
    note: {
      ar: "مفيد جدًا لأسئلة الشكل وعدد الطبقات.",
      en: "Very useful for shape and layer-count questions."
    }
  },
  {
    src: "assets/histology/glands-modes.svg",
    title: {
      ar: "الغدد وأنماط الإفراز",
      en: "Glands and secretion patterns"
    },
    tag: {
      ar: "الغدد",
      en: "Glands"
    },
    body: {
      ar: "رسم مبسط يساعد في تخيل الغدة، القناة، ومقارنة بعض أوضاع الإفراز المختلفة.",
      en: "A simplified diagram to visualize gland units, ducts, and compare different secretion patterns."
    },
    note: {
      ar: "استخدمه مع أمثلة الميروكراين والأبوكراين والهولوكراين.",
      en: "Use it with merocrine, apocrine, and holocrine examples."
    }
  },
  {
    src: "assets/histology/apical-specializations.svg",
    title: {
      ar: "التخصصات القمية",
      en: "Apical specializations"
    },
    tag: {
      ar: "Cilia / Microvilli",
      en: "Cilia / Microvilli"
    },
    body: {
      ar: "صورة مقارنة لتقريب الفرق بين الميكروفيلي، الستيريوسيليا، والبنى الهدبية الطويلة.",
      en: "A comparison figure that brings out the difference between microvilli, stereocilia, and long ciliary structures."
    },
    note: {
      ar: "تخدم المقارنات السريعة في العملي والنظري.",
      en: "Good for quick practical and theoretical comparisons."
    }
  }
];

const syllabusVisualItems = [
  {
    src: "assets/histology/pdfslides/page-170.png",
    group: "epithelium",
    groupLabel: { ar: "الظهارات والغدد", en: "Epithelium & glands" },
    title: { ar: "السطح القمي والقاعدي والغشاء القاعدي", en: "Apical-basal orientation and basement membrane" },
    body: { ar: "مخطط تأسيسي يوضح السطح القمي والجانبي والقاعدي وعلاقة الظهارة بالنسيج الضام.", en: "A core diagram showing the apical, lateral, and basal surfaces and how epithelium relates to connective tissue." },
    note: { ar: "من سلايدات المنهج • صفحة 170", en: "From the syllabus slides • Page 170" }
  },
  {
    src: "assets/histology/pdfslides/page-175.png",
    group: "epithelium",
    groupLabel: { ar: "الظهارات والغدد", en: "Epithelium & glands" },
    title: { ar: "ميكروغراف ظهاري أحادي الطبقة", en: "Single-layer epithelial micrograph" },
    body: { ar: "صورة مجهرية مناسبة لربط عدد الطبقات مع شكل النوى وامتداد الخلايا.", en: "A micrograph useful for linking layer count with nuclear level and cell height." },
    note: { ar: "من سلايدات المنهج • صفحة 175", en: "From the syllabus slides • Page 175" }
  },
  {
    src: "assets/histology/pdfslides/page-176.png",
    group: "epithelium",
    groupLabel: { ar: "الظهارات والغدد", en: "Epithelium & glands" },
    title: { ar: "ميكروغراف ظهاري عمودي", en: "Columnar epithelial micrograph" },
    body: { ar: "صورة مناسبة لملاحظة طول الخلايا واصطفاف النوى مقارنة بالأنماط الأقصر.", en: "Useful for noticing tall cells and the way nuclei line up compared with shorter epithelial types." },
    note: { ar: "من سلايدات المنهج • صفحة 176", en: "From the syllabus slides • Page 176" }
  },
  {
    src: "assets/histology/pdfslides/page-195.png",
    group: "epithelium",
    groupLabel: { ar: "الظهارات والغدد", en: "Epithelium & glands" },
    title: { ar: "تكون الغدد من الظهارة", en: "Gland formation from epithelium" },
    body: { ar: "مخطط ممتاز للفرق بين تكوّن الغدة الصماء والخارجية ابتداءً من بطانة ظهارية.", en: "A strong teaching diagram for how endocrine and exocrine glands arise from an epithelial lining." },
    note: { ar: "من سلايدات المنهج • صفحة 195", en: "From the syllabus slides • Page 195" }
  },
  {
    src: "assets/histology/pdfslides/page-198.png",
    group: "epithelium",
    groupLabel: { ar: "الظهارات والغدد", en: "Epithelium & glands" },
    title: { ar: "خلايا كأسية داخل ظهارة عمودية", en: "Goblet cells within columnar epithelium" },
    body: { ar: "صورة مجهرية تخدم فهم الخلية الكأسية كغدة وحيدة الخلية داخل البطانة.", en: "A micrograph that supports understanding the goblet cell as a unicellular gland inside the epithelial lining." },
    note: { ar: "من سلايدات المنهج • صفحة 198", en: "From the syllabus slides • Page 198" }
  },
  {
    src: "assets/histology/pdfslides/page-200.png",
    group: "epithelium",
    groupLabel: { ar: "الظهارات والغدد", en: "Epithelium & glands" },
    title: { ar: "الصماء والخارجية وأنماط الإفراز", en: "Endocrine vs exocrine and secretion modes" },
    body: { ar: "شريحة مختصرة وعالية الفائدة تقارن بين merocrine و apocrine و holocrine مع endocrine.", en: "A compact, high-yield slide comparing merocrine, apocrine, holocrine, and endocrine secretion." },
    note: { ar: "من سلايدات المنهج • صفحة 200", en: "From the syllabus slides • Page 200" }
  },
  {
    src: "assets/histology/pdfslides/page-205.png",
    group: "epithelium",
    groupLabel: { ar: "الظهارات والغدد", en: "Epithelium & glands" },
    title: { ar: "ميكروغراف غدة مخاطية", en: "Mucous gland micrograph" },
    body: { ar: "صورة غدية مناسبة لتمييز الأسينيات الشاحبة وبنية القنوات المحيطة.", en: "A glandular micrograph useful for recognizing pale secretory units and surrounding ducts." },
    note: { ar: "من سلايدات المنهج • صفحة 205", en: "From the syllabus slides • Page 205" }
  },
  {
    src: "assets/histology/pdfslides/page-206.png",
    group: "epithelium",
    groupLabel: { ar: "الظهارات والغدد", en: "Epithelium & glands" },
    title: { ar: "الغدد المركبة", en: "Compound glands" },
    body: { ar: "مخطط مرتب يوضح الفرق البنيوي بين compound tubular و acinar و tubuloacinar.", en: "A structured diagram showing the difference between compound tubular, acinar, and tubuloacinar glands." },
    note: { ar: "من سلايدات المنهج • صفحة 206", en: "From the syllabus slides • Page 206" }
  },
  {
    src: "assets/histology/pdfslides/page-219.png",
    group: "epithelium",
    groupLabel: { ar: "الظهارات والغدد", en: "Epithelium & glands" },
    title: { ar: "خريطة الوصلات الخلوية", en: "Cell-junction overview" },
    body: { ar: "مخطط شامل يجمع tight junctions و desmosomes و gap junctions و hemidesmosomes.", en: "A broad overview combining tight junctions, desmosomes, gap junctions, and hemidesmosomes." },
    note: { ar: "من سلايدات المنهج • صفحة 219", en: "From the syllabus slides • Page 219" }
  },
  {
    src: "assets/histology/pdfslides/page-226.png",
    group: "epithelium",
    groupLabel: { ar: "الظهارات والغدد", en: "Epithelium & glands" },
    title: { ar: "أنواع الوصلات بين الخلايا", en: "Types of cell junctions" },
    body: { ar: "شريحة مقارنة أقرب للامتحان لأنها تضع كل وصلة بجانب شكلها ووظيفتها.", en: "A comparison slide that is exam-friendly because it places each junction next to its appearance and role." },
    note: { ar: "من سلايدات المنهج • صفحة 226", en: "From the syllabus slides • Page 226" }
  },
  {
    src: "assets/histology/pdfslides/page-233.png",
    group: "epithelium",
    groupLabel: { ar: "الظهارات والغدد", en: "Epithelium & glands" },
    title: { ar: "الأهداب والميكروفيلي والوصلات", en: "Cilia, microvilli, and junctions" },
    body: { ar: "مخطط غني يربط التخصصات القمية مع الوصلات والغشاء القاعدي في لوحة واحدة.", en: "A rich diagram that combines apical specializations, junctions, and the basement membrane in one view." },
    note: { ar: "من سلايدات المنهج • صفحة 233", en: "From the syllabus slides • Page 233" }
  },
  {
    src: "assets/histology/pdfslides/page-255.png",
    group: "connective",
    groupLabel: { ar: "النسيج الضام", en: "Connective tissue" },
    title: { ar: "ألياف النسيج الضام", en: "Connective tissue fibers" },
    body: { ar: "رسم بسيط وفعال لمقارنة collagen و elastic و reticular fibers بسرعة.", en: "A simple but effective diagram for quickly comparing collagen, elastic, and reticular fibers." },
    note: { ar: "من سلايدات المنهج • صفحة 255", en: "From the syllabus slides • Page 255" }
  },
  {
    src: "assets/histology/pdfslides/page-266.png",
    group: "connective",
    groupLabel: { ar: "النسيج الضام", en: "Connective tissue" },
    title: { ar: "ألياف مرنة في مقطع نسيجي", en: "Elastic fibers in tissue section" },
    body: { ar: "ميكروغراف يوضح شكل الألياف المرنة بين الخلايا الليفية والخلايا المجاورة.", en: "A tissue micrograph showing elastic fibers running between fibroblasts and neighboring cells." },
    note: { ar: "من سلايدات المنهج • صفحة 266", en: "From the syllabus slides • Page 266" }
  },
  {
    src: "assets/histology/pdfslides/page-297.png",
    group: "connective",
    groupLabel: { ar: "النسيج الضام", en: "Connective tissue" },
    title: { ar: "Fibroblast في LM و EM", en: "Fibroblast in LM and EM" },
    body: { ar: "مفيد جدًا لتثبيت شكل الخلية الليفية في الرسم التخطيطي والمجهر الإلكتروني.", en: "Very useful for locking in the fibroblast appearance in both schematic and electron-microscopy style views." },
    note: { ar: "من سلايدات المنهج • صفحة 297", en: "From the syllabus slides • Page 297" }
  },
  {
    src: "assets/histology/pdfslides/page-313.png",
    group: "connective",
    groupLabel: { ar: "النسيج الضام", en: "Connective tissue" },
    title: { ar: "Macrophage schematic", en: "Macrophage schematic" },
    body: { ar: "رسم سريع لتثبيت مظهر البلاعم وعدم خلطها مع الخلايا الضامة الأخرى.", en: "A fast visual for fixing the macrophage appearance and not confusing it with other connective-tissue cells." },
    note: { ar: "من سلايدات المنهج • صفحة 313", en: "From the syllabus slides • Page 313" }
  },
  {
    src: "assets/histology/pdfslides/page-408.png",
    group: "blood",
    groupLabel: { ar: "الدم والمناعة", en: "Blood & immunity" },
    title: { ar: "تصنيف كريات الدم البيضاء", en: "White blood cell classification" },
    body: { ar: "لوحة مرتبة تجمع granulocytes و agranulocytes مع النسب الشائعة لكل نوع.", en: "An organized panel combining granulocytes and agranulocytes with the common proportions of each type." },
    note: { ar: "من سلايدات المنهج • صفحة 408", en: "From the syllabus slides • Page 408" }
  },
  {
    src: "assets/histology/pdfslides/page-421.png",
    group: "blood",
    groupLabel: { ar: "الدم والمناعة", en: "Blood & immunity" },
    title: { ar: "Eosinophil في LM و EM", en: "Eosinophil in LM and EM" },
    body: { ar: "شريحة مهمة لربط النواة الثنائية الفص والحبيبات الحمضية بمظهر الخلية.", en: "Important for linking the bilobed nucleus and acidophilic granules to the eosinophil appearance." },
    note: { ar: "من سلايدات المنهج • صفحة 421", en: "From the syllabus slides • Page 421" }
  },
  {
    src: "assets/histology/pdfslides/page-425.png",
    group: "blood",
    groupLabel: { ar: "الدم والمناعة", en: "Blood & immunity" },
    title: { ar: "Neutrophil في LM و EM", en: "Neutrophil in LM and EM" },
    body: { ar: "مفيد جدًا للتمييز بين lobulated nucleus والحبيبات المختلفة داخل neutrophil.", en: "Very useful for distinguishing the lobulated nucleus and the different granule types in a neutrophil." },
    note: { ar: "من سلايدات المنهج • صفحة 425", en: "From the syllabus slides • Page 425" }
  },
  {
    src: "assets/histology/pdfslides/page-447.png",
    group: "blood",
    groupLabel: { ar: "الدم والمناعة", en: "Blood & immunity" },
    title: { ar: "Basophil في LM و EM", en: "Basophil in LM and EM" },
    body: { ar: "صورة مقارنة تساعد على فهم النواة المقنّعة بالحبيبات القاعدية الكثيفة.", en: "A comparison view that helps explain how dense basophilic granules mask the nucleus." },
    note: { ar: "من سلايدات المنهج • صفحة 447", en: "From the syllabus slides • Page 447" }
  },
  {
    src: "assets/histology/pdfslides/page-469.png",
    group: "blood",
    groupLabel: { ar: "الدم والمناعة", en: "Blood & immunity" },
    title: { ar: "تمايز الخلايا اللمفاوية", en: "Lymphocyte differentiation map" },
    body: { ar: "مخطط يسهّل حفظ مسار B-cells و T-cells و NK-cells من الخلية الجذعية.", en: "A chart that makes the B-cell, T-cell, and NK-cell lineage easier to remember from the stem-cell stage." },
    note: { ar: "من سلايدات المنهج • صفحة 469", en: "From the syllabus slides • Page 469" }
  },
  {
    src: "assets/histology/pdfslides/page-494.png",
    group: "blood",
    groupLabel: { ar: "الدم والمناعة", en: "Blood & immunity" },
    title: { ar: "Monocyte في LM و EM", en: "Monocyte in LM and EM" },
    body: { ar: "مهم لتمييز النواة الكلوية والشكل غير المحبب للسيتوبلازم مع pseudopodia.", en: "Important for identifying the kidney-shaped nucleus, agranular cytoplasm, and pseudopodia." },
    note: { ar: "من سلايدات المنهج • صفحة 494", en: "From the syllabus slides • Page 494" }
  },
  {
    src: "assets/histology/pdfslides/page-521.png",
    group: "cartilage",
    groupLabel: { ar: "الغضروف", en: "Cartilage" },
    title: { ar: "بنية الغضروف الزجاجي", en: "Hyaline cartilage structure" },
    body: { ar: "لوحة قوية لفهم perichondrium و lacunae و isogenous groups داخل hyaline cartilage.", en: "A strong panel for understanding the perichondrium, lacunae, and isogenous groups in hyaline cartilage." },
    note: { ar: "من سلايدات المنهج • صفحة 521", en: "From the syllabus slides • Page 521" }
  },
  {
    src: "assets/histology/pdfslides/page-537.png",
    group: "cartilage",
    groupLabel: { ar: "الغضروف", en: "Cartilage" },
    title: { ar: "Chondrocyte و lacuna micrograph", en: "Chondrocyte and lacuna micrograph" },
    body: { ar: "صورة مجهرية مباشرة تثبت الفرق بين الخلية الغضروفية والجيب الذي يحيط بها.", en: "A direct micrograph that fixes the difference between the chondrocyte and the lacuna around it." },
    note: { ar: "من سلايدات المنهج • صفحة 537", en: "From the syllabus slides • Page 537" }
  },
  {
    src: "assets/histology/pdfslides/page-546.png",
    group: "cartilage",
    groupLabel: { ar: "الغضروف", en: "Cartilage" },
    title: { ar: "Elastic cartilage diagram", en: "Elastic cartilage diagram" },
    body: { ar: "مخطط واضح لغضروف صيوان الأذن مع الألياف المرنة والـ perichondrium.", en: "A clear diagram of ear elastic cartilage with elastic fibers and the perichondrium." },
    note: { ar: "من سلايدات المنهج • صفحة 546", en: "From the syllabus slides • Page 546" }
  },
  {
    src: "assets/histology/pdfslides/page-576.png",
    group: "bone",
    groupLabel: { ar: "العظم", en: "Bone" },
    title: { ar: "العظم الطويل تشريحيًا", en: "Long bone overview" },
    body: { ar: "صورة مناسبة لربط epiphysis و diaphysis و periosteum و marrow cavity بسرعة.", en: "Useful for quickly linking the epiphysis, diaphysis, periosteum, and marrow cavity." },
    note: { ar: "من سلايدات المنهج • صفحة 576", en: "From the syllabus slides • Page 576" }
  },
  {
    src: "assets/histology/pdfslides/page-580.png",
    group: "bone",
    groupLabel: { ar: "العظم", en: "Bone" },
    title: { ar: "الصفائح العظمية وOsteons", en: "Lamellae and osteons" },
    body: { ar: "مخطط غني يوضح العلاقة بين compact bone و spongy bone و central canals.", en: "A rich diagram showing the relationship between compact bone, spongy bone, and central canals." },
    note: { ar: "من سلايدات المنهج • صفحة 580", en: "From the syllabus slides • Page 580" }
  },
  {
    src: "assets/histology/pdfslides/page-581.png",
    group: "bone",
    groupLabel: { ar: "العظم", en: "Bone" },
    title: { ar: "Haversian system integrated view", en: "Integrated Haversian system view" },
    body: { ar: "لوحة ممتازة لشرح osteon و Volkmann canals و lacunae في رسم واحد.", en: "Excellent for explaining the osteon, Volkmann canals, and lacunae in one figure." },
    note: { ar: "من سلايدات المنهج • صفحة 581", en: "From the syllabus slides • Page 581" }
  },
  {
    src: "assets/histology/pdfslides/page-583.png",
    group: "bone",
    groupLabel: { ar: "العظم", en: "Bone" },
    title: { ar: "مقطع عظمي موسوم", en: "Labeled bone section" },
    body: { ar: "صورة تعليمية تساعد على تمييز periosteum و endosteum و circumferential lamellae.", en: "A labeled educational section that helps distinguish the periosteum, endosteum, and circumferential lamellae." },
    note: { ar: "من سلايدات المنهج • صفحة 583", en: "From the syllabus slides • Page 583" }
  },
  {
    src: "assets/histology/pdfslides/page-613.png",
    group: "nervous",
    groupLabel: { ar: "النسيج العصبي", en: "Nervous tissue" },
    title: { ar: "Neuron structure and myelination", en: "Neuron structure and myelination" },
    body: { ar: "مخطط أساسي يجمع dendrites و axon و myelin sheath و Schwann cell في شريحة واحدة.", en: "A foundational diagram combining dendrites, the axon, the myelin sheath, and the Schwann cell in one view." },
    note: { ar: "من سلايدات المنهج • صفحة 613", en: "From the syllabus slides • Page 613" }
  },
  {
    src: "assets/histology/pdfslides/page-620.png",
    group: "nervous",
    groupLabel: { ar: "النسيج العصبي", en: "Nervous tissue" },
    title: { ar: "أنواع العصبونات حسب الشكل", en: "Neuron types by shape" },
    body: { ar: "رسم يسهّل التمييز بين multipolar stellate و pyramidal و piriform.", en: "A shape-based comparison that makes multipolar stellate, pyramidal, and piriform neurons easier to separate." },
    note: { ar: "من سلايدات المنهج • صفحة 620", en: "From the syllabus slides • Page 620" }
  },
  {
    src: "assets/histology/pdfslides/page-630.png",
    group: "nervous",
    groupLabel: { ar: "النسيج العصبي", en: "Nervous tissue" },
    title: { ar: "مخطط تفصيلي للعصبون", en: "Detailed neuron map" },
    body: { ar: "لوحة مفيدة تربط Nissl bodies و Golgi و dendritic spines مع جسم الخلية والمحور.", en: "A detailed panel linking Nissl bodies, the Golgi complex, dendritic spines, the soma, and the axon." },
    note: { ar: "من سلايدات المنهج • صفحة 630", en: "From the syllabus slides • Page 630" }
  }
];

const realSlideItems = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Epithelial_Tissues_Simple_Squamous_Epithelium_%2841722161021%29.jpg",
    pageUrl: "https://commons.wikimedia.org/wiki/File:Epithelial_Tissues_Simple_Squamous_Epithelium_(41722161021).jpg",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
    title: {
      ar: "نسيج حرشفي بسيط",
      en: "Simple squamous epithelium"
    },
    tag: {
      ar: "شريحة حقيقية",
      en: "Real slide"
    },
    body: {
      ar: "صورة whole mount لظهارة حرشفية بسيطة، مناسبة لفهم فكرة الخلايا المفلطحة وحدودها.",
      en: "A whole-mount image of simple squamous epithelium, useful for understanding flat cells and their borders."
    },
    note: {
      ar: "Wikimedia Commons • CC0",
      en: "Wikimedia Commons • CC0"
    }
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Epithelial_Tissues_Simple_Cuboidal_Epithelium_%2841681552782%29.jpg",
    pageUrl: "https://commons.wikimedia.org/wiki/File:Epithelial_Tissues_Simple_Cuboidal_Epithelium_(41681552782).jpg",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
    title: {
      ar: "نسيج مكعّب بسيط",
      en: "Simple cuboidal epithelium"
    },
    tag: {
      ar: "شريحة حقيقية",
      en: "Real slide"
    },
    body: {
      ar: "مقطع من kidney tubule يوضح الظهارة المكعبة البسيطة، وهو قريب جدًا من أمثلة المنهج.",
      en: "A kidney tubule section showing simple cuboidal epithelium, very close to standard course examples."
    },
    note: {
      ar: "Wikimedia Commons • CC0",
      en: "Wikimedia Commons • CC0"
    }
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Epithelial_Tissues_Simple_Columnar_Epithelium_%2841723124791%29.jpg",
    pageUrl: "https://commons.wikimedia.org/wiki/File:Epithelial_Tissues_Simple_Columnar_Epithelium_(41723124791).jpg",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
    title: {
      ar: "نسيج عمودي بسيط مع Goblet cells",
      en: "Simple columnar epithelium with goblet cells"
    },
    tag: {
      ar: "شريحة حقيقية",
      en: "Real slide"
    },
    body: {
      ar: "مقطع من mammalian gut يوضح الخلايا العمودية البسيطة ووجود goblet cells بوضوح جيد.",
      en: "A mammalian gut section showing simple columnar cells with clearly visible goblet cells."
    },
    note: {
      ar: "Wikimedia Commons • CC0",
      en: "Wikimedia Commons • CC0"
    }
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Epithelial_Tissues_Pseudostratified_Columnar_Epithelium_%2841783110841%29.jpg",
    pageUrl: "https://commons.wikimedia.org/wiki/File:Epithelial_Tissues_Pseudostratified_Columnar_Epithelium_(41783110841).jpg",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
    title: {
      ar: "ظهارة كاذبة الطبقات هدبية",
      en: "Pseudostratified ciliated columnar epithelium"
    },
    tag: {
      ar: "شريحة حقيقية",
      en: "Real slide"
    },
    body: {
      ar: "مقطع من mammalian trachea مناسب لربط المنهج بموضوع cilia والظهارة الكاذبة الطبقات.",
      en: "A mammalian trachea section that links directly to cilia and pseudostratified epithelium in the course."
    },
    note: {
      ar: "Wikimedia Commons • CC0",
      en: "Wikimedia Commons • CC0"
    }
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Histology_thyroid_gland.jpg",
    pageUrl: "https://commons.wikimedia.org/wiki/File:Histology_thyroid_gland.jpg",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    title: {
      ar: "غدة درقية - مثال غدي حقيقي",
      en: "Thyroid gland as a real gland example"
    },
    tag: {
      ar: "شريحة حقيقية",
      en: "Real slide"
    },
    body: {
      ar: "صورة حقيقية للغدة الدرقية تساعد في ربط جزء الغدد والظهارة المكعبة البسيطة بالمنهج.",
      en: "A real thyroid histology image that helps connect the gland section and simple cuboidal lining to the syllabus."
    },
    note: {
      ar: "Wikimedia Commons • CC BY-SA 4.0",
      en: "Wikimedia Commons • CC BY-SA 4.0"
    }
  }
];

const curriculumData = window.histologyCurriculumData || {
  pageCount: 0,
  chapterCount: 0,
  chapters: [],
  slides: []
};

const flashcardSets = (window.histologyFlashcardSets || window.histologyFlashcardsRaw || []).map((set) => {
  if (set.cards) return set;

  const cards = String(set.rows || "")
    .trim()
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [questionAr, questionEn, answerAr, answerEn] = line.split("|").map((part) => part.trim());
      return {
        question: { ar: questionAr, en: questionEn },
        answer: { ar: answerAr, en: answerEn }
      };
    });

  return {
    chapterId: set.chapterId,
    categoryId: set.categoryId,
    chapter: set.chapter,
    category: set.category,
    cards
  };
});

function buildFlashcardDeck(lang) {
  return flashcardSets.flatMap((set) => set.cards.map((card, index) => ({
    id: `${set.chapterId}-${set.categoryId}-${index + 1}`,
    chapterId: set.chapterId,
    chapter: set.chapter[lang],
    category: set.category[lang],
    question: card.question[lang],
    answer: card.answer[lang]
  })));
}

function buildQuizBank(lang) {
  return buildFlashcardDeck(lang).map((card) => ({
    id: card.id,
    chapterId: card.chapterId,
    chapter: card.chapter,
    category: card.category,
    question: card.question,
    answer: card.answer
  }));
}

if (flashcardSets.length) {
  content.ar.flashcards = buildFlashcardDeck("ar");
  content.en.flashcards = buildFlashcardDeck("en");
  content.ar.quizBank = buildQuizBank("ar");
  content.en.quizBank = buildQuizBank("en");
}

let currentLang = "ar";
let activeModule = 0;
let simIndex = 0;
let flashIndex = 0;
let showFlashAnswer = false;
let activeFlashChapter = "all";
let activeQuizChapter = "all";
let currentQuizSet = [];
let activeChapterId = curriculumData.chapters[0]?.id || "";
let selectedSlidePage = curriculumData.slides[0]?.page || null;
let explorerQuery = "";
let activeSyllabusGalleryGroup = "all";
let activeCompareGroupId = content.ar.compareGroups[0]?.id || "";
let compareLeftId = content.ar.compareGroups[0]?.options[0]?.id || "";
let compareRightId = content.ar.compareGroups[0]?.options[1]?.id || "";
let classifierCurrentKey = content.ar.classifier.start;
let classifierPath = [];

const moduleList = document.getElementById("moduleList");
const moduleTag = document.getElementById("moduleTag");
const moduleTitle = document.getElementById("moduleTitle");
const moduleSummary = document.getElementById("moduleSummary");
const moduleKeywords = document.getElementById("moduleKeywords");
const moduleFocus = document.getElementById("moduleFocus");
const syllabusGalleryFilters = document.getElementById("syllabusGalleryFilters");
const syllabusGalleryGrid = document.getElementById("syllabusGalleryGrid");
const compareGroupTabs = document.getElementById("compareGroupTabs");
const compareLeft = document.getElementById("compareLeft");
const compareRight = document.getElementById("compareRight");
const compareIntro = document.getElementById("compareIntro");
const comparePanel = document.getElementById("comparePanel");
const compareFocusList = document.getElementById("compareFocusList");
const curriculumSearch = document.getElementById("curriculumSearch");
const chapterPills = document.getElementById("chapterPills");
const chapterList = document.getElementById("chapterList");
const slideGrid = document.getElementById("slideGrid");
const explorerStatus = document.getElementById("explorerStatus");
const explorerSelection = document.getElementById("explorerSelection");
const explorerPagesValue = document.getElementById("explorerPagesValue");
const explorerChaptersValue = document.getElementById("explorerChaptersValue");
const explorerResultsValue = document.getElementById("explorerResultsValue");
const slideDetailChapter = document.getElementById("slideDetailChapter");
const slideDetailPage = document.getElementById("slideDetailPage");
const slideDetailTitle = document.getElementById("slideDetailTitle");
const slideDetailPreview = document.getElementById("slideDetailPreview");
const slideDetailExcerpt = document.getElementById("slideDetailExcerpt");
const slideVisualWrap = document.getElementById("slideVisualWrap");
const slideDetailImage = document.getElementById("slideDetailImage");
const classifierStep = document.getElementById("classifierStep");
const classifierPrompt = document.getElementById("classifierPrompt");
const classifierOptions = document.getElementById("classifierOptions");
const classifierPathBox = document.getElementById("classifierPath");
const classifierResultTitle = document.getElementById("classifierResultTitle");
const classifierResultContent = document.getElementById("classifierResultContent");
const mindmapTopRow = document.getElementById("mindmapTopRow");
const mindmapBottomRow = document.getElementById("mindmapBottomRow");
const galleryGrid = document.getElementById("galleryGrid");
const realGalleryGrid = document.getElementById("realGalleryGrid");
const simTitle = document.getElementById("simTitle");
const simPrompt = document.getElementById("simPrompt");
const simCaseTitle = document.getElementById("simCaseTitle");
const simCaseSummary = document.getElementById("simCaseSummary");
const simCaseFacts = document.getElementById("simCaseFacts");
const simCaseHead = document.getElementById("simCaseHead");
const simStageBadge = document.getElementById("simStageBadge");
const simStepNotes = document.getElementById("simStepNotes");
const simSteps = document.getElementById("simSteps");
const simOptions = document.getElementById("simOptions");
const simFeedback = document.getElementById("simFeedback");
const simBar = document.getElementById("simBar");
const flashStatus = document.getElementById("flashStatus");
const flashSelection = document.getElementById("flashSelection");
const flashChapterPills = document.getElementById("flashChapterPills");
const flashMeta = document.getElementById("flashMeta");
const flashFace = document.getElementById("flashFace");
const quizStatus = document.getElementById("quizStatus");
const quizSelection = document.getElementById("quizSelection");
const quizChapterPills = document.getElementById("quizChapterPills");
const quizList = document.getElementById("quizList");
const quizResult = document.getElementById("quizResult");
const langToggle = document.getElementById("langToggle");
const lightbox = document.getElementById("lightbox");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxImage = document.getElementById("lightboxImage");

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function chapterLabel(chapter) {
  return chapter?.title?.[currentLang] || chapter?.title?.en || "";
}

function getChapterById(chapterId) {
  return curriculumData.chapters.find((chapter) => chapter.id === chapterId) || null;
}

function getBaseExplorerSlides() {
  if (!activeChapterId) return curriculumData.slides;
  return curriculumData.slides.filter((slide) => slide.chapterId === activeChapterId);
}

function getFilteredExplorerSlides() {
  const query = explorerQuery.trim().toLowerCase();
  const base = getBaseExplorerSlides();
  if (!query) return base;
  return base.filter((slide) => slide.searchText.toLowerCase().includes(query));
}

function ensureSelectedSlide(slides) {
  if (!slides.length) {
    selectedSlidePage = null;
    return null;
  }

  const active = slides.find((slide) => slide.page === selectedSlidePage);
  if (active) return active;

  selectedSlidePage = slides[0].page;
  return slides[0];
}

function normalizeSlideExcerpt(lines) {
  const cleaned = lines
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter(Boolean);

  const merged = [];
  let buffer = "";

  cleaned.forEach((line) => {
    const currentLine = line
      .replace(/\s*:\s*/g, ": ")
      .replace(/\s*,\s*/g, ", ")
      .replace(/\s+\./g, ".");

    if (!buffer) {
      buffer = currentLine;
      return;
    }

    const shouldJoin =
      buffer.length < 70 ||
      currentLine.length < 34 ||
      /^[a-z(]/.test(currentLine) ||
      /[:,-]$/.test(buffer) ||
      !/[.!?)]$/.test(buffer);

    if (shouldJoin) {
      buffer = `${buffer}${/[/-]$/.test(buffer) ? "" : " "}${currentLine}`.trim();
      return;
    }

    merged.push(buffer);
    buffer = currentLine;
  });

  if (buffer) merged.push(buffer);
  return merged;
}

function normalizeSearchText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[^a-z0-9\u0600-\u06FF]+/gi, " ")
    .trim();
}

function getSlideExcerptItems(slide) {
  const titleNorm = normalizeSearchText(slide.title);
  const previewNorm = normalizeSearchText(slide.preview);

  return normalizeSlideExcerpt(slide.excerpt).filter((line) => {
    const normalized = normalizeSearchText(line);

    if (!normalized || normalized === titleNorm || normalized === previewNorm) return false;
    if (previewNorm && (previewNorm.includes(normalized) || normalized.includes(previewNorm))) return false;

    return normalized.length > 4;
  });
}

function isMostlyVisualSlide(slide) {
  return slide.excerpt.some((line) => /mostly visual or empty/i.test(line))
    || /Continuation slide inside/i.test(slide.preview);
}

function updateSlideVisual(page, title) {
  slideVisualWrap.hidden = true;
  slideDetailImage.alt = title;
  slideDetailImage.dataset.page = String(page);
  slideDetailImage.onload = () => {
    if (slideDetailImage.dataset.page === String(page)) {
      slideVisualWrap.hidden = false;
    }
  };
  slideDetailImage.onerror = () => {
    if (slideDetailImage.dataset.page === String(page)) {
      slideVisualWrap.hidden = true;
      slideDetailImage.removeAttribute("src");
    }
  };
  slideDetailImage.src = `assets/histology/pdfslides/preview/page-${page}.png`;
}

function getSlidePreviewText(slide, pack) {
  const chapter = getChapterById(slide.chapterId);
  return /Continuation slide inside/i.test(slide.preview)
    ? pack.slideContinuationSummary(chapterLabel(chapter))
    : slide.preview;
}

function renderChapterFilters() {
  const pack = ui[currentLang];
  const allButton = document.createElement("button");
  allButton.type = "button";
  allButton.className = `chapter-pill${!activeChapterId ? " active" : ""}`;
  allButton.textContent = pack.explorerAllChapters;
  allButton.addEventListener("click", () => {
    activeChapterId = "";
    selectedSlidePage = curriculumData.slides[0]?.page || null;
    renderExplorer();
  });

  chapterPills.innerHTML = "";
  chapterPills.appendChild(allButton);

  curriculumData.chapters.forEach((chapter) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chapter-pill${chapter.id === activeChapterId ? " active" : ""}`;
    button.textContent = chapterLabel(chapter);
    button.addEventListener("click", () => {
      activeChapterId = chapter.id;
      selectedSlidePage = curriculumData.slides.find((slide) => slide.chapterId === chapter.id)?.page || null;
      renderExplorer();
    });
    chapterPills.appendChild(button);
  });

  chapterList.innerHTML = curriculumData.chapters.map((chapter) => `
    <button class="chapter-card${chapter.id === activeChapterId ? " active" : ""}" type="button" data-chapter-id="${chapter.id}">
      <small>${escapeHTML(pack.chapterRange(chapter.pageStart, chapter.pageEnd, chapter.slideCount))}</small>
      <h3>${escapeHTML(chapterLabel(chapter))}</h3>
      <p>${escapeHTML(chapter.description[currentLang])}</p>
      <div class="keyword-row">${chapter.keywords.map((keyword) => `<span class="chip">${escapeHTML(keyword)}</span>`).join("")}</div>
    </button>
  `).join("");

  chapterList.querySelectorAll("[data-chapter-id]").forEach((button) => {
    button.addEventListener("click", () => {
      activeChapterId = button.dataset.chapterId || "";
      selectedSlidePage = curriculumData.slides.find((slide) => slide.chapterId === activeChapterId)?.page || null;
      renderExplorer();
    });
  });
}

function renderSlideGrid(slides) {
  const pack = ui[currentLang];

  if (!slides.length) {
    slideGrid.innerHTML = `<div class="empty-state">${pack.explorerEmpty}</div>`;
    return;
  }

  slideGrid.innerHTML = slides.map((slide) => `
    <button class="slide-card${slide.page === selectedSlidePage ? " active" : ""}" type="button" data-slide-page="${slide.page}">
      <small>${escapeHTML(`${pack.slidePage(slide.page)} • ${slide.chapterTitle[currentLang] || slide.chapterTitle.en}`)}</small>
      <h3>${escapeHTML(slide.title)}</h3>
      <p>${escapeHTML(getSlidePreviewText(slide, pack))}</p>
    </button>
  `).join("");

  slideGrid.querySelectorAll("[data-slide-page]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedSlidePage = Number(button.dataset.slidePage);
      renderExplorer();
    });
  });
}

function renderSlideDetail(slides) {
  const pack = ui[currentLang];
  const current = ensureSelectedSlide(slides);

  if (!current) {
    slideDetailChapter.textContent = pack.explorerAllChapters;
    slideDetailPage.textContent = pack.slidePage(0);
    slideDetailTitle.textContent = pack.explorerEmpty;
    slideDetailPreview.textContent = "";
    slideDetailExcerpt.innerHTML = "";
    slideVisualWrap.hidden = true;
    slideDetailImage.removeAttribute("src");
    document.getElementById("prevSlide").disabled = true;
    document.getElementById("nextSlide").disabled = true;
    explorerSelection.textContent = pack.explorerAllChapters;
    return;
  }

  const chapter = getChapterById(current.chapterId);
  const currentIndex = slides.findIndex((slide) => slide.page === current.page);
  const prevButton = document.getElementById("prevSlide");
  const nextButton = document.getElementById("nextSlide");
  const summaryText = getSlidePreviewText(current, pack);

  slideDetailChapter.textContent = chapterLabel(chapter);
  slideDetailPage.textContent = pack.slidePage(current.page);
  slideDetailTitle.textContent = current.title;
  slideDetailPreview.textContent = summaryText;
  const excerptParagraphs = getSlideExcerptItems(current);
  const fallbackText = isMostlyVisualSlide(current) ? pack.slideVisualOnly : pack.slideTextFallback;
  slideDetailExcerpt.innerHTML = excerptParagraphs
    .concat(!excerptParagraphs.length ? [fallbackText] : [])
    .map((line) => `<li class="excerpt-item">${escapeHTML(line)}</li>`)
    .join("");
  explorerSelection.textContent = pack.explorerSelection(chapterLabel(chapter), current.page);
  updateSlideVisual(current.page, current.title);

  prevButton.disabled = currentIndex <= 0;
  nextButton.disabled = currentIndex < 0 || currentIndex >= slides.length - 1;
}

function renderExplorerStats(resultCount) {
  explorerPagesValue.textContent = String(curriculumData.pageCount);
  explorerChaptersValue.textContent = String(curriculumData.chapterCount);
  explorerResultsValue.textContent = String(resultCount);
  setText("statValue1", String(curriculumData.pageCount));
  setText("statValue2", String(curriculumData.chapterCount));
  setText("statValue3", String(curriculumData.pageCount));
  setText("statValue4", "8");
}

function renderExplorer() {
  const pack = ui[currentLang];
  const baseSlides = getBaseExplorerSlides();
  const filteredSlides = getFilteredExplorerSlides();
  const currentChapter = getChapterById(activeChapterId);

  renderExplorerStats(filteredSlides.length);
  renderChapterFilters();
  renderSlideGrid(filteredSlides);
  renderSlideDetail(filteredSlides);

  explorerStatus.textContent = pack.explorerStatus(
    filteredSlides.length,
    baseSlides.length,
    currentChapter ? chapterLabel(currentChapter) : "",
    explorerQuery.trim()
  );
}

function getCompareGroup() {
  const groups = content[currentLang].compareGroups;
  return groups.find((group) => group.id === activeCompareGroupId) || groups[0];
}

function ensureCompareSelection(group) {
  if (!group) return;
  const ids = group.options.map((option) => option.id);
  if (!ids.includes(compareLeftId)) compareLeftId = ids[0] || "";
  if (!ids.includes(compareRightId)) compareRightId = ids[1] || ids[0] || "";
  if (compareRightId === compareLeftId && ids.length > 1) {
    compareRightId = ids.find((id) => id !== compareLeftId) || compareRightId;
  }
}

function renderCompareCard(option, pack) {
  const rows = [
    { label: pack.compareRowSummary, value: option.summary },
    { label: pack.compareRowLook, value: option.lookFor.join(" • ") },
    { label: pack.compareRowSites, value: option.sites.join(" • ") },
    { label: pack.compareRowFunction, value: option.function },
    { label: pack.compareRowTrap, value: option.trap }
  ];

  return `
    <article class="compare-card">
      <div class="badge">${escapeHTML(option.title)}</div>
      <h3>${escapeHTML(option.title)}</h3>
      <div class="compare-facts">
        ${rows.map((row) => `
          <div class="compare-fact">
            <strong>${escapeHTML(row.label)}</strong>
            <p>${escapeHTML(row.value)}</p>
          </div>
        `).join("")}
      </div>
    </article>
  `;
}

function renderCompare() {
  const pack = ui[currentLang];
  const groups = content[currentLang].compareGroups;
  const group = getCompareGroup();

  if (!group) return;

  activeCompareGroupId = group.id;
  ensureCompareSelection(group);

  compareGroupTabs.innerHTML = groups.map((item) => `
    <button class="compare-tab${item.id === activeCompareGroupId ? " active" : ""}" type="button" data-compare-group="${item.id}">
      ${escapeHTML(item.title)}
      <small>${escapeHTML(item.intro)}</small>
    </button>
  `).join("");

  compareGroupTabs.querySelectorAll("[data-compare-group]").forEach((button) => {
    button.addEventListener("click", () => {
      activeCompareGroupId = button.dataset.compareGroup || groups[0]?.id || "";
      const nextGroup = getCompareGroup();
      compareLeftId = nextGroup?.options[0]?.id || "";
      compareRightId = nextGroup?.options[1]?.id || nextGroup?.options[0]?.id || "";
      renderCompare();
    });
  });

  compareLeft.innerHTML = group.options.map((option) => `
    <option value="${escapeHTML(option.id)}">${escapeHTML(option.title)}</option>
  `).join("");
  compareRight.innerHTML = compareLeft.innerHTML;
  compareLeft.value = compareLeftId;
  compareRight.value = compareRightId;

  compareIntro.textContent = group.intro;

  const leftOption = group.options.find((option) => option.id === compareLeftId) || group.options[0];
  const rightOption = group.options.find((option) => option.id === compareRightId) || group.options[1] || group.options[0];

  comparePanel.innerHTML = `${renderCompareCard(leftOption, pack)}${renderCompareCard(rightOption, pack)}`;
  compareFocusList.innerHTML = group.focus.map((point) => `<div class="tip">${escapeHTML(point)}</div>`).join("");
}

function getClassifierTree() {
  return content[currentLang].classifier;
}

function renderClassifierPath(tree) {
  if (!classifierPath.length) {
    classifierPathBox.innerHTML = `<span class="path-chip">${escapeHTML(ui[currentLang].classifierPending)}</span>`;
    return;
  }

  classifierPathBox.innerHTML = classifierPath.map((step) => {
    const node = tree.nodes[step.nodeId];
    const option = node?.options.find((item) => item.id === step.optionId);
    return `<span class="path-chip">${escapeHTML(option?.label || "")}</span>`;
  }).join("");
}

function renderClassifierResult(result) {
  const pack = ui[currentLang];

  if (!result) {
    classifierResultTitle.textContent = pack.classifierPending;
    classifierResultContent.innerHTML = `<div class="pending-box">${escapeHTML(pack.classifierPending)}</div>`;
    return;
  }

  classifierResultTitle.textContent = result.title;
  classifierResultContent.innerHTML = `
    <h4>${escapeHTML(pack.classifierWhyHead)}</h4>
    <div class="tips-list">${result.why.map((item) => `<div class="tip">${escapeHTML(item)}</div>`).join("")}</div>
    <h4>${escapeHTML(pack.classifierExamplesHead)}</h4>
    <div class="tips-list">${result.examples.map((item) => `<div class="tip">${escapeHTML(item)}</div>`).join("")}</div>
  `;
}

function renderClassifier() {
  const tree = getClassifierTree();
  const pack = ui[currentLang];
  const node = tree.nodes[classifierCurrentKey];
  const result = tree.results[classifierCurrentKey];

  renderClassifierPath(tree);

  if (node) {
    classifierStep.textContent = pack.classifierStep(classifierPath.length + 1);
    classifierPrompt.textContent = node.question;
    classifierOptions.innerHTML = node.options.map((option) => `
      <button class="option" type="button" data-classifier-option="${escapeHTML(option.id)}">${escapeHTML(option.label)}</button>
    `).join("");

    classifierOptions.querySelectorAll("[data-classifier-option]").forEach((button) => {
      button.addEventListener("click", () => {
        const optionId = button.dataset.classifierOption || "";
        classifierPath.push({ nodeId: classifierCurrentKey, optionId });
        const next = node.options.find((option) => option.id === optionId)?.next || tree.start;
        classifierCurrentKey = next;
        renderClassifier();
      });
    });

    renderClassifierResult(null);
    return;
  }

  if (result) {
    classifierStep.textContent = pack.classifierResultBadge;
    classifierPrompt.textContent = result.title;
    classifierOptions.innerHTML = "";
    renderClassifierResult(result);
  }
}

function applyUI() {
  const pack = ui[currentLang];
  document.title = pack.documentTitle;
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  setText("toolbarPill", pack.toolbarPill);
  setText("eyebrow", pack.eyebrow);
  setText("heroTitle", pack.heroTitle);
  setText("heroIntro", pack.heroIntro);
  setText("ctaModules", pack.ctaModules);
  setText("ctaGallery", pack.ctaGallery);
  setText("ctaLab", pack.ctaLab);
  setText("ctaQuiz", pack.ctaQuiz);
  setText("coverTitle", pack.coverTitle);
  setText("coverTip1", pack.coverTips[0]);
  setText("coverTip2", pack.coverTips[1]);
  setText("coverTip3", pack.coverTips[2]);
  setText("stat1", pack.stats[0]);
  setText("stat2", pack.stats[1]);
  setText("stat3", pack.stats[2]);
  setText("stat4", pack.stats[3]);
  setText("explorerHead", pack.explorerHead);
  setText("explorerDesc", pack.explorerDesc);
  setText("explorerPagesLabel", pack.explorerPagesLabel);
  setText("explorerChaptersLabel", pack.explorerChaptersLabel);
  setText("explorerResultsLabel", pack.explorerResultsLabel);
  setText("explorerSearchLabel", pack.explorerSearchLabel);
  setText("clearExplorerSearch", pack.clearExplorerSearch);
  setText("prevSlide", pack.prevSlide);
  setText("nextSlide", pack.nextSlide);
  setText("slideSummaryLabel", pack.slideSummaryLabel);
  setText("slideExcerptLabel", pack.slideExcerptLabel);
  setText("slideImageLabel", pack.slideImageLabel);
  curriculumSearch.placeholder = pack.explorerSearchPlaceholder;
  setText("compareHead", pack.compareHead);
  setText("compareDesc", pack.compareDesc);
  setText("compareLeftLabel", pack.compareLeftLabel);
  setText("compareRightLabel", pack.compareRightLabel);
  setText("compareFocusHead", pack.compareFocusHead);
  setText("classifierHead", pack.classifierHead);
  setText("classifierDesc", pack.classifierDesc);
  setText("resetClassifier", pack.classifierReset);
  setText("classifierPathHead", pack.classifierPathHead);
  setText("classifierResultBadge", pack.classifierResultBadge);
  setText("mindmapHead", pack.mindmapHead);
  setText("mindmapDesc", pack.mindmapDesc);
  setText("mindmapBadge", pack.mindmapBadge);
  setText("mindmapCoreTitle", pack.mindmapCoreTitle);
  setText("mindmapCoreDesc", pack.mindmapCoreDesc);
  setText("mindmapHint", pack.mindmapHint);
  setText("modulesHead", pack.modulesHead);
  setText("modulesDesc", pack.modulesDesc);
  setText("galleryHead", pack.galleryHead);
  setText("galleryDesc", pack.galleryDesc);
  setText("syllabusGalleryHead", pack.syllabusGalleryHead);
  setText("syllabusGalleryDesc", pack.syllabusGalleryDesc);
  setText("diagramGalleryHead", pack.diagramGalleryHead);
  setText("diagramGalleryDesc", pack.diagramGalleryDesc);
  setText("realGalleryHead", pack.realGalleryHead);
  setText("realGalleryDesc", pack.realGalleryDesc);
  setText("labHead", pack.labHead);
  setText("labDesc", pack.labDesc);
  setText("simBadge", pack.simBadge);
  setText("simCaseHead", pack.simCaseHead);
  setText("resetSim", pack.resetSim);
  setText("labTipsHead", pack.labTipsHead);
  setText("labTip1", pack.labTips[0]);
  setText("labTip2", pack.labTips[1]);
  setText("labTip3", pack.labTips[2]);
  setText("labTip4", pack.labTips[3]);
  setText("reviewHead", pack.reviewHead);
  setText("reviewDesc", pack.reviewDesc);
  setText("reviewTipsHead", pack.reviewTipsHead);
  setText("reviewTip1", pack.reviewTips[0]);
  setText("reviewTip2", pack.reviewTips[1]);
  setText("reviewTip3", pack.reviewTips[2]);
  setText("prevFlash", pack.prevFlash);
  setText("flipFlash", pack.flipFlash);
  setText("nextFlash", pack.nextFlash);
  setText("shuffleFlash", pack.shuffleFlash);
  setText("quizHead", pack.quizHead);
  setText("quizDesc", pack.quizDesc);
  setText("gradeQuiz", pack.gradeQuiz);
  setText("resetQuiz", pack.resetQuiz);
  setText("shuffleQuiz", pack.shuffleQuiz);
  setText("footerText", pack.footerText);
  setText("lightboxClose", pack.lightboxClose);
  langToggle.textContent = pack.langToggle;
}

function renderModules() {
  const modules = content[currentLang].modules;
  activeModule = Math.min(activeModule, modules.length - 1);
  moduleList.innerHTML = "";

  modules.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `module-btn${index === activeModule ? " active" : ""}`;
    button.innerHTML = `<small>${item.tag}</small><h3>${item.title}</h3><p>${item.summary}</p>`;
    button.addEventListener("click", () => {
      activeModule = index;
      renderMindMap();
      renderModules();
    });
    moduleList.appendChild(button);
  });

  const current = modules[activeModule];
  moduleTag.textContent = current.tag;
  moduleTitle.textContent = current.title;
  moduleSummary.textContent = current.summary;
  moduleKeywords.innerHTML = current.keywords.map((keyword) => `<span class="chip">${keyword}</span>`).join("");
  moduleFocus.innerHTML = current.focus.map((point) => `<div>${point}</div>`).join("");
}

function renderMindMap() {
  const branches = content[currentLang].mindMap;
  const renderBranch = (branch, index) => `
    <button class="mind-branch${index === activeModule ? " active" : ""}" type="button" data-mind-index="${index}">
      <small>${index + 1}</small>
      <h3>${branch.short}</h3>
      <ul>${branch.points.map((point) => `<li>${point}</li>`).join("")}</ul>
    </button>
  `;

  mindmapTopRow.innerHTML = branches.slice(0, 3).map((branch, index) => renderBranch(branch, index)).join("");
  mindmapBottomRow.innerHTML = branches.slice(3).map((branch, index) => renderBranch(branch, index + 3)).join("");

  document.querySelectorAll("[data-mind-index]").forEach((button) => {
    button.addEventListener("click", () => {
      activeModule = Number(button.dataset.mindIndex);
      renderMindMap();
      renderModules();
      document.getElementById("modules").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderSyllabusGallery() {
  const pack = ui[currentLang];
  const groups = [...new Map(syllabusVisualItems.map((item) => [item.group, item.groupLabel])).entries()];
  const items = activeSyllabusGalleryGroup === "all"
    ? syllabusVisualItems
    : syllabusVisualItems.filter((item) => item.group === activeSyllabusGalleryGroup);

  syllabusGalleryFilters.innerHTML = `
    <button class="chapter-pill${activeSyllabusGalleryGroup === "all" ? " active" : ""}" type="button" data-syllabus-group="all">
      ${escapeHTML(pack.syllabusGalleryAll)}
    </button>
    ${groups.map(([group, label]) => `
      <button class="chapter-pill${activeSyllabusGalleryGroup === group ? " active" : ""}" type="button" data-syllabus-group="${escapeHTML(group)}">
        ${escapeHTML(label[currentLang])}
      </button>
    `).join("")}
  `;

  syllabusGalleryFilters.querySelectorAll("[data-syllabus-group]").forEach((button) => {
    button.addEventListener("click", () => {
      activeSyllabusGalleryGroup = button.dataset.syllabusGroup || "all";
      renderSyllabusGallery();
    });
  });

  syllabusGalleryGrid.innerHTML = items.map((item, index) => `
    <article class="gallery-card">
      <button class="gallery-media" type="button" data-syllabus-gallery-index="${index}">
        <img src="${item.src}" alt="${escapeHTML(item.title[currentLang])}" loading="lazy">
      </button>
      <div class="gallery-copy">
        <span class="gallery-tag">${escapeHTML(item.groupLabel[currentLang])}</span>
        <h3>${escapeHTML(item.title[currentLang])}</h3>
        <p>${escapeHTML(item.body[currentLang])}</p>
        <div class="gallery-note">${escapeHTML(item.note[currentLang])} • ${escapeHTML(pack.galleryNote)}</div>
      </div>
    </article>
  `).join("");

  syllabusGalleryGrid.querySelectorAll("[data-syllabus-gallery-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const filteredItems = activeSyllabusGalleryGroup === "all"
        ? syllabusVisualItems
        : syllabusVisualItems.filter((item) => item.group === activeSyllabusGalleryGroup);
      const item = filteredItems[Number(button.dataset.syllabusGalleryIndex)];
      openLightbox(item.src, item.title[currentLang]);
    });
  });
}

function renderGallery() {
  const pack = ui[currentLang];
  galleryGrid.innerHTML = galleryItems.map((item, index) => `
    <article class="gallery-card">
      <button class="gallery-media" type="button" data-gallery-index="${index}">
        <img src="${item.src}" alt="${item.title[currentLang]}">
      </button>
      <div class="gallery-copy">
        <span class="gallery-tag">${item.tag[currentLang]}</span>
        <h3>${item.title[currentLang]}</h3>
        <p>${item.body[currentLang]}</p>
        <div class="gallery-note">${item.note[currentLang]} • ${pack.galleryNote}</div>
      </div>
    </article>
  `).join("");

  galleryGrid.querySelectorAll("[data-gallery-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = galleryItems[Number(button.dataset.galleryIndex)];
      openLightbox(item.src, item.title[currentLang]);
    });
  });
}

function renderRealGallery() {
  const pack = ui[currentLang];
  realGalleryGrid.innerHTML = realSlideItems.map((item, index) => `
    <article class="gallery-card">
      <button class="gallery-media" type="button" data-real-gallery-index="${index}">
        <img src="${item.src}" alt="${item.title[currentLang]}" loading="lazy" referrerpolicy="no-referrer">
      </button>
      <div class="gallery-copy">
        <span class="gallery-tag">${item.tag[currentLang]}</span>
        <h3>${item.title[currentLang]}</h3>
        <p>${item.body[currentLang]}</p>
        <div class="gallery-note">${item.note[currentLang]} • ${pack.galleryNote}</div>
        <div class="gallery-links">
          <a href="${item.pageUrl}" target="_blank" rel="noreferrer">${pack.sourceLink}</a>
          <a href="${item.licenseUrl}" target="_blank" rel="noreferrer">${pack.licenseLink}</a>
        </div>
      </div>
    </article>
  `).join("");

  realGalleryGrid.querySelectorAll("[data-real-gallery-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = realSlideItems[Number(button.dataset.realGalleryIndex)];
      openLightbox(item.src, item.title[currentLang]);
    });
  });
}

function drawSimSteps() {
  const simData = content[currentLang].simData;
  simSteps.innerHTML = simData.map((item, index) => {
    let className = "step";
    if (index < simIndex) className += " done";
    if (index === simIndex) className += " active";
    return `<div class="${className}">${index + 1}. ${escapeHTML(item.short)}</div>`;
  }).join("");
}

function renderSimulation() {
  const pack = ui[currentLang];
  const simCase = content[currentLang].simCase;
  const simData = content[currentLang].simData;
  simIndex = Math.min(simIndex, simData.length);
  drawSimSteps();
  simBar.style.width = `${(simIndex / simData.length) * 100}%`;
  simFeedback.innerHTML = "";

  simCaseTitle.textContent = simCase.title;
  simCaseSummary.textContent = simCase.summary;
  simCaseFacts.innerHTML = simCase.facts
    .map((fact) => `<div><strong>${escapeHTML(fact.label)}</strong><span>${escapeHTML(fact.value)}</span></div>`)
    .join("");

  if (simIndex >= simData.length) {
    simStageBadge.textContent = pack.simDoneTitle;
    simTitle.textContent = pack.simDoneTitle;
    simPrompt.textContent = pack.simDonePrompt;
    simStepNotes.innerHTML = "";
    simOptions.innerHTML = "";
    simBar.style.width = "100%";
    return;
  }

  const step = simData[simIndex];
  simStageBadge.textContent = step.short;
  simTitle.textContent = step.title;
  simPrompt.textContent = step.prompt;
  simStepNotes.innerHTML = step.notes
    .map((note) => `<div><strong>${escapeHTML(note.label)}</strong><span>${escapeHTML(note.value)}</span></div>`)
    .join("");
  simOptions.innerHTML = "";

  step.options.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";
    button.textContent = choice.label;
    button.addEventListener("click", () => handleSim(button, choice.label));
    simOptions.appendChild(button);
  });
}

function handleSim(button, choice) {
  const pack = ui[currentLang];
  const step = content[currentLang].simData[simIndex];
  const selectedOption = step.options.find((item) => item.label === choice);
  const buttons = Array.from(simOptions.querySelectorAll(".option"));
  buttons.forEach((item) => {
    item.disabled = true;
  });

  if (choice === step.answer) {
    button.classList.add("correct");
    simFeedback.innerHTML = `
      <strong>${escapeHTML(pack.simCorrectTag)}</strong>
      ${escapeHTML(step.explanation)}
    `;
    simIndex += 1;
    setTimeout(renderSimulation, 1050);
  } else {
    button.classList.add("wrong");
    const correct = buttons.find((item) => item.textContent === step.answer);
    if (correct) correct.classList.add("correct");
    simFeedback.innerHTML = `
      <strong>${escapeHTML(pack.simWrongTag)}</strong>
      ${escapeHTML(selectedOption?.rationale || pack.simWrongPrefix)}
      <br>
      <strong>${escapeHTML(pack.simCorrectTag)}</strong>
      ${escapeHTML(step.explanation)}
    `;
  }
}

function getCurrentFlashcards() {
  const cards = content[currentLang].flashcards || [];
  return activeFlashChapter === "all"
    ? cards
    : cards.filter((card) => card.chapterId === activeFlashChapter);
}

function renderFlashFilters(cards) {
  const pack = ui[currentLang];
  const allCards = cards || content[currentLang].flashcards || [];
  const chapterCounts = new Map();

  allCards.forEach((card) => {
    chapterCounts.set(card.chapterId, (chapterCounts.get(card.chapterId) || 0) + 1);
  });

  flashChapterPills.innerHTML = "";

  const allButton = document.createElement("button");
  allButton.type = "button";
  allButton.className = `chapter-pill${activeFlashChapter === "all" ? " active" : ""}`;
  allButton.textContent = pack.flashAllChapters;
  allButton.addEventListener("click", () => {
    activeFlashChapter = "all";
    flashIndex = 0;
    showFlashAnswer = false;
    renderFlash();
  });
  flashChapterPills.appendChild(allButton);

  curriculumData.chapters
    .filter((chapter) => chapterCounts.has(chapter.id))
    .forEach((chapter) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `chapter-pill${activeFlashChapter === chapter.id ? " active" : ""}`;
      button.textContent = chapterLabel(chapter);
      button.addEventListener("click", () => {
        activeFlashChapter = chapter.id;
        flashIndex = 0;
        showFlashAnswer = false;
        renderFlash();
      });
      flashChapterPills.appendChild(button);
    });
}

function renderFlash() {
  const pack = ui[currentLang];
  const allCards = content[currentLang].flashcards || [];
  const cards = getCurrentFlashcards();
  const selectedChapter = activeFlashChapter === "all" ? "" : chapterLabel(getChapterById(activeFlashChapter));

  renderFlashFilters(allCards);
  flashStatus.textContent = pack.flashStatus(cards.length, allCards.length, selectedChapter);
  flashSelection.textContent = pack.flashSelection(selectedChapter);

  if (!cards.length) {
    flashMeta.textContent = pack.flashAllChapters;
    flashFace.textContent = pack.flashEmpty;
    return;
  }

  flashIndex = Math.min(flashIndex, cards.length - 1);
  flashIndex = Math.max(flashIndex, 0);

  const card = cards[flashIndex];
  flashMeta.textContent = pack.flashMeta(card.chapter, card.category, flashIndex + 1, cards.length);
  flashFace.textContent = showFlashAnswer ? card.answer : card.question;
}

function shuffleArray(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getCurrentQuizBank() {
  const bank = content[currentLang].quizBank || [];
  return activeQuizChapter === "all"
    ? bank
    : bank.filter((item) => item.chapterId === activeQuizChapter);
}

function renderQuizFilters(bank) {
  const pack = ui[currentLang];
  const chapterCounts = new Map();

  bank.forEach((item) => {
    chapterCounts.set(item.chapterId, (chapterCounts.get(item.chapterId) || 0) + 1);
  });

  quizChapterPills.innerHTML = "";

  const allButton = document.createElement("button");
  allButton.type = "button";
  allButton.className = `chapter-pill${activeQuizChapter === "all" ? " active" : ""}`;
  allButton.textContent = pack.quizAllChapters;
  allButton.addEventListener("click", () => {
    activeQuizChapter = "all";
    renderQuiz(true);
  });
  quizChapterPills.appendChild(allButton);

  curriculumData.chapters
    .filter((chapter) => chapterCounts.has(chapter.id))
    .forEach((chapter) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `chapter-pill${activeQuizChapter === chapter.id ? " active" : ""}`;
      button.textContent = chapterLabel(chapter);
      button.addEventListener("click", () => {
        activeQuizChapter = chapter.id;
        renderQuiz(true);
      });
      quizChapterPills.appendChild(button);
    });
}

function buildQuizChoices(item, pool) {
  const unique = new Set([item.answer]);
  const prioritized = shuffleArray(pool.filter((candidate) => candidate.answer !== item.answer));
  const choices = [item.answer];

  prioritized.forEach((candidate) => {
    if (choices.length >= 4) return;
    if (!unique.has(candidate.answer)) {
      unique.add(candidate.answer);
      choices.push(candidate.answer);
    }
  });

  return shuffleArray(choices);
}

function createQuizSet(bank, count = 10) {
  const picked = shuffleArray(bank).slice(0, Math.min(count, bank.length));
  return picked.map((item) => {
    const sameChapterPool = bank.filter((candidate) => candidate.chapterId === item.chapterId);
    const sourcePool = sameChapterPool.length >= 4 ? sameChapterPool : bank;

    return {
      ...item,
      choices: buildQuizChoices(item, sourcePool)
    };
  });
}

function renderQuiz(forceNewSet = false) {
  const pack = ui[currentLang];
  const allBank = content[currentLang].quizBank || [];
  const bank = getCurrentQuizBank();
  const selectedChapter = activeQuizChapter === "all" ? "" : chapterLabel(getChapterById(activeQuizChapter));

  renderQuizFilters(allBank);
  quizStatus.textContent = pack.quizStatus(Math.min(10, bank.length), bank.length, allBank.length, selectedChapter);
  quizSelection.textContent = pack.quizSelection(selectedChapter);
  quizResult.style.display = "none";
  quizResult.textContent = "";
  quizList.innerHTML = "";

  if (!bank.length) {
    quizList.innerHTML = `<div class="empty-state">${pack.quizEmpty}</div>`;
    currentQuizSet = [];
    return;
  }

  if (forceNewSet || !currentQuizSet.length || currentQuizSet.some((item) => activeQuizChapter !== "all" && item.chapterId !== activeQuizChapter)) {
    currentQuizSet = createQuizSet(bank, 10);
  }

  currentQuizSet.forEach((item, index) => {
    const box = document.createElement("div");
    box.className = "quiz-item card";
    box.innerHTML = `
      <div class="slide-meta">
        <span class="slide-page">${escapeHTML(`${index + 1}`)}</span>
        <span class="chip">${escapeHTML(item.chapter)}</span>
        <span class="chip">${escapeHTML(item.category)}</span>
      </div>
      <h3>${escapeHTML(item.question)}</h3>
    `;
    item.choices.forEach((choice) => {
      const label = document.createElement("label");
      label.className = "option";
      label.innerHTML = `<input type="radio" name="q${index}" value="${escapeHTML(choice)}" style="margin-inline-start:10px;">${escapeHTML(choice)}`;
      box.appendChild(label);
    });
    quizList.appendChild(box);
  });
}

function gradeQuiz() {
  const pack = ui[currentLang];
  const quizData = currentQuizSet;
  if (!quizData.length) return;
  let score = 0;

  quizData.forEach((item, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === item.answer) score += 1;
  });

  const percent = Math.round((score / quizData.length) * 100);
  let note = pack.quizLow;
  if (percent >= 85) note = pack.quizExcellent;
  else if (percent >= 60) note = pack.quizMid;

  quizResult.style.display = "block";
  quizResult.textContent = pack.quizScore(score, quizData.length, percent, note);
}

function openLightbox(src, title) {
  lightboxTitle.textContent = title;
  lightboxImage.src = src;
  lightboxImage.alt = title;
  lightbox.classList.add("open");
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightboxImage.src = "";
  lightboxImage.alt = "";
}

function applyLanguage(nextLang) {
  currentLang = nextLang;
  applyUI();
  renderExplorer();
  renderMindMap();
  renderModules();
  renderCompare();
  renderClassifier();
  renderSyllabusGallery();
  renderGallery();
  renderRealGallery();
  renderSimulation();
  renderFlash();
  renderQuiz(true);
}

document.getElementById("resetSim").addEventListener("click", () => {
  simIndex = 0;
  renderSimulation();
});

document.getElementById("flipFlash").addEventListener("click", () => {
  showFlashAnswer = !showFlashAnswer;
  renderFlash();
});

document.getElementById("prevFlash").addEventListener("click", () => {
  const cards = getCurrentFlashcards();
  if (!cards.length) return;
  flashIndex = (flashIndex - 1 + cards.length) % cards.length;
  showFlashAnswer = false;
  renderFlash();
});

document.getElementById("nextFlash").addEventListener("click", () => {
  const cards = getCurrentFlashcards();
  if (!cards.length) return;
  flashIndex = (flashIndex + 1) % cards.length;
  showFlashAnswer = false;
  renderFlash();
});

document.getElementById("shuffleFlash").addEventListener("click", () => {
  const cards = getCurrentFlashcards();
  if (!cards.length) return;
  if (cards.length === 1) {
    flashIndex = 0;
  } else {
    let nextIndex = flashIndex;
    while (nextIndex === flashIndex) {
      nextIndex = Math.floor(Math.random() * cards.length);
    }
    flashIndex = nextIndex;
  }
  showFlashAnswer = false;
  renderFlash();
});

document.getElementById("gradeQuiz").addEventListener("click", gradeQuiz);
document.getElementById("resetQuiz").addEventListener("click", () => renderQuiz(true));
document.getElementById("shuffleQuiz").addEventListener("click", () => renderQuiz(true));
document.getElementById("clearExplorerSearch").addEventListener("click", () => {
  explorerQuery = "";
  curriculumSearch.value = "";
  renderExplorer();
});

compareLeft.addEventListener("change", (event) => {
  compareLeftId = event.target.value;
  ensureCompareSelection(getCompareGroup());
  renderCompare();
});

compareRight.addEventListener("change", (event) => {
  compareRightId = event.target.value;
  ensureCompareSelection(getCompareGroup());
  renderCompare();
});

document.getElementById("resetClassifier").addEventListener("click", () => {
  classifierCurrentKey = content[currentLang].classifier.start;
  classifierPath = [];
  renderClassifier();
});

curriculumSearch.addEventListener("input", (event) => {
  explorerQuery = event.target.value;
  renderExplorer();
});

document.getElementById("prevSlide").addEventListener("click", () => {
  const slides = getFilteredExplorerSlides();
  const currentIndex = slides.findIndex((slide) => slide.page === selectedSlidePage);
  if (currentIndex > 0) {
    selectedSlidePage = slides[currentIndex - 1].page;
    renderExplorer();
  }
});

document.getElementById("nextSlide").addEventListener("click", () => {
  const slides = getFilteredExplorerSlides();
  const currentIndex = slides.findIndex((slide) => slide.page === selectedSlidePage);
  if (currentIndex >= 0 && currentIndex < slides.length - 1) {
    selectedSlidePage = slides[currentIndex + 1].page;
    renderExplorer();
  }
});

langToggle.addEventListener("click", () => {
  applyLanguage(currentLang === "ar" ? "en" : "ar");
});

document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("open")) {
    closeLightbox();
  }
});

applyLanguage("ar");
