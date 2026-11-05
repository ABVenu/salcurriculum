const IMG = {
  hotel: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s01/s01-01-hotel-billing-programming-need.png?v=20260625",
  ipo: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s01/s01-02-input-process-output.png?v=20260625t",
  python: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s01/s01-03-python-beginner-friendly.png?v=20260625p",
  variables: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s01/s01-04-variables-labelled-boxes.png",
  datatypes: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s01/s01-05-data-types-overview.png",
  syntax: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s01/s01-06-syntax-comments-naming.png",
};

const SLIDES = [
  {
    type: "title",
    title: "Python Basics",
    subtitle: "Introduction to Programming, Python, Variables, Data Types",
    instructor: "Venugopal Burli",
    mermaid: `mindmap
  root((Python Basics))
    Programming
    Python Language
    Variables
    Data Types`,
  },
  {
    type: "scene",
    theme: "prog",
    title: "Introduction to Programming Language",
    los: [
      "What is a programming language & why computers need precise instructions",
      "How programming solves real-life problems step by step",
      "Human language flexibility vs strict computer instructions",
      "Input → Process → Output model every program follows",
      "Breaking real-world problems into smaller logical steps",
    ],
    mermaid: `flowchart LR
    A[Human Ideas] --> B[Programming Language]
    B --> C[Computer]
    C --> D[UPI / Apps / Systems]`,
  },
  {
    theme: "prog",
    title: "What Is a Programming Language?",
    definition: "A programming language is a formal set of rules and symbols used to write instructions that a computer can read, understand, and execute.",
    bullets: [
      "Formal rules & symbols to write instructions a computer executes",
      "Like a recipe — press exact buttons in exact order",
      "Translator between human thinking and binary (0s & 1s)",
      "Powers UPI, IRCTC, WhatsApp, Netflix & mobile apps",
      "Breaks big problems into small clear steps",
    ],
    mermaid: `flowchart TB
    H[Human writes code] --> P[Programming Language]
    P --> I[Python Interpreter]
    I --> B[Machine Binary]
    B --> O[Digital Output]`,
  },
  {
    title: "Why Do We Need Programming?",
    image: IMG.hotel,
    definition: "Programming builds digital systems that automate tasks, save time, and reduce mistakes — turning slow manual work into fast, reliable software.",
    bullets: [
      "Manual hotel billing → long queues, slow paper bills",
      "Hard to track daily sales and popular dishes",
      "Digital billing system → fast bills, saved records",
      "Programming builds systems that save time & reduce mistakes",
    ],
  },
  {
    theme: "prog",
    title: "Human Language vs Computer Instructions",
    layout: "compare",
    compare: {
      left: {
        heading: "Human Language",
        items: [
          "Flexible — tone, gesture & context change the meaning",
          "We understand incomplete sentences and fill the gaps",
          "Mistakes are often forgiven — \"meet around 5\" still works",
          "We can change our mind mid-conversation without confusion",
        ],
        example: "You tell a friend: \"Bring something nice from the shop\" — they use judgement and pick a gift.",
      },
      right: {
        heading: "Computer Instructions",
        items: [
          "Strict — every instruction must be exact and unambiguous",
          "Does only what is written — never guesses your intention",
          "One spelling, quote, or case error can stop the entire program",
          "Code runs line by line in a fixed order from top to bottom",
        ],
        example: "You write bring something nice in Python — the computer shows an error because nice is not defined.",
      },
    },
    definition: "Computer instructions are precise, unambiguous commands that a machine executes exactly as written — without guessing your intention.",
    bullets: [
      "Code keywords are in English (print, if, else) — you can store Kannada text inside quotes",
      "Like giving directions to someone who has never been to your city — mention every turn",
      "Programming languages exist to bridge this gap between human thinking and machine logic",
    ],
    mermaid: `flowchart LR
    H[Human: flexible speech] --> HU[Meaning understood]
    C[Computer: exact code] --> CR[Runs successfully or Error]`,
  },
  {
    title: "Input → Process → Output (IPO)",
    image: IMG.ipo,
    definition: "Every program follows the Input → Process → Output model — it takes data in, performs operations on it, and produces a result.",
    bullets: [
      "Input — data enters (distance, rate, name)",
      "Process — calculations or logic happen",
      "Output — result shown or saved",
      "Every program follows this flow",
    ],
  },
  {
    theme: "prog",
    title: "Break a Problem Into Steps",
    definition: "Breaking a real-world task into small, clear steps is called an algorithm — the plan you write on paper before coding.",
    bullets: [
      "Bus fare: student travels 12 km at ₹2/km",
      "Input → distance & rate | Process → multiply | Output → ₹24",
      "Same approach for notebooks, exam time left, etc.",
      "This plan is called an algorithm — write on paper first",
      "Later: same logic with variables and print() in Python",
    ],
    mermaid: `flowchart LR
    I[Input\\n12 km, ₹2/km] --> P[Process\\n12 × 2]
    P --> O[Output\\nTotal ₹24]`,
  },
  {
    type: "scene",
    theme: "python",
    title: "Introduction to Python & Variables",
    los: [
      "Why Python is beginner-friendly",
      "Set up OneCompiler & run Hello World",
      "Variables as named containers in memory",
      "Create, assign & update variable values",
      "Naming rules and print() to display values",
    ],
    mermaid: `flowchart TB
    PY[Python] --> OC[OneCompiler]
    OC --> HW[Hello World]
    HW --> VAR[Variables]
    VAR --> OUT[print output]`,
  },
  {
    title: "Introduction to Python",
    image: IMG.python,
    definition: "Python is a beginner-friendly programming language with simple, readable syntax — widely used in AI/ML, data analytics, web backends, and automation.",
    bullets: [
      "Fast, easy syntax — clean and readable, almost like plain English",
      "Online compilers (e.g. OneCompiler) let you run code without installing Python today",
      "To run locally on your computer, install Python software — covered in a later session",
      "Core language for AI/ML, data analytics, and scientific computing",
      "Used for web backends, automation, and scripting — Google, Netflix, ISRO",
    ],
  },
  {
    theme: "python",
    title: "Write & Run Your First Program",
    definition: "A Python program is a sequence of instructions that the interpreter runs from top to bottom when you click Run.",
    code: 'print("Hello, World!")',
    bullets: [
      "Open onecompiler.com → select Python",
      "Type code → click Run → see output below",
      "# lines are comments Python ignores",
      "print() displays text on screen",
      "Order matters — Python runs top to bottom",
    ],
    mermaid: `flowchart LR
    A[Open Editor] --> B[Write Code]
    B --> C[Click Run]
    C --> D[Hello World Output]`,
  },
  {
    title: "Python Syntax, Comments & Naming",
    image: IMG.syntax,
    definition: "Syntax is the grammar of Python — spelling, punctuation, and naming must follow exact rules or the program will not run.",
    bullets: [
      "Syntax = grammar rules — spelling & quotes must be exact",
      "print() ✓  Print() ✗ — case-sensitive",
      "# = comment | snake_case for variables",
      "PascalCase for class names later",
    ],
  },
  {
    title: "Variables — Storing Values",
    image: IMG.variables,
    definition: "A variable is a named container in memory that holds a value — you can store, use, and update it as your program runs.",
    bullets: [
      "Named box holding a value in memory",
      "age = 21 | name = \"Kavya\"",
      "= assigns value | can change over time",
    ],
  },
  {
    theme: "python",
    title: "Naming Rules & print()",
    definition: "Python variable names must follow naming rules, and print() displays stored values on the screen.",
    bullets: [
      "Letters, numbers, underscore — not starting with number",
      "Case-sensitive: Age ≠ age",
      "Descriptive names: student_marks, total_bill",
      "No reserved words: if, else, True, False",
      "print(var) shows stored value on screen",
    ],
    code: 'my_name = "Suresh"\nmy_age = 20\nprint(my_name)\nprint(my_age)',
    mermaid: `flowchart TB
    subgraph snake_case Variables
    V1[student_marks]
    V2[total_bill]
    end
    subgraph PascalCase Classes
    C1[StudentRecord]
    end`,
  },
  {
    theme: "python",
    title: "Kirana Bill Calculation",
    definition: "Variables make real-world calculations easier by storing item quantities, rates, individual costs, and the final bill clearly.",
    bullets: [
      "Store each input value in a descriptive variable",
      "Calculate sugar_cost and oil_cost separately",
      "Add both costs into total_bill",
      "Use print(total_bill) to display the result",
    ],
    code: `sugar_kg = 2
sugar_rate = 42
oil_litres = 1
oil_rate = 120

sugar_cost = sugar_kg * sugar_rate
oil_cost = oil_litres * oil_rate

total_bill = sugar_cost + oil_cost
print(total_bill)  # 204`,
    mermaid: `flowchart LR
    A[Input\\nSugar: 2 kg × ₹42] --> C[Process\\n84]
    B[Input\\nOil: 1 litre × ₹120] --> D[Process\\n120]
    C --> E[Total Bill\\n84 + 120 = ₹204]
    D --> E
    E --> F[Output\\nprint total_bill]`,
  },
  {
    type: "scene",
    theme: "data",
    title: "Introduction to Data Types",
    los: [
      "Why different data needs different formats",
      "Four basic types: int, float, str, bool",
      "Check type with type() function",
      "How numbers & strings behave in operations",
      "Convert with int(), float(), str()",
    ],
    mermaid: `mindmap
  root((Data Types))
    int
    float
    str
    bool`,
  },
  {
    title: "Python Data Types",
    image: IMG.datatypes,
    definition: "A data type tells Python what kind of value a variable holds — so the right operations can be applied to numbers, text, or true/false values.",
    bullets: [
      "int — whole numbers: 25, 0, -10",
      "float — decimals: 3.14, 99.5",
      "str — text: \"Hello\", \"ನಮಸ್ಕಾರ\"",
      "bool — True or False",
    ],
  },
  {
    theme: "data",
    title: "Check Types with type()",
    definition: "The type() function returns the data type of any value — use it when your program behaves unexpectedly.",
    code: `age = 22
print(type(age))        # <class 'int'>

height = 5.8
print(type(height))     # <class 'float'>

name = "Divya"
print(type(name))       # <class 'str'>

is_student = True
print(type(is_student)) # <class 'bool'>`,
    bullets: [
      "type() returns the data type of any value",
      "Use when program behaves unexpectedly",
      "\"85\" in quotes is str, not int — maths fails",
    ],
    mermaid: `flowchart LR
    V[Variable value] --> T[type function]
    T --> R[int / float / str / bool]`,
  },
  {
    theme: "data",
    title: "How Types Behave in Operations",
    definition: "Different data types behave differently in operations — numbers add mathematically, strings join as text, and mixing types causes errors.",
    bullets: [
      "Numbers: 5 + 3 = 8 (real maths)",
      "Strings: \"5\" + \"3\" = \"53\" (text joined)",
      "\"Score: \" + 85 → ERROR",
      "Fix: \"Score: \" + str(85) works",
    ],
    mermaid: `flowchart TB
  N[Numbers 5+3=8]
  S[Strings 5+3=53]
  E[str + int = ERROR]
  E --> F[Use str to fix]`,
  },
  {
    theme: "data",
    title: "Type Conversion",
    definition: "Type conversion changes a value from one data type to another using built-in functions like int(), float(), and str().",
    code: `# int() — text to whole number
marks = int("85")
print(marks + 5)              # 90

# float() — text to decimal (bus fare)
distance = float("15")
rate = 2
print(distance * rate)        # 30.0

# str() — number to text for joining
score = 92
message = "Your score: " + str(score)
print(message)                # Your score is: 92

# ERROR — cannot join text and number without str()
# print("Score: " + 85)       # TypeError

# ERROR — cannot convert non-numeric text to int
# print(int("hello"))         # ValueError`,
    bullets: [
      "int() → whole number | float() → decimal",
      "str() → text for joining messages",
      "Convert BEFORE mixing types in operations",
      "\"Score: \" + 85 → TypeError — use str(85) first",
      "int(\"hello\") → ValueError — text must be a valid number",
    ],
    mermaid: `flowchart TB
    subgraph int["int() example"]
        direction LR
        A["85 text"] -->|int| B[85]
        B --> C[85 + 5 = 90]
        D[5] --> C
    end
    subgraph str["str() example"]
        direction LR
        E[92 number] -->|str| F["92 text"]
        G["Your score is: "] --> H["Your score is: 92"]
        F --> H
    end`,
  },
  {
    type: "end",
    theme: "summary",
    title: "Key Takeaways",
    definition: "You learned the foundations of programming with Python — from the IPO model to variables, data types, and type conversion.",
    bullets: [
      "Programming = precise step-by-step instructions",
      "Every program: Input → Process → Output",
      "Python — online compilers first; local install later | syntax, # comments, snake_case",
      "Variables store values | print() displays them",
      "Types: int, float, str, bool — type() & conversion",
    ],
    mermaid: `mindmap
  root((You Learned))
    IPO Model
    Python Basics
    Variables
    Data Types
    Type Conversion`,
  },
];
