# QC Report — S05: Data Structures in Python

## QC Pass 1

| Criterion | Result |
|---|---|
| **Content Coverage** | 5 / 5 |
| **Creativity** | 5 / 5 |
| **Structural Adherence** | 5 / 5 |
| **No Logical Mistakes** | True |
| **No Presentation Mistakes** | False |
| **No Previous Session Number References** | True |
| **No Metadata / Internal References in Student Notes** | True |

**Notes:** Mapped all 20 learning objectives from Scenes & LOs without printing scene/LO labels in the student document.

- **Lists:** purpose, multi-element storage, indexing, iteration, mixed types, `len()`, negative indexing, reverse iteration, `append()` / `insert()` / `extend()` (including append-vs-extend doubt).
- **Strings:** definition, indexing, even-position access via `range(..., 2)`, immutability, concatenation, slicing (`start:stop:step`, reverse), `upper()` / `title()` / `capitalize()` / `islower()` / `isupper()`.
- **Sets & tuples:** mutability vs immutability table, set uniqueness and syntax, `add()` / `remove()` / `discard()`, list↔set conversion, tuple vs list, tuple slicing (negative, even-index), list↔tuple conversion.
- **Dictionaries:** key–value model, no duplicate keys, create/retrieve, `len` of pairs vs `len` of nested values, iteration with mixed value types, `get()` / `keys()` / `values()` / `pop()` / `popitem()` / `clear()`.

Context bridges from previous lesson (loop control) without session numbers. Indian-context examples (festival snacks, Mysuru/Bengaluru, temple tokens, filter-coffee menu, Udupi contact). Full programs with line comments and "How the code works." Student-facing activities. Mermaid diagrams. Key Takeaways + terminology table present.

**Issues found:** Two presentation problems in draft code comments — unclear "Wait:" wording on `isupper()` example and on `days[-3:]` slice explanation. Not textbook-quality.

**Actions taken:** Replaced confusing comments with clear expected outputs; clarified that `isupper()` ignores digits when all letters are uppercase. Re-verified examples with a Python logic script (lists, slices, sets, tuples, dict methods) — all assertions passed.

**Pass 1 outcome:** FAIL on presentation — fixed before Pass 2.

---

## QC Pass 2

| Criterion | Result |
|---|---|
| **Content Coverage** | 5 / 5 |
| **Creativity** | 5 / 5 |
| **Structural Adherence** | 5 / 5 |
| **No Logical Mistakes** | True |
| **No Presentation Mistakes** | True |
| **No Previous Session Number References** | True |
| **No Metadata / Internal References in Student Notes** | True |

**Notes:** Re-checked against LectureNotesPrompt4:

- Clean `# Lecture Title` start; no duration, audience, or internal dial language.
- Previous-context paragraph + this-lesson bullets; connecting sentences between lists → strings → sets/tuples → dictionaries.
- Official Definition / In Simple Words / Real-Life Example on core terms.
- No "Ask students…" instructor phrasing; activities are student-facing.
- Grep clean for session numbers, scene/LO labels, "Keep it lite," Part/Section labels.
- Paragraphs follow the 3-sentence rule; code comments and "How the code works" blocks present.
- Key Takeaways (5 bullets) with forward link to upcoming lessons without numbering.
- Quick reference table covers taught commands and terms only.

**Logic spot-checks (reconfirmed):** basket after append/insert/extend = 6 items; even indexes of `KANNADA` → K,N,A,A; `PythonBasics[::2]` → `PtoBsc`; `days[-3:]` → Fri,Sat,Sun; set dedupe length 3; `"OTP123".isupper()` → True; `len(report)` → 3 and `len(report["subjects"])` → 4; duplicate key keeps latest value.

**Pass 2 outcome:** PASS — expected QC result achieved.
