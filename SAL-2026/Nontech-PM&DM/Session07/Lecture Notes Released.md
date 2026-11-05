# AI for Everyday Work: Streamlining Daily Tasks

## Introduction — why everyday AI work needs discipline

Most knowledge work now produces **more text than anyone can read**: recorded calls, **AI notetakers** (Otter, Read AI), customer research exports, and updates split across **email, Slack, Teams, and meeting transcripts**. Many teams paste those files into **ChatGPT, Claude, Perplexity, or Copilot** and expect a perfect summary at the right tone. The output often **looks** finished while decisions, owners, and numbers are wrong.

The failure mode is familiar. A lazy prompt — “analyze this transcript” — returns pages of inference. Two people named **Rahul** get merged into one owner. A **👍** on Slack is treated as approval. Finance figures from email never meet the numbers in the AI deck. Research synthesis invents quotes or ranks the PM’s guess above what users actually said.

This lesson is about **streamlining daily tasks with AI** in a way that stays **predictable and verifiable**: strong prompts for summaries and action items, reusable templates for repeating PM work, and a fact-check pass before anything professional goes out.

You will practise on the kits linked below — **PhonePe** discovery, **Swiggy** monsoon ops (four sources), **Uber** market research, **Google Maps** and **Zepto** user research — then apply the same workflow to your own files.

---

## Session practice files — AI everyday work kit

Download or open these in your AI tool when you practise the exercises in these notes.

**Kit home:** [AI everyday work kit — all practice files](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/ai_everyday_work_kit/)

### 01 — PhonePe (meeting summarization)

- [PhonePe_Discovery_Meeting_Transcript.txt](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/ai_everyday_work_kit/01_PhonePe/PhonePe_Discovery_Meeting_Transcript.txt)

### 02 — Swiggy (multi-source merge)

- [Swiggy_Source_1_Slack_monsoon-ops.txt](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/ai_everyday_work_kit/02_Swiggy/Swiggy_Source_1_Slack_monsoon-ops.txt)
- [Swiggy_Source_2_Gmail_thread.txt](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/ai_everyday_work_kit/02_Swiggy/Swiggy_Source_2_Gmail_thread.txt)
- [Swiggy_Source_3_Meeting_Ops_Standup.txt](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/ai_everyday_work_kit/02_Swiggy/Swiggy_Source_3_Meeting_Ops_Standup.txt)
- [Swiggy_Source_4_Meeting_Leadership_Review.txt](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/ai_everyday_work_kit/02_Swiggy/Swiggy_Source_4_Meeting_Leadership_Review.txt)
- [Swiggy_AI_Generated_Summary_TO_AUDIT.md](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/ai_everyday_work_kit/02_Swiggy/Swiggy_AI_Generated_Summary_TO_AUDIT.md)

### 03 — Uber (fact-checking)

- [Uber_Competitor_Market_Research_Report.md](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/ai_everyday_work_kit/03_Uber/Uber_Competitor_Market_Research_Report.md)
- [Verification_Protocol_PROMPT.md](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/ai_everyday_work_kit/03_Uber/Verification_Protocol_PROMPT.md)

### 04 — Zepto (research audit)

- [Zepto_Source_1_Research_Brief.txt](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/ai_everyday_work_kit/04_Zepto_User_Research/Zepto_Source_1_Research_Brief.txt)
- [Zepto_Source_2_Raw_Interview_Notes.txt](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/ai_everyday_work_kit/04_Zepto_User_Research/Zepto_Source_2_Raw_Interview_Notes.txt)
- [Zepto_Source_3_Survey_Results.txt](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/ai_everyday_work_kit/04_Zepto_User_Research/Zepto_Source_3_Survey_Results.txt)
- [Zepto_AI_Synthesis_Report_TO_AUDIT.md](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/ai_everyday_work_kit/04_Zepto_User_Research/Zepto_AI_Synthesis_Report_TO_AUDIT.md)

### 05 — Google Maps (research audit)

- [GMaps_Source_1_Research_Brief.txt](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/ai_everyday_work_kit/05_GoogleMaps_User_Research/GMaps_Source_1_Research_Brief.txt)
- [GMaps_Source_2_Raw_Interview_Notes.txt](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/ai_everyday_work_kit/05_GoogleMaps_User_Research/GMaps_Source_2_Raw_Interview_Notes.txt)
- [GMaps_Source_3_Survey_Results.txt](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/ai_everyday_work_kit/05_GoogleMaps_User_Research/GMaps_Source_3_Survey_Results.txt)
- [GMaps_AI_Synthesis_Report_TO_AUDIT.md](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/ai_everyday_work_kit/05_GoogleMaps_User_Research/GMaps_AI_Synthesis_Report_TO_AUDIT.md)

---

## Why Daily AI Work Needs a System

- **Official Definition:** **Business-as-usual (BAU) work** is the repeating operational load — notes, triage, summaries, and small reports — that keeps a team aligned.
- **In Simple Words:** It is the admin layer around the real decisions.
- **Real-Life Example:** After a one-hour call, someone still has to answer: what was agreed, who owns what, and what changed at the end?

Tools such as **Otter**, **Read AI**, **ChatGPT**, **Claude**, **Perplexity**, and **Microsoft Copilot** can draft that layer. They cannot replace your judgment about **explicit agreement**, **risk**, and **facts**.

Three habits separate useful output from noise:

- **New chat per project** so PhonePe context does not leak into Swiggy analysis.
- **Attach the real source file** that matches your prompt (not an old attachment from another thread).
- **Prompt from a library** you refine over time, not a one-line “summarise this” each Monday.

**Activity: Name Your Leak Points**

List three daily tasks where you already use AI (for example email triage or meeting notes). For each, write one line on what goes wrong today — wrong owner, missed reversal, or over-confident summary.

---

## From Lazy Prompts to Accountable Summaries

### The PhonePe UPI Circle discovery call

**UPI Circle** (on PhonePe, aligned with NPCI’s framework) lets a **primary user** delegate payments to a **secondary user** within a spending cap — full delegation or approval per payment.

The sample transcript is a **product discovery** discussion. The opening idea sounds simple: pay on a friend’s behalf with a monthly budget (for example ₹5,000 split across family). Deeper conversation surfaces trust, visibility, and fraud anxiety — including a stat that **~31% of users aged 60+** tagged autopay debits as **unauthorized** in complaints.

A **lazy prompt** looks like this:

```text
Analyze this transcript for me.
[Attach transcript file]
```

The model may return a long executive summary, participant quotes, and an action table. It feels helpful until you try to **decide**. Problems you saw in class:

- **Inference dressed as plan** — day-by-day discovery schedules the meeting never agreed.
- **Wrong or fuzzy owners** — two people named Rahul; tasks assigned without a quote.
- **Hypothesis treated as decision** — “build for elderly users” before validation.
- **Volume overload** — more text than a human will read before the next meeting.

**Activity: Run the Lazy Baseline**

Upload the PhonePe transcript from your session kit. Use only the lazy prompt above. Note one decision that sounds firm but was never explicitly agreed in the room.

![Lazy prompt versus chief-of-staff prompt — vague ask versus structured summary, action table, and source citations](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/nontech-pm-dm/session07/s07-01-lazy-vs-chief-of-staff.png?v=20261017)

---

## Chief-of-Staff Prompting: Decisions, Citations, and Action Tables

Strong meeting prompts assign a **role**, bound the **output shape**, and require **evidence**.

- **Official Definition:** **Chain-of-thought citation prompting** asks the model to show *what* it concluded and *where* in the source each line came from (speaker, timestamp).
- **In Simple Words:** Every bullet must point back to a line someone actually said.
- **Real-Life Example:** Like a good minute-taker who writes “Agreed at 24:53 — exclude under-18 users from discovery,” not “Team probably wants teens later.”

Design rules that matched the refined PhonePe run:

| Rule | Why it matters |
|------|----------------|
| Executive summary in **≤5 bullets** | Leadership reads on mobile |
| Only **explicitly agreed** decisions | Brainstorm ≠ commitment |
| If a decision **changed**, show **final** wording + timestamp | Last word wins |
| Action table: **Action \| Owner \| Due \| Source quote** | Stops silent guesswork on owners |
| **Full names** when two people share a first name | Disambiguate Rahul Bhati vs Rahul Menon |
| **Unassigned** if no owner was named | Do not hallucinate accountability |
| **Parking lot** for rejected or deferred ideas | Casual praise ≠ approval |
| Flag **open risks** and **speaker self-corrections** | 31% vs 3.1% changes the product call |
| **Do not infer** beyond the transcript | Stops fake 14-day plans |
| **Cross-reference** meeting date in the prompt | Reduces attachment mismatch |

After the structured run, compare outputs. The better version separated **decisions** from **actions**, marked **unassigned** work, and tied items to timestamps (for example revised scope at **24:53**).

**Self-check prompts** (run on the same chat) tighten quality further:

- Ask the model to diff its first answer vs the structured answer and list gaps.
- “For every owner, date, and number, quote the exact supporting line; list anything you cannot support.”
- “Rewrite the executive summary for a VP with **30 seconds** — one insight that could change product direction.”

That leadership rewrite surfaced a sharper insight: the product may need to solve **visibility and trust**, not delegated payment alone — with validation via **12 user interviews** and under-18 users explicitly out of scope for discovery.

**Activity: Build Your Action Table Header**

Copy this table header into your notes app and fill one row from the PhonePe structured output, including a source quote column you will always use.

### Reference skeleton: chief-of-staff meeting prompt

Adapt names and dates; keep the guardrails.

```text
You are a meticulous chief of staff.
From the transcript below, produce:
1) Executive summary — max 5 bullets; ONLY explicitly agreed decisions and scope.
   If a decision changed during the meeting, show the FINAL wording and note the timestamp.
2) Decisions list — each line cites speaker + timestamp; do not infer.
3) Action table — columns: Action | Owner (full name) | Due date | Source quote.
   If two people share a first name, disambiguate. If no owner was named, write UNASSIGNED.
   Include parking-lot items and rejected suggestions separately.
4) Open risks — include self-corrections on numbers (e.g. 31% vs 3.1%).
Meeting date: [Tuesday, 6 October 2026 — example from kit].
Use ONLY the attached transcript as source. Do not invent owners or timelines.
```

The **role** sets tone; **explicit agreement** and **timestamps** stop brainstorm becoming fake plans; **UNASSIGNED** surfaces gaps for follow-up.

---

## Cross-Referencing and Model Choice

- **Official Definition:** **Cross-referencing** is validating one AI output against another source — another model, the raw file, or a second tool with browse access.
- **In Simple Words:** Trust, but verify with a second pair of eyes.
- **Real-Life Example:** Paste ChatGPT’s summary into Claude and ask what owners or dates look unsupported.

You can also cross-reference **within one thread**: upload the transcript, run the chief-of-staff prompt, then run the self-check prompt on the same attachment.

Fast “flash” models may skip deep reasoning on long transcripts. For accountability work, prefer modes that allow **longer context** and **step-by-step reasoning** when your tool offers them.

---

## Merging Slack, Email, and Meetings (Swiggy Monsoon Case)

Daily work rarely lives in one file. The **Swiggy** exercise used **four sources** about the same monsoon / **rain fee** initiative:

- Two meeting transcripts (ops stand-up, leadership review)
- A **Gmail** thread
- **Slack** messages (including a VP **thumbs-up** emoji)

Teams executed a launch plan after the emoji. Leadership later clarified: the reaction meant **“I like the idea”**, not **approval to ship**.

Without structure, a five-bullet summary sounds confident but drops finance, legal, and safety:

- Treats **👍 on Slack** as sign-off
- Misses **finance forecast** revision (for example from ~₹1.65L toward ~₹0.9L when fee policy changed)
- Ignores **underpass flooding** risk for delivery partners
- Hides **conditional legal** approval (fee must show on store listing and cart **before** checkout)

![Merge four sources into one timeline — Slack, email, and meetings sorted chronologically with superseded items and open risks](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/nontech-pm-dm/session07/s07-02-four-source-merge.png?v=20261017)

### Conflict-aware chronological prompt

Principles from the class prompt:

- Sort statements **chronologically**; **latest wins** at the top for decisions.
- **An emoji reaction is not approval.**
- Disambiguate duplicate first names (two Priyas).
- Pull **safety items** even if raised by a junior voice.
- Output sections: **Decision table**, **Action items**, **Superseded items**, **Open risks**, **Items with no owner**.

**Superseded items** matter. Flat ₹25 fee for everyone may appear early but later become **₹20 for non-members / ₹0 for Swiggy One**, with routing rules tied to rain thresholds.

**Microsoft Copilot** in M365 can mirror this pattern across **Teams**, **Outlook**, and **documents** when Work IQ / Copilot has connector access — same idea as manually attaching four exports to one chat.

**Activity: Spot the False Approval**

From the Swiggy kit, find one line where emoji or informal chat was treated as approval. Write the corrected decision in one sentence with the real approver role (legal, finance, or named leader).

---

## When “Five Bullets” Fails

A prompt like “Give me five bullet summary from attached resources” optimises for **brevity**, not **accountability**.

| Five-bullet summary | Structured merge prompt |
|---------------------|-------------------------|
| Sounds decisive | Shows superseded and conditional items |
| Hides finance/legal | Surfaces revised offsets and UI gates |
| Drops safety | Lists underpass and routing risks |
| Implies owners | Flags unowned or interim controls |

Save a **prompt library** entry for “multi-source project merge” and reuse it every time Slack and email disagree.

### Reference skeleton: four-source merge prompt

```text
Below are four sources (Slack, email, two meetings) about the SAME project.
1) Sort all statements chronologically; list LATEST decisions at the top.
2) An emoji reaction is NOT approval — separate acknowledgement from sign-off.
3) Disambiguate duplicate first names.
4) List safety-related items even if raised by a junior attendee.
Output: Decision table | Action items | Superseded items | Open risks | Items with no owner.
Each row must include evidence: channel, date, and quote.
```

**Activity: Add a “Superseded” Section**

After running the merge prompt on the Swiggy kit, copy two superseded lines into your notes and write the single line that replaced each one.

---

## Prompt Libraries and the PM Task Stack

Structured meeting work is one slice of BAU. Product managers repeat **persona**, **journey**, **roadmap**, **one-pager**, **competitor research**, and **status reporting**.

A **prompt library** (curated templates you maintain — the class referenced collections such as **Misfit Product** on LinkedIn) stores high-quality prompts aligned to frameworks you already know:

- **TCP-FT** — Task, Context, Persona, Format (and examples where needed)
- **COSTAR** (Google-style) — **C**ontext, **O**bjective, **S**tyle, **T**one, **A**udience, **R**esponse format

Good library prompts are **portable** — the same persona prompt can run on ChatGPT, Claude, Gemini, Perplexity, or Grok — and **product-agnostic** (PhonePe today, Swiggy or Spotify tomorrow).

**COSTAR** (context, objective, style, tone, audience, response) and **TCP-FT** name the same habit: always give **context** and a fixed **output shape**.

![Prompt library building blocks — reusable role, context, task, and format template with an input slot, portable across chat tools](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/nontech-pm-dm/session07/s07-03-prompt-library-framework.png?v=20261017)

---

## Persona Prompt: Savitri and UPI Circle

Using **UPI Circle for elderly users** (primary: less digital-confident payer; secondary: dependent who pays on their behalf):

- The persona prompt asks for **demographics**, **psychographics**, **technical proficiency**, **success metrics**, and a **named primary persona**.
- Example output persona **Savitri**: wants independence; worries about scams and “going bankrupt”; needs trust signals, not just feature lists.

**Primary persona** = make-or-break user for the core workflow. **Secondary persona** = benefits from the primary offer and may pay or actively participate.

**Activity: One-Line Product In**

Pick any product you know. Give the persona prompt a one-line description and capture the primary persona’s quote in their own words (one sentence).

---

## User Journey Prompt

On the same chat thread, a **user journey prompt** mapped Savitri through **awareness → consideration → onboarding → transaction → empowerment**, with top recommendations such as:

- Simple, relatable **education** campaign
- Strong **trust and safety** signals at activation
- **Guided setup** with “family assist” for configuration

The journey image output is a communication aid; the valuable part is **where PM attention should go** (trust before scale).

---

## Roadmap Prompt and Jira Connectors

A **roadmap prompt** can ask duration (for example **three months**), **weekly** swim lanes, milestones, engineering/design/marketing lanes, and risk rows — grounded in the same product context.

With a **Jira connector** (treat it like a **plugin** that lets the chat tool create tickets in your workspace), the model can draft a work item with **priority**, **owner**, **acceptance criteria**, and open it in Jira — useful for “define end-to-end elderly PhonePe experience” style epics.

- **Official Definition:** A **connector** is an authorised bridge between an AI app and another system (Gmail login on Swiggy, or Jira / Drive / Trello in Claude settings).
- **In Simple Words:** It is the charging port that lets the AI act inside your tools, not only in the chat window.
- **Real-Life Example:** Airport power sockets — same idea, different device.

Always **review** ticket text before sharing with engineering; connectors automate drafting, not accountability.

---

## One-Pager and Concept Note Prompt

The **one-pager prompt** included instructions to **research with citations**, use **chain-of-thought**, and **avoid hallucination** on launch facts. The model checked public signals (for example PhonePe going live with UPI Circle in **2025**) and produced sections such as executive summary, problem, opportunity, solution, target users, and “why this wins.”

Tweak wording for your organisation’s **PRD** or **concept note** template, but keep the skeleton: **context, task, format, verification**.

---

## Competitor Research Prompt

A **competitor research** prompt for the same feature compared **Google Pay, Paytm, BHIM, WhatsApp Pay** on capabilities such as pre-payment approval, spending limits, and **request status tracking** — noting gaps where elderly users might “feel lost” without tracking.

Output included **five ideas to borrow** from competitors. Use this as a **first pass**, then verify features on live apps or official docs.

---

## FTA: Quantifying Time Saved as an AI PM

Interviewers often ask: **how much time does AI save on repeatable PM work?**

The class used an **FTA-style grid** (Frequency × Time manually × Time with AI × Risk if wrong):

| Task | Example manual time score | Example AI time score | Risk if wrong |
|------|---------------------------|------------------------|---------------|
| Persona creation | Higher (e.g. ~2 hours) | Low (~minutes) | Medium if client-facing |
| User journey | Higher | Low | Medium |
| Competitor review | High (hours) | Low | **High** if shipped unchecked |
| One-pager | Medium | Low | Medium internal |
| PRD draft | Very high | Low–medium | **Very high** |

Multiply **frequency × minutes** for traditional vs AI-assisted totals. The class illustration dropped roughly **twenty-plus hours** of manual effort toward roughly **half that** when reusable prompts handled persona, journey, roadmap, and one-pager in ~15–20 minutes — **before** verification time.

Risk scores remind you: faster drafts on **competitor** or **PRD** work need **stronger** fact-check gates.

**Activity: One Row for Your Job**

Add one task you do weekly. Score frequency (1–5), manual time (1–5), AI time (1–5), and risk if wrong (1–5). Multiply frequency × time for a rough monthly hours estimate.

---

## More Library Entries for BAU

Templates mentioned for ongoing routines:

- **Weekly status report** prompt (can pair with Copilot / Claude scheduled skills)
- **Email triage** (“inbox clean-up” patterns)
- **Research synthesis** for long reads

The goal is not one perfect prompt — it is a **maintained library** you improve when a mistake repeats.

**Weekly status** prompts fix headings (done / next / blocked / risks) and fill from your bullet dump. **Email triage** prompts can label reply / delegate / FYI / archive — do not auto-send external mail without reading.

---

## Professional Fact-Checking: Uber Market Report

Marketing or strategy teams often ship **AI-generated research PDFs**. The class used an **Uber** competitive and financial summary built from investor materials, then stress-tested it.

![Two-step fact check — build a claim ledger first, then verify each row against Tier 1 and Tier 2 sources](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/nontech-pm-dm/session07/s07-04-fact-check-two-step.png?v=20261017)

### Step 1 — Claim inventory (do not verify yet)

Prompt pattern:

- Role: **Fact checker** preparing work for professional distribution.
- Instruction: **Extract every checkable claim** into a table: ID, claim text, section, claim type, **risk level**.
- Explicitly: **Do not verify yet** — otherwise the model jumps ahead without your rules.

The inventory surfaced **54 claims**, many numeric, flagged **high risk** because the report itself was AI-assisted.

### Step 2 — Verify high and medium claims

Verification protocol highlights:

| Tier | Source type |
|------|-------------|
| **Tier 1** | Company filings, earnings releases, regulators, verbatim executive quotes |
| **Tier 2** | Reputable news **with** traceable citation |

Rules:

- **Recompute** maths; show steps (**self-consistency** prompting).
- Label each claim: **Verified**, **Partially true**, **False**, **Unverifiable**, **Outdated**.
- Separate **revenue**, **gross bookings**, **EBITDA**, and **net income** — American reporting definitions differ from casual wording.
- Confirm cited reports **exist**; quotes must match **venue and wording**.

Examples of errors caught:

- **$193M “revenue”** — actually confused with **gross bookings**; revenue on the order of **~$52B** scale in FY2025 filings discussed in class.
- **19% vs 18%** growth — rounding drift.
- **“Clear market leader in India”** — opinion, not a crisp fact.
- CEO quote context: **Rapido** named as tough competition, not a simple “Ola only” story.
- **$3B capital injection** → closer to **~$350M** in verified discussion.
- **Robotaxi launches in India** — **false** vs US announcements.

After verification, a final prompt can say: **using only verified claims**, write the **leadership executive summary**.

**Tool calling / browse** lets ChatGPT, Claude, or Perplexity pull live filings when enabled — desktop **Pro** tiers and **connectors** widen what “ground truth” can mean inside a company.

Read ledger labels literally: **Verified** ships with citation; **Partially true** needs rewrite; **False** is cut; **Unverifiable** is assumption; **Outdated** needs refresh. Mixing **EBITDA on gross bookings vs revenue** inflated margins in class — recomputation landed near ~**4.5%** on revenue.

**Activity: Mark Three Claim Types**

From any AI report you have, list three claims and tag each as **number**, **quote**, or **market share opinion** before you verify.

---

## Four AI Output Risks (Research and Reports)

Before shipping research, scan for:

| Risk | What it looks like | Class example |
|------|-------------------|---------------|
| **Hallucination** | Plausible but unsupported fact | Fabricated “users will pay ₹99/month” |
| **Outdated context** | Recommendation ignores what already shipped | “Launch voice landmarks” after Sept release |
| **Biased logic** | PM hypothesis overweighted vs evidence | Battery drain ranked #1 when routes ranked higher |
| **Formatting / compliance** | PII leakage or sloppy percentages | Unsupported persona splits from tiny samples |

![Four AI output risks — hallucination, outdated context, biased logic, and formatting or PII, with draft, verify, then ship](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/nontech-pm-dm/session07/s07-05-four-ai-risks.png?v=20261017)

---

## Auditing User Research: Google Maps Bangalore Case

**Problem context:** Two-wheeler riders in Bangalore sometimes **stop navigation mid-trip**. PM hypothesis: **battery drain**. Interviews and surveys emphasise **unsuitable routes** — one-ways, narrow lanes, flooded underpasses, dark lanes.

Workflow:

1. Upload **raw interview transcripts** (multiple sources) with a light “de-bias and signal” ask.
2. Run the **senior research lead audit** prompt: audit synthesis **against sources only**; flag bias, percentage base errors, PII, and hallucination risk types.
3. Compare to the **PM’s written audit report** — ask for the **five biggest mistakes**.

Findings mirrored live discussion:

- **Battery drain is not the top reason**; **unsuitable routes** are.
- **Fabricated willingness to pay** vs quotes like “if you make me pay for maps I’ll ask the chaiwala.”
- **Feature already launched** (landmark voice directions) — recommending it again is **outdated context**.
- **Biased framing** in the brief elevates battery over route trust signals (~25–38% route issues vs weaker battery signal).
- **Persona percentages invented** from six interviews (commuter, gig driver, teacher, doctor) — unsupported “52% daily office commuter” style labels.

Director-level takeaway: leading problem misidentified, evidence reversed, research integrity compromised by over-generalisation.

**Activity: Hypothesis vs Evidence Table**

For the Google Maps case, draw two columns: **PM hypothesis** and **strongest counter-evidence from raw quotes**. Fill at least three rows.

---

## Zepto / Quick-Commerce Research (Extended Practice)

Your kit includes a **Zepto (Zomato quick-commerce) user research** pack: brief, interviews, survey, and a PM synthesis with suspicious findings (for example **out-of-stock** as overstated hypothesis, **phone numbers** in tables).

Run the same **audit → compare PM report → five-point leadership summary** loop you used on Google Maps. Treat it as independent practice; do not ship the PM deck to a CEO without the audit pass.

---

## Role Prompts for Common BAU Jobs

Use the right **role** in the prompt header:

| Job | Example role prompt |
|-----|---------------------|
| Meeting decisions → actions | Meticulous **chief of staff** |
| Self-review of summary | Same model as **grader** (“diff your answers”) |
| Slack / email merge | **Conflict-aware** chronological analyst |
| Leadership rewrite | **Executive brief** writer (30-second read) |
| Automation design | **Task auditor** (frequency, AI vs human split) |
| Stress test | **Sceptical manager** or **QA lead** |
| Fact check | **Claim ledger** builder, then **legal counsel** verifier |
| Research audit | **Senior UX researcher** or **research scientist** |
| Polish pass | **Editor** — polish tone **without adding new claims** |

**Citation prompting** and **timestamp discovery** belong in any workflow where someone will ask “who said that?”

---

## Integrating AI into a Daily Routine

A practical weekly loop:

1. **Monday:** Run meeting transcripts through chief-of-staff + self-check templates; file action tables in your task system.
2. **Mid-week:** Use library prompts for status, competitor scans, or research synthesis — always in a **fresh chat per topic**.
3. **Before send:** Run numeric or quote-heavy docs through **claim inventory → verify → leadership summary**.
4. **Monthly:** Update prompt library when the same mistake appears twice (wrong owner, emoji approval, mixed revenue/bookings).

Split work **AI vs human** where risk is high: AI drafts; you own **owners, dates, and external sends**.

Optional automation (for example **n8n** flows) can schedule status prompts — still keep a human on external email and regulatory-facing text.

---

## Key Takeaways

- **Structure beats speed** for transcripts and multi-source threads: explicit decisions, citation timestamps, unassigned flags, and superseded items prevent confident wrong plans.
- A **personal prompt library** scales persona, journey, roadmap, one-pager, and competitor work across tools; **connectors** extend drafts into Jira or M365 when you review before share.
- **FTA-style math** helps you explain time saved as an AI PM while weighting **verification** time on high-risk outputs.
- **Two-step fact-check** — claim ledger, then tiered verification — catches revenue/bookings mix-ups, false launches, and bad quotes before leadership decks leave your desk.
- Research audits expose **bias, outdated features, and fabricated quotes**; the same cross-check habit applies whenever you turn raw notes into recommendations.

In upcoming work you will apply similar **draft → verify → refine** discipline to **customer-facing copy**, where tone and compliance matter as much as numbers.

---

## Important Commands, Libraries & Terminologies

| Term | What it means |
|------|----------------|
| **BAU work** | Repeat daily operational tasks — notes, summaries, triage, small reports |
| **Lazy prompt** | Vague ask (“analyze this”) with no role, format, or evidence rules |
| **Chief-of-staff prompt** | Role-bound meeting summary with explicit decisions and cited actions |
| **Chain-of-thought citation** | Show conclusion plus speaker/timestamp evidence from source |
| **Parking lot** | Ideas noted but not agreed; must not appear as committed work |
| **Cross-referencing** | Validate one AI output against source text or another model |
| **Conflict-aware merge** | Chronological reconciliation of Slack, email, and meetings |
| **Superseded item** | Earlier decision replaced by a later message or meeting line |
| **Prompt library** | Reusable, framework-aligned templates maintained by you or your team |
| **TCP-FT / COSTAR** | Prompt skeletons: task, context, persona, format; or context, objective, style, tone, audience, response |
| **Primary vs secondary persona** | Core workflow user vs additional beneficiary payer/user |
| **Connector** | Authorised integration (Jira, Drive, Gmail) letting AI read or write in another app |
| **Claim ledger** | Table of every checkable statement before verification |
| **Tier 1 / Tier 2 source** | Filings and primary quotes vs reputable secondary news |
| **Verified / Partially true / False / Unverifiable / Outdated** | Labels for fact-check outcomes |
| **Hallucination** | Confident content not supported by source or reality |
| **Outdated context** | Advice that ignores already-shipped product state |
| **Biased logic** | Over-weighting the asker’s hypothesis vs participant evidence |
| **PII** | Personally identifiable information that must not leak in prompts or outputs |
| **FTA grid** | Frequency × manual time × AI time × risk — quantifies productivity claims |
| **Self-check prompt** | Ask the model to grade its earlier answer against the attachment |
| **Tool calling / browse** | Model fetches live web or connector data to verify claims |
| **Draft → verify → ship** | Standard professional loop for any AI-assisted document |
