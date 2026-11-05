# Assignment Objective

Total Questions: 10

Difficulty Flow: Easy → Moderate → Hard

Question Types:
- 6 MCQ (Single Correct): Q1–Q6
- 4 MSQ (Multiple Correct): Q7–Q10

---

## Q1 (MCQ, Easy)

A table of weekly lab bookings shows only this:

| Week | Bookings |
|------|----------|
| 1 | 80 |
| 2 | 82 |
| 3 | 79 |
| 4 | 81 |

Which reply is a complete summary of this table?

A. Bookings sit near 80 every week, the pattern is flat, and no week breaks that band.
B. Bookings fell all month, so the lab should close on Fridays even though no weekday column exists.
C. The average is 100, because four weeks of bookings always round up to the next hundred.
D. Week 2 caused the other weeks to stay flat, so the lab should add seats next Monday.

**Correct Answer:** A

**Answer Explanation:**  
A complete summary reports overall performance, the macro pattern, and any anomaly. Here the four weeks add to 322, so the average is 80.5 — near 80. The line is flat (79 to 82). No week breaks that band, so there is no anomaly to flag. That is the whole summary this table can support.

**Why other options are wrong:**  
- B: The numbers are not falling, and the table has no weekday column, so a Friday closure is invented.
- C: 322 ÷ 4 = 80.5, not 100. A fluent round-up is still a wrong number.
- D: Nothing in the table shows that Week 2 caused the other weeks. A cause that was never measured does not belong in the summary.

---

## Q2 (MCQ, Easy)

Which of these is a targeted analytical query?

A. What do you see in this data, and what should the team feel about the business this month?
B. Any trends here? Give me insights and a full story of the business.
C. Rank these five routes by on-time rate and state the gap between the best and the worst.
D. Analyze this sheet and tell me whatever stands out as interesting.

**Correct Answer:** C

**Answer Explanation:**  
A targeted query asks for one comparison and a number you can check. Ranking five routes and stating the gap between best and worst is that kind of question. The other three ask for a vague essay ("what do you see", "any trends", "analyze this") and do not name the comparison.

**Why other options are wrong:**  
- A: "What do you see" plus a request for a feeling is open-ended. It does not name a metric or a gap.
- B: "Any trends" and "a full story" invite a broad reply instead of one scoped comparison.
- D: "Whatever stands out" lets the tool choose the question. That is not a targeted query.

---

## Q3 (MCQ, Easy)

A chat tool is told: 36 complaints came from 900 tickets. It replies, "the complaint rate is about 36%."

What should you do?

A. Repeat 36% in the report, because the reply used the number 36 that appears in the table.
B. Recompute 36 ÷ 900 yourself. That is 4%, so do not forward 36% as the complaint rate.
C. Round the stated 36% up to 40% so the written report sounds more serious to a manager.
D. Delete the metric entirely, because a chat tool must never be asked for a percentage at all.

**Correct Answer:** B

**Answer Explanation:**  
36 ÷ 900 = 0.04, which is 4%, not 36%. The reply treated the count 36 as if it were already a percentage. Recompute the ratio before you repeat it. A wrong rate would send a team chasing a problem about nine times larger than the table shows.

**Why other options are wrong:**  
- A: The digit 36 is in the table, but 36 complaints out of 900 tickets is not a 36% rate.
- C: Rounding a wrong percentage upward makes the error larger. Serious tone is not a substitute for arithmetic.
- D: Asking for a percentage is fine. The failure is forwarding the percentage without checking the division.

---

## Q4 (MCQ, Easy)

You want the average Wednesday canteen bill. The source file has 14,000 raw bills, one row per bill.

What should you hand the chat tool?

A. All 14,000 raw rows, plus the prompt "summarize this", with Wednesday never named.
B. A prompt about why students dislike Wednesday food, even though no dislike column exists yet.
C. Only the file name, plus a prompt that asks the tool to invent a typical canteen bill.
D. A small Wednesday table grouped to that question, then a prompt that asks for the average.

**Correct Answer:** D

**Answer Explanation:**  
Shrink the data to the question before you ask. The question is the Wednesday average, so the useful input is a small table of Wednesday bills, followed by a prompt that asks for that average. A summary is only as good as the table behind it. Dumping every raw row with "summarize this" skips that step.

**Why other options are wrong:**  
- A: Fourteen thousand unsorted rows, with Wednesday never named, is the opposite of shrinking the data to the question.
- B: Dislike is not in the file. A prompt cannot ask for a cause the columns do not contain.
- C: A file name is not the data, and inventing a typical bill is not a summary of these bills.

---

## Q5 (MCQ, Moderate)

A clinic table shows show-up rate by how the visit was booked:

| Group | n | Show-up rate |
|-------|---|--------------|
| Booked by phone | 240 | 70% |
| Booked in the app | 260 | 72% |

People who booked in the app also live closer to the clinic, on average, than people who booked by phone.

Which sentence is the careful one?

A. App booking is associated with a similar show-up rate. This table does not prove the app caused patients to attend.
B. The app caused patients to show up, so the clinic should close phone booking before next week.
C. A 2-point gap on these two large groups is wide enough to treat the app as the reason people attend.
D. Living closer cannot be part of the story, so the 2-point gap proves that the app itself works.

**Correct Answer:** A

**Answer Explanation:**  
70% and 72% are nearly the same, on large groups (240 and 260). That is a flat spread, not a headline gap. The honest sentence is association, not causation: app bookers show up at a similar rate. The table also cannot prove the app caused attendance, because those patients live closer, and distance was not held constant.

**Why other options are wrong:**  
- B: "Caused" is stronger than the table. Closing the phone line is a decision this 2-point gap does not support.
- C: Two points is a narrow spread. A narrow spread on large groups is a finding that the booking method is not the driver.
- D: Distance is a plausible other explanation. Ignoring it and calling the gap proof is the causation mistake.

---

## Q6 (MCQ, Moderate)

Two findings from a bus-pass desk:

- Finding 1: The morning counter converts 58% of 40 enquiries. The evening counter converts 80% of 35 enquiries.
- Finding 2: Student passes convert at 41% of 520 forms. Staff passes convert at 44% of 480 forms.

Which action fits these two findings?

A. Act on Finding 1 only. A higher percentage is always the better decision, and a group of about 40 is already a large sample.
B. Act on Finding 2 only. A 3-point gap between two groups of about 500 is wide enough to redesign the pass desk.
C. Act on neither yet. Finding 1 rests on about 40 enquiries, and Finding 2 is only a 3-point gap on large groups.
D. Act on both this week. Any gap between two percentages is enough to change how the desk works.

**Correct Answer:** C

**Answer Explanation:**  
Finding 1 looks dramatic (58% vs 80%) but each counter has only about 35–40 enquiries. A percentage on a small *n* can swing by chance, so it is not ready to act on. Finding 2 sits on large groups, but 41% versus 44% is a flat spread of about 3 points. A flat spread is a real result — that split is not the driver — and it is not a reason to redesign the desk. Set both aside for now.

**Why other options are wrong:**  
- A: About 40 enquiries is a thin sample. A bigger percentage on a thin sample is not automatically the decision.
- B: Three points on large groups is a narrow spread, not a wide one. Narrow is useful, and it does not justify a redesign.
- D: Not every gap is actionable. Small samples and flat spreads are both reasons to wait.

---

## Q7 (MSQ, Moderate)

You paste a small dashboard export as a table. The colours, tile sizes, and on-screen positions are gone.

Which of the following are correct?

A. Name the headline tile and the breakdown in the prompt, because the pasted table no longer shows size or colour.
B. Skip naming the rows. A pasted table is always labelled the same way a person would label the dashboard.
C. Paste fits this small aggregated table. Upload fits a raw file of many thousands of rows, when the tool supports files.
D. Once the summary sounds fluent, you can skip checking it against the source table.

**Correct Answers:** A, C

**Answer Explanation:**  
A dashboard exported as a table loses colour, size, and position, so the prompt has to name the headline tile and the breakdown. Paste is the right method for a small table that is already grouped. Upload is the right method for a large raw file, when the tool can read files. Fluency is not a check. Every claim still has to match the source.

**Why other options are wrong:**  
- B: You should not assume the tool will label rows the way you would. The words in the prompt have to carry the meaning the layout used to carry.
- D: A fluent summary can still invent a cause, round badly, or add a trend the table never showed. Check it before you forward it.

---

## Q8 (MSQ, Moderate)

The only data given is this:

| Day | Orders |
|-----|--------|
| Monday | 22 |
| Tuesday | 24 |
| Wednesday | 21 |
| Thursday | 23 |
| Friday | 22 |

The reply says: "Orders are collapsing, and Wednesday's dip happened because the kitchen closed early, so cancel Wednesday service."

Which judgements are correct?

A. The five days sit in a tight band from 21 to 24. This table does not show a collapse.
B. "The kitchen closed early" is a cause this table does not contain.
C. Wednesday at 21 should lead the report, because the smallest number on a page is always the anomaly.
D. The call to cancel Wednesday service goes beyond what this five-day table can support.

**Correct Answers:** A, B, D

**Answer Explanation:**  
Overall performance is about 22 orders a day. The macro pattern is flat: every day is between 21 and 24. Wednesday is the low end of that same band, which is ordinary day-to-day noise, not a break in the pattern. The kitchen closure is not in the table, so it is an invented cause. Cancelling a service is a decision this table cannot justify.

**Why other options are wrong:**  
- C: Being the smallest value is not enough. An anomaly has to break the pattern. 21 sits inside 21–24, so it should not be written up as a spike or a collapse.

---

## Q9 (MSQ, Hard)

A table lists weekly book issues by genre for 10 weeks. Which of the following are sound steps in a prompt chain?

A. Next, ignore whatever the tool just answered, and ask it to invent five new genres with prices.
B. First ask this scoped question: across all 10 weeks, are total book issues flat, rising, or falling?
C. Open with "Analyze this data" and stop after that one reply, because a chain means a single long prompt.
D. After Fiction is called the largest, ask if any one Fiction week sits far from its other weeks.

**Correct Answers:** B, D

**Answer Explanation:**  
A prompt chain is a sequence of connected questions. Each one uses the previous answer. Start with the shape over time (flat, rising, or falling). If Fiction comes back as the largest genre, the next question stays on Fiction and asks whether one week is unusual against Fiction's own weeks. That is the trend step, then a follow-up the answer made relevant.

**Why other options are wrong:**  
- A: New genres and prices are not in the table. A later prompt should narrow the last answer, not abandon the data.
- C: One open prompt is the vague request a chain is meant to replace. A chain is several prompts, each built on the reply before it.

---

## Q10 (MSQ, Hard)

Which statements about a decision-ready memo are correct?

A. The headline is one finding you have already checked, and every number in the memo can be traced to the source.
B. "Improve the experience" is a complete recommendation, because a memo should stay broad so the team can interpret it later without naming a metric.
C. If two things move together, the memo should say one caused the other, so the reader has a clear villain.
D. The recommendation names one change to run next, and the proposed check names the metric that will show whether it worked.

**Correct Answers:** A, D

**Answer Explanation:**  
A decision-ready memo is built only from claims that have already been checked. The headline is one verified finding, and every number points back to a row you were given or recomputed. The recommendation is one specific change a team can run next, not a slogan. The proposed check says how you will know it worked, including which metric you will compare.

**Why other options are wrong:**  
- B: "Improve the experience" does not say what to build or run. A recommendation has to be specific and testable.
- C: Two things moving together is correlation. The memo should say "associated with" unless there is real evidence of causation. Naming a villain the table did not prove is an invented cause.
