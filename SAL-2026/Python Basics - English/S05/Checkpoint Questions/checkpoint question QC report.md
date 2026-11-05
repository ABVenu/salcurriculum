# Checkpoint Questions QC Report — S05

## Summary

| Metric | Result |
|--------|--------|
| Total questions | 16 (Scene 1.0: 5, Scene 1.1: 3, Scene 2.0: 5, Scene 2.1: 3) |
| Correct option verified | **16 / 16 Pass** |
| Relevancy to lecture topic | **16 / 16 Yes** |
| Code outputs executed & matched | **12 / 12 Pass** |
| Out of syllabus | **None** |
| Notes-example reuse | **None** |
| Logical mistakes | **False** |
| Presentation mistakes | **False** |

| Rating | Score |
|--------|-------|
| Content Coverage | 5 |
| Creativity | 5 |
| Structural Adherence | 5 |
| No Logical Mistakes | True |
| No Presentation Mistakes | True |

---

## LO / Scene Coverage

| Scene | Topic | LOs covered |
|-------|-------|-------------|
| 1.0 | Lists basics | LO1 mixed/ordered list, LO2 indexing + negative index, LO4 `len()` + `append()` |
| 1.1 | Lists applied | LO3 loop / sum, reverse iteration, index assignment vs `append()` |
| 2.0 | Strings basics | LO1 immutability idea, LO2 index + slice, LO3 even-index loop, LO4 concatenation |
| 2.1 | Strings applied | concatenation + `len()`, slice + reverse, immutability / `TypeError` |

---

## Question-wise QC

| Question | Type | Correct Option | Option Correct? | Relevancy | Remarks |
|----------|------|----------------|-----------------|-----------|---------|
| Scene 1.0 Q1 | MCQ – concept | d | Yes | Yes | List = ordered growable row; distractors mix string/set ideas. |
| Scene 1.0 Q2 | MCQ – code output | b | Yes | Yes | Executed: `colors[2]` → `yellow`. |
| Scene 1.0 Q3 | MCQ – code output | a | Yes | Yes | Executed: `temps[-2]` → `19`. |
| Scene 1.0 Q4 | MCQ – code output | c | Yes | Yes | Executed: mixed list `len` → `4`. |
| Scene 1.0 Q5 | MCQ – code output | b | Yes | Yes | Executed: after `append`, len `3`, last `canvas`. |
| Scene 1.1 Q1 | MCQ – code output | c | Yes | Yes | Executed: sum loop → `100`. |
| Scene 1.1 Q2 | MCQ – code output | a | Yes | Yes | Executed: reverse range → `14 11 8 5`. |
| Scene 1.1 Q3 | MCQ – concept | c | Yes | Yes | Index assignment replaces without growing. |
| Scene 2.0 Q1 | MCQ – concept | a | Yes | Yes | String = immutable character sequence. |
| Scene 2.0 Q2 | MCQ – code output | d | Yes | Yes | Executed: `O`, `E`, `6`. |
| Scene 2.0 Q3 | MCQ – code output | b | Yes | Yes | Executed: even indexes → `C O D`. |
| Scene 2.0 Q4 | MCQ – syntax | c | Yes | Yes | Correct concatenation with space via `+`. |
| Scene 2.0 Q5 | MCQ – code output | a | Yes | Yes | Executed: `"Notebook"[0:4]` → `Note`. |
| Scene 2.1 Q1 | MCQ – code output | b | Yes | Yes | Executed: `Hi Team`, length `7`. |
| Scene 2.1 Q2 | MCQ – code output | d | Yes | Yes | Executed: `LAN` and `TENALP`. |
| Scene 2.1 Q3 | MCQ – concept | c | Yes | Yes | In-place char assign raises `TypeError`. |

---

## Code Verification Log

| Question | Expected (marked answer) | Actual runtime output | Match |
|----------|--------------------------|----------------------|-------|
| 1.0 Q2 | `yellow` | `yellow` | Yes |
| 1.0 Q3 | `19` | `19` | Yes |
| 1.0 Q4 | `4` | `4` | Yes |
| 1.0 Q5 | `3` then `canvas` | same | Yes |
| 1.1 Q1 | `100` | `100` | Yes |
| 1.1 Q2 | `14 11 8 5` | same | Yes |
| 2.0 Q2 | `O` / `E` / `6` | same | Yes |
| 2.0 Q3 | `C O D` | same | Yes |
| 2.0 Q5 | `Note` | `Note` | Yes |
| 2.1 Q1 | `Hi Team` / `7` | same | Yes |
| 2.1 Q2 | `LAN` / `TENALP` | same | Yes |
| 2.1 Q3 | `TypeError` on assign | raised | Yes |

---

## Option Fairness

| Check | Result |
|-------|--------|
| Answer letter mix (a/b/c/d) | 4 / 4 / 5 / 3 — no dominant letter |
| Always-same-letter pattern | No |
| Longest option always right | No |
| Shortest option always right | No |
| Lecture-note examples reused | No (fresh examples throughout) |

---

## Distractor QC

| Question | Distractors sound? | Notes |
|----------|-------------------|-------|
| All 16 | Yes | Wrong options use common slips (1-based index, `len` of one value, stop included in slice, string treated as list). No second correct option found. |

---

## Final Verdict

**PASS** — All marked answers are correct and relevant to S05 topics (lists, indexing, loops, `append()`, strings, slicing, concatenation, immutability). No fixes required.
