# Checkpoint Questions QC Report — Session 03 (Refining & Validating)

**Family IDs:** `.1` = core teaching quiz, `.2` = revision quiz.

## Family count rule

| Family | Role | Required count | Actual | Result |
|--------|------|----------------|--------|--------|
| Scene 1.1 | Main (`.1`) | 5 | 5 | **Pass** |
| Scene 1.2 | Subscene (`.2`) | 3 | 3 | **Pass** |
| Scene 2.1 | Main (`.1`) | 5 | 5 | **Pass** |
| Scene 2.2 | Subscene (`.2`) | 3 | 3 | **Pass** |
| Scene 3.1 | Main (`.1`) | 5 | 5 | **Pass** |
| Scene 3.2 | Subscene (`.2`) | 3 | 3 | **Pass** |

All six files match the SAL rule: **5 questions on `.1` clips, 3 questions on `.2` clips.**

## Summary

| Metric | Result |
|--------|--------|
| Total questions | 24 (Scene 1.1: 5, Scene 1.2: 3, Scene 2.1: 5, Scene 2.2: 3, Scene 3.1: 5, Scene 3.2: 3) |
| Correct option verified | **24 / 24 Pass** |
| Relevancy to lecture topic | **24 / 24 Yes** |
| Lecture examples reused as stems (WashQ, Priya, Rohan, Aarav, laundry, hostel basement, chai stall) | **None** |
| Stems that point at “this lesson / this session / here” | **None** |
| Out of syllabus | **None** |
| Logical mistakes | **False** |
| Presentation mistakes | **False** |
| Predictable answer-pattern check | **Pass** |
| Longest / shortest option bias | **Pass** |
| File naming vs SAL `.1` / `.2` families | **Pass** |

| Rating | Score |
|--------|-------|
| Content Coverage | 5 |
| Creativity | 5 |
| Structural Adherence | 5 |
| No Logical Mistakes | True |
| No Presentation Mistakes | True |

---

## Correct-Answer Distribution (anti-pattern check)

| File | Q1 | Q2 | Q3 | Q4 | Q5 |
|------|----|----|----|----|-----|
| Scene 1.1 | b | a | d | c | b |
| Scene 1.2 | c | a | d | — | — |
| Scene 2.1 | a | c | b | d | c |
| Scene 2.2 | d | b | a | — | — |
| Scene 3.1 | d | b | c | a | d |
| Scene 3.2 | a | c | b | — | — |

**Overall counts:** a = 6, b = 6, c = 6, d = 6 — mixed letters; no file always uses B; no letter dominates.

Option lengths within each item are close. The marked answer is not systematically the longest or the shortest across the set.

---

## LO / concept coverage

| Scene | LO | Questions |
|-------|----|-----------|
| 1 | LO1 generate test scenarios and simulate user feedback | 1.1 Q1, 1.1 Q2, 1.1 Q3, 1.2 Q1 |
| 1 | LO2 design questions that test the intended problem | 1.1 Q4, 1.2 Q2 |
| 1 | LO3 limitations of simulated feedback vs real user testing | 1.1 Q5, 1.2 Q3 |
| 2 | LO1 define an MVP and what it should / should not include | 2.1 Q1, 2.1 Q2, 2.2 Q1 |
| 2 | LO2 iterate on a prototype from simulated feedback | 2.1 Q3, 2.1 Q4, 2.2 Q2 |
| 2 | LO3 prioritise Now vs Next vs Later under a time limit | 2.1 Q5, 2.2 Q3 |
| 3 | LO1 present the refined idea with a clear rationale | 3.1 Q1, 3.1 Q2, 3.2 Q1 |
| 3 | LO2 tie changes back to feedback or test results | 3.1 Q3, 3.1 Q4, 3.2 Q2 |
| 3 | LO3 justify design / feature trade-offs | 3.1 Q5, 3.2 Q3 |

---

## Question-wise QC

| Question | Type | Correct Option | Option Correct? | Relevancy | Remarks |
|----------|------|----------------|-----------------|-----------|---------|
| 1.1 Q1 | MCQ – concept | b | Yes | Yes | Test scenario = who, where, what they want, what they see. |
| 1.1 Q2 | MCQ – concept | a | Yes | Yes | Paste page text only; do not leak the idea card or ask for praise. |
| 1.1 Q3 | MCQ – concept | d | Yes | Yes | One voice per prompt; mixing blends the replies. |
| 1.1 Q4 | MCQ – concept | c | Yes | Yes | Strong questions test the intended problem, not taste or extras. |
| 1.1 Q5 | MCQ – concept | b | Yes | Yes | Simulated feedback is a rehearsal filter, not proof. |
| 1.2 Q1 | MCQ – concept | c | Yes | Yes | Keep intended user, sceptic, and wrong user. |
| 1.2 Q2 | MCQ – applied | a | Yes | Yes | Job test: would the original pain get smaller. |
| 1.2 Q3 | MCQ – applied | d | Yes | Yes | Delete invented-feature comments; they are not findings. |
| 2.1 Q1 | MCQ – concept | a | Yes | Yes | MVP = smallest offer that still delivers the core job and can be tested. |
| 2.1 Q2 | MCQ – concept | c | Yes | Yes | Include only pieces that help learn the core job. |
| 2.1 Q3 | MCQ – concept | b | Yes | Yes | Iteration = bounded change from evidence, then a recheck. |
| 2.1 Q4 | MCQ – concept | d | Yes | Yes | Re-run the same questions on the new page text. |
| 2.1 Q5 | MCQ – applied | c | Yes | Yes | Clarity/CTA blockers that fit the MVP go in Now. |
| 2.2 Q1 | MCQ – concept | d | Yes | Yes | Viable = someone can try the core job, even if backstage is manual. |
| 2.2 Q2 | MCQ – concept | b | Yes | Yes | Order: job clarity, next step, expectations, then extras. |
| 2.2 Q3 | MCQ – applied | a | Yes | Yes | When two changes fight, protect the MVP; park the large extra. |
| 3.1 Q1 | MCQ – concept | d | Yes | Yes | Rationale = reasoned why for a change or a keep, tied to user and MVP. |
| 3.1 Q2 | MCQ – concept | b | Yes | Yes | Presentation spine: problem, first page, heard, changed, parked, next. |
| 3.1 Q3 | MCQ – concept | c | Yes | Yes | Change log maps each edit or refusal to a feedback source. |
| 3.1 Q4 | MCQ – applied | a | Yes | Yes | A change with no finding is taste; label it and be ready to undo. |
| 3.1 Q5 | MCQ – concept | d | Yes | Yes | Trade-off = accept a downside to protect a more important outcome. |
| 3.2 Q1 | MCQ – applied | a | Yes | Yes | Name simulated feedback; do not claim users already love the offer. |
| 3.2 Q2 | MCQ – applied | c | Yes | Yes | Two findings fight: record both plus the MVP tie-break. |
| 3.2 Q3 | MCQ – concept | b | Yes | Yes | State both sides, tie to time or MVP, and name the remaining risk. |

---

## Distractor QC (incorrect options are actually wrong)

| Check | Result |
|-------|--------|
| Second correct option in any item | **None found** |
| Distractors map to taught misconceptions | Yes — idea card leak; mixed voices; taste questions; invented features as proof; MVP as looks; decorate-first; chatbot asked so build it; “users love us”; hidden taste edits |
| Stems that point at the lesson, session, or clip | **None found** |
| Lecture story stems reused (WashQ, Priya, Rohan, Aarav, laundry basement, chai stall) | **Not used as question stems** |

---

## Final Verdict

**PASS** — Six files use SAL family IDs (`.1` main, `.2` revision). All `.1` files have 5 questions and all `.2` files have 3. All 24 items are concept-based, marked answers match the lecture notes, options are length-balanced with a mixed answer key (6-6-6-6), and stems are general: no lecture-story examples and no “in this lesson” self-reference.
