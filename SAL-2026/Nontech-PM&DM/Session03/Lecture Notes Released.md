# Refining and Validating Ideas with AI

## What You Will Learn in This Lesson

In the previous lesson you turned a vague wish into a **product idea**, locked a **one-line vision**, and built a **low-fidelity** then **high-fidelity** prototype of **PhonePe Trusted Pay**. A friend or family member pays on your behalf, the app keeps a **ledger**, and you settle later.

That first build is not the finished product. This lesson is about **refining and validating**: gather **feedback**, use AI as a **simulator**, define a real **MVP**, iterate under time pressure, and **present** the refined offer with a reason for every change.

What you will practise, in order:

- Write **strong test scenarios**, apply the **PQRSTU** lens, and run the **Mom Test** so you test the intended problem, not taste.
- Use AI to simulate **intended**, **sceptic**, and **wrong** users in **separate chats**, then treat those replies as rehearsal, not evidence.
- Name what the **MVP includes and excludes**, iterate the smallest useful change, and **park** the rest.
- Present the refined product with a **rationale**, a **change log**, and **trade-offs** you can defend.

The running example stays **PhonePe Trusted Pay** (also called **pay on behalf**). Use **your own** prototype in the activities. PhonePe is the teaching example, not the only allowed product.

![Friends at a Bengaluru rooftop dinner — one person is short of cash, another pays, and a Trusted Pay card tracks social balance to settle later](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/nontech-pm-dm/session03/s03-08-trusted-pay-moment.png?v=20260915)

---

## Weak Feedback versus a Strong Test Scenario

Feedback is a **reaction to a situation**. “This page does not look good” is a reaction. It is not a test you can act on.

- **Official Definition:** A **test scenario** is a short, realistic moment: **who** the user is, **when and where** they are, **what they want**, **what they see**, **what is missing**, and the **risk if the flow fails**.
- **In Simple Words:** Do not ask “is this nice?” Ask what happens at 8 pm on a Sunday when one machine is occupied and clothes are still in a bucket.
- **Real-Life Example:** For Trusted Pay, “this feature does not work” is weak. A strong scenario is: it is the **31st of the month**, salary just credited, you want to settle balances, but a **cash** payment your friend made never got logged, so the amount they owe you is missing.

| Weak reaction | Strong test scenario |
|---------------|----------------------|
| This page looks ugly | Sunday 8 pm, one laundry machine occupied, clothes in a bucket — what do you do on the page? |
| Pay on behalf does not work | 31st of the month, you cannot see a cash IOU, so you no longer trust the ledger |

A solid scenario always answers five questions:

- **Who** is using it, and in what mood?
- **When and where** are they (end of month, at a cafe counter, on a trip)?
- **What do they want** (settle, complete a bill, ask Rahul to pay)?
- **What do they see or miss** (success screen, but no cash entry)?
- **What is the risk if it fails** (embarrassment, a lost record, a broken trust)?

![A strong test scenario has five parts — who, when and where, what they want, what they see, and the risk if it fails](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/nontech-pm-dm/session03/s03-11-test-scenario-parts.png?v=20260921)

You cannot invent those five answers from a slogan. You get them by looking at **functional** and **non-functional** requirements, then by talking to people — or, for rehearsal, by briefing AI with the same structure.

**Activity: Turn a Complaint into a Scenario**

Rewrite this complaint as a five-part scenario for **your** product: “I don’t like this feature.” Name who, when/where, what they want, what they see, and the risk if it fails.

---

## Functional Needs, Non-Functional Needs, and PQRSTU

The first job of a product is a **functional** promise. That promise is rarely enough for an MVP that users will trust.

- **Official Definition:** A **functional requirement** is what the product must **do**. A **non-functional requirement** is **how well** it must do it — speed, scale, safety, honesty, and ease.
- **In Simple Words:** “Send a message” is functional. “Deliver in one second, to a billion people, without anyone reading it in the middle” is non-functional.
- **Real-Life Example:** WhatsApp’s functional job is one-to-one (and group) messaging. Users also expect delivery under normal networks, backup if the phone is lost, **end-to-end encryption**, and sending a chat in **one or two taps**.

A useful checklist for those “how well” tests is **PQRSTU**:

| Letter | Lens | What you are really asking |
|--------|------|----------------------------|
| **P** | **Performance** | Is it fast enough in the moment that matters? |
| **Q** | **Quality / scale** | Does it work across the payment types, volumes, or devices users actually have? |
| **R** | **Reliability** | Once started, does it finish without silent failure? |
| **S** | **Security** | Can a stranger or a scam use this against someone? |
| **T** | **Transparency** | After the action, can the user *see* what happened? |
| **U** | **Usability** | Can they finish in a few taps, without a tutorial? |

![PQRSTU framework around a pay-on-behalf phone — Performance, Quality, Reliability, Security, Transparency, and Usability](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/nontech-pm-dm/session03/s03-12-pqrstu-framework.png?v=20260921)

Not every row must ship in version one. The framework is for **holistic test scenarios**, not a shopping list. When you later write the MVP card, you **select** which rows are “must have now.”

Apply the same lens to **PhonePe pay on behalf**:

| Lens | Trusted Pay example | If this fails, the user feels… |
|------|---------------------|--------------------------------|
| **Functional** | You request a friend; if they accept, they complete the outstanding bill | The core job never starts |
| **Performance** | Request → friend pays, end to end within **five minutes**, for amounts up to about **₹50,000** | Embarrassment at the counter, plus “is this even working?” |
| **Quality / scale** | Friend can pay by **UPI, credit card, net banking**, or a logged **cash** path | “I am okay to pay, but I only have UPI / cash” |
| **Reliability** | After start, bank **OTP** and the payment should not fail silently | Money in limbo |
| **Security** | **Contact verification**; first-time request capped (for example **₹2,000**) | A scam “Arun is asking for ₹5,000” |
| **Transparency** | Within **five seconds** of completion, **money due** should update | They paid, but the ledger still looks empty |
| **Usability** | Request and completion in about **three clicks** | People abandon and go back to a WhatsApp plea |

These rows become the **test scenarios** you should run before calling the prototype “working.” They also tell you what a first version might honestly skip (for example, every payment method) while still delivering the core job.

**Activity: PQRSTU for One Product**

Pick **WhatsApp**, **Uber**, or **your** idea. Write one line each for P, Q, R, S, T, and U. Star the **two** lines that must be true for a first MVP. Leave the others as later tests, not as secret promises on the page.

---

## Questions That Test the Intended Problem

A prototype only teaches you if the questions are honest. “Do you like this?” and “Would you use this in future?” invite polite fiction.

- **Official Definition:** The **intended problem** is the specific pain the value proposition promised to reduce — not every inconvenience in the user’s life, and not whether they “like” the idea.
- **In Simple Words:** Test the job. Do not test whether the logo is cute.
- **Real-Life Example:** For Trusted Pay the job is “complete a payment when you are temporarily short of money.” Do not ask “Would you use an app that tracks grocery expenses?” Ask what happened the last time they were short.

Use a **five-step** conversation, in this order:

1. **Open-ended, past tense.** “Have you ever asked a friend to pay on your behalf? How did that go?”
2. **Stay in the past.** People are bad at predicting the future. “Last time you were short, what happened?” is better than “If we built this, would you love it?”
3. **Five Whys.** Keep going until you reach a **situation**, not a slogan. Why no money? A trip before salary. Why go anyway? A friend’s birthday. When did it hurt? The bill split at the end. What did you feel? **Embarrassment**. What happened? A friend paid and said you can return it later.
4. **Show the prototype only after they are in that memory.** Then ask whether **this** flow would have helped **that** night.
5. **Hand it over (the Mom Test).** Let them tap. Listen more than you talk.

- **Official Definition:** The **Mom Test** (as used here) is showing the product after you have talked about **their real past**, then watching whether it helps **that** problem — not asking your mother (or anyone) “is my idea good?”
- **In Simple Words:** Talk about their life first. Then let them try. Compliments are not evidence.
- **Real-Life Example:** After they describe the birthday split, you show Trusted Pay with a friend list and “pay on my behalf, settle at month-end.” You do not ask “cool, right?”

When they try it, the **questions they ask you** are gold. Typical first-use questions for this product:

- How did these friends get on my list? How do we **verify** each other the first time?
- What does **my friend** see? What if **they** also have no money?
- Can they **accept or reject**? If I message **two** friends, could **both** pay and create a double payment?

Those questions are your **iteration path**. Do not answer with a feature dump.

Ask one follow-up: “Would accept/reject help you try the next friend?” Yes → candidate for **Now**. Fear of double payment → **multi-request** may belong in **Later**.

A tight set you can reuse on a page, a prototype, or an AI role-play:

```text
Q1. What do you think this feature helps you do?
Q2. Would you use this instead of asking someone to UPI you money — yes / maybe / no? Why?
Q3. What part of the flow is unclear?
Q4. If you used only this, could you complete a payment when you are temporarily short of money?
Q5. What would still go wrong after you send the request?
```

- **Q1** tests **understanding**. If they say “PhonePe is lending me money,” the name **pay on behalf** is leaking.
- **Q2** tests **desire versus the real alternative** (WhatsApp + UPI, bulk cash from a friend, a credit card).
- **Q3–Q5** test **confusion** and the **job**. In the Trusted Pay simulations, people often got the **forward** request right and got lost on **what happens after** the friend is asked.

![Questions that test the intended problem — understanding, desire, confusion, and job — with taste questions crossed out](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/nontech-pm-dm/session03/s03-02-four-question-layers.png?v=20260915)

**Activity: Lock Five Questions**

Rewrite Q1–Q5 in **your** product’s words, then read them aloud. If someone could answer without opening the prototype, rewrite. Run Q1–Q5 as intended user and sceptic, and highlight any line **both** stalled on.

---

## Simulated User Feedback with AI

Real users are hard to book at the moment you need practice. AI can **role-play** so you rehearse scenarios and questions. It cannot replace the people.

- **Official Definition:** **Simulated user feedback** is a model answering *as if* it were a type of person looking at your prototype. The replies are **plausible reactions**, not **real evidence**.
- **In Simple Words:** It is a practice partner. It is not a survey of India.
- **Real-Life Example:** Asking a chatbot to play “young salaried professional at a dinner they cannot pay for” can surface a case you forgot — the friend pays on **Google Pay** while you requested on PhonePe, so the ledger never updates.

![Four-step rehearsal — paste what is on the screen, invent test scenarios, run three voices one at a time, then spot the line two voices stall on](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/nontech-pm-dm/session03/s03-01-simulated-feedback-process.png?v=20260915)

Keep **three to four** voices. Always include one of each:

| Voice | Who they are | Trusted Pay example |
|-------|----------------|---------------------|
| **Intended user** | Genuinely has the pain and will try the product | Runs out of balance before month-end; will ask a sibling to pay the electricity bill |
| **Sceptic** | Sometimes has the pain but prefers the old workaround | Would rather take **₹30,000 in bulk** and pay you next month than send a ₹1,500 request every time (self-respect, shy) |
| **Wrong user** | Does not need this by any means | Always ends the month in surplus; emergency corpus covers the rare dip |
| **Extra / risk** | A realistic edge that can break the product | A distant college acquaintance asks for ₹10,000; or a **regulator** caps friends paying on behalf |

**Wrong** is not the same as **sceptic**. A sceptic *could* need you and still refuse. A wrong user will **never** be in that situation.

An **investor**, a person shopping for a new credit card, or someone buying mutual funds is not your user. Drop those rows.

**Do not put all four voices in the same chat.** Mixed context makes the model blend Priya with Vikram and **hallucinate**. Run **separate conversations**, then **you** look for patterns.

![Three separate chats for intended, sceptic, and wrong users — do not dump all voices in one chat; you look for patterns, not scores](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/nontech-pm-dm/session03/s03-13-simulated-voices.png?v=20260921)

A practical mix many product managers use is about **40% real conversations** and **60% simulated iterations** — simulation for volume, real people for truth. Do not invert that and call the chatbot a field study.

**Step 1 — Generate scenarios (one prompt, then you filter).**

```text
You are a practical product tester of Indian digital payment products.
Feature: PhonePe Trusted Pay / pay on behalf.
A user who is temporarily short of money asks a friend or family member
to pay. The payment is recorded so they can settle later.
Value: get the payment done without leaving the transaction unrecorded.
How it works: choose pay on behalf, select a trusted contact, they pay
the merchant.
Give 6 realistic test scenarios as a table:
Who | When and where | What they want | What they see first | Risk if this page fails
Do not praise the idea. Do not invent download numbers.
```

Typical useful rows you may not have thought of:

- Dinner with friends; they abandon checkout or ask manually; a cab deadline is missed.
- You asked on PhonePe; the friend paid on **Google Pay** — how do you track it?
- A parent says the item is already at home; payment happens informally; the **record is lost**.
- On a trip, the trusted contact is carrying **cash** in another country; they will settle in cash.

You can add PQRSTU constraints to the same prompt: weak network, amount above the first-time limit, friend at UPI daily cap.

**Step 2 — Simulate answers (one person per chat).** Ask only your five questions. Do not request a score out of 10.

**Activity: Four Voices, Separate Chats**

1. Run the six-scenario prompt on **your** prototype text (or Trusted Pay if you are following the example).
2. Keep four rows: intended, sceptic, wrong, one extra risk. Drop investors and “new credit card” rows.
3. Simulate Q1–Q5 for the first three voices, **new chat each time**.
4. Cross out any comment that names a feature **not on the screen**.

---

## Look for Patterns, Not Scores

When several people (or several simulations) speak, do not average them into “8/10 liked it.” Look for **where they get lost**.

- **Official Definition:** A **finding** is a repeated stall or confusion you trust enough to act on — a **pattern**, not a popularity score.
- **In Simple Words:** If two people cannot see how they will settle, the settlement story is the problem. One person asking for stickers is not.
- **Real-Life Example:** **Pay on behalf** can sound like **PhonePe is paying**. Two users may not know **when** they must settle. The clearer promise is **pay now, settle later** — and that this is **not a loan**.

Worked voices (mix of research and simulation; treat them as **examples of pattern-spotting**, not as a census):

| Person | Desire? | Confusion / pattern | Type |
|--------|---------|---------------------|------|
| **Ria** | Yes — brother can pay | How do we settle later — automatic or manual? | Intended |
| **Karan** | Yes — friend can pay the cab | Will they see my **full transaction history**? | Intended, privacy |
| **Neha** | No — pays her own bills | What if they misread the request? Is it private? | Sceptic |
| **Amit** | Yes — child’s school fees | Spending **limit**; this is “pay for my kid,” not “I am broke” | Adjacent use; still not the core job |
| **Vikram** | No | Always has enough money | Wrong user — stop recruiting him |

The product manager’s job is to notice **motivations and concerns**. Many people like the idea and still do not know the **settlement** experience, or they fear a **loan**. Wrong users can be thanked and left out of the MVP story.

Sample simulated answers to Q1–Q3 often look like this:

| Person | What they think it does | Use instead of UPI-me-the-money? | Unclear part |
|--------|-------------------------|----------------------------------|--------------|
| Arjun Mehta | Ask a trusted person when I am short | Yes | — |
| Rohan Kapoor | Have someone pay | **No** — paying directly is faster when I am in a hurry | Becoming a sceptic |
| Karan Malhotra | Friend pays, I track what I owe | Yes — avoids money ping-pong | — |
| Vikram Nayar | Maybe, if it tracks what I owe | Only if the ledger is obvious | Scepticism on tracking |

The pattern that mattered for this prototype: the **happy path of sending a request** was clear. After the request, **traceability** was not — did the friend **open**, **accept**, **reject**, or **pay**? That is a **Now** problem, not a new product line.

**Activity: Pattern Table, Not a Score**

Copy four replies into a table with columns Desire / Confusion / User type. Circle any confusion that appears **twice**. Write one sentence: “I will not claim users want this. I will claim ______ is unclear.”

---

## What Simulated Feedback Cannot Prove

AI is a fast rehearsal. It is not a person at a cafe with real money on the line.

- **Official Definition:** **Real user testing** is watching or listening to actual people in the target situation as they use the prototype.
- **In Simple Words:** A chatbot pretending to be short of cash is practice. A friend at Third Wave Coffee with an empty UPI is the real event.
- **Real-Life Example:** The same model will give a similarly polite review to PhonePe and to Google Pay. It has **no loyalty** and no favourite app.

| Limitation | What the model does | What a real person does | How you stay honest |
|------------|---------------------|-------------------------|---------------------|
| **Sees your paste / your video** | You recorded the *ideal* path | They land on screen one with **no** briefing | Paste **screen text**, or accept that your demo video is biased |
| **Understands your intent too easily** | You built it, so you showed the good taps | They get lost | Do not paste the idea card into the simulation |
| **Invents features** | “You could add rewards / credit score…” | They only react to what exists | Delete invented features |
| **No real money** | No fear of a failed ₹1,500 dinner | Real money changes what they will try | Never treat “I would tap yes” as a payment |
| **No real alternatives** | Weak on how **UPI**, **cash**, and WhatsApp actually feel | They already have a workaround | Always ask Q2 against the alternative |
| **Wants to please you** | You are the product manager using the tool | A loyal user will still frown on their face | Prefer short, annoyed answers |

Simulation is good for rehearsing questions and spotting obvious confusion. It cannot prove demand, trust, or that a friend will actually pay.

If the **same stall** appears on two voices, treat it as a likely product issue and a candidate for **Now**. If it appears once, confirm with a real person.

**Activity: Trust Label**

Mark six comments **Likely issue**, **Needs a real user**, or **Ignore (invented)**. Examples: Google Pay payment the ledger cannot see (likely); rewards points not on the screen (ignore); “I will not ask a friend — self-respect” (needs a real person).

---

## Now, Next, and Later

You now have labelled comments and still cannot build all of them. **Prioritisation** is choosing under a time limit.

- **Official Definition:** **Prioritisation** is ranking changes by how much they protect the core job, how much effort they take, and whether they fit the MVP — then acting on a few and deferring the rest.
- **In Simple Words:** Fix the broken trail first. Do not build Splitwise-for-seven-people in version one.
- **Real-Life Example:** Explaining **who pays**, a clear **ask someone to pay and settle later** CTA, and **what happens after the request** are **Now**. They are high impact and relatively low effort.

| Column | Put a change here when | Trusted Pay examples from this work |
|--------|------------------------|-------------------------------------|
| **Now** | Blocks understanding or trust, and you can ship it in this pass | Status trail after request; “settle later, not a loan”; switch to Priya if Rahul declines |
| **Next** | Builds trust or coverage, needs real users or more plumbing | Real-user tests; credit card / UPI / one-time transfer; payments made in **another app** |
| **Later** | Extra complexity, or only a few voices asked | Is this a **loan** / rewards; **friend-vs-friend disputes**; **multiple beneficiaries** (A owes Raj ₹100, Simran owes you ₹200 — one net payment) |

![Now, Next, and Later board — status trail and settle-later copy now; real users and other apps next; lending and multi-party settlement later](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/nontech-pm-dm/session03/s03-14-now-next-later.png?v=20260921)

Same feedback can appear at every time horizon. Prioritise the pattern that showed up **from the start** and that a new user can understand. Multi-party settlement is impressive and **heavy cognitive load**. Leave it for later.

**Activity: Cap Now at Three**

Dump every leftover comment into Now / Next / Later. Force **Now** down to three lines. For each Later item write “parked because…” (effort, MVP, or invented).

---

## What an MVP Is — and What It Is Not

Once the patterns are clear, you still must not “build everything.”

- **Official Definition:** A **Minimum Viable Product (MVP)** is the **smallest offer that delivers the core value** and lets you **learn whether the intended problem is being addressed**.
- **In Simple Words:** The least you can give that still does the job — not a broken toy, and not the whole company.
- **Real-Life Example:** For Trusted Pay, the first co-test is not reminders, credit scores, or split bills. It is: **did my friend agree, did they pay, can I settle later**, with a transparent success path.

Fill an **MVP card** before you add screens:

```text
MVP name:
Core job (one sentence):
Target user (who, when):
This version INCLUDES:
This version does NOT include:
How we will know it is working enough to learn:
```

A filled card for this lesson:

```text
MVP name: PhonePe Trusted Pay (pay on behalf)
Core job: A user who is temporarily short of money gets a trusted person
to complete the merchant payment, with a visible trail, and can settle later.
Target user: PhonePe user who must pay now but lacks sufficient funds
(example: Raj at month-end).
INCLUDES: trusted-contact entry; merchant context; request; accept/decline;
clear status until paid; if declined, ask another contact or pay yourself.
DOES NOT INCLUDE: PhonePe loans, interest, rewards, social feed, credit score,
multi-beneficiary settlement, international payments, every manual / multi-app path.
How we will know: a tester can follow request → friend status → paid or declined
without asking “did it work?”
```

| Candidate | In this MVP? | Reason |
|-----------|--------------|--------|
| Request a trusted contact to pay the merchant | Yes | Core job |
| Friend opened / agreed / paying / done (status trail) | Yes | Simulated + real confusion sat here |
| If Rahul declines, ask Priya or pay yourself | Yes | Otherwise the table is still held and trust breaks |
| Loan / credit / rewards | No | Users already confuse this with lending |
| Multi-party net settlement | No | Hard to explain to a new user |
| Detect Google Pay / POS / cash automatically | Next, not Now | Real gap, high plumbing |

**Viable** can mean a **manual** backstage (you confirm a cash payment yourself) as long as you do not pretend the system already sees every rupee.

Famous **small** MVPs — low operations, immediate value:

- **Dropbox:** a screen-recorded video and a waitlist. About **75,000** people joined overnight — before a full sync product existed.
- **Airbnb:** photos of an apartment plus breakfast when SF conferences filled hotels. A few paying strangers, then better UX.
- **Zappos / early Amazon:** a website and **manual** fulfilment (shoes; then **books**, because they ship with less breakage).
- **Zomato (early):** office lunch rush in Noida / Delhi / Gurugram — **PDF menus** so people could order without standing in a restaurant queue.
- **Ola (early):** a person at an **airport booth**, a phone number, fixed price — drivers coordinated by hand, not a polished app.
- **Razorpay:** the pain was “payment gateway takes forever.” The persona was the **developer**. **Three-click** integration beat a full banking suite.

Failed or stuck MVPs teach the other half:

- **Facebook Deals** fought Facebook Marketplace (**cannibalisation**).
- **Yik Yak** skipped real-user testing; anonymous college chat turned abusive.
- **Juicero** was **over-engineered** — packs could be squeezed by hand.
- **Stayzilla** put home-share in Indian tier-2/3 cities where hotels were already empty, plus privacy fear.
- **Hike** had a retention loop in **stickers**, then **feature bloat**.
- **Foodpanda** had demand but could not **scale operations** the way others did.

**Do:** deliver clear user value; validate early; use low-code / no-code; define success metrics (signup, retention, paying versus non-paying). **Don’t:** wait for a perfect product; build every request; rely only on AI; spend months before you know **what you will measure** (adoption is not the same as revenue).

**Activity: Write the MVP Card**

Complete the card for **your** idea. One core job. At most five includes. At least five excludes. If you can still test the core job **without building** an item, keep that item on the exclude list.

---

## Iterate the Prototype — One Hypothesis at a Time

**Iteration** is not “redesign PhonePe.” It is the **smallest change** that retests one stall.

- **Official Definition:** **Iteration** is a bounded change in response to a finding, then a **recheck** of the same questions.
- **In Simple Words:** Add the missing status trail. Do not invent a lending arm because one voice said “is this a loan?”
- **Real-Life Example:** The first high-fi flow showed **request → payment succeeded**. Users still asked: did Rahul **agree**? Is he **paying now**? What if he **hits a UPI limit**?

A prompt you can paste into **Google Stitch** (or Lovable / Replit / AI Studio) after that finding:

```text
In this MVP, after a user sends a pay-on-behalf request to a friend or
family member, they are not sure if the other person agreed, and if they
agreed, whether the payment completed. Add this trail to the MVP.
Keep pay-on-behalf. Do not add loans or rewards.
```

A stronger trail looks like **four visible steps**, plus an escape hatch:

1. Request **sent and delivered** to Rahul Sharma.
2. Friend **opened and agreed** (“got it bro, paying via ICICI UPI”).
3. **UPI PIN / bank** in progress.
4. **Paid** — thank Rahul, confirm you now owe the amount.

![Four-step status trail on the phone — request sent to Rahul, friend agreed, UPI in progress, paid — with an escape hatch to ask Priya or pay yourself](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/nontech-pm-dm/session03/s03-15-status-trail.png?v=20260921)

If any step fails: **message Rahul**, **ask Priya**, **pay ₹1,500 yourself** (for example HDFC), or **cancel** and release the table hold. A later pass can also show **manual / other-app** payment (Third Wave **POS** acknowledged, Google Pay QR, ledger updated: you owe Rahul).

Recheck with the **same** Q1–Q5 and a short Mom Test: “You are short. You ask a friend. Walk through this. What is unclear now?”

**Headline before → after** (the offer line, not the whole brand):

| | Before | After |
|--|--------|--------|
| Value | Need help with the payment? Ask someone trusted | Your **trusted contact pays the merchant directly** on your behalf |
| CTA | Ask for help / pay on behalf | **Ask someone to pay — settle later** |
| Supporting | They pay, done | Four-step trail; **not a PhonePe loan** |

Export the new screens into **Google Stitch**, **Lovable**, **Replit**, **Figma**, or **AI Studio** and generate a **tappable** instant prototype. Testers should complete the job, not imagine it from a slide.

**Activity: Three Changes, One Recheck**

Pick three Now items. Write before → after for the CTA, the status trail, and one honesty line (“not a loan”). Recheck with Q1–Q5; park anything on the exclude list.

---

## Present the Refined Product, the Change Log, and the Trade-offs

A prototype you cannot explain looks like random edits. Presentation is a **clear account**, not a sales pitch.

- **Official Definition:** A **rationale** is why a change or a cut serves the user and the MVP. A **change log** maps each edit (or refusal) to a finding and a **source** (real versus simulated). A **trade-off** is the downside you accepted on purpose.
- **In Simple Words:** “We added a status trail because people could not see if Rahul paid” is a rationale. “We made it nicer” is not.
- **Real-Life Example:** Raj at month-end needs a friend to pay. The first prototype offered “ask a friend,” but testers could not see if the request was accepted or paid.

What you **heard** was a missing trail. What you **changed** was four status steps plus a path to Priya if Rahul cannot. What you **parked** was lending, extra currencies, and auto-detecting Google Pay or cash.

Use this spine (about ninety seconds):

```text
1. Who and the intended problem
2. What the first prototype offered
3. What we heard (label simulated vs real)
4. What we changed
5. What we parked, and why
6. What we will build or test next
```

| Change | Prompted by | Source | What we did | Recheck |
|--------|-------------|--------|-------------|---------|
| Four-step status until paid | “I don’t know if my friend paid” | Real + simulated | Status trail; message Rahul | User can narrate the four steps |
| Ask Priya or pay yourself if declined | Rahul: daily UPI limit | Prototype path | Decline does not freeze the bill | Balance unchanged; next contact available |
| “Settle later, not a loan” copy | “Is PhonePe lending me money?” | Pattern across voices | CTA and supporting line | User can repeat “friend pays merchant, I settle later” |
| Lending product / rewards / auto-detect other apps | Loan fear; people pay **outside** PhonePe | Simulated extras + real known risk | Parked — listed as open risk | Later / next iteration |

**Real user findings outrank simulated ones** when they compete. A missing status trail beats a simulated request for rewards.

Spoken trade-off pattern:

```text
We chose X instead of Y.
X protects [trust / core job / time].
Y would have [complexity / a product we are not allowed to be].
The open risk is Z, which we will test next.
```

Worked example:

- We chose a **simple pay-on-behalf request plus a status trail**, not a **full settlement and lending system**.
- That tests whether people actually want someone else to complete the merchant payment, including when one friend **rejects**.
- Lending would add business and **regulatory** weight (a peer-to-peer style product may not even be allowed).
- Open risk: payments made **outside** PhonePe still may not hit the ledger.

| We chose | We gave up | Why this is acceptable now | Risk we still own |
|----------|------------|----------------------------|-------------------|
| Status trail + settle-later copy | Lending arm and multi-party settlement | Status protects trust; lending is a different company | Outside-app payments |
| One friend at a time + switch contact | Multi-request to many friends | Avoids double payment in v1 | User must know to try Priya next |
| Honest “not a loan” as copy only | Credit, rewards, dispute desk | Those were later-only patterns | Some users may still misread the name |

When you present, say **where** a finding came from. End with one ask: try request → status → paid or declined — not a twelve-item roadmap.

**Activity: Ninety-Second Script and Three Trade-offs**

Write the six-line spine and a five-row change log (three did-change, two did-not). Record a voice note with one rationale, one X-instead-of-Y trade-off, and the open risk. If you treat simulated voices as a survey, rewrite that sentence.

---

## Key Takeaways

- Strong feedback is a **test scenario** (who, when, want, see, risk), not “this looks bad.” Use **PQRSTU** to invent holistic tests; you still **choose** which rows belong in the MVP.
- Ask about **past behaviour**, use **Five Whys**, then run the **Mom Test**. Questions Q1–Q5 test understanding, desire versus UPI-me-the-money, confusion, and the **intended job**.
- AI simulation is useful if you separate **intended / sceptic / wrong** chats. It will not give real evidence, real money fear, or real alternatives. Mix roughly **40% real** and **60% simulated**, and look for **patterns**, not scores.
- An **MVP** is the smallest offer that delivers core value and lets you learn. Iterate **one hypothesis** (here: the post-request trail). Present **rationale + change log + trade-offs**, and keep known risks visible. Upcoming work is confirming the important bets with **real people**, not inventing a larger company.

---

## Important Commands, Libraries & Terminologies

| Term | What it means |
|------|----------------|
| **Test scenario** | Who / when / where / want / see / risk — a moment you can test |
| **Functional vs non-functional requirement** | What the product does vs how well it must do it |
| **PQRSTU** | Performance, Quality/scale, Reliability, Security, Transparency, Usability |
| **Intended / sceptic / wrong user** | Has the pain; has a workaround; does not need you |
| **Mom Test** | Talk about their past, then let them try; do not ask “is my idea good?” |
| **Simulated user feedback** | AI role-play; plausible, not evidence |
| **Finding / pattern** | A repeated stall you will act on; not a 1–10 score |
| **MVP** | Smallest offer that delivers core value and supports learning |
| **MVP card** | Core job, persona, includes, excludes, how you will know |
| **Now / Next / Later** | Act now, soon, or park |
| **Iteration** | Smallest change, then the same questions again |
| **Happy path / status trail** | Intended success flow; visible steps after “request sent” |
| **Rationale / change log / trade-off** | Why you changed; map to a source; what you refused and the risk you still own |
| **Google Stitch / Lovable / Replit / AI Studio** | Builders used to iterate screens and publish a tappable prototype |
| **Feature bloat** | Adding so many extras that the core job is harder to see |
