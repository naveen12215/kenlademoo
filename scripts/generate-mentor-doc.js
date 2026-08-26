const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  Header,
  Footer,
  AlignmentType,
  HeadingLevel,
  BorderStyle,
  WidthType,
  ShadingType,
  VerticalAlign,
  PageNumber,
  PageBreak,
  TableOfContents,
  LevelFormat,
  ExternalHyperlink,
  TabStopType,
} = require("docx");
const fs = require("fs");
const path = require("path");

const CONTENT = 9360;
const NAVY = "393644";
const GOLD = "F6BA29";
const ORANGE = "EE7A48";
const WARM = "F5F3EF";
const CREAM = "FFF4EA";
const WHITE = "FFFFFF";
const MUTED = "6B6560";
const LINE = "EBE8E1";

const thin = { style: BorderStyle.SINGLE, size: 4, color: LINE };
const borders = { top: thin, bottom: thin, left: thin, right: thin };
const cellPad = { top: 80, bottom: 80, left: 120, right: 120 };

function run(text, extra = {}) {
  return new TextRun({
    text,
    font: extra.font || "Arial",
    size: extra.size || 22,
    bold: extra.bold,
    italics: extra.italics,
    color: extra.color,
    underline: extra.underline,
  });
}

function para(text, extra = {}) {
  return new Paragraph({
    spacing: { after: extra.after ?? 160, before: extra.before ?? 0, line: extra.line },
    alignment: extra.align,
    border: extra.border,
    children: extra.children || [run(text, extra)],
  });
}

function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    pageBreakBefore: true,
    spacing: { before: 0, after: 240 },
    children: [new TextRun({ text, font: "Arial", size: 32, bold: true, color: NAVY })],
  });
}

function h1First(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 0, after: 240 },
    children: [new TextRun({ text, font: "Arial", size: 32, bold: true, color: NAVY })],
  });
}

function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 280, after: 140 },
    children: [new TextRun({ text, font: "Arial", size: 26, bold: true, color: ORANGE })],
  });
}

function h3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 200, after: 100 },
    children: [new TextRun({ text, font: "Arial", size: 24, bold: true, color: NAVY })],
  });
}

function body(text) {
  return para(text, { size: 22, color: "2D2B29", after: 160, line: 320 });
}

function note(text) {
  return para(text, { size: 20, italics: true, color: MUTED, after: 200, line: 300 });
}

function bullet(text, ref = "bullets") {
  return new Paragraph({
    numbering: { reference: ref, level: 0 },
    spacing: { after: 80, line: 300 },
    children: [run(text, { size: 22, color: "2D2B29" })],
  });
}

function numbered(text, ref = "numbers") {
  return new Paragraph({
    numbering: { reference: ref, level: 0 },
    spacing: { after: 80, line: 300 },
    children: [run(text, { size: 22, color: "2D2B29" })],
  });
}

function cell(text, width, fill, extra = {}) {
  const children = Array.isArray(text)
    ? text
    : [
        new Paragraph({
          children: [
            run(String(text), {
              size: extra.size || 18,
              bold: extra.bold,
              color: extra.color || "2D2B29",
              italics: extra.italics,
            }),
          ],
        }),
      ];
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: { fill, type: ShadingType.CLEAR },
    margins: cellPad,
    verticalAlign: VerticalAlign.TOP,
    children,
  });
}

function headerCell(text, width) {
  return cell(text, width, NAVY, { bold: true, color: WHITE, size: 18 });
}

function makeTable(headers, rows, widths) {
  const head = new TableRow({
    tableHeader: true,
    children: headers.map((h, i) => headerCell(h, widths[i])),
  });
  const bodyRows = rows.map((row, r) => {
    const fills = row._fills || headers.map((_, i) => (i === 0 ? WARM : i === 1 ? WARM : CREAM));
    const cells = headers.map((_, i) => row.cells[i] ?? "");
    return new TableRow({
      children: cells.map((c, i) =>
        cell(c, widths[i], fills[i] || (r % 2 === 0 ? WHITE : WARM), {
          bold: i === 0,
          size: 18,
        })
      ),
    });
  });
  return new Table({
    width: { size: CONTENT, type: WidthType.DXA },
    columnWidths: widths,
    rows: [head, ...bodyRows],
  });
}

function compare3(rows) {
  const w = [2200, 3580, 3580];
  return makeTable(
    ["Area", "Original (live site)", "Rebuild (this work)"],
    rows.map((r) => ({
      cells: r,
      _fills: [WARM, "F7F5F2", CREAM],
    })),
    w
  );
}

function compare4(rows) {
  const w = [1680, 2460, 2610, 2610];
  return makeTable(
    ["Area", "Original", "Rebuild", "Why it matters"],
    rows.map((r) => ({
      cells: r,
      _fills: [WARM, "F7F5F2", CREAM, WHITE],
    })),
    w
  );
}

function spacer() {
  return para("", { after: 120 });
}

function goldRule() {
  return new Paragraph({
    spacing: { after: 240, before: 80 },
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 12, color: GOLD, space: 1 },
    },
    children: [],
  });
}

function caption(text) {
  return para(text, { size: 18, italics: true, color: MUTED, after: 280, before: 80 });
}

const children = [];

// ── Cover ──────────────────────────────────────────────
children.push(
  new Paragraph({
    spacing: { before: 0, after: 80 },
    children: [run("KENLA SYSTEMS", { size: 20, bold: true, color: ORANGE })],
  }),
  new Paragraph({
    spacing: { after: 80 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 18, color: GOLD, space: 8 } },
    children: [
      run("Website rebuild — mentor reference", {
        size: 48,
        bold: true,
        color: NAVY,
      }),
    ],
  }),
  para("Every difference and improvement from the original live site to the current rebuild", {
    size: 26,
    color: MUTED,
    after: 320,
  }),
  body(
    "This document is a written map of the rebuild. Mentors can see the two sites side by side; this file exists so they do not have to reverse-engineer what changed. Visual similarity of brand colour is intentional. Structure, interaction, and information architecture are not."
  ),
  spacer(),
  compare3([
    ["Document date", "26 August 2026", "Current rebuild as of this date"],
    ["Original (production)", "https://www.kenlasystems.com", "Brochure marketing site as shipped"],
    ["Original source (read-only)", "Kenla-Website repository", "Do not treat as the rebuild"],
    ["Rebuild (this work)", "kenlaking — typically http://localhost:3000", "The site under review"],
    ["Company", "Kenla Systems — Chennai HQ, Optiwise California presence", "Unchanged"],
    ["Tagline", "Engineering Tomorrow's Software, Today", "Unchanged"],
  ]),
  caption("Comparison sources used throughout this document."),
  h3("How to use this with a visual review"),
  body(
    "Open the original and the rebuild in two browser tabs. Walk the same URL on both. Use the page-by-page tables here as a checklist. Things that do not show in a still screenshot — keyboard search, the five-second file plate, live contact ticket, sand grains, logo cursor — are called out under Signature features and How to demonstrate."
  ),
  bullet("Original: centered brochure, icon cards, pill tech tags, dark footer, dropdown nav."),
  bullet("Rebuild: studio chrome (header + numbered spine), cards and tables, live tools, light colophon."),
  bullet("Same soul: Kenla logo, gold → orange → coral, light-only theme, same copy, same routes, same four practices and four case studies.")
);

// ── TOC ────────────────────────────────────────────────
children.push(
  h1("Contents"),
  new Paragraph({
    spacing: { after: 200 },
    children: [
      run(
        "In Microsoft Word: right-click the table of contents below and choose Update Field → Update entire table.",
        { size: 18, italics: true, color: MUTED }
      ),
    ],
  }),
  new TableOfContents("Table of Contents", {
    hyperlink: true,
    headingStyleRange: "1-3",
  })
);

// ── 1 Executive ────────────────────────────────────────
children.push(
  h1("1.  What this rebuild is — and is not"),
  h2("One-sentence summary"),
  body(
    "The original is a competent, conventional B2B brochure: centered heroes, 2×2 icon cards, pill-shaped tech tags, a zigzag timeline, and a dark footer. The rebuild is the same company, the same words, and the same routes, rebuilt as a studio instrument — a numbered index, a command palette, a stack builder, rotating case files, and a contact ticket — so a reviewer can tell in thirty seconds that this is not a font-size and CSS restyle."
  ),
  h2("The design problem this solves"),
  body(
    "A side-by-side glance of two Kenla sites will always share gold, orange, coral, Syne, Inter, and the logo. That is required. The original and an early restyle still read as the same poster: big centered headline, four rounded cards, twelve pills, three Why Kenla squares, one featured card, full-bleed gradient CTA. The rebuild changes the skeleton so those ingredients are used differently."
  ),
  compare4([
    [
      "Layout grammar",
      "Centered poster on every page. Same blurred orbs. Same card grid.",
      "Left-aligned studio. Header + 01–06 spine. Cards/tables used as dossiers, not a default grid.",
      "Stops the “we only changed CSS” reading.",
    ],
    [
      "Navigation",
      "Top bar with Services dropdown. No persistent page index.",
      "Logo + Search + Contact. Persistent numbered spine. Cmd+K palette.",
      "You always know where you are and can jump without hunting.",
    ],
    [
      "Home",
      "Hero → stats bar → 2×2 services → pills → 3 cards → one featured project.",
      "SOFTWARE end-to-end hero → practice rail → stack builder → rotating files → icon tiles → Why Kenla → one gradient CTA.",
      "Home now works as a tool, not a flyer.",
    ],
    [
      "Inner pages",
      "Repeat the home hero (orbs + centered title) then a card grid. Gradient CTA on several pages.",
      "Shared PageIntro. Quiet CTA. Practice/file/studio each have their own structure.",
      "Inner pages no longer look like copies of home.",
    ],
    [
      "New capability",
      "None beyond form + hover dropdown.",
      "Search, stack builder, 5s file plate, live ticket, backtick terminal, logo cursor, sand grains.",
      "These are the items a still screenshot will miss.",
    ],
  ]),
  caption("High-level original vs rebuild. Detail follows by page."),
  h2("What a visual-only review can miss"),
  bullet("Cmd+K (or Ctrl+K) opens a site-wide search of pages, practices, files, and 54 technologies."),
  bullet("The home featured file advances by itself every 5 seconds, with a progress tick. All four case studies rotate — original showed only the first."),
  bullet("Contact “Your note” fills in live as the visitor types (name, practice, message)."),
  bullet("The Kenla logo follows the pointer (fine pointer devices only; off on touch and reduced motion)."),
  bullet("Backtick (`) opens a small Kenla console (help, whoami, stack, contact, projects)."),
  bullet("Studio timeline: each milestone plays a slow sand-grain fall once when it enters view."),
  bullet("Stack page: search, All + 8 category filters, Table vs Grouped, “used in” on hover."),
  bullet("Practice detail: sticky on-page index (Deliverables / Stack / Use cases / File).")
);

// ── 2 Locked ───────────────────────────────────────────
children.push(
  h1("2.  What was deliberately not changed"),
  body(
    "The rebuild is a new body for the same company. Mentors should not look for a new logo, a new palette, new services, or invented case studies. Those were locked on purpose."
  ),
  h2("Brand and identity — kept"),
  compare3([
    ["Logo", "public/logo.svg Kenla mark", "Same file. Also used as the custom cursor and as the Studio watermark."],
    ["Favicon", "src/app/icon.svg", "Same Kenla mark."],
    ["Gradient", "Gold #f6ba29 → orange #ee7a48 → coral #e95559", "Same stops. Used as accent (header wash, spine pill, one home CTA), not wallpaper."],
    ["Theme", "Light, warm, bright. No dark mode.", "Still light-only. Footer is now a light colophon; original footer was a dark slab."],
    ["Text dark", "#393644 for type and logo", "Same. Never used as a full section background."],
    ["Neutrals", "Warm paper, not Tailwind gray", "Same warm-50…warm-900 scale."],
    ["Heading font", "Syne", "Syne, weights 400–800."],
    ["Body font", "Inter", "Inter. IBM Plex Mono added only for indexes, kbd, ticket labels."],
  ]),
  h2("Content and product — kept"),
  compare3([
    ["Company facts", "Founded 2009, Chennai; Optiwise California; hello@kenlasystems.com", "Unchanged."],
    ["Tagline", "Engineering Tomorrow's Software, Today", "Unchanged. Used as dek, not as the only headline."],
    ["Stats", "15+ years · 200+ projects · 50+ clients · 4 continents", "Same numbers. Animated counters still expose the real figure to screen readers."],
    ["Practices", "Custom software, AI/ML, Cloud & DevOps, Blockchain & Web3", "Same four. Same long copy, deliverables, use cases, field notes."],
    ["Case studies", "FinTech trading, AI document processing, DeFi yield, healthcare portal", "Same four files. Same challenge / solution / results / quote."],
    ["Testimonials", "Role only (e.g. CTO, Financial Services Client). No fake names.", "Unchanged."],
    ["Technologies", "~54 tools across 8 categories", "Same inventory. Presentation and filtering rebuilt."],
    ["Studio timeline", "2009, 2012, 2015, 2018, 2020, 2022, 2024", "Same years and copy. Sequential cards + sand, not zigzag."],
    ["Values", "Innovation, Quality, Reliability, Partnership", "Same four."],
    ["Contact fields", "Name, email, company, service, message. Zod + server action.", "Same fields. Ticket UI and copy around them are new."],
  ]),
  h2("Routes — kept (URLs did not change)"),
  body(
    "Nav labels in the rebuild are studio language (Practices, Stack, Files, Studio, Contact). The URLs remain the original paths so SEO, bookmarks, and a two-tab compare stay 1:1."
  ),
  compare3([
    ["/", "Home", "Home (spine 01)"],
    ["/services", "Services", "Practices (spine 02)"],
    ["/services/custom-software", "Custom Software Development", "Same practice, new dossier layout"],
    ["/services/ai-ml", "AI/ML & Generative AI", "Same"],
    ["/services/cloud-devops", "Cloud & DevOps", "Same"],
    ["/services/blockchain-web3", "Blockchain & Web3", "Same"],
    ["/technologies", "Technologies", "Stack (spine 03)"],
    ["/projects", "Projects", "Files (spine 04)"],
    ["/projects/[slug]", "Four case-study URLs", "Same slugs, new file layout"],
    ["/about", "About", "Studio (spine 05)"],
    ["/contact", "Contact", "Contact (spine 06) — briefly labelled Brief, then restored to Contact"],
    ["404 / sitemap / robots", "Present", "Present, restyled 404"],
  ]),
  h2("Intentional small content edits (not new facts)"),
  bullet("Phone placeholder +91-44-XXXX-XXXX was dropped. Email only."),
  bullet("Nav label Brief was tried and reverted to Contact so the word matches the page."),
  bullet("Home CTA “Explore Services” → “Explore practices”; “Get in Touch” remains a contact path."),
  bullet("Practices band: “Not sure where to start?” body rewritten to be friendly and specific — a sketch is enough — without changing the offer."),
  bullet("Why Kenla and some deks were tightened. Facts (2009, 200 projects, four practices) are the same."),
  bullet("No stock photography. No AI-generated people. No invented clients.")
);

// ── 3 Chrome ───────────────────────────────────────────
children.push(
  h1("3.  Site-wide chrome (header, spine, footer, cursor)"),
  body(
    "This is the first thing a mentor sees, and it is the largest structural change. Original chrome is a transparent-then-blur top bar. Rebuild chrome is a warm instrument bar plus a numbered index that stays with you on every page."
  ),
  h2("Header"),
  compare4([
    [
      "Position",
      "Fixed top. Transparent at rest; white blur + shadow after 20px scroll.",
      "Always-on instrument bar (gold→coral wash). Height 56px. Does not morph on scroll.",
      "Reads as a tool, not a disappearing marketing bar.",
    ],
    [
      "Logo",
      "Logo only, larger (h-10 / h-12).",
      "Logo + “Kenla Systems” wordmark. Logo also used as the cursor.",
      "Name is visible without relying on the mark alone.",
    ],
    [
      "Primary nav",
      "Services (hover dropdown of 4 children), Technologies, Projects, About, Contact.",
      "No in-header page list. Pages live on the spine and in Search.",
      "Header is quieter; wayfinding moved to the index.",
    ],
    [
      "Search",
      "None.",
      "Search control with ⌘K / Ctrl+K hint. Opens the command palette.",
      "Entire site is keyboard-reachable.",
    ],
    [
      "CTA",
      "“Get in Touch” small button.",
      "“Contact” on the gold→coral gradient, with an arrow.",
      "Same destination, clearer as the one action in the bar.",
    ],
    [
      "Mobile",
      "Hamburger → slide menu of the same links.",
      "Search icon + hamburger. Horizontal chip index under the bar (Home / Practices / Stack / Files / Studio / Contact).",
      "Mobile still has a full index, not only a burger.",
    ],
  ]),
  h2("Sidebar / page index (new)"),
  body(
    "The original has no sidebar. The rebuild adds a left index on desktop and a chip scroller on small screens. Active item is a sliding gold→coral pill (shared layoutId spring). This is how the site tells you “you are in 04 Files” without a KS-code plate."
  ),
  compare3([
    ["01", "—", "Home  →  /"],
    ["02", "—", "Practices  →  /services"],
    ["03", "—", "Stack  →  /technologies"],
    ["04", "—", "Files  →  /projects"],
    ["05", "—", "Studio  →  /about"],
    ["06", "—", "Contact  →  /contact"],
  ]),
  note(
    "An earlier rebuild pass labelled the spine KS-02 PRACTICES and drew crop-mark / scale-line chrome. That was deliberately stripped. Current spine shows 01–06 and the human names only."
  ),
  h2("Footer"),
  compare4([
    [
      "Colour",
      "Dark slab (#393644 inverted). White inverted logo. Gradient divider on top.",
      "Light paper. Hairline top. No inverted logo.",
      "Keeps the whole site light. Dark footer was the one “theme break.”",
    ],
    [
      "Structure",
      "Four columns: company blurb, Services list, Company links, Get in Touch (email + pin).",
      "Two quiet rows: © year · Chennai · California · email, then location; then Practices / Stack / Files / Studio / Contact.",
      "Colophon instead of a second sitemap.",
    ],
    [
      "Type",
      "Small warm-400 links.",
      "Semibold 14px so © and nav are actually readable.",
      "Requested explicitly so the legal line is not a whisper.",
    ],
  ]),
  h2("Cursor"),
  compare3([
    [
      "Pointer",
      "Default system cursor.",
      "28px Kenla logo follows the pointer with lag (lerp). Hidden on touch and when the user prefers reduced motion.",
    ],
    [
      "Why",
      "No brand in the pointer.",
      "The mark is in the hand, not only in the corner. Replaced an earlier crosshair / ink-dot experiment.",
    ],
  ]),
  h2("Page frame"),
  compare3([
    [
      "Main offset",
      "Header height only. Content is full-bleed under a floating bar.",
      "Main is padded: pt for the bar, lg:pl-24 for the spine, so content never sits under chrome.",
    ],
    [
      "Viewport frame / crop marks",
      "None on original. A later rebuild added a drawn frame and crop marks globally.",
      "Removed from chrome. Crop marks appear only on the 404. The site should not look like a pencil drawing on a scale.",
    ],
    [
      "Atmosphere orbs",
      "Large gold / orange / coral blurs behind almost every hero.",
      "Removed as a repeating recipe. Warm washes live in header/spine. Home hero uses a large ghost “2009”, not three orbs.",
    ],
  ])
);

// ── 4 Home ─────────────────────────────────────────────
children.push(
  h1("4.  Home  —  /"),
  body(
    "Original home is a vertical brochure. Rebuild home is a sequence of working sections. Section order itself changed."
  ),
  h2("Section order"),
  compare3([
    ["1", "Centered hero (We Build Software That Moves Business Forward)", "SOFTWARE / end to end. hero with spec stats card"],
    ["2", "Stats bar (4 counters in a strip)", "Stats sit inside the hero as a spec index, not a second band"],
    ["3", "What We Do — 2×2 icon cards", "Practice rail — select a practice, see copy + snapshot (02)"],
    ["4", "Our Technology Stack — 12 rounded pills", "Stack builder — industry or product type (03)"],
    ["5", "Why Kenla — 3 centered icon cards", "Featured file plate — auto-advances all 4 files every 5s (04)"],
    ["6", "Featured Project — first case study only, static", "Fifty-four tools — 12 icon tiles, not pills (05)"],
    ["7", "Ready to Build Something Great? full-bleed gradient", "Why Kenla — 3 numbered cards, no Lucide-in-a-square (06)"],
    ["8", "—", "One full-bleed gradient CTA (home only)"],
  ]),
  h2("Hero"),
  compare4([
    [
      "Alignment",
      "Centered, max-width 4xl. Marketing poster.",
      "Left on a 12-column grid. Headline + dek left; spec card right on large screens.",
      "Breaks the “every SaaS hero is a centered stack” pattern.",
    ],
    [
      "Eyebrow",
      "SOFTWARE ENGINEERING SINCE 2009 (tracked orange).",
      "Same idea, quieter: “Software engineering since 2009”.",
      "Keeps the 2009 claim without shouting.",
    ],
    [
      "Headline",
      "We Build Software / That Moves Business Forward (gradient on the last three words).",
      "SOFTWARE / end to end. (gradient on “end.”). Line-reveal so the second line is not clipped.",
      "States the offer (end-to-end software house) instead of a generic slogan as H1.",
    ],
    [
      "Dek",
      "Tagline + “From custom platforms…” in one muted paragraph.",
      "Bold Syne line: “We build software that moves business forward.” Then the tagline and offer in body type.",
      "The original H1 is still here — as a confident subhead, not lost.",
    ],
    [
      "Atmosphere",
      "Three huge blurred orbs (gold, coral, orange).",
      "Giant ghost “2009” behind the type. Slight pointer parallax on the headline (fine pointers only).",
      "Brand year as graphic, not generic glow.",
    ],
    [
      "Stats",
      "Separate band under the hero, 4 centered counters.",
      "Spec index card in the hero: 01–04, value, label. Same 15+ / 200+ / 50+ / 4.",
      "Numbers are part of the opening, not a ticker tape.",
    ],
    [
      "Buttons",
      "Explore Services + Get in Touch, centered.",
      "Explore practices + Get in touch, left. Magnetic hover (buttons ease toward the pointer).",
      "Same destinations. Motion is in the control, not in bounce or particles.",
    ],
  ]),
  h2("Practices on home (service rail)"),
  compare4([
    [
      "Pattern",
      "2×2 cards. Gradient-square Lucide icon, title, short text, Learn More.",
      "Left rail of 01–04. Click a practice; the right pane swaps copy, use, and a linked file snapshot.",
      "You can inspect all four practices without leaving home.",
    ],
    [
      "Interaction",
      "Whole card is a link. Hover lift.",
      "Select in the rail (AnimatePresence pane). Then “Learn more” / discuss.",
      "Turns a grid of posters into a small instrument.",
    ],
  ]),
  h2("Stack builder (new — did not exist)"),
  body(
    "Original home had no industry or product chooser. Rebuild home section 03 is a two-mode builder:"
  ),
  bullet("Mode A — Your industry: FinTech, Healthcare, and the other profiles in src/data/industries.ts."),
  bullet("Mode B — What you’re building: product types (same data file, kind: build)."),
  bullet("Selecting a profile surfaces matching practices, a real case file, and the stack Kenla would actually use."),
  bullet("This is the difference between “we list technologies” and “we show how we would staff your brief.”"),
  h2("Featured file plate"),
  compare4([
    [
      "How many",
      "projects[0] only (FinTech trading). Static.",
      "All four files. Advances every 5 seconds. Manual ticks still work. Progress bar.",
      "The cabinet is visible on home, not one poster.",
    ],
    [
      "Pause",
      "N/A.",
      "Does not freeze on hover (that made it feel broken). Respects prefers-reduced-motion (stays on file 1).",
      "Motion is a quiet tick, not a carousel of images.",
    ],
    [
      "Quote / results",
      "Card split: story left, quote panel right. Three result ticks.",
      "Same content restaged as a numbered plate with industry, title, results, quote, Open.",
      "Same words. Different object.",
    ],
  ]),
  h2("Technology strip"),
  compare4([
    [
      "Look",
      "12 centered pills (React, Next.js, … Go). Text only. Hover lift.",
      "2×3 / 4-col tiles. Index number, real Simple Icons brand mark, name. Gradient hairline on hover.",
      "Looks like a working set, not a tag cloud.",
    ],
    [
      "Link",
      "View Full Stack outline button, centered.",
      "Open the full stack, left-aligned primary.",
      "Same /technologies destination.",
    ],
  ]),
  h2("Why Kenla"),
  compare3([
    [
      "Cards",
      "Three centered cards. Lucide in a tinted rounded square (Clock, Layers, Cpu). Titles: Established Since 2009, End-to-End Solutions, Modern Tech Stack.",
      "Three numbered cards (01–03) without the icon-square cliché. Titles tightened: Established since 2009; End-to-end, one team; The stack that is current. Same claims.",
    ],
  ]),
  h2("Closing CTA"),
  compare3([
    [
      "Home closer",
      "Full-bleed gradient. Centered. “Ready to Build Something Great?” / Start a Conversation.",
      "Still the one full-bleed gold→coral band on the site (home only). Left-aligned title + magnetic Contact. Inner pages use a quiet warm band instead, so the gradient stays rare.",
    ],
  ])
);

// ── 5 Practices ────────────────────────────────────────
children.push(
  h1("5.  Practices  —  /services"),
  body(
    "Original services page repeats the home recipe: orbs, centered “Engineering Solutions That Scale”, then another 2×2 of icon cards. Rebuild reuses the home practice rail so the index and the dedicated page are the same instrument."
  ),
  compare4([
    [
      "Hero",
      "Centered H1 + long dek + three orbs.",
      "No second poster. The rail section is the page.",
      "Stops “every URL starts with the same hero.”",
    ],
    [
      "List",
      "Four gradient-border cards, icon squares, Learn More.",
      "Numbered rail + detail pane (same ServicePanel as home).",
      "Selecting 02 Practices feels like opening a drawer, not a new brochure.",
    ],
    [
      "Closing",
      "Often another card or a heavy CTA.",
      "Quiet band: “Not sure where to start?” Body: send the brief as it stands — a sketch is enough. We’ll map it to the right practice and write back with a clear next step.",
      "Tone is confident and specific, not “contact us today!”",
    ],
    [
      "Subheads",
      "warm-600 body, typical marketing grey-brown.",
      "Subtitle forced to warm-700 so secondary type is darker, still below the heading.",
      "Readability without competing with Syne titles.",
    ],
  ])
);

// ── 6 Practice detail ──────────────────────────────────
children.push(
  h1("6.  Practice detail  —  /services/*"),
  body(
    "Four static routes share ServicePageLayout. Original layout is another centered orb-hero (giant gradient icon) plus stacked card sections. Rebuild is a dossier: intro, actions, sticky on-page index, then cards for each block."
  ),
  compare4([
    [
      "Intro",
      "80–96px gradient icon, gradient title, long description, two centered buttons.",
      "PageIntro: eyebrow “Practice”, title, long description in 15px warm-700/800. Buttons left, magnetic primary.",
      "The practice name is the page. The icon is no longer the identity.",
    ],
    [
      "Wayfinding",
      "None on-page. Scroll and hope.",
      "Sticky aside: 01 Deliverables, 02 Stack, 03 Use cases, 04 File (if a matching case study exists).",
      "Long pages become scannable.",
    ],
    [
      "Deliverables",
      "“What We Deliver” heading + card/check list.",
      "Numbered dossier card. Same bullets, darker body.",
      "Content kept.",
    ],
    [
      "Stack on this practice",
      "Pills / badges of tech names.",
      "Chips with real brand icons (react-icons Simple Icons, pinned 5.5.0 so AWS and OpenAI icons still exist).",
      "Matches the Stack page language.",
    ],
    [
      "Use cases / In the field",
      "Smaller, lighter type in generic cards.",
      "15px, warm-800, still lighter than the heading. Requested so subcopy is readable.",
      "Same lists, better hierarchy.",
    ],
    [
      "Related file",
      "Sometimes a card if wired.",
      "Explicit File block linking the matching case study.",
      "Practices connect to Files instead of living in a silo.",
    ],
    [
      "CTA",
      "Often another full gradient.",
      "Quiet CtaBand (not gradient). Gradient is reserved for home.",
      "Accent stays rare.",
    ],
  ])
);

// ── 7 Stack ────────────────────────────────────────────
children.push(
  h1("7.  Stack  —  /technologies"),
  body(
    "Same ~54 technologies, same eight categories. Original presents them as a marketing “Our Technology Stack” page with orbs and a logo grid. Rebuild presents them as a searchable materials table."
  ),
  compare4([
    [
      "Hero",
      "Centered “Our Technology Stack”, long dek, three orbs.",
      "PageIntro: eyebrow Materials, title Stack, body about search/filter/used-in.",
      "The page states it is a catalogue.",
    ],
    [
      "Search",
      "None (or local filter only inside the grid, no URL).",
      "Filter field. Also accepts ?q= from the command palette.",
      "Cmd+K → a technology → lands filtered.",
    ],
    [
      "View modes",
      "Grid vs Categorized, icon buttons.",
      "Table vs Grouped. Gradient chips when selected.",
      "Same two modes, clearer labels, prettier controls.",
    ],
    [
      "Filters",
      "All + 8 categories as chips.",
      "Same eight, restyled. Names 15px / darker.",
      "Inventory unchanged.",
    ],
    [
      "Tiles",
      "Card per tool, brand icon, name, proficiency.",
      "Denser, named type at 15px warm-800. Hover can show “used in” (which files/practices actually shipped with it).",
      "Connects the stack to the cabinet instead of a logo wall.",
    ],
    [
      "CTA",
      "Full-bleed gradient “Have a Project in Mind?”",
      "Quiet band. Copy: we’ll staff the stack that fits.",
      "No second gradient poster.",
    ],
  ])
);

// ── 8 Files ────────────────────────────────────────────
children.push(
  h1("8.  Files  —  /projects"),
  body("Four case studies. Original is a 2-column card grid. Rebuild is a cabinet table."),
  compare4([
    [
      "Hero",
      "Centered “Projects”, “Real Results, Real Impact”, orbs.",
      "PageIntro: eyebrow Cabinet, title Files, dek naming FinTech, insurance, healthcare, Web3.",
      "The naming tells you how to read the page.",
    ],
    [
      "List",
      "md:grid-cols-2 cards. Industry badge, service badges, title, excerpt, arrow.",
      "One table: No. / File / Industry / Client / Open. Hover wash. Heading-sized titles.",
      "Scannable like a docket, not four posters.",
    ],
    [
      "Action",
      "Whole card is the hit area.",
      "Title is a link and a primary Open button per row.",
      "Clearer affordance; works better on touch.",
    ],
  ]),
  h2("File detail  —  /projects/[slug]"),
  compare4([
    [
      "Hero",
      "Orbs, back link, gradient title, badges, long challenge teaser.",
      "All files back-link, industry eyebrow, large title, client + practices as 15px warm-800. Gradient hairline. No orbs.",
      "Opens like a document, not another landing page.",
    ],
    [
      "Body",
      "Challenge / solution / results in cards with check icons and a quote slab.",
      "FileBlock cards: The challenge, Our solution, Results, stack chips with brand icons, quote. Related files at the end.",
      "Same four stories. Same quotes (role only).",
    ],
    [
      "Type",
      "Standard card body (sm, warm-600).",
      "15px / warm-700–800 so it matches Practices and Stack.",
      "One type system across inner pages.",
    ],
  ])
);

// ── 9 Studio ───────────────────────────────────────────
children.push(
  h1("9.  Studio  —  /about"),
  body(
    "Same founding story, same Optiwise California paragraph, same values, same stats, same seven timeline events. The page is no longer a centered About Us with a zigzag timeline."
  ),
  compare4([
    [
      "Hero",
      "Centered About headline, orbs, story in flowing type, then stats, then values cards, then zigzag timeline.",
      "Full-viewport opening: eyebrow Studio, giant gradient 2009, short dek. Kenla logo as a watermark (~22–28% opacity) instead of a grey year graphic.",
      "2009 is the title. The mark sits in the room.",
    ],
    [
      "Story",
      "Long paragraphs in the default flow.",
      "Same three paragraphs, each in a white dossier card, 15–17px warm-800.",
      "Readable, not a wall.",
    ],
    [
      "Values",
      "Four cards with Lucide icons (Lightbulb, Shield, Clock, Users).",
      "Same four values as numbered/text cards — no icon-square identity.",
      "Content kept; cliché dropped.",
    ],
    [
      "Stats",
      "Animated counters, often in a row.",
      "Same 15+ / 200+ / 50+ / 4, restaged.",
      "Numbers unchanged.",
    ],
    [
      "Timeline structure",
      "Vertical gradient line. Events alternate left/right (zig-zag). Fade-up per item. Can hydrate-mismatch if reduced-motion branches JSX.",
      "Sequential journey, one after another (year right-aligned, card to the right). Each card fades in as you reach it.",
      "Reads as a path, not a tennis match.",
    ],
    [
      "Timeline motion",
      "Slide into place.",
      "When a milestone hits ~45% viewport, gold/orange/coral sand grains fall slowly (3.4s, 6px, glow). Once. Off if reduced motion.",
      "The one ambient craft moment on Studio. Not a particle wallpaper.",
    ],
    [
      "CTA",
      "Often heavy.",
      "Quiet band, consistent with other inner pages.",
      "Home keeps the only gradient closer.",
    ],
  ])
);

// ── 10 Contact ─────────────────────────────────────────
children.push(
  h1("10.  Contact  —  /contact"),
  body(
    "Same fields, same Zod rules, same server action, same toast. The page around the form was rebuilt so it belongs with Practices / Files / Studio."
  ),
  compare4([
    [
      "Name in nav",
      "Contact.",
      "Contact (a Brief label was tried and reverted so the word matches the page).",
      "Mentors should see Contact in the spine, footer, and header.",
    ],
    [
      "Hero",
      "Get in Touch + orbs + centered SectionHeading.",
      "PageIntro: “Let's Build Something Great” plus the 15-year offer paragraph (same idea as original sidebar).",
      "The promise is the title, not a generic Get in Touch.",
    ],
    [
      "Layout",
      "Form card 60% / info card 40%. Info repeats Let’s Build…, email, location, 24h.",
      "Form card + live “Your note” ticket + details card (email, location, within 24 hours, prefer-email line).",
      "The ticket is the improvement you cannot see in a screenshot until you type.",
    ],
    [
      "Ticket",
      "None. Form is a blank.",
      "Live: To (hello@kenlasystems.com), From (name), Practice (service), Note (first 160 chars). On success it becomes “Received”.",
      "Feels like filing a note, not dumping into a void.",
    ],
    [
      "Success",
      "Toast + form reset. Same page chrome.",
      "Toast plus an on-page “We have your note” state. Ticket stays as the record.",
      "Confirmation is part of the UI, not only a popup.",
    ],
    [
      "Labels",
      "Default input labels.",
      "15px, warm-800, matching the rest of the site.",
      "Type system is consistent.",
    ],
    [
      "Phone",
      "Constants included a fake +91-44-XXXX-XXXX (not always shown).",
      "Removed. Email only.",
      "No placeholder numbers in a mentor review.",
    ],
  ])
);

// ── 11 System pages ────────────────────────────────────
children.push(
  h1("11.  System pages and motion kit"),
  h2("404"),
  compare3([
    ["Composition", "Centered gradient 404, short apology, two buttons, one blur circle.", "Ghost 404, crop marks, KS-00 MISSING, same two actions, left-aligned."],
    ["Tone", "Generic not-found.", "“That URL isn’t in the cabinet.” Same destinations: home / contact."],
  ]),
  h2("Loading"),
  compare3([
    ["Original", "No app/loading.tsx. Blank or instant.", "Skeleton shimmer matching rows/indexes so route changes do not flash empty paper."],
  ]),
  h2("Page enter"),
  compare3([
    ["Original", "Each section FadeIn independently. Heroes always replay the same up-fade.", "template.tsx .page-enter (opacity/translate that ends at transform: none) so below-the-fold IntersectionObservers still fire."],
  ]),
  h2("Motion language"),
  compare4([
    [
      "Library",
      "motion (framer-motion successor), FadeIn, StaggerChildren, AnimatedCounter.",
      "Same library plus LineReveal, Magnetic, layoutId spine pill, AnimatePresence rails/plates.",
      "More instruments, still one library.",
    ],
    [
      "Reduced motion",
      "Some components branched JSX on useReducedMotion() — hydration risk.",
      "Same React tree on server and client. Reduced motion is checked in handlers and CSS only.",
      "No flash of wrong tree; content stays visible.",
    ],
    [
      "Ambient vs triggered",
      "Orbs always on. Hover lifts everywhere.",
      "At most one looping ambient (home 2009 / file ticks / studio sand on view). Everything else is hover, click, or scroll, then still.",
      "Classy, not carnival.",
    ],
    [
      "What we did not add",
      "N/A.",
      "No stock photos, no bouncing CTAs, no particle canvas, no fake testimonials, no dark mode, no new logo.",
      "Constraints held.",
    ],
  ])
);

// ── 12 Signature features ──────────────────────────────
children.push(
  h1("12.  Signature features that did not exist on the original"),
  body(
    "These are the strongest answers to “is this just CSS?”. None of them exist on kenlasystems.com."
  ),
  h2("Command palette  —  Cmd+K / Ctrl+K"),
  bullet("Opens from the header Search control or the keyboard shortcut."),
  bullet("Indexes Home, all pages, four practices, four files, and ~54 technologies."),
  bullet("Arrow keys, Enter to go, Esc to close. Groups: Pages, Services, Projects, Technologies."),
  bullet("Choosing a technology can land on /technologies?q=… so the table is already filtered."),
  h2("Index spine  —  01 to 06"),
  bullet("Persistent wayfinding. Sliding gradient pill on the active item."),
  bullet("Desktop: left rail. Mobile: horizontal chips under the header."),
  h2("Stack builder"),
  bullet("Home-only. Industry vs product-type modes."),
  bullet("Surfaces real practices, a real file, and a real subset of the 54 tools — not lorem."),
  h2("Practice rail"),
  bullet("Home and /services. Four practices as a selectable instrument instead of four dead cards."),
  h2("Featured file autoplay"),
  bullet("Five-second natural advance through all four case studies. Progress ticks. Reduced-motion safe."),
  h2("Logo cursor"),
  bullet("The Kenla mark is the pointer. Fine devices only."),
  h2("Backtick terminal"),
  bullet("Press ` (backtick) outside of form fields. Commands: help, whoami, stack, contact, projects, clear, open projects."),
  bullet("Easter egg for engineers; not required to use the site."),
  h2("Live contact ticket"),
  bullet("As you type, the aside becomes the note Kenla would receive."),
  h2("Studio sand grains"),
  bullet("Per-milestone, view-triggered, slow, brand-coloured. Not a site-wide particle system."),
  h2("IBM Plex Mono indexes"),
  bullet("01–06, kbd hints, ticket labels. Additive; Syne + Inter remain the brand faces.")
);

// ── 13 Type and colour ─────────────────────────────────
children.push(
  h1("13.  Type, colour, and visual system"),
  h2("Type hierarchy (rebuild)"),
  compare3([
    ["Display / H1", "Syne extrabold. Home SOFTWARE is ~3.9rem; Studio 2009 is ~8.5rem.", "Original H1s were large but always centered and similar on every page."],
    ["Section titles", "Syne with optional 01 index + orange eyebrow.", "Original SectionHeading was title + subtitle, centered more often."],
    ["Subheads / dek", "15px, medium, warm-700 or warm-800 — darker than original warm-500/600, never darker than the heading.", "Explicit pass across Practices, Stack, Files, Studio, Contact."],
    ["Body", "Inter, relaxed leading.", "Same family."],
    ["Mono", "IBM Plex Mono for indexes, kbd, some labels.", "Original had no third face."],
    ["Footer", "Semibold 14px.", "Original footer type was lighter on dark."],
  ]),
  h2("Colour use"),
  compare3([
    ["Signature gradient", "Buttons, icon squares, full CTAs on multiple pages, orbs.", "Header wash, spine pill, one home CTA, hairlines, sand, rare text. Not icon-squares-as-identity."],
    ["Paper", "White cards on warm page + dark footer.", "Warm paper throughout. White used as dossier cards with a soft orange-tinted shadow (rgba(238,122,72,0.08))."],
    ["Dark", "Entire footer background.", "Text and logo only."],
  ]),
  h2("Components that were retired as the default look"),
  bullet("Lucide icon sitting in a gold→coral rounded square as the repeating identity (kept Lucide for UI chrome: search, arrows, menu)."),
  bullet("Three blurred orbs behind every hero."),
  bullet("Centered max-w-3xl poster on every route."),
  bullet("Pill-only technology tags on home."),
  bullet("Dark inverted-logo footer."),
  bullet("Hairline “spec sheet / crop mark / KS-02” chrome from an intermediate pass — too pencil-and-scale.")
);

// ── 14 Engineering ─────────────────────────────────────
children.push(
  h1("14.  Engineering differences (for a technical mentor)"),
  compare4([
    [
      "Framework",
      "Next.js 16.1.6 App Router, React 19.2.3, Tailwind v4, TypeScript.",
      "Same pins. Rebuild is a sibling app, not a fork you should edit the original of.",
      "Fair compare: same generation of stack.",
    ],
    [
      "Motion",
      "motion ^12.",
      "motion ^13. Always import from “motion/react”, never “framer-motion”.",
      "API family unchanged.",
    ],
    [
      "Icons",
      "lucide-react ^0.563 + react-icons ^5.7.",
      "lucide-react ^1.34 + react-icons pinned 5.5.0 (5.7 dropped SiAmazonwebservices and SiOpenai).",
      "AWS and OpenAI marks still render on Stack.",
    ],
    [
      "Email",
      "resend + @react-email/components present (send often commented pending API key).",
      "No Resend in the rebuild. Action validates and console.logs. Toast still fires.",
      "UI/UX of contact is complete; outbound mail is a later wiring step.",
    ],
    [
      "Fonts",
      "Syne + Inter via next/font.",
      "Syne + Inter + IBM Plex Mono.",
      "Mono is additive.",
    ],
    [
      "Tokens",
      "@theme inline in globals.css. No tailwind.config.ts.",
      "Same approach. Utilities: brand-gradient-*, instrument bar, spine, sand-grain, ghost-type, wash-hover.",
      "One token file.",
    ],
    [
      "New data",
      "navigation, services, projects, technologies, constants.",
      "Plus industries.ts for the stack builder. Plus tech-used-in mapping.",
      "No CMS. No invented case studies.",
    ],
    [
      "A11y",
      "Skip link, labels, counters.",
      "Skip link kept. AnimatedCounter still has sr-only real numbers. Palette and terminal are keyboarded. Reduced motion does not hide content. Cursor/sand/parallax off on coarse pointer and reduced motion.",
      "New motion does not trap or exclude.",
    ],
    [
      "SEO",
      "metadata, sitemap.ts, robots.ts, static service routes, generateStaticParams on projects.",
      "Same routes and metadata titles/descriptions (content kept).",
      "URLs are a 1:1 map for the two-tab review.",
    ],
  ])
);

// ── 15 Naming ──────────────────────────────────────────
children.push(
  h1("15.  Language and information architecture"),
  body(
    "Studio names are for humans in the chrome. Original names remain in the URL and in metadata where they are the public terms (Services, Projects, About in <title> where kept). A mentor comparing tabs should map:"
  ),
  compare3([
    ["Services", "/services", "Practices — four pillars, one team"],
    ["Technologies", "/technologies", "Stack — 54 tools we actually ship with"],
    ["Projects", "/projects", "Files — the cabinet"],
    ["About", "/about", "Studio — the 2009 journey"],
    ["Contact / Get in Touch", "/contact", "Contact — Let’s Build Something Great"],
    ["Learn More", "card footer", "Learn more / Open / Discuss your project"],
  ]),
  h2("Voice"),
  bullet("Original marketing voice is intact in long copy (about story, service longDescription, case-study challenge/solution)."),
  bullet("Chrome and section titles are slightly more specific and less slogan-like (“Fifty-four tools we actually ship with” vs “We stay at the cutting edge — so you don’t have to”)."),
  bullet("Nothing was made jokey. Nothing was made generic-AI (“Unlock synergy”).")
);

// ── 16 Demo ────────────────────────────────────────────
children.push(
  h1("16.  How to demonstrate this to a mentor"),
  body(
    "Suggested ten-minute path. Original tab on the left, rebuild on the right, same URLs."
  ),
  numbered("Home: point at SOFTWARE / end to end vs “We Build Software That…”. Note the spec card vs the stats strip."),
  numbered("Click through the practice rail (02) — original cannot do this without leaving the page."),
  numbered("Stack builder (03): switch Your industry / What you’re building. Show a matching file and stack."),
  numbered("Wait ~5 seconds on the file plate (04) — it will change by itself. Original never leaves project one."),
  numbered("Tech tiles (05) have brand icons; original home is text pills."),
  numbered("Header: Search, then press Cmd+K / Ctrl+K. Type “kubernetes” or “fintech”. Jump."),
  numbered("Move the mouse — Kenla logo cursor. Original is a system pointer."),
  numbered("Open /services, /technologies, /projects, /about, /contact via the spine. Original uses the top dropdown."),
  numbered("Stack: Table vs Grouped, filter Cloud, hover a tool for “used in”."),
  numbered("Files: table vs 2×2 cards. Open one file. Challenge / solution / results as dossier cards."),
  numbered("Studio: logo watermark, then scroll the timeline slowly until sand falls on a milestone."),
  numbered("Contact: type a name and a sentence — watch Your note fill in. Mention 24h and prefer-email."),
  numbered("Optional: press ` and type help. Optional: hit a fake URL for the 404."),
  numbered("Footer: light colophon vs dark four-column slab."),
  spacer(),
  h2("What to say in one paragraph"),
  body(
    "“Same Kenla — logo, gold-orange-coral, 2009, four practices, four files, fifty-four tools. The original is a brochure: centered heroes, icon cards, pills, dark footer. This rebuild is a studio: numbered index, search, a stack builder, a rotating cabinet, and a live contact ticket. We did not invent clients or change the work. We changed how you move through it.”"
  )
);

// ── 17 Lookup ──────────────────────────────────────────
children.push(
  h1("17.  Complete lookup — original vs rebuild"),
  body(
    "Use this as a single-page checklist. “Same” means the fact, route, or asset is unchanged even if the UI around it is new."
  ),
  compare4([
    ["Logo", "Kenla SVG", "Same, plus cursor + Studio watermark", "Kept"],
    ["Colours", "Gold / orange / coral / warm paper", "Same tokens, rarer gradient", "Kept + disciplined"],
    ["Theme", "Light + dark footer", "Light throughout", "Improved"],
    ["Fonts", "Syne + Inter", "Syne + Inter + Plex Mono", "Additive"],
    ["Routes", "All listed in §2", "Same URLs", "Kept"],
    ["Copy blocks", "Services, projects, about, stats", "Kept; chrome titles tightened", "Kept"],
    ["Header nav", "Dropdown + links", "Search + Contact; pages on spine", "Structural"],
    ["Sidebar", "None", "01–06 spine + mobile chips", "New"],
    ["Footer", "Dark 4-col", "Light colophon", "Structural"],
    ["Cursor", "System", "Logo follower", "New"],
    ["Home hero", "Centered slogan", "SOFTWARE end to end + spec card", "Structural"],
    ["Home services", "2×2 icon cards", "Selectable rail", "Structural"],
    ["Home industries", "None", "Stack builder", "New"],
    ["Home featured", "First project only", "All four, 5s autoplay", "New behaviour"],
    ["Home tech", "12 pills", "12 icon tiles", "Visual + structure"],
    ["Home Why", "3 icon cards", "3 numbered cards", "Visual"],
    ["Home CTA", "Gradient", "Gradient (home only)", "Disciplined"],
    ["Inner CTAs", "Often gradient", "Quiet band", "Disciplined"],
    ["/services", "Poster + 2×2", "Same rail as home", "Structural"],
    ["Practice pages", "Orb hero + cards", "Dossier + sticky TOC", "Structural"],
    ["/technologies", "Poster + logo grid", "Searchable table + used-in", "Structural"],
    ["/projects", "2×2 cards", "Cabinet table", "Structural"],
    ["Project pages", "Poster + cards", "File blocks + icon stack", "Structural"],
    ["/about", "Centered about + zigzag", "2009 + watermark + sequential sand", "Structural"],
    ["/contact", "Get in Touch + static info", "Let’s Build… + live ticket", "Structural"],
    ["Cmd+K", "None", "Full-site palette", "New"],
    ["Terminal `", "None", "Kenla console", "New"],
    ["Loading UI", "None", "Skeleton", "New"],
    ["404", "Centered generic", "Cabinet missing-page", "Visual"],
    ["Phone", "Placeholder constant", "Removed", "Cleanup"],
    ["Resend", "Package present", "Not in rebuild; console + toast", "Wiring later"],
    ["Stock photos", "None", "None", "Kept"],
    ["Dark mode", "None", "None", "Kept"],
  ]),
  h2("Bottom line for the reviewer"),
  body(
    "If you only glance, you will see Kenla’s colours and type on both sites — that is correct and required. If you use the spine, Search, the stack builder, the moving file plate, Studio sand, and the contact ticket, you are no longer looking at a restyled brochure. You are looking at the same firm, presented as a working studio."
  )
);

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "Arial", size: 22 },
      },
    },
    paragraphStyles: [
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 32, bold: true, font: "Arial", color: NAVY },
        paragraph: { spacing: { before: 240, after: 240 }, outlineLevel: 0 },
      },
      {
        id: "Heading2",
        name: "Heading 2",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 26, bold: true, font: "Arial", color: ORANGE },
        paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 1 },
      },
      {
        id: "Heading3",
        name: "Heading 3",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 24, bold: true, font: "Arial", color: NAVY },
        paragraph: { spacing: { before: 160, after: 80 }, outlineLevel: 2 },
      },
    ],
  },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: "•",
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } },
          },
        ],
      },
      {
        reference: "numbers",
        levels: [
          {
            level: 0,
            format: LevelFormat.DECIMAL,
            text: "%1.",
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } },
          },
        ],
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
        },
      },
      headers: {
        default: new Header({
          children: [
            new Paragraph({
              tabStops: [{ type: TabStopType.RIGHT, position: 9360 }],
              border: {
                bottom: { style: BorderStyle.SINGLE, size: 8, color: GOLD, space: 4 },
              },
              spacing: { after: 80 },
              children: [
                run("Kenla Systems  ·  Website rebuild", { size: 18, bold: true, color: NAVY }),
                run("\tMentor reference — original vs rebuild", { size: 18, color: MUTED }),
              ],
            }),
          ],
        }),
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              tabStops: [{ type: TabStopType.RIGHT, position: 9360 }],
              border: {
                top: { style: BorderStyle.SINGLE, size: 6, color: LINE, space: 6 },
              },
              spacing: { before: 80 },
              children: [
                run("Confidential to the Kenla review  ·  Same soul, new studio", {
                  size: 16,
                  color: MUTED,
                }),
                run("\tPage ", { size: 16, color: MUTED }),
                new TextRun({
                  children: [PageNumber.CURRENT],
                  font: "Arial",
                  size: 16,
                  color: MUTED,
                }),
              ],
            }),
          ],
        }),
      },
      children,
    },
  ],
});

const out = path.join(
  __dirname,
  "..",
  "Kenla-Systems_Mentor-Reference_Original-vs-Rebuild.docx"
);

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(out, buffer);
  console.log("Wrote", out, buffer.length, "bytes");
});
