<style>
/* Fenced code: light panel, dark text */
pre[class*="language-"],
.markdown-body pre,
pre {
  background: #f1f5f9 !important;
  border: 1px solid #e2e8f0 !important;
  border-radius: 8px !important;
  color: #0f172a !important;
}

pre code,
.markdown-body pre code {
  background: transparent !important;
  color: #1e293b !important;
  opacity: 1 !important;
}

/* Syntax highlighting on light background (hljs / Prism / pygments) */

pre code .hljs-keyword,
pre code .hljs-selector-tag,
pre code .hljs-selector-class,
pre code .hljs-section { color: #5b21b6 !important; }

pre code .hljs-string,
pre code .hljs-regexp,
pre code .hljs-addition { color: #0f766e !important; }

pre code .hljs-number,
pre code .hljs-literal { color: #b45309 !important; }

pre code .hljs-built_in,
pre code .hljs-title.function_,
pre code .hljs-title.class_,
pre code .hljs-function,
pre code .hljs-title { color: #1d4ed8 !important; }

pre code .hljs-variable,
pre code .hljs-template-variable,
pre code .hljs-attr,
pre code .hljs-name,
pre code .hljs-params { color: #0f172a !important; }

pre code .hljs-type { color: #0369a1 !important; }

pre code .hljs-meta,
pre code .hljs-doctag { color: #475569 !important; }

pre code .token.keyword { color: #5b21b6 !important; }
pre code .token.string { color: #0f766e !important; }
pre code .token.number { color: #b45309 !important; }
pre code .token.function { color: #1d4ed8 !important; }
pre code .token.operator,
pre code .token.punctuation { color: #334155 !important; }
pre code .token.parameter,
pre code .token.property { color: #0f172a !important; }

/* F-strings / template literals: `{var}` must stay dark (fixes white/lost contrast on light bg) */
pre code .hljs-subst,
pre code .hljs-template-variable,
.markdown-body pre code .hljs-subst,
.markdown-body pre code .hljs-template-variable {
  color: #0f172a !important;
}

pre code .hljs-string .hljs-subst,
pre code .hljs-string .hljs-subst *,
pre code .hljs-string .hljs-variable,
pre code .hljs-string .hljs-built_in,
pre code .hljs-string .hljs-keyword,
.markdown-body pre code .hljs-string .hljs-subst,
.markdown-body pre code .hljs-string .hljs-subst * {
  color: #0f172a !important;
}

/* Prism-style interpolation */
pre code .token.interpolation,
pre code .token.interpolation-punctuation,
pre code .token.string .token.punctuation,
pre code .language-python .token.string .token,
pre code .token.string .token.builtin {
  color: #0f172a !important;
}

/* VS Code TextMate-style meta.embedded / source inside string */
pre code span[class*="embedded"],
pre code span[class*="interp"] {
  color: #0f172a !important;
}

/* Pygments: String.Interpol (f-string `{…}` regions) */
pre code .si {
  color: #0f172a !important;
}

/* Comments (all common highlighters) */
.hljs-comment,
.hljs-quote,
span[class*="hljs-comment"],
.token.comment,
.token.prolog,
.token.doctype,
.token.cdata,
.highlight .c,
.highlight .c1,
.highlight .cm,
.highlight .cp,
.highlight .cs,
.markdown-body pre code span.line > span[class*="block-comment"],
.markdown-body pre code span.line > span[class*="line-comment"] {
  color: #334155 !important;
  opacity: 1 !important;
}

/* Inline backticks in body text */
:not(pre) > code,
.markdown-body :not(pre) > code {
  color: #0f172a !important;
  background: rgba(30, 41, 59, 0.08) !important;
  opacity: 1 !important;
}

/* Mermaid edge labels (True / False): stop the text being clipped */
.edgeLabel,
span.edgeLabel,
.edgeLabel p,
foreignObject,
svg .label {
  overflow: visible !important;
}

span.edgeLabel,
.edgeLabel p {
  display: inline-block !important;
  box-sizing: content-box !important;
  padding: 6px 12px !important;
  line-height: 1.45 !important;
  background: #ffffff !important;
  border-radius: 4px;
}
</style>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #1e40af; background: linear-gradient(135deg, #f4f7fb 0%, #eef2f8 100%); padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

# **Mastering Control Flow: Conditional and Loop in Python**

Instructor notes. Brief points to teach from. Diagrams and images stay at original size. About two code snippets per concept.

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #475569; background: #f8fafc; padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **Session 2 Quick Recap — Operators and Conditionals**

*Python Building Blocks — Operators and Conditional Statements*

- **Operators** turn stored values into results: `+` `-` `*` `/` `//` `%` `**`
- **Precedence:** `**` → `*` `/` `//` `%` → `+` `-`; use **`()`** when order matters (BODMAS-style)
- **Expressions** mix variables and operators — e.g. kirana bill `rice_kg * rice_rate + dal_kg * dal_rate`
- **`/`** gives a float; **`//`** whole groups; **`%`** remainder (even/odd, leftovers)
- **Decisions:** **`if` / `elif` / `else`** — top to bottom; **first True block runs**, then the chain stops
- **`==`** compares values; **`=`** assigns — `if marks = 50:` is a **SyntaxError**
- **Comparisons** return True/False: `==` `!=` `>` `<` `>=` `<=`
- **Indentation (4 spaces)** after `:` defines each block; **`elif` / `else`** align with **`if`**

```python
marks = 78
if marks >= 90:
    print("Grade: A")
elif marks >= 75:
    print("Grade: B")   # Session 2 pattern — first match wins
else:
    print("Other grade")
```

- **Today builds on this:** you already choose *whether* to run a block; Session 3 adds *how many times* with loops

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #2563eb; background: #eff6ff; padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **What You Will Learn**

- Already know: variables, operators, `if` / `elif` / `else`
- Next: **repeat** actions with loops — each line still runs only once without them
- **`while`**: start, stop, update; **infinite loops**
- **`for`** + **`range()`**: start, stop, step, reverse
- Summation, tables, **factorial**

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #7c3aed; background: #f5f3ff; padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **Why Programs Need Loops**

- Dosa tiffin centre: 50 plates — do not write “flip dosa 1…50”
- Billing: every kirana item; results: every student; conductor: every passenger
- **Official:** loop / iteration = repeat a block until a condition fails or a count is done
- **Simple:** “Do this again and again” instead of copy-paste
- **Example:** temple prasad — one laddu **each** person in the queue

![Loops as repeating dosa plates and prasad counter — one instruction written once, loop repeats for 50 students, items, or plates](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-english/s03/s03-01-loops-repetition-dosa-prasad.png?v=20260920)

```mermaid
%%{init: {"flowchart": {"htmlLabels": false, "curve": "basis", "padding": 24, "nodeSpacing": 80, "rankSpacing": 90, "diagramPadding": 48}}}%%
flowchart LR
    A["  One instruction written once  "] --> B["  Loop repeats it  "]
    B --> C["  50 students / items / plates  "]
```

- Conditionals: **should** this block run? Loops: **how many times?**
- Together = **control flow** — think and repeat

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #0d9488; background: #f0fdfa; padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **Incrementing and Decrementing**

- Almost every loop needs values that **go up** or **go down**
- **Official:** increment = increase (usually +1); decrement = decrease (usually −1)
- **Simple:** counting up 1, 2, 3 vs down 10, 9, 8
- **Example:** lift — floor 0 → 1 → 2 → 3; coming down decrements

![Lift increment and rocket countdown decrement — floors going up and T-minus counting down](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-english/s03/s03-02-increment-decrement-lift-countdown.png?v=20260920)

```python
current_floor = 0
current_floor = current_floor + 1   # 1
current_floor += 1                  # same idea — now 2, then 3
print(current_floor)
```

```python
countdown = 10
countdown = countdown - 1   # 9
countdown -= 1              # 8
```

- Forgetting the update inside a loop → value never changes → loop never ends

**Cricket over** — same bowl action; ball counter 1…6 then stop

```mermaid
%%{init: {"flowchart": {"htmlLabels": false, "curve": "basis", "padding": 24, "nodeSpacing": 80, "rankSpacing": 90, "diagramPadding": 48}}}%%
flowchart TB
    S["  Start: ball = 1  "] --> C{"  ball <= 6?  "}
    C -->|"  True  "| A["  Bowl the ball  "]
    A --> U["  ball = ball + 1  "]
    U --> C
    C -->|"  False  "| E["  Over complete  "]
```

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #b45309; background: #fffbeb; padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **Types of Loops and `while` Syntax**

| Type | Best when | Idea |
|------|-----------|------|
| `while` | Until a **condition** changes | Keep doing this **while** True |
| `for` | Known **count** / range | Do this **for every** number |

- Know how many times? → `for`. Until something happens? → `while`
- **Example:** 5 thali items → `for`; wait for cooker whistle → `while`

![while vs for — cooker whistle until done vs thali menu with fixed item count](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-english/s03/s03-03-while-vs-for-loop-types.png?v=20260920)

```mermaid
%%{init: {"flowchart": {"htmlLabels": false, "curve": "basis", "padding": 24, "nodeSpacing": 80, "rankSpacing": 90, "diagramPadding": 48}}}%%
flowchart TB
    Q{"  Know how many times?  "}
    Q -->|"  Yes — fixed count  "| F["  Use for  "]
    Q -->|"  No — until condition changes  "| W["  Use while  "]
```

```python
count = 1
while count <= 5:
    print(count)
    count = count + 1

for num in range(1, 6):
    print(num)
```

- `while` = you write start, condition, update
- `for` + `range()` = Python counts for you

**`while`** — checked **before** each round. “While the signal is red, wait.”

```python
while condition:   # colon required
    # body — 4 spaces
    # something must eventually make condition False
```

| Part | Meaning |
|------|---------|
| `while` | Keyword |
| condition | True → keep going |
| `:` | Required |
| Indented body | Repeats |

- Comparisons: `>` `<` `>=` `<=` `==` `!=`
- Unindented lines run **once**, after the loop

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #c2410c; background: #fff7ed; padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **Start, Stop, and Update**

Every working `while` needs three parts — race **start**, **finish**, **steps**.

| Part | Role | Example |
|------|------|---------|
| Start | Value before the loop | `count = 1` |
| Stop | Condition to continue | `while count <= 5` |
| Update | Change so it can end | `count = count + 1` |

![while loop start stop update — race track metaphor for counter start, condition, and increment](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-english/s03/s03-04-while-loop-start-stop-update.png?v=20260920)

```python
count = 1
while count <= 5:
    print(count)
    count = count + 1
print("Loop finished!")
```

- Rounds 1–5 print 1…5; at 6 the condition is False
- Forget `count = count + 1` → prints `1` forever

```mermaid
%%{init: {"flowchart": {"htmlLabels": false, "curve": "basis", "padding": 24, "nodeSpacing": 80, "rankSpacing": 90, "diagramPadding": 48}}}%%
flowchart TB
    S["  count = 1  "] --> C{"  count <= 5?  "}
    C -->|"  True  "| P["  print count  "]
    P --> U["  count = count + 1  "]
    U --> C
    C -->|"  False  "| F["  Loop finished  "]
```

**Countdown**

```python
countdown = 5
while countdown > 0:
    print("T-minus", countdown)
    countdown = countdown - 1
print("Liftoff!")
```

**Savings** — ₹500/month from ₹0 until ≥ ₹3000

```python
balance = 0
while balance < 3000:
    balance = balance + 500
    print("Current balance: Rs.", balance)
print("Goal reached! Final balance: Rs.", balance)
```

**Activity:** even numbers 2 to 10 — start 2, add 2 each round

```python
number = 2
while number <= 10:
    print(number)
    number = number + 2
```

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #be123c; background: linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%); padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **Infinite Loops**

- Condition never becomes False → program stuck in a circle
- **Example:** fan with no off switch — you must build the off switch into the loop

![Infinite loop warning — fan running forever and checklist for start, condition, update, direction](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-english/s03/s03-05-infinite-loop-warning.png?v=20260920)

**Missing update**

```python
# WARNING — runs forever
count = 1
while count <= 5:
    print(count)
    # forgot count = count + 1
```

**Wrong direction** — want down, but add instead

```python
# WARNING — countdown goes 11, 12, 13...
countdown = 10
while countdown > 0:
    print(countdown)
    countdown = countdown + 1   # should be - 1
```

- OneCompiler: **Stop** or refresh
- Later: `break` / `continue`

| Check | Ask |
|-------|-----|
| Start | Counter set before the loop? |
| Condition | Will it become False? |
| Update | Increment or decrement inside? |
| Direction | Moving **toward** the stop? |

- Test with small numbers first (1 to 3 before 1 to 100)

```mermaid
%%{init: {"flowchart": {"htmlLabels": false, "curve": "basis", "padding": 24, "nodeSpacing": 80, "rankSpacing": 90, "diagramPadding": 48}}}%%
flowchart TB
    subgraph good["  Working Loop  "]
        G1["  count = 1  "] --> G2{"  count <= 5?  "}
        G2 -->|"  True  "| G3["  print + update  "]
        G3 --> G2
        G2 -->|"  False  "| G4["  Stop  "]
    end
    subgraph bad["  Infinite Loop  "]
        B1["  count = 1  "] --> B2{"  count <= 5?  "}
        B2 -->|"  True  "| B3["  print only — no update  "]
        B3 --> B2
    end
```

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #be123c; background: linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%); padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **Part 2 — `for` Loops and `range()`**

You can count with `while`. Next: fixed counts, tables, sums, and factorial with **`for`** and **`range()`**.

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #047857; background: #ecfdf5; padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **The `for` Loop — vs `while`**

- Best when you know **how many** times — especially with `range()`
- **Official:** run the body once per number from `range()`
- **Example:** conductor — Stop 1, Stop 2, Stop 3…

![for loop bus stops and fare per km — range visits each stop when count is known](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-english/s03/s03-06-for-loop-range-bus-stops.png?v=20260920)

```python
for num in range(1, 6):
    # runs once per number
```

| Part | Meaning |
|------|---------|
| `for` / `in` / `:` | Keywords + colon |
| variable | Current number (`num`, `i`) |
| `range()` | Numbers to visit |
| Indented body | Once per number |

```python
for stop_number in range(1, 5):
    print("Arriving at stop:", stop_number)
```

- `print` **outside** the loop shows only the **last** value

```python
count = 1
while count <= 5:
    print(count)
    count = count + 1

for num in range(1, 6):
    print(num)
```

| | `while` | `for` |
|--|---------|-------|
| Counter | You write start / condition / update | `range()` handles it |
| Best for | Unknown count, condition stop | Known count |
| Risk | Infinite loop if update forgotten | `range()` always ends |

**Activity:** bus ₹2/km for 1–5 km

```python
rate_per_km = 2
for distance in range(1, 6):
    fare = distance * rate_per_km
    print(distance, "km → Rs.", fare)
```

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #1d4ed8; background: #eff6ff; padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **`range()` — Start, Stop, Step**

- Token counter: 1, 2, 3… without listing each number
- Cricket over: `range(1, 7)` → balls 1–6

| Form | Meaning | Example |
|------|---------|---------|
| `range(stop)` | 0 to stop−1 | `range(5)` → 0,1,2,3,4 |
| `range(start, stop)` | start to stop−1 | `range(2, 7)` → 2,3,4,5,6 |
| `range(start, stop, step)` | jump by step | `range(0, 10, 2)` → 0,2,4,6,8 |

- **Always stops before** the stop value
- Want 1 through 5 → `range(1, 6)` not `range(1, 5)`

![Three forms of range() with stop-before rule — range(5), range(2,7), range(0,10,2)](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-english/s03/s03-07-range-function-three-forms.png?v=20260920)

```mermaid
%%{init: {"flowchart": {"htmlLabels": false, "curve": "basis", "padding": 24, "nodeSpacing": 80, "rankSpacing": 90, "diagramPadding": 48}}}%%
flowchart LR
    R1["  range(5)  "] --> O1["  0,1,2,3,4  "]
    R2["  range(2,7)  "] --> O2["  2,3,4,5,6  "]
    R3["  range(0,10,2)  "] --> O3["  0,2,4,6,8  "]
```

```python
for i in range(5):
    print(i)   # 0 1 2 3 4

for num in range(1, 6):
    print(num)   # 1 through 5

for num in range(0, 10, 2):
    print(num)   # evens 0..8
for num in range(1, 10, 2):
    print(num)   # odds 1..9
```

- Count 1 to N → `range(1, N + 1)`

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #a21caf; background: #faf5ff; padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **Range Variations and Reverse**

**Negative step**

```python
for num in range(10, 0, -1):
    print("T-minus", num)
print("Liftoff!")
```

- `range(10, 0, -1)` → 10 down to 1 (stops **before** 0)
- N down to 1 → `range(N, 0, -1)`

**`reversed()`**

```python
for num in reversed(range(1, 6)):
    print(num)   # 5 4 3 2 1
```

```mermaid
%%{init: {"flowchart": {"htmlLabels": false, "curve": "basis", "padding": 24, "nodeSpacing": 80, "rankSpacing": 90, "diagramPadding": 48}}}%%
flowchart LR
    F["  range(1, 6)  "] --> FW["  1, 2, 3, 4, 5  "]
    R["  range(10, 0, -1)  "] --> RV["  10, 9, ..., 1  "]
    REV["  reversed(range(1, 6))  "] --> REVO["  5, 4, 3, 2, 1  "]
```

**Activity:** table of 6 — `6 × 1` to `6 × 10`

```python
number = 6
for i in range(1, 11):
    result = number * i
    print(number, "x", i, "=", result)
```

- Stop is **11**, not 10

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #4f46e5; background: #eef2ff; padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **Solve Problems with `for`**

**Sum 1 to 100** — accumulator starts at 0

```python
n = 100
total = 0
for num in range(1, n + 1):
    total = total + num
print("Sum from 1 to", n, "is:", total)   # 5050
```

- `print` **outside** the loop — once after all adds

**Multiples of 5** to 50 — use **step**, no `if` needed

```python
for num in range(5, 51, 5):
    print(num)
```

**Even / odd 1 to 10** — loop + `%` + `if`

```python
for num in range(1, 11):
    if num % 2 == 0:
        print(num, "→ EVEN")
    else:
        print(num, "→ ODD")
```

**Activity:** squares 1 to 5

```python
for num in range(1, 6):
    square = num * num
    print(num, "squared =", square)
```

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #0f766e; background: #f0fdfa; padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **Factorial with a `for` Loop**

- `n!` = 1 × 2 × … × n — e.g. `5! = 120`
- Arranging 4 books → `4! = 24` orders
- `0!` is **1** (mention only)

| n | n! |
|---|-----|
| 3 | 6 |
| 4 | 24 |
| 5 | 120 |

![Factorial 5! = 120 — accumulator chain multiplying 1 through 5](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-english/s03/s03-08-factorial-calculation.png?v=20260920)

- Start `result = 1`; multiply by 1, 2, 3, 4, 5 → 120

```python
n = 5
result = 1
for i in range(1, n + 1):
    result = result * i
    print("After multiplying by", i, "→ result =", result)
print(n, "! =", result)   # 5! = 120
```

```mermaid
%%{init: {"flowchart": {"htmlLabels": false, "curve": "basis", "padding": 24, "nodeSpacing": 80, "rankSpacing": 90, "diagramPadding": 48}}}%%
flowchart TB
    S["  result = 1  "] --> L{"  for i in 1 to n  "}
    L --> M["  result = result * i  "]
    M --> L
    L -->|"  done  "| P["  print n! = result  "]
```

**Same job with `while`**

```python
n = 5
result = 1
counter = 1
while counter <= n:
    result = result * counter
    counter = counter + 1
print(n, "! =", result)
```

**Activity:** paper first — `4! = 24`, `6! = 720`, `7! = 5040`

| Problem | Likely cause | Fix |
|---------|--------------|-----|
| Same number forever | Missing `while` update | Add `+ 1` or `- 1` |
| One too few / many | Off-by-one in `range()` | Stops **before** stop |
| Only last value | `print` outside the loop | Indent it |
| Wrong total | Accumulator outside | Keep update **inside** |
| Never stops | Update away from stop | Check + vs − |

**Trace:** `range(1, 5)` → 1+2+3+4 = **10** (not 5)

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #1e40af; background: linear-gradient(135deg, #f4f7fb 0%, #eef2f8 100%); padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **Key Takeaways**

- **Loops** repeat without copy-paste
- **`while`**: start + stop condition + **update** — or infinite loop
- **`for`** + **`range()`** when the count is known
- `range()` stops **before** `stop`; negative step counts down
- **Accumulator:** 0 for sums, 1 for factorial

### Quick Reference

| Term | What it does |
|------|----------------|
| Loop / iteration | Repeat a block |
| `while` / `for` | Condition repeat / once per `range()` value |
| Increment / decrement | `+= 1` / `-= 1` |
| Infinite loop | Condition never False |
| `range(stop)` | 0 … stop−1 |
| `range(start, stop, step)` | Custom step; negative = down |
| `reversed()` | Flip a `range()` |
| Accumulator / counter | Running total / progress tracker |
| Factorial `n!` | Product 1…n |
| Off-by-one | Loop one too many or too few |

</div>
