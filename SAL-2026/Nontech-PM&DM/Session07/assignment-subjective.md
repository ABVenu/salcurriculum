# Assignment Subjective

Difficulty: Medium

Questions: 1 applied task (document submission)

---

## Task: Build and test a mini AI workflow on generic work artifacts

### Context

You are a product lead at **Northline Software**, preparing an internal readout on a **"Team Inbox"** feature (shared triage for customer emails). You are **not** using any vendor case study from class kits. Use the **fictional snippets below** plus any AI chat tool you already have access to.

**Snippet A — meeting excerpt (fictional)**  
- 10:04 — **Jordan (PM):** Let's pilot Team Inbox with **support only**, not sales.  
- 10:18 — **Sam (Eng):** We can ship a read-only view in **three weeks** if design signs off by Friday.  
- 10:31 — **Jordan:** Actually, after legal joined, we agreed **pilot is support-only, start date 3 Nov**, not "three weeks from today."  
- 10:44 — **Riley (Legal):** No customer PII in the pilot dashboard. Mask email domains in the UI.  
- 10:52 — **Alex (Ops):** I'll draft the runbook.  
- 10:53 — **Alex (Design):** I'll wireframes by Thursday. *(Two different people named Alex.)*

**Snippet B — chat (fictional)**  
- **Director:** 👍 on the pilot plan thread.

**Snippet C — email (fictional)**  
- Subject: Pilot scope  
- Body: "Confirming: **support queue only**, go-live **3 Nov**, pending design sign-off Friday."

### What you must produce (in one Google Doc)

1. **Lazy baseline (short):** Run Snippet A alone with a one-line prompt such as *"Summarize this meeting."* Paste the model output (or a redacted excerpt). In **three bullets**, note one plausible error type (wrong date, wrong owner, inferred plan, etc.).

2. **Structured prompt (your words):** Write a reusable **chief-of-staff-style** prompt (role, rules, output sections) that would handle Snippet A with: ≤5 bullet executive summary (agreed only), action table with **full names** for both Alexes, **UNASSIGNED** if needed, and **timestamp** when a decision changed.

3. **Merged read (A + B + C):** In a **new chat**, attach or paste all three snippets. Use a **conflict-aware merge** prompt you write (chronology, emoji ≠ approval, superseded items). Paste the **decisions** section only (max 8 lines).

4. **Fact-check drill:** The model once produced this line for a different report: *"Northline grew revenue 40% last year."* Without browsing, write the **Step 1 claim-row** you would add to a ledger (ID, exact claim, claim type, risk level). Then write **two sentences** on what Step 2 would require (source tier, label if unverified).

5. **Library row:** Add one row to a personal **FTA-style** table for either **"meeting → action table"** or **"weekly status from bullets"**: frequency (1–5), manual time (1–5), AI-assisted time (1–5), risk if wrong (1–5), and one line on whether the template is worth keeping.

### Submission instruction

1. Open a new browser tab. In the address bar type **`doc.new`** and press **Enter**. A blank Google Doc opens in your Google account.
2. Complete all five parts of this task in that doc. Write clearly; add screenshots of AI outputs where helpful (redact real company data if you also test on live work).
3. Click the blue **Share** button (top right).
4. Under **General access**, open the dropdown and select **Anyone with the link**. Keep the role as **Viewer**.

<img src="https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/nontech-pm-dm/session07/s07-assignment-share-anyone-with-link.png?v=20261017" width="300" alt="Google Doc share dialog with General access set to Anyone with the link" />

5. Click **Share** again if needed, then click **Copy link**.

<img src="https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/nontech-pm-dm/session07/s07-assignment-copy-link.png?v=20261017" width="300" alt="Google Doc share dialog highlighting the Copy link button" />

6. Paste that link into the **answer text box** on the learning platform and submit.

---

## Answer Explanation

### Ideal walkthrough

1. **Lazy baseline:** Expect confident text that may say "three-week ship" without the **3 Nov** revision, assign tasks to **Alex** without a surname, or invent a rollout plan. Good answers name **inference**, **owner collision**, or **missed reversal** at 10:31.

2. **Structured prompt:** Must include agreed-only decisions, citation/timestamp habit, action table columns, full names for **Alex Ops** vs **Alex Design**, parking lot if used, and no invented timeline. A pasted skeleton matching these guardrails is sufficient; exact wording may vary.

3. **Merged read:** Decisions should reflect **support-only pilot**, **3 Nov** go-live **conditional on design sign-off Friday**, **PII masking**, and treat **👍** as **not** sole approval. Latest email + meeting revision should beat earlier "three weeks" wording.

4. **Fact-check drill:** Sample ledger row: ID 1 | "Northline grew revenue 40% last year" | NUMBER | HIGH (if used in external deck). Step 2: locate Tier 1 filing or official annual report, recompute growth, label **Verified / Partially true / False / Unverifiable**; do not ship if unverified.

5. **FTA row:** Example — weekly status: frequency 4, manual 3, AI 1, risk 2 → worth keeping because repeat is high and verification is light internal email. Meeting→actions might be frequency 3, manual 4, AI 1, risk 4 → keep template but always self-check owners.

### Alternative approaches

- Students may use Claude, ChatGPT, Gemini, or Copilot; tool choice does not matter if prompts and outputs are shown.
- For part 3, a well-reasoned **manual** merge table written by the student is acceptable if they explain that the model failed and they corrected it in the doc.

### What fails the task

- Doc uses only lazy prompts with no structured template.
- Merge section treats chat 👍 as legal sign-off.
- No disambiguation of the two Alexes.
- Fact-check part skips claim typing or Tier 1/Tier 2 language.
- Link not viewable to anyone with the link.
