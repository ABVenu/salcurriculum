const IMG = {
  kirana: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s02/s02-01-operators-kirana-bill.png?v=20260702",
  operators: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s02/s02-02-arithmetic-operators-overview.png?v=20260702",
  floorMod: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s02/s02-03-floor-division-modulus.png?v=20260702",
  precedence: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s02/s02-04-operator-precedence-bodmas.png?v=20260702",
  realProblems: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s02/s02-05-real-problems-operators.png?v=20260702",
  cinema: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s02/s02-06-conditional-statements-cinema.png?v=20260702",
  grades: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s02/s02-07-if-elif-else-grades.png?v=20260702",
  ladder: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s02/s02-09-if-elif-else-ladder-train.png?v=20260702",
  comparison: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s02/s02-08-comparison-indentation.png?v=20260702",
};

const SLIDES = [
  {
    type: "title",
    title: "Python Building Blocks",
    subtitle: "Arithmetic Operators, Operator Precedence, Conditional Statements, Comparison Operators",
    instructor: "Venugopal Burli",
    mermaid: `mindmap
  root((Building Blocks))
    Operators
    Precedence
    if elif else
    Comparisons`,
  },
  {
    type: "recap",
    theme: "python",
    title: "Session 1 Recap",
    definition:
      "Before operators and conditionals, recall the Python foundations from the previous session.",
    bullets: [
      "Programming language — precise step-by-step instructions for a computer",
      "Input → Process → Output — every program follows this flow",
      "Variables store values — snake_case names, assign with =, show with print()",
      "Data types: int, float, str, bool — check any value using type()",
      "Convert types with int(), float(), str() when numbers and text must work together",
    ],
    mermaid: `mindmap
  root((Session 1))
    Programming
    IPO Model
    Variables
    Data Types
    Type Conversion`,
  },
  {
    type: "scene",
    theme: "ops",
    title: "Operators — Performing Calculations",
    los: [
      "Understand why operators are needed to calculate in programs",
      "Use arithmetic operators on numbers and variables",
      "Build expressions for marks, bills, and area",
      "Follow operator precedence — BODMAS-like rules",
      "Apply operators to solve real kirana bill and marks problems",
    ],
    mermaid: `flowchart LR
    V[Variables] --> O[Operators]
    O --> R[Result]`,
  },
  {
    theme: "ops",
    title: "Introduction to Operators",
    image: IMG.kirana,
    definition:
      "Operators are symbols that perform operations on data (operands). They enable calculations, comparisons, and decisions inside a Python program.",
    bullets: [
      "Without operators, programs only store and display fixed values",
      "Operators power the Process step in Input → Process → Output",
      "Categories: Arithmetic Operators, Comparison Operators, Conditional Statements",
    ],
  },
  {
    theme: "ops",
    title: "Arithmetic Operators",
    image: IMG.operators,
    definition: "Arithmetic operators perform mathematical operations on numeric data (int and float).",
    bullets: [
      "Addition (+), Subtraction (-), Multiplication (*), Division (/)",
      "Floor Division (//), Modulus (%), Exponentiation (**)",
    ],
    code: `# Store two exam scores in variables
math_marks = 78        # Marks in Mathematics
science_marks = 82     # Marks in Science
print(math_marks + science_marks)  # 160

# Multiply price by quantity for a shop bill
notebook_price = 45    # Price of one notebook
quantity = 4           # Number of notebooks
print(notebook_price * quantity)   # 180

print(10 / 3)    # 3.333... — always float
print(10 // 3)   # 3 — whole number only
print(10 % 3)    # 1 — remainder
print(2 ** 3)    # 8 — power`,
  },
  {
    theme: "ops",
    title: "Floor Division & Modulus",
    image: IMG.floorMod,
    definition: "Use // for complete groups; use % for the remainder left over.",
    bullets: [
      "17 // 5 = 3 full boxes | 17 % 5 = 2 apples left",
      "Even/odd check: number % 2 == 0 means even",
    ],
    code: `# A farmer packs 17 apples, 5 per box
total_apples = 17      # Total apples available
apples_per_box = 5     # Maximum apples in one full box

full_boxes = total_apples // apples_per_box  # 3
leftover = total_apples % apples_per_box     # 2

print(full_boxes)   # Shows 3
print(leftover)     # Shows 2

number = 17
print(number % 2)   # 1 → odd`,
  },
  {
    type: "activity",
    theme: "ops",
    title: "Quick Operator Practice",
    definition: "Open OneCompiler. Predict each output before running the code.",
    code: `# Practice arithmetic operators — predict before running
a = 15                 # First number
b = 4                  # Second number

print(a + b)           # Addition: 15 + 4
print(a - b)           # Subtraction: 15 - 4
print(a * b)           # Multiplication: 15 * 4
print(a / b)           # Division: 15 / 4
print(a // b)          # Floor division: 15 // 4
print(a % b)           # Modulus: 15 % 4
print(a ** b)          # Exponentiation: 15 ** 4`,
    mermaid: `flowchart TB
    subgraph basic["Basic Operators"]
        A["+ Addition"]
        S["- Subtraction"]
        M["* Multiplication"]
        D["/ Division"]
    end
    subgraph advanced["Advanced Operators"]
        F["// Floor Division"]
        R["% Modulus"]
        E["** Exponentiation"]
    end`,
  },
  {
    theme: "ops",
    title: "Using Operators with Variables",
    definition:
      "An expression combines variables and operators — change a variable and the output updates automatically.",
    bullets: [
      "Store each value in a descriptive variable",
      "* calculates each item cost; + combines into total",
      "wallet = wallet - 120 uses the latest stored value",
    ],
    code: `# Kirana shop bill — store each item's details
rice_kg = 3            # Kilograms of rice purchased
rice_rate = 55         # Price per kg of rice
dal_kg = 1             # Kilograms of dal purchased
dal_rate = 90          # Price per kg of dal

rice_cost = rice_kg * rice_rate  # 3 * 55 = 165
dal_cost = dal_kg * dal_rate      # 1 * 90 = 90
total_bill = rice_cost + dal_cost  # 165 + 90 = 255

print(total_bill)  # Shows 255`,
    mermaid: `flowchart LR
    R["rice_kg × rate"] --> RC[rice_cost]
    D["dal_kg × rate"] --> DC[dal_cost]
    RC --> TB[total_bill]
    DC --> TB
    TB --> P[print total]`,
  },
  {
    type: "activity",
    theme: "ops",
    title: "Monthly Pocket Money Tracker",
    definition: "Track how pocket money changes over a week. Final balance should be 970.",
    code: `# Starting pocket money for the month
pocket_money = 1000    # Amount received at the start

# Expenses during the week
pocket_money = pocket_money - 150  # Spent on stationery
pocket_money = pocket_money - 80   # Spent on snacks
pocket_money = pocket_money + 200  # Received as gift from relative

print(pocket_money)  # Shows 970`,
    mermaid: `flowchart LR
    W1[1000 Start] --> W2[-150 Stationery]
    W2 --> W3[-80 Snacks]
    W3 --> W4[+200 Gift]
    W4 --> W5[970 Balance]`,
  },
  {
    theme: "ops",
    title: "Operator Precedence",
    image: IMG.precedence,
    definition:
      "When multiple operators appear in one line, Python follows precedence rules — like BODMAS. Use parentheses ( ) to force order.",
    table: [
      ["Priority", "Operators", "Description"],
      ["1", "( )", "Parentheses — evaluated first"],
      ["2", "**", "Exponentiation"],
      ["3", "*, /, //, %", "Multiply, divide, floor, modulus"],
      ["4", "+, -", "Addition, subtraction"],
    ],
    bullets: ["Same priority → left to right | 10 + 2 * 3 = 16 (not 36)"],
  },
  {
    theme: "ops",
    title: "Operator Precedence — Examples",
    definition: "Always use brackets in marks and average formulas to avoid wrong order.",
    code: `# Without parentheses — multiplication before addition
result1 = 10 + 2 * 3   # 2 * 3 = 6 first, then 10 + 6 = 16
print(result1)           # Shows 16

# With parentheses — addition inside brackets first
result2 = (10 + 2) * 3  # 10 + 2 = 12 first, then 12 * 3 = 36
print(result2)           # Shows 36

# Marks average — always use brackets
internal = 25          # Marks out of 30
final_exam = 68          # Marks out of 70
average = (internal + final_exam) / 2  # Same result: 46.5
print(average)`,
    mermaid: `flowchart TB
    P["( ) Parentheses first"]
    E["** Exponent"]
    MD["* / // %"]
    AS["+ -"]
    P --> E --> MD --> AS`,
  },
  {
    type: "activity",
    theme: "ops",
    title: "Predict the Output",
    definition: "Write your predicted answer for each expression, then verify in OneCompiler.",
    code: `# Operator precedence challenge — predict each result
print(5 + 10 * 2)        # Multiplication first: 5 + 20 = ?
print((5 + 10) * 2)      # Brackets first: 15 * 2 = ?
print(100 - 20 / 4)      # Division first: 100 - 5 = ?
print(100 - 20 // 4)     # Floor division first: 100 - 5 = ?
print(2 ** 3 + 1)        # Power first: 8 + 1 = ?
print(2 ** (3 + 1))      # Brackets first: 2 ** 4 = ?`,
    mermaid: `flowchart LR
    A["5 + 10 * 2"] --> B["* first → 25"]
    C["(5+10) * 2"] --> D["( ) first → 30"]`,
  },
  {
    theme: "ops",
    title: "Solving Real Problems with Operators",
    image: IMG.realProblems,
    definition: "Combine variables, operators, and print() for marks, bills, and area.",
    code: `# Student marks
physics = 42           # Marks in Physics
chemistry = 38         # Marks in Chemistry
biology = 45           # Marks in Biology
total = physics + chemistry + biology  # 125
print(total, total / 3)

# Kirana bill
sugar_cost = 2 * 48      # 96
biscuit_cost = 3 * 15    # 45
oil_cost = 1 * 130       # 130
bill_total = sugar_cost + biscuit_cost + oil_cost
print(bill_total)  # 271

# Rectangle area
length, breadth = 12, 8
print(length * breadth)  # 96`,
  },
  {
    type: "activity",
    theme: "ops",
    title: "Design Your Own Bill",
    definition: "Tiffin centre: 2 meal plates at ₹80 each + 1 water bottle at ₹20.",
    code: `# Tiffin centre order
meal_plates = 2        # Number of meal plates ordered
meal_rate = 80         # Price per plate
water_bottles = 1      # Number of water bottles
water_rate = 20        # Price per bottle

meal_cost = meal_plates * meal_rate      # 2 * 80 = 160
water_cost = water_bottles * water_rate    # 1 * 20 = 20
order_total = meal_cost + water_cost       # 160 + 20 = 180
print(order_total)                       # Shows 180`,
    mermaid: `flowchart LR
    M["2 plates × ₹80"] --> T["+"]
    W["1 bottle × ₹20"] --> T
    T --> R["Total ₹180"]`,
  },
  {
    type: "scene",
    theme: "cond",
    title: "Conditional Statements — Making Decisions",
    los: [
      "Understand why programs need if, elif, else to decide",
      "Write conditional statements with correct syntax and colon",
      "Use comparison operators ==, !=, >, <, >=, <=",
      "Control execution blocks with 4-space indentation",
      "Solve pass/fail, eligibility, and pricing problems",
    ],
    mermaid: `flowchart TB
    C{Condition True?}
    C -->|Yes| A[Run block]
    C -->|No| B[Skip or else]`,
  },
  {
    theme: "cond",
    title: "Comparison Operators",
    image: IMG.comparison,
    definition:
      "Comparison operators compare two values and return True or False. Remember: = assigns, == compares.",
    bullets: [
      "== equal | != not equal | > greater | < less",
      ">= greater or equal | <= less or equal",
    ],
    code: `# Variables for comparison examples
a = 10                 # First value
b = 20                 # Second value

print(a == 10)         # True — a is 10
print(a == b)          # False — 10 is not equal to 20
print(b > a)           # True — 20 is greater than 10

# Attendance check
attendance = 82        # Attendance in percentage
if attendance >= 75:
    print("Eligible to write the exam.")`,
  },
  {
    theme: "cond",
    title: "Conditional Statements",
    image: IMG.cinema,
    definition:
      "Conditional statements run an indented block only when a condition is True — like choosing tickets by age.",
    bullets: [
      "if — runs when condition is True",
      "if-else — exactly one of two blocks runs",
      "if-elif-else — first matching condition wins",
    ],
  },
  {
    theme: "cond",
    title: "The if & if-else Statements",
    definition: "Colon (:) and 4-space indentation are required. Missing either causes an error.",
    bullets: [
      "Lines not indented under if always run",
      "if-else: never both blocks — exactly one runs",
    ],
    code: `# Store the person's age
age = 20               # Age in years
if age >= 18:
    print("You are eligible to vote.")

# Pass or Fail
marks = 42             # Marks out of 100
if marks >= 35:
    print("Pass")      # Runs when marks are 35 or above
else:
    print("Fail")      # Runs when marks are below 35

# Even or Odd
number = 17            # Any whole number
if number % 2 == 0:
    print(number, "is even.")
else:
    print(number, "is odd.")`,
    mermaid: `flowchart TB
    A{age >= 18?}
    A -->|True| V[Eligible to vote]
    A -->|False| S[Skip block]
    M{marks >= 35?}
    M -->|True| P[Pass]
    M -->|False| F[Fail]
    N{number % 2 == 0?}
    N -->|True| E[Even]
    N -->|False| O[Odd]`,
  },
  {
    type: "activity",
    theme: "cond",
    title: "Rain and Umbrella",
    definition: "If is_raining is True, print a reminder to carry an umbrella.",
    code: `# Weather condition stored as boolean
is_raining = True      # True means it is raining right now

# If raining, remind to carry umbrella
if is_raining:
    print("Carry an umbrella today.")

print("Have a good day.")`,
    mermaid: `flowchart TB
    R{is_raining?}
    R -->|True| U[Carry umbrella]
    R -->|False| S[Skip message]
    U --> D[Have a good day]
    S --> D`,
  },
  {
    type: "activity",
    theme: "cond",
    title: "Minimum Balance Alert",
    definition: "Warn when bank balance drops below ₹500.",
    code: `# Current account balance
balance = 350          # Balance in rupees

# Check if balance is below minimum
if balance < 500:
    print("Warning: Low balance!")
else:
    print("Balance is healthy.")`,
    mermaid: `flowchart TB
    B{balance < 500?}
    B -->|True| W[Low balance warning]
    B -->|False| H[Balance healthy]`,
  },
  {
    theme: "cond",
    title: "The if–elif–else Ladder",
    image: IMG.ladder,
    definition:
      "In one if–elif–else family, we can have one if, one else, but multiple elif statements if needed.",
    bullets: [
      "if — only one (the engine of the train)",
      "elif — multiple as required (middle carriages)",
      "else — only one (the last carriage)",
    ],
  },
  {
    theme: "cond",
    title: "The if-elif-else Statement",
    image: IMG.grades,
    definition:
      "Use elif for more than two outcomes. Python checks top to bottom — first True match wins. Put higher ranges first.",
    code: `# Student's total marks out of 100
marks = 78             # Marks scored

# Assign grade based on mark ranges
if marks >= 90:
    print("Grade: A")      # 90 to 100
elif marks >= 75:
    print("Grade: B")      # 75 to 89 — matches here
elif marks >= 60:
    print("Grade: C")      # 60 to 74
elif marks >= 35:
    print("Grade: D")      # 35 to 59
else:
    print("Grade: F — Fail")  # Below 35`,
    mermaid: `flowchart TB
    IF{if condition1?}
    ELIF1{elif condition2?}
    ELSE[else block]
    IF -->|True| B1[if block]
    IF -->|False| ELIF1
    ELIF1 -->|True| B2[elif block]
    ELIF1 -->|False| ELSE`,
  },
  {
    type: "activity",
    theme: "cond",
    title: "Traffic Signal Logic",
    definition: "Print the correct action for red, yellow, or green signal.",
    code: `# Current traffic signal colour
signal = "yellow"      # Can be "red", "yellow", or "green"

# Tell the driver what to do
if signal == "red":
    print("Stop.")           # Red means stop
elif signal == "yellow":
    print("Slow down and get ready.")
elif signal == "green":
    print("Go.")             # Green means proceed
else:
    print("Invalid signal.")   # Safety fallback`,
    mermaid: `flowchart LR
    R[red] --> S[Stop]
    Y[yellow] --> W[Slow down]
    G[green] --> Go[Go]`,
  },
  {
    theme: "cond",
    title: "Indentation — Execution Blocks",
    definition:
      "Indentation (4 spaces) defines which lines belong inside if/elif/else. Wrong indent causes errors.",
    code: `# CORRECT indentation
marks = 50             # Marks for demonstration
if marks >= 35:
    print("Pass")          # 4 spaces — inside if
    print("Well done!")      # 4 spaces — still inside if
print("Program finished.")   # No extra indent — outside if

# Nested if — two levels of decision
age = 20               # Person's age
has_id = True          # Whether ID card is available
if age >= 18:
    if has_id:
        print("Entry allowed.")
    else:
        print("Please bring your ID card.")
else:
    print("You must be 18 or older.")`,
    mermaid: `flowchart TB
    O{if age >= 18?}
    O -->|True| I{if has_id?}
    I -->|True| A[Entry allowed]
    I -->|False| B[Bring ID]
    O -->|False| C[Must be 18+]`,
  },
  {
    type: "activity",
    theme: "cond",
    title: "Number Comparison Tool",
    definition: "Compare two numbers — print greater, smaller, or equal using if-elif-else.",
    code: `# Two numbers to compare
num1 = 45              # First number
num2 = 45              # Second number

# Find which is greater, or if they are equal
if num1 > num2:
    print(num1, "is greater than", num2)
elif num1 < num2:
    print(num1, "is less than", num2)
else:
    print(num1, "and", num2, "are equal.")`,
    mermaid: `flowchart TB
    C{num1 vs num2?}
    C -->|>| Greater
    C -->|<| Less
    C -->|=| Equal`,
  },
  {
    theme: "cond",
    title: "Combination of All — Discount Eligibility",
    definition:
      "Real programs combine operators and conditionals — calculate first, then decide what message to show.",
    code: `# Discount eligibility example
user_name = "Anita"    # Customer name
total_order = 800      # Bill total in rupees
min_order = 1000       # Minimum to qualify
discount = 10          # Discount percentage

if total_order >= min_order:
    print("Hurray " + user_name + ", " + str(discount) +
          "% discount applied!")
else:
    balance = min_order - total_order
    print("Dear " + user_name + ", add Rs." + str(balance) +
          " more to qualify.")`,
    mermaid: `flowchart TB
    C{total_order >= min_order?}
    C -->|True| D[Discount message]
    C -->|False| B["balance = min_order - total_order"]
    B --> M[Add-more message]`,
  },
  {
    type: "activity",
    theme: "cond",
    title: "Complete Student Report Card",
    definition: "Calculate total and average with operators — then decide PASS or FAIL with if-else.",
    code: `# Student performance data
name = "Anita"         # Student name
math = 45              # Maths marks
science = 38           # Science marks
english = 52           # English marks

# Calculate total and average using operators
total = math + science + english           # 45 + 38 + 52 = 135
average = total / 3                          # 135 / 3 = 45.0

print("Student:", name)
print("Total marks:", total)
print("Average marks:", average)

# Decide pass or fail using conditional
if average >= 35:
    print("Status: PASS")
else:
    print("Status: FAIL")`,
    mermaid: `flowchart LR
    I[Marks Input] --> O[Operators: total & avg]
    O --> C{if avg >= 35?}
    C -->|Yes| P[PASS]
    C -->|No| F[FAIL]`,
  },
  {
    type: "end",
    theme: "summary",
    title: "Key Takeaways",
    definition:
      "You learned to calculate with operators and make decisions with conditionals — core building blocks for every Python program.",
    bullets: [
      "Operators: +, -, *, /, //, %, ** — marks, bills, area",
      "Precedence: ** first, then *///%, then +− — use ( )",
      "if / elif / else — only the first True block runs",
      "== != > < >= <= | = assigns, == compares",
      "Indentation (4 spaces) groups lines into blocks",
    ],
    mermaid: `mindmap
  root((You Learned))
    Operators
    Precedence
    if elif else
    Comparisons
    Indentation`,
  },
];
