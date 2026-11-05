const IMG = {
  breakExit: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s04/s04-01-break-early-exit.png",
  continueSkip: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s04/s04-02-continue-skip-iteration.png",
  breakVsContinue: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s04/s04-03-break-vs-continue.png",
  nestedField: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s04/s04-04-nested-loops-field.png",
  whileContinue: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s04/s04-05-while-continue-update-first.png",
  nestedAlarm: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s04/s04-06-nested-loops-alarm-clock.png",
};

const SLIDES = [
  {
    type: "title",
    title: "Understanding break, continue, and Nested Loops",
    subtitle: "break, continue, Loop Control, Nested Loops, range() at Two Levels",
    instructor: "Venugopal Burli",
    mermaid: `mindmap
  root((Loop Control))
    break
    continue
    Nested loops
    Outer and inner
    range start stop step`,
  },
  {
    type: "recap",
    theme: "python",
    title: "Previous Session Recap",
    definition:
      "Before break and continue, recall loops — your programs can repeat actions with while and for, using start, stop, update, and range().",
    bullets: [
      "while loop — repeat until a condition becomes False",
      "for loop — visit each number from range(start, stop, step)",
      "Accumulator pattern — total = 0 for sum, result = 1 for factorial",
      "Avoid infinite loops — always update the counter in while",
      "range() stops before the stop value — range(1, 6) gives 1 to 5",
    ],
    mermaid: `mindmap
  root((Session 3))
    while loop
    for loop
    range
    Accumulator
    Infinite loops`,
  },
  {
    type: "scene",
    theme: "ops",
    title: "Break and Continue",
    los: [
      "Understand the purpose of the break statement in exiting loops",
      "Demonstrate the use of break within loops to control loop execution",
      "Explain how to use break in a while loop combined with an if condition",
      "Identify the functionality of the continue statement in loops",
      "Apply continue to skip specific iterations in a loop based on a condition",
    ],
    mermaid: `flowchart LR
    L[Loop running] --> B[break — exit early]
    L --> C[continue — skip one round]
    L --> N[Normal next round]`,
  },
  {
    theme: "ops",
    title: "Why Loops Need Early Control",
    definition:
      "Loop control statements change how a loop runs from inside — exit early, skip one iteration, or coordinate multiple loop levels.",
    table: [
      ["Real-Life Need", "Python Tool"],
      ["Stop searching once keys are found", "break"],
      ["Skip one broken biscuit packet", "continue"],
      ["Check every seat in every row", "Nested loops"],
    ],
    bullets: [
      "break — stop the loop now",
      "continue — skip this round, keep looping",
      "Nested loops — for each outer step, finish a full inner cycle",
    ],
    mermaid: `flowchart TB
    A[Loop starts] --> B{Special case?}
    B -->|Found target| C[break — exit loop]
    B -->|Skip this item| D[continue — next round]
    B -->|Normal work| E[Run loop body]
    E --> F[Next iteration or end]
    D --> F
    C --> G[Code after the loop]`,
  },
  {
    theme: "ops",
    title: "The break Statement — Exit Early",
    image: IMG.breakExit,
    definition:
      "break immediately terminates the innermost loop that contains it. Execution continues with the first statement after that loop.",
    bullets: [
      "Emergency exit door — leave the loop completely",
      "Search-and-stop — find a target and stop scanning",
      "Write break, not break() — no parentheses needed",
      "Only stops the current loop — code after the loop still runs",
    ],
  },
  {
    theme: "ops",
    title: "break — Syntax in a for Loop",
    definition: "Use if to decide when early exit is needed, then break stops the loop at once.",
    code: `# Print numbers 1 to 10, but stop when 5 appears
for num in range(1, 11):
    if num == 5:
        break
    print(num)

# Stop when target 7 is reached
for num in range(1, 15):
    print("Checking:", num)
    if num == 7:
        print("Found 7 — stopping the loop.")
        break
print("Loop finished. Program continues here.")`,
    mermaid: `flowchart TB
    S[num = 1] --> P[print Checking num]
    P --> C{num == 7?}
    C -->|No| N[Next num]
    N --> P
    C -->|Yes| B[break]
    B --> A[print Loop finished]`,
  },
  {
    theme: "ops",
    title: "break Inside a while Loop with if",
    definition:
      "When the real stop reason is clearer inside the body — like a savings goal — use if + break instead of a complex while condition.",
    code: `# Track savings until Rs. 2000 goal is reached
balance = 0
month = 1
monthly_saving = 400

while month <= 12:
    balance = balance + monthly_saving
    print("Month", month, "→ balance Rs.", balance)
    if balance >= 2000:
        print("Goal reached early. Stopping the loop.")
        break
    month = month + 1

print("Final balance: Rs.", balance)`,
    mermaid: `flowchart TB
    S[balance = 0, month = 1] --> W{month <= 12?}
    W -->|True| A[Add monthly saving]
    A --> G{balance >= 2000?}
    G -->|Yes| B[break]
    G -->|No| U[month = month + 1]
    U --> W
    W -->|False| E[Final balance]
    B --> E`,
  },
  {
    theme: "ops",
    title: "break — Search and Stop Pattern",
    definition: "Without break, the loop keeps going and may overwrite the answer. With break, the first match wins.",
    code: `# Find the first multiple of 13 between 1 and 100
found = 0

for num in range(1, 101):
    if num % 13 == 0:
        found = num
        break

print("First multiple of 13 is:", found)`,
    mermaid: `flowchart TB
    S[found = 0] --> C[Check next number]
    C --> F{num % 13 == 0?}
    F -->|No| C
    F -->|Yes| B[found = num]
    B --> X[break — stop searching]
    X --> P[Print answer]`,
  },
  {
    theme: "ops",
    title: "The continue Statement — Skip One Round",
    image: IMG.continueSkip,
    definition:
      "continue skips the remaining statements in the current iteration and jumps to the next iteration — the loop itself does not stop.",
    bullets: [
      "Skip one item, move to the next one",
      "Filter evens to print odds — or skip invalid values",
      "Handle the skip case first to avoid deep if nesting",
      "Loop still visits every value — unlike break",
    ],
  },
  {
    theme: "ops",
    title: "continue — Print Odd Numbers",
    definition: "When num is even, continue jumps to the next number — print(num) never runs for those values.",
    code: `# Print only odd numbers from 1 to 10
for num in range(1, 11):
    if num % 2 == 0:
        continue
    print(num)

# Skip multiples of 4 while printing squares
for num in range(1, 13):
    if num % 4 == 0:
        continue
    square = num * num
    print(num, "squared =", square)`,
    mermaid: `flowchart TB
    S[Next num] --> E{Even or multiple of 4?}
    E -->|Yes| C[continue]
    C --> S
    E -->|No| P[Process and print]
    P --> S`,
  },
  {
    theme: "ops",
    title: "continue Inside a while Loop",
    image: IMG.whileContinue,
    definition:
      "Critical rule: always update the counter before continue in a while loop — otherwise the same value repeats forever.",
    code: `# Count 1 to 8, skip printing multiples of 3
count = 0

while count < 8:
    count = count + 1
    if count % 3 == 0:
        continue
    print("Value:", count)`,
    mermaid: `flowchart TB
    S[count = 0] --> U[count = count + 1]
    U --> C{count % 3 == 0?}
    C -->|Yes| K[continue]
    K --> T{count < 8?}
    C -->|No| P[print Value]
    P --> T
    T -->|Yes| U
    T -->|No| E[Loop ends]`,
  },
  {
    type: "activity",
    theme: "ops",
    title: "Skip Multiples of 10",
    definition: "Print numbers from 1 to 30, but skip any number that is a multiple of 10.",
    code: `for num in range(1, 31):
    if num % 10 == 0:
        continue
    print(num)`,
    mermaid: `flowchart LR
    N[1 to 30] --> M{Multiple of 10?}
    M -->|Yes| S[continue]
    S --> N
    M -->|No| P[print num]`,
  },
  {
    theme: "ops",
    title: "break vs continue — Side by Side",
    image: IMG.breakVsContinue,
    definition: "Both sit inside loops, but they answer different questions about remaining work.",
    table: [
      ["Question", "Use"],
      ["Should I stop the entire loop now?", "break"],
      ["Should I ignore only this round?", "continue"],
    ],
    code: `# break at 5 → output: 1 2 3 4
for num in range(1, 8):
    if num == 5:
        break
    print(num)

# continue at 5 → output: 1 2 3 4 6 7
for num in range(1, 8):
    if num == 5:
        continue
    print(num)`,
  },
  {
    type: "scene",
    theme: "cond",
    title: "Nested Loops",
    los: [
      "Understand the need for nested loops with real-life examples, such as an alarm clock",
      "Identify the syntax of nested loops and how outer and inner loops work together",
      "Demonstrate the use of start, stop, and step with nested loops to control iterations",
      "Apply nested loops to solve problems by iterating over multiple ranges",
      "Create practical examples of nested loops, such as the field and seed example",
    ],
    mermaid: `flowchart TB
    O[Outer loop] --> I[Inner loop completes]
    I --> O2[Next outer value]
    O2 --> I2[Inner loop again]`,
  },
  {
    theme: "cond",
    title: "Why Nested Loops Are Needed",
    definition:
      "A nested loop is a loop inside another loop. The inner loop runs to completion once for each iteration of the outer loop.",
    table: [
      ["Situation", "Outer Level", "Inner Level"],
      ["Alarm clock", "Each hour", "Each minute"],
      ["Classroom", "Each row", "Each seat"],
      ["Farm planting", "Each field row", "Each seed position"],
      ["Exam timetable", "Each day", "Each subject slot"],
    ],
    bullets: ["Total iterations ≈ outer count × inner count — e.g. 3 × 4 = 12"],
    mermaid: `flowchart TB
    O[Outer: hour = 0] --> I[Inner: all minutes for this hour]
    I --> O2[Outer: hour = 1]
    O2 --> I2[Inner: all minutes again]
    I2 --> O3[Outer: hour = 2]
    O3 --> I3[Inner: all minutes again]
    I3 --> E[Done]`,
  },
  {
    theme: "cond",
    title: "Nested Loops — Alarm Clock Example",
    image: IMG.nestedAlarm,
    definition:
      "For each hour, the minute cycle runs fully before the hour advances — hours are outer, minutes are inner.",
    bullets: [
      "Hour 0 → minutes 0, 15, 30, 45",
      "Hour 1 → again minutes 0, 15, 30, 45",
      "Hour 2 → again minutes 0, 15, 30, 45",
      "The hour changes slowly; the minute cycle restarts every time",
    ],
  },
  {
    theme: "cond",
    title: "Nested Loop Syntax — Outer and Inner",
    definition:
      "The inner for is indented one level deeper than the outer for. Wrong indentation makes them separate loops, not nested.",
    code: `# Basic nested for-loop — 3 × 2 = 6 prints
for outer in range(1, 4):
    for inner in range(1, 3):
        print("outer =", outer, "| inner =", inner)

# Classroom rows and seats — 3 × 4 = 12 checks
for row in range(1, 4):
    print("--- Starting row", row, "---")
    for seat in range(1, 5):
        print("Row", row, "Seat", seat)`,
    mermaid: `flowchart TB
    O1[outer = 1] --> I1[inner 1, 2]
    I1 --> O2[outer = 2]
    O2 --> I2[inner 1, 2]
    I2 --> O3[outer = 3]
    O3 --> I3[inner 1, 2]`,
  },
  {
    theme: "cond",
    title: "Nested Loops with start, stop, and step",
    definition:
      "Outer range() controls major cycles; inner range() controls sub-steps inside each cycle — independent control at each level.",
    code: `# Alarm clock — minutes every 20 for hours 0, 1, 2
for hour in range(0, 3):
    for minute in range(0, 60, 20):
        print("Alarm check →", hour, ":", minute)

# Outer by 1; inner by 2
for group in range(1, 4):
    print("Group", group)
    for item in range(2, 9, 2):
        print("  Item number:", item)`,
    mermaid: `flowchart TB
    O["Outer loop: hours 0, 1, 2"] --> I["Inner loop: minutes 0, 20, 40"]
    I --> P["Print each hour-minute pair"]
    P --> N["Next hour — restart inner cycle"]
    N --> O`,
  },
  {
    type: "activity",
    theme: "cond",
    title: "Two-Level Countdown Display",
    definition: "For hours 1 and 2, print minutes 50 and 55 only — total prints: 2 × 2 = 4 lines.",
    code: `for hour in range(1, 3):
    for minute in range(50, 56, 5):
        print("Time", hour, ":", minute)`,
    mermaid: `flowchart LR
    H1[Hour 1] --> M1[50, 55]
    H2[Hour 2] --> M2[50, 55]`,
  },
  {
    theme: "cond",
    title: "Nested Loops Across Multiple Ranges",
    definition:
      "Nested loops visit all pairs from two ranges — multiplication grids, combinations, and dependent inner stops.",
    code: `# Multiplication grid — 3 × 4 = 12 products
for row in range(1, 4):
    for col in range(1, 5):
        print(row, "x", col, "=", row * col)
    print("----")

# Inner stop depends on outer value a
for a in range(1, 4):
    for b in range(1, a + 1):
        print("Pair:", a, b)`,
    mermaid: `flowchart TB
    R1[row 1] --> C1[col 1 to 4]
    C1 --> R2[row 2]
    R2 --> C2[col 1 to 4]
    C2 --> R3[row 3]
    R3 --> C3[col 1 to 4]`,
  },
  {
    theme: "cond",
    title: "Field and Seed Planting — Practical Nested Loop",
    image: IMG.nestedField,
    definition:
      "Outer loop moves to each field row; inner loop plants each seed position in that row. Total actions = rows × seeds.",
    code: `field_rows = 3
seeds_per_row = 5

for row in range(1, field_rows + 1):
    print("Walking to field row", row)
    for seed in range(1, seeds_per_row + 1):
        print("  Planting seed", seed, "in row", row)
    print("Row", row, "complete.")`,
    mermaid: `flowchart TB
    R1[Row 1] --> S1[Seeds 1 to 5]
    S1 --> R2[Row 2]
    R2 --> S2[Seeds 1 to 5]
    S2 --> R3[Row 3]
    R3 --> S3[Seeds 1 to 5]
    S3 --> D[Field planting done]`,
  },
  {
    type: "activity",
    theme: "cond",
    title: "Design Your Own Mini Field",
    definition:
      "Try 4 rows × 3 seeds, then 2 rows × 6 seeds — same total (12), different shape.",
    code: `rows = 4
seeds = 3

for r in range(1, rows + 1):
    for s in range(1, seeds + 1):
        print("R", r, "S", s)`,
    mermaid: `flowchart LR
    A["4 × 3 = 12"] --> B["2 × 6 = 12"]
    B --> C[Same total, different shape]`,
  },
  {
    theme: "cond",
    title: "Sum Each Outer Group — Accumulator Reset",
    definition:
      "Place total = 0 inside the outer loop so each group starts fresh — a common nesting bug if placed outside.",
    code: `for group in range(1, 4):
    total = 0
    for num in range(1, 5):
        total = total + num
    print("Group", group, "sum =", total)`,
    mermaid: `flowchart TB
    G1[Group 1: total = 0] --> A[Add 1+2+3+4]
    A --> P1[Print sum 10]
    P1 --> G2[Group 2: total = 0 again]
    G2 --> A2[Add 1+2+3+4]
    A2 --> P2[Print sum 10]`,
  },
  {
    theme: "cond",
    title: "break and continue in Nested Loops",
    definition:
      "break and continue affect only the innermost loop that directly contains them — the outer loop keeps running.",
    code: `# break stops inner loop only — outer continues
for outer in range(1, 4):
    print("Outer starts:", outer)
    for inner in range(1, 6):
        if inner == 3:
            break
        print("  Inner:", inner)

# continue skips one inner round
for outer in range(1, 3):
    for inner in range(1, 5):
        if inner == 2:
            continue
        print("outer", outer, "inner", inner)`,
    mermaid: `flowchart TB
    O[Outer loop continues] --> I[Inner loop]
    I --> B{break or continue?}
    B -->|break| E[Exit inner only]
    B -->|continue| N[Next inner value]
    E --> O
    N --> I`,
  },
  {
    theme: "ops",
    title: "Debugging Nested and Controlled Loops",
    definition: "Trace small ranges on paper before running — catch accidental break, continue, and nesting bugs early.",
    table: [
      ["Problem", "Likely Cause", "Fix"],
      ["Loop stops too early", "Accidental break", "Check the if condition"],
      ["One value missing", "Accidental continue", "Confirm skip values"],
      ["while + continue forever", "Update after continue", "Move update above continue"],
      ["Nested output looks flat", "Wrong indentation", "Indent inner under outer"],
      ["Totals wrong across groups", "Accumulator not reset", "Set total = 0 in outer loop"],
      ["break did not stop everything", "Innermost loop rule", "Redesign if outer must stop"],
    ],
    mermaid: `flowchart TB
    D[Debug checklist] --> B[Check break conditions]
    D --> C[Check continue skips]
    D --> I[Check indentation]
    D --> A[Reset accumulator per outer cycle]`,
  },
  {
    type: "end",
    theme: "summary",
    title: "Key Takeaways",
    definition:
      "You learned finer loop control — break for early exit, continue to skip one round, and nested loops for multi-level tasks.",
    bullets: [
      "break exits the innermost loop immediately — search-and-stop and early goals",
      "continue skips one iteration — update counter before continue in while loops",
      "Nested loops — inner cycle completes fully for each outer value",
      "range(start, stop, step) works independently at outer and inner levels",
      "break and continue affect only the loop that directly contains them",
    ],
    mermaid: `mindmap
  root((You Learned))
    break
    continue
    Nested loops
    Outer and inner
    range at two levels
    Innermost loop rule`,
  },
];
