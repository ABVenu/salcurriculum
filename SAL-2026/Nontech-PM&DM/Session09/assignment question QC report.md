# Assignment Question QC Report — Session09

Session: Intro to Automation: Getting Started with n8n  
Folder: `Other_Courses_Apart_From_IIT/SAL-2026/Nontech-PM&DM/Session09`

---

## Reuse check — Session46 subjective

| Source | Verdict |
| ------ | ------- |
| `IIT_Sessions_Content/iitr-as-260113/Module4/Session46/assignment-subjective.md` | **Do not reuse as-is** |

**Why it cannot be reused as-is**

| Session46 Q | Topic | In Session09 notes? |
| ----------- | ----- | ------------------- |
| Q1 | Automation / workflow vs trigger | Yes (partial overlap) |
| Q2 | Visual workflow for non-tech users | Yes (partial overlap) |
| Q3 | Form trigger + nodes + connections | Yes (partial overlap) |
| Q4 | n8n vs Docker mandatory claim | **No** — Docker not taught as a topic |
| Q5 | Docker image / container / volume | **No** — out of syllabus |
| Q6 | Credentials + OAuth2 + scopes | **Partial** — credentials yes; OAuth2 protocol depth no |
| Q7 | Expressions vs hard-coding | Yes (partial overlap) |
| Q8 | Observability + human-in-the-loop | **Partial** — Executions yes; human-in-the-loop **no** |

Additional structural mismatch: Session46 subjective is **8 applied-theory answers**. Prompt + Session09 type require **1 practical medium task** (hands-on Form → Gmail → Sheets). Session09 subjective was rewritten for BrightPath, not copied.

---

## Objective questions QC

| Question number | Type | Remarks |
| --------------- | ---- | ------- |
| Q1 | MCQ Easy | Correct: **C**. Relevancy: **Yes** — automation = trigger + rule + action for pending email loop |
| Q2 | MCQ Easy | Correct: **A**. Relevancy: **Yes** — form submission trigger for enquiry form |
| Q3 | MCQ Easy | Correct: **D**. Relevancy: **Yes** — Executions for success/failure observability |
| Q4 | MCQ Easy | Correct: **B**. Relevancy: **Yes** — n8n vs Make vs Dify shape comparison |
| Q5 | MCQ Moderate | Correct: **A**. Relevancy: **Yes** — disconnected nodes common error |
| Q6 | MCQ Moderate | Correct: **C**. Relevancy: **Yes** — Switch for many values of one field |
| Q7 | MSQ Moderate | Correct: **A, B, D**. Relevancy: **Yes** — good automation candidates; C correctly excluded |
| Q8 | MSQ Moderate | Correct: **A, B, C**. Relevancy: **Yes** — data items, parameters, JSON; D correctly excluded |
| Q9 | MSQ Hard | Correct: **A, B, D**. Relevancy: **Yes** — filter + loop + safe learning runs; C (non-unique match) correctly excluded |
| Q10 | MSQ Hard | Correct: **A, B, D**. Relevancy: **Yes** — red expression fix + E2E verify + required Gmail fields; C correctly excluded |

**Option-pattern check:** Correct singles land on C, A, D, B, A, C (not a fixed letter). MSQ sets vary (ABD / ABC / ABD / ABD) without a longest-option tell.

**Syllabus check:** No Docker image/container/volume, no OAuth2 deep protocol, no human-in-the-loop. All stems map to Session09 lecture notes.

---

## Subjective question QC

| Question number | Type | Remarks |
| --------------- | ---- | ------- |
| Q1 (single task) | Practical n8n build + short applied answers | **Medium** difficulty. Clear Google Doc submission instructions (`doc.new`, Anyone with the link / Viewer, paste link). Dataset: student-created sheet headers specified (Name, Email ID, Phone Number); synthetic BrightPath test data allowed. Build path matches class Form → dynamic Gmail → Sheets append. Written parts stay inside notes (trigger vs workflow, expressions, n8n vs Dify, pending loop design). |

---

## Overall QC scores

| Criteria | Objective | Subjective |
| -------- | --------- | ---------- |
| Content Coverage (1–5) | 5 | 5 |
| Creativity (1–5) | 5 | 5 |
| Structural Adherence (1–5) | 5 | 5 |
| No Logical Mistakes | True | True |
| No Presentation Mistakes | True | True |

---

## QC outcome

Expected bar met: all Content Coverage / Creativity / Structural Adherence ratings are **5**, and both Logical / Presentation mistake flags are **True** (no mistakes).

Files produced:

- `assignment-objective.md`
- `assignment-subjective.md`
- `assignment question QC report.md`

---
