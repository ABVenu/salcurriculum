# Checkpoint Questions QC Report — S04

## Summary

| Metric | Result |
|--------|--------|
| Total questions | 16 (Scene 1.0: 5, Scene 1.1: 3, Scene 2.0: 5, Scene 2.1: 3) |
| Correct option verified | **16 / 16 Pass** |
| Relevancy to lecture topic | **16 / 16 Yes** |
| Code outputs executed & matched | **7 / 7 Pass** |
| Out of syllabus | **None** |
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

## Question-wise QC

| Question | Type | Correct Option | Option Correct? | Relevancy | Remarks |
|----------|------|----------------|-----------------|-----------|---------|
| Scene 1.0 Q1 | MCQ – concept | c | Yes | Yes | `break` exits current loop; next code after loop runs. Matches lecture definition. |
| Scene 1.0 Q2 | MCQ – code output | a | Yes | Yes | Executed: prints `1 2 3`. `break` at 4 before `print`. |
| Scene 1.0 Q3 | MCQ – concept | a | Yes | Yes | `if` + `break` can exit early while `while` condition is still true. |
| Scene 1.0 Q4 | MCQ – concept | b | Yes | Yes | Correct `continue` vs `break` distinction. Other options are false. |
| Scene 1.0 Q5 | MCQ – code output | c | Yes | Yes | Executed: prints `1 2 4 5 7`. Skips multiples of 3 via `continue`. |
| Scene 1.1 Q1 | MCQ – code output | a | Yes | Yes | Executed: prints `1 3 4 5`. Combines `continue` then `break`. |
| Scene 1.1 Q2 | MCQ – debug | d | Yes | Yes | Update after `continue` → infinite loop. Taught explicitly in notes. |
| Scene 1.1 Q3 | MCQ – applied | d | Yes | Yes | Stop at 9 → `break` first; skip multiples of 4 → `continue` next. |
| Scene 2.0 Q1 | MCQ – concept | b | Yes | Yes | Nested loops when each outer value needs a full inner cycle. |
| Scene 2.0 Q2 | MCQ – syntax | c | Yes | Yes | Only option c has valid indented nesting. a is IndentationError; b is sequential; d is not nested. |
| Scene 2.0 Q3 | MCQ – code output | a | Yes | Yes | Executed: pairs match option a. Inner `range(0, 5, 2)` → 0, 2, 4. |
| Scene 2.0 Q4 | MCQ – count | d | Yes | Yes | Executed: 6 prints (3 × 2). |
| Scene 2.0 Q5 | MCQ – concept | b | Yes | Yes | Independent start/stop/step per nesting level. |
| Scene 2.1 Q1 | MCQ – code output | b | Yes | Yes | Executed: inner `break` stops only inner loop; outer continues. |
| Scene 2.1 Q2 | MCQ – count | a | Yes | Yes | Executed: 6 lines (1+2+3). Inner stop depends on outer `x`. |
| Scene 2.1 Q3 | MCQ – concept | c | Yes | Yes | Innermost-loop rule for `break` — matches lecture. |

---

## Code Verification Log

| Question | Expected (marked answer) | Actual runtime output | Match |
|----------|--------------------------|----------------------|-------|
| 1.0 Q2 | `1 2 3` | `1 2 3` | Yes |
| 1.0 Q5 | `1 2 4 5 7` | `1 2 4 5 7` | Yes |
| 1.1 Q1 | `1 3 4 5` | `1 3 4 5` | Yes |
| 2.0 Q3 | `(1,0)(1,2)(1,4)(2,0)(2,2)(2,4)` | same | Yes |
| 2.0 Q4 | 6 times | 6 | Yes |
| 2.1 Q1 | `(1,1)(1,2)(2,1)(2,2)` | same | Yes |
| 2.1 Q2 | 6 lines | 6 | Yes |

---

## Distractor QC (incorrect options are actually wrong)

| Question | Distractors sound? | Notes |
|----------|-------------------|-------|
| All 16 | Yes | No second correct option found. Wrong options mix common misconceptions (`continue` vs `break`, stop value included, outer also stops, etc.). |

---

## Final Verdict

**PASS** — All marked answers are correct and relevant to S04 topics (`break`, `continue`, nested loops, `range` start/stop/step, innermost-loop rule). No fixes required.
