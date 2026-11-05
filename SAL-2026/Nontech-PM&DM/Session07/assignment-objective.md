# Assignment Objective

Total Questions: 10

Difficulty Flow: Easy → Moderate → Hard

Question Types:
- 6 MCQ (Single Correct): Q1–Q6
- 4 MSQ (Multiple Correct): Q7–Q10

---

## Q1 (MCQ, Easy)

A colleague uploads a one-hour meeting transcript and sends the chat only this line: **"Summarize this."**

What is the most likely problem in the output?

A. The model will refuse to read the file because the prompt is too short.
B. The summary may sound confident while inventing owners, dates, or decisions that were never agreed.
C. The tool will automatically add speaker timestamps even when the prompt did not ask for them.
D. The output will always be under five bullets, so leadership cannot use it.

**Correct Answer:** B

**Answer Explanation:**  
A vague prompt pushes the model to fill gaps with plausible text. That often creates wrong owners, inferred plans, and decisions that were only discussed, not agreed. Short prompts do not force refusal. Timestamps appear only when you ask for evidence rules. Length is not guaranteed to stay short.

**Why other options are wrong:**  
- A: The model usually still reads the attachment. The issue is quality and accountability, not refusal.
- C: Timestamps and citations need explicit instructions. They are not automatic.
- D: Lazy prompts often produce long, unusable walls of text, not guaranteed brevity.

---

## Q2 (MCQ, Easy)

Two people on the same call share the first name **Alex**. The AI assigns a follow-up task to **Alex** with no last name.

What prompt rule would have prevented this?

A. Ask for a creative headline so the summary feels more engaging.
B. Tell the model to shorten the summary to three bullets maximum.
C. Ask the model to guess the manager as default owner when the transcript is unclear.
D. Require **full names** when disambiguating owners, and flag **UNASSIGNED** when no owner was named.

**Correct Answer:** D

**Answer Explanation:**  
Accountable action tables need full names when first names collide, and an explicit **UNASSIGNED** flag when ownership was never agreed. Creativity, brevity alone, or defaulting to a manager all increase wrong assignments.

**Why other options are wrong:**  
- A: Engagement does not fix owner identity.
- B: Shorter output can hide errors; it does not disambiguate people.
- C: Guessing a manager is a common hallucination pattern you are trying to stop.

---

## Q3 (MCQ, Easy)

You finished analysis on **Project Atlas** in one chat window. You now open the same window and attach files for **Project Beacon**.

What risk are you trying to avoid?

A. Context from Atlas can bleed into Beacon answers, mixing owners, numbers, or decisions.
B. The model will charge double tokens for two projects in one thread.
C. The platform will delete Atlas files when Beacon files are attached.
D. You cannot attach more than one file per chat on any tool.

**Correct Answer:** A

**Answer Explanation:**  
A **new chat per project** keeps sources and conclusions separate. Mixed context produces mixed summaries. Token cost is not the main professional risk. Platforms do not delete prior attachments automatically, and multi-file attach is usually allowed.

**Why other options are wrong:**  
- B: Cost may rise with context size, but bleed-through is the accountability failure.
- C: Attachments typically remain in thread history unless you start fresh.
- D: Multi-file upload is a common feature for merge workflows.

---

## Q4 (MCQ, Easy)

During a call the team first says **"launch to all users,"** then later agrees **"launch to 10% first."**

What should appear in the final **decisions** list?

A. Both lines, because both were spoken at some point.
B. Only **"launch to all users,"** because it came first.
C. Only **"launch to 10% first,"** with a note that the decision changed.
D. Neither line, because they conflict.

**Correct Answer:** C

**Answer Explanation:**  
The **last explicit agreement** wins. Note that the decision changed so readers know the earlier line was superseded. Listing both as decisions creates false commitments.

**Why other options are wrong:**  
- A: Brainstorm and reversal are not double decisions.
- B: First statement is outdated once the team revises.
- D: The final agreement is real; omitting it hides the actual decision.

---

## Q5 (MCQ, Moderate)

You merge **chat, email, and two meeting notes** about one initiative. A leader left a **👍 reaction** on a chat message.

How should a structured merge prompt treat that reaction?

A. As full sign-off, equivalent to a written approval email.
B. As irrelevant noise that must be deleted from the timeline.
C. As approval only if the leader is senior enough, regardless of what they said later.
D. As acknowledgement only, not approval to ship, unless a later message explicitly approves.

**Correct Answer:** D

**Answer Explanation:**  
Emoji reactions often mean **"I saw this"** or **"I like the idea,"** not **"execute."** Good merge prompts separate acknowledgement from sign-off and follow later explicit approvals.

**Why other options are wrong:**  
- A: Teams have shipped work on thumbs-up alone; that is exactly the failure mode.
- B: The reaction is evidence of tone and sequence; it belongs in the timeline with correct interpretation.
- C: Seniority does not turn an emoji into a contract.

---

## Q6 (MCQ, Moderate)

An AI research draft says **"revenue was $190B."** The filing table in the source shows **$190B gross bookings** and a much smaller **revenue** line.

What is the best first response before sending the deck?

A. Round $190B to $200B so the slide looks cleaner.
B. Delete all numbers so nobody can challenge the deck.
C. Ask the same model **"Are you sure?"** and paste its yes/no answer to leadership.
D. Run a **claim ledger**, then verify the number against the filing with revenue vs gross bookings separated.

**Correct Answer:** D

**Answer Explanation:**  
Financial mix-ups (bookings vs revenue) are common. Extract claims first, verify against **Tier 1** sources, recompute, and label outcomes (verified, false, partially true). Rounding hides errors. Removing numbers avoids the job. Self-confirmation by the same model repeats the mistake.

**Why other options are wrong:**  
- A: Cosmetic rounding on a wrong metric stays wrong.
- B: Leadership still needs verified figures, not an empty deck.
- C: The model may confidently reaffirm a hallucination.

---

## Q7 (MSQ, Moderate)

You are designing a **chief-of-staff**-style meeting prompt.

Which instructions belong in the template?

Select all that apply.

A. Executive summary capped at five bullets, **explicitly agreed** decisions only.
B. Action table with **Action | Owner | Due | Source quote**, and **UNASSIGNED** when no owner was named.
C. Invent a detailed day-by-day project plan when the meeting did not schedule one.
D. If a decision changed mid-meeting, show the **final** wording and note the **timestamp**.

**Correct Answer:** A, B, D

**Answer Explanation:**  
Strong templates bound role, evidence, and shape: agreed decisions, cited actions, disambiguated owners, and reversal handling. Invented schedules are inference dressed as plan.

**Why other options are wrong:**  
- C: Day-by-day plans not agreed in the room are a classic hallucination pattern.

---

## Q8 (MSQ, Moderate)

Which recurring tasks are **strong** candidates for a reusable AI prompt in your personal library?

Select all that apply.

A. Weekly team status email drafted from your bullet notes each Friday.
B. One-time board presentation on a confidential legal dispute with no reusable pattern.
C. Triage of repetitive inbox labels (reply today, delegate, archive) on similar threads.
D. Final sign-off on regulated external text where only a named human may approve send.

**Correct Answer:** A, C

**Answer Explanation:**  
Libraries pay off on **frequent, repeatable, medium-risk** patterns: status reports and inbox triage. One-off confidential legal work and final regulated send stay human-gated.

**Why other options are wrong:**  
- B: Rare, high-stakes, non-repeatable work does not repay template maintenance.
- D: AI may draft, but approval must not be automated away.

---

## Q9 (MSQ, Hard)

You are running a **two-step fact-check** on a long AI-generated report.

Which steps match the workflow?

Select all that apply.

A. Step 1: extract every checkable claim into a ledger; **do not verify yet**.
B. Step 1: verify everything in one pass while extracting, to save time.
C. Step 2: verify high and medium claims using Tier 1 filings and Tier 2 reputable news with traceable citations.
D. Step 2: label each claim Verified, Partially true, False, Unverifiable, or Outdated after recomputing maths where needed.

**Correct Answer:** A, C, D

**Answer Explanation:**  
Separation of **extract** and **verify** keeps rules explicit. Tiered sources and labeled outcomes make the deck defensible. Skipping straight to verify during extract blurs guardrails.

**Why other options are wrong:**  
- B: Combined extract-and-verify often skips the claim inventory and repeats errors faster.

---

## Q10 (MSQ, Hard)

Before you send research or a leadership summary drafted with AI, which risk checks are appropriate?

Select all that apply.

A. **Hallucination:** quotes or stats with no line in the source files.
B. **Outdated context:** recommending a feature that already shipped last month.
C. **Biased logic:** ranking the author's hypothesis above what participants actually said.
D. **Formatting only:** choosing Arial instead of Helvetica in the slide master.

**Correct Answer:** A, B, C

**Answer Explanation:**  
Professional QA scans for unsupported facts, stale product state, and hypothesis overweighting (plus PII/compliance in full workflows). Font choice is not an AI integrity risk.

**Why other options are wrong:**  
- D: Brand typography is a design choice, not a fact-check or research-integrity failure.
