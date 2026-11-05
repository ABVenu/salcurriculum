const IMG = {
  loopsNeed: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s03/s03-01-loops-repetition-dosa-prasad.png?v=20260709",
  increment: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s03/s03-02-increment-decrement-lift-countdown.png?v=20260709",
  whileVsFor: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s03/s03-03-while-vs-for-loop-types.png?v=20260709",
  whileLoop: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s03/s03-04-while-loop-start-stop-update.png?v=20260709",
  infinite: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s03/s03-05-infinite-loop-warning.png?v=20260709",
  forLoop: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s03/s03-06-for-loop-range-bus-stops.png?v=20260709",
  rangeFn: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s03/s03-07-range-function-three-forms.png?v=20260709",
  factorial: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s03/s03-08-factorial-calculation.png?v=20260709b",
};

const SLIDES = [
  {
    type: "title",
    title: "Mastering Control Flow",
    subtitle: "while Loops, for Loops, range(), Infinite Loops, Factorial",
    instructor: "Venugopal Burli",
    mermaid: `mindmap
  root((Control Flow))
    while loop
    for loop
    range
    Infinite loops
    Factorial`,
  },
  {
    type: "recap",
    theme: "python",
    title: "Previous Session Recap",
    definition:
      "Before loops, recall operators and conditionals — your programs can calculate and decide, but each line still runs only once.",
    bullets: [
      "Arithmetic operators: +, -, *, /, //, %, ** — for marks, bills, area",
      "Operator precedence — use ( ) like BODMAS",
      "if / elif / else — only the first True block runs",
      "Comparison operators: ==, !=, >, <, >=, <=",
      "Indentation (4 spaces) groups lines inside conditions",
    ],
    mermaid: `mindmap
  root((Building Blocks))
    Operators
    Precedence
    if elif else
    Comparisons`,
  },
  {
    type: "scene",
    theme: "ops",
    title: "Introduction to `while` Loops",
    los: [
      "Understand the need for loops in automating repetitive tasks",
      "Explain incrementing and decrementing with real-life analogies",
      "Identify loop types and describe while loop syntax",
      "Use start, stop, and update conditions in a while loop",
      "Recognise infinite loops through practical examples",
    ],
    mermaid: `flowchart LR
    A[One instruction] --> B[Loop repeats]
    B --> C[Many tasks handled]`,
  },
  {
    theme: "ops",
    title: "Why Do Programs Need Loops?",
    image: IMG.loopsNeed,
    definition:
      "A loop executes a block repeatedly until a condition fails or a fixed count completes — one instruction handles many repetitions.",
    bullets: [
      "Dosa tiffin centre — flip 50 plates without 50 separate instructions",
      "Conditionals decide WHAT to do; loops decide HOW MANY TIMES",
      "Together they form control flow — think and repeat",
    ],
    mermaid: `flowchart LR
    A[One instruction written once] --> B[Loop repeats it]
    B --> C[50 students / items / plates handled]`,
  },
  {
    theme: "ops",
    title: "Incrementing & Decrementing",
    image: IMG.increment,
    definition:
      "Incrementing counts up (+1); decrementing counts down (-1). Every loop uses this to know when to stop.",
    bullets: [
      "Lift floors: 0 → 1 → 2 → 3 (increment)",
      "Rocket countdown: 10 → 9 → 8 → 7 (decrement)",
      "Cricket over: ball counter 1 to 6, then stop",
    ],
    mermaid: `flowchart TB
    S[Start: ball = 1] --> C{ball <= 6?}
    C -->|True| A[Bowl the ball]
    A --> U[ball = ball + 1]
    U --> C
    C -->|False| E[Over complete]`,
  },
  {
    theme: "ops",
    title: "Types of Loops in Python",
    image: IMG.whileVsFor,
    definition:
      "while repeats until a condition changes. for repeats for each number in a known range via range().",
    table: [
      ["Loop", "Best When", "Idea"],
      ["while", "Repeat until condition changes", "Wait while red light"],
      ["for", "Known count of numbers", "Print menu items 1–5"],
    ],
    mermaid: `flowchart TB
    Q{Know how many times?}
    Q -->|Yes| F[Use for loop]
    Q -->|No| W[Use while loop]`,
  },
  {
    theme: "ops",
    title: "while vs for — Same Output",
    definition: "Both can print 1, 2, 3, 4, 5 — while needs manual counter; for uses range().",
    code: `# while — you manage start, condition, update
count = 1
while count <= 5:
    print(count)
    count = count + 1

# for — Python handles counting via range()
for num in range(1, 6):
    print(num)`,
    mermaid: `flowchart LR
    W[while: manual counter] --> O[1 2 3 4 5]
    F[for + range] --> O`,
  },
  {
    theme: "ops",
    title: "while Loop — Start, Stop, Update",
    image: IMG.whileLoop,
    definition:
      "Every working while loop needs three parts: start value, stop condition, and update inside the loop.",
    bullets: [
      "Start: count = 1",
      "Stop: while count <= 5",
      "Update: count = count + 1 — forgetting this causes infinite loop",
    ],
    code: `count = 1
while count <= 5:
    print(count)
    count = count + 1
print("Loop finished!")`,
    mermaid: `flowchart TB
    S[count = 1] --> C{count <= 5?}
    C -->|True| P[print count]
    P --> U[count = count + 1]
    U --> C
    C -->|False| F[Loop finished]`,
  },
  {
    theme: "ops",
    title: "while Loop — Countdown & Savings",
    definition: "Decrement for countdown; increment for savings until a goal is reached.",
    code: `# Countdown 5 to 1
countdown = 5
while countdown > 0:
    print("T-minus", countdown)
    countdown = countdown - 1
print("Liftoff!")

# Savings — Rs. 500/month until Rs. 3000
balance = 0
while balance < 3000:
    balance = balance + 500
    print("Balance:", balance)`,
  },
  {
    type: "activity",
    theme: "ops",
    title: "Print Even Numbers 2 to 10",
    definition: "Use a while loop — start at 2, add 2 each round, stop when number > 10.",
    code: `number = 2
while number <= 10:
    print(number)
    number = number + 2`,
    mermaid: `flowchart LR
    S[2] --> P[print] --> U[+2] --> C{<=10?}`,
  },
  {
    theme: "ops",
    title: "Infinite Loops — When a Loop Never Stops",
    image: IMG.infinite,
    definition:
      "An infinite loop runs forever because the exit condition never becomes False — usually a missing or wrong update.",
    bullets: [
      "Missing count = count + 1 → prints 1 forever",
      "Wrong direction: countdown + 1 instead of - 1",
      "Fix: check start, condition, update, direction",
      "Stop runaway program: OneCompiler Stop button",
    ],
    mermaid: `flowchart TB
    subgraph good["Working Loop"]
        G1[count = 1] --> G2{count <= 5?}
        G2 -->|True| G3[print + update]
        G3 --> G2
        G2 -->|False| G4[Stop]
    end
    subgraph bad["Infinite Loop"]
        B1[count = 1] --> B2{count <= 5?}
        B2 -->|True| B3[print only]
        B3 --> B2
    end`,
  },
  {
    type: "scene",
    theme: "cond",
    title: "Introduction to `for` Loops",
    los: [
      "Review while vs for syntax and differences",
      "Use for loop with range(start, stop, step)",
      "Demonstrate reversed loops and range variations",
      "Apply for loops to solve range-based problems",
      "Calculate factorial using a for loop",
    ],
    mermaid: `flowchart LR
    R[range] --> F[for loop]
    F --> N[Each number processed]`,
  },
  {
    theme: "cond",
    title: "The for Loop & range()",
    image: IMG.forLoop,
    definition:
      "for visits each number from range() — ideal when you know how many times to repeat.",
    bullets: [
      "Bus conductor calls Stop 1, Stop 2, Stop 3…",
      "Syntax: for num in range(1, 6):",
      "range() generates numbers — Python moves to next automatically",
    ],
    code: `for stop_number in range(1, 5):
    print("Arriving at stop:", stop_number)

rate_per_km = 2
for distance in range(1, 6):
    fare = distance * rate_per_km
    print(distance, "km -> Rs.", fare)`,
  },
  {
    theme: "cond",
    title: "The range() Function — Three Forms",
    image: IMG.rangeFn,
    definition: "range() always stops BEFORE the stop value — range(1, 6) gives 1 through 5.",
    table: [
      ["Form", "Meaning", "Output"],
      ["range(5)", "0 to stop-1", "0,1,2,3,4"],
      ["range(2, 7)", "start to stop-1", "2,3,4,5,6"],
      ["range(0, 10, 2)", "start, stop, step", "0,2,4,6,8"],
    ],
    mermaid: `flowchart LR
    R1["range(5)"] --> O1["0,1,2,3,4"]
    R2["range(2,7)"] --> O2["2,3,4,5,6"]
    R3["range(0,10,2)"] --> O3["0,2,4,6,8"]`,
  },
  {
    theme: "cond",
    title: "range() Examples & Reversed Loops",
    definition: "Use negative step to count down; reversed() flips a forward range.",
    code: `# Count 1 to 5
for num in range(1, 6):
    print(num)

# Even numbers with step
for num in range(0, 10, 2):
    print(num)

# Countdown 10 to 1
for num in range(10, 0, -1):
    print("T-minus", num)`,
    mermaid: `flowchart LR
    F["range(1, 6)"] --> FW["1,2,3,4,5"]
    R["range(10,0,-1)"] --> RV["10..1"]
    REV["reversed(range(1,6))"] --> REVO["5,4,3,2,1"]`,
  },
  {
    type: "activity",
    theme: "cond",
    title: "Multiplication Table for 6",
    definition: "One for loop replaces ten print statements — range(1, 11) gives multipliers 1 to 10.",
    code: `number = 6
for i in range(1, 11):
    result = number * i
    print(number, "x", i, "=", result)`,
  },
  {
    theme: "cond",
    title: "Solving Problems with for Loops",
    definition: "Combine for, range(), and operators — use accumulator pattern for totals.",
    code: `# Sum 1 to 100
n = 100
total = 0
for num in range(1, n + 1):
    total = total + num
print("Sum:", total)

# Multiples of 5
for num in range(5, 51, 5):
    print(num)`,
  },
  {
    theme: "cond",
    title: "for Loop + Conditionals",
    definition: "Loop handles repetition; if-else handles the decision each round.",
    code: `# Even or odd 1 to 10
for num in range(1, 11):
    if num % 2 == 0:
        print(num, "-> EVEN")
    else:
        print(num, "-> ODD")`,
  },
  {
    type: "activity",
    theme: "cond",
    title: "Print Squares 1 to 5",
    definition: "Multiply each number by itself inside the loop.",
    code: `for num in range(1, 6):
    square = num * num
    print(num, "squared =", square)`,
  },
  {
    theme: "cond",
    title: "Calculating Factorial",
    image: IMG.factorial,
    definition: "n! = 1 × 2 × 3 × … × n. Start result = 1, multiply each number in the loop.",
    bullets: [
      "5! = 5 × 4 × 3 × 2 × 1 = 120",
      "Accumulator pattern with multiplication",
      "for with range() is shorter than while for this task",
    ],
    code: `n = 5
result = 1
for i in range(1, n + 1):
    result = result * i
    print("After x", i, "->", result)
print(n, "! =", result)`,
    mermaid: `flowchart TB
    S[result = 1] --> L{for i in 1 to n}
    L --> M[result = result * i]
    M --> L
    L -->|done| P[print n! = result]`,
  },
  {
    theme: "cond",
    title: "Factorial — while Loop Alternative",
    definition: "Same logic with while — counter tracks which number to multiply next.",
    code: `n = 5
result = 1
counter = 1
while counter <= n:
    result = result * counter
    counter = counter + 1
print(n, "! =", result)`,
  },
  {
    type: "activity",
    theme: "cond",
    title: "Factorial Calculator",
    definition: "Change n and verify on paper first: 4!=24, 6!=720, 7!=5040.",
    code: `n = 4
result = 1
for i in range(1, n + 1):
    result = result * i
print(n, "! =", result)`,
  },
  {
    theme: "ops",
    title: "Debugging Loop Programs",
    definition: "Trace small ranges on paper before running — catch off-by-one and missing updates early.",
    table: [
      ["Problem", "Likely Cause", "Fix"],
      ["Same number forever", "Missing update", "Add count = count + 1"],
      ["One too few/many", "Off-by-one in range()", "Stop is before stop value"],
      ["Only last value shown", "print outside loop", "Move print inside"],
      ["Never stops", "Wrong update direction", "Check increment vs decrement"],
    ],
  },
  {
    type: "activity",
    theme: "ops",
    title: "Trace This Loop on Paper",
    definition: "range(1, 5) gives 1,2,3,4 — not 5. Expected total = 10.",
    code: `total = 0
for i in range(1, 5):
    total = total + i
print(total)`,
    mermaid: `flowchart LR
    I[1+2+3+4] --> T[total=10]`,
  },
  {
    type: "end",
    theme: "summary",
    title: "Key Takeaways",
    definition:
      "You learned to repeat actions with while and for loops — the foundation for break, continue, and nested loops next.",
    bullets: [
      "Loops automate repetition — while (condition) vs for (range)",
      "while needs start, stop condition, and update — avoid infinite loops",
      "range(start, stop, step) — stops before stop; negative step counts down",
      "Accumulator: total=0 for sum, result=1 for factorial",
      "Test with small numbers first; trace on paper before running",
    ],
    mermaid: `mindmap
  root((You Learned))
    while loop
    for loop
    range
    Infinite loops
    Factorial`,
  },
];
