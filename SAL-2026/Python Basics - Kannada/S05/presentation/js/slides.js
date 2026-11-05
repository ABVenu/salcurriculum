const IMG = {
  dataStructures: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s05/s05-01-data-structures-containers.png",
  listIndexing: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s05/s05-02-list-indexing-negative.png",
  stringSlicing: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s05/s05-03-string-indexing-slicing.png",
  setTuple: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s05/s05-04-set-unique-tuple-locked.png",
  dictionary: "https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-kannada/s05/s05-05-dictionary-key-value.png",
};

const SLIDES = [
  {
    type: "title",
    title: "Data Structures in Python",
    subtitle: "Lists, Strings, Sets, Tuples, Dictionaries",
    instructor: "Venugopal Burli",
    mermaid: `mindmap
  root((Data Structures))
    Lists
    Strings
    Sets
    Tuples
    Dictionaries`,
  },
  {
    type: "recap",
    theme: "python",
    title: "Previous Session Recap",
    definition:
      "Before data structures, recall loop control — break exits early, continue skips one round, and nested loops handle multi-level repetition.",
    bullets: [
      "break — stop the innermost loop immediately",
      "continue — skip one iteration and move to the next",
      "Nested loops — inner cycle completes for each outer value",
      "range(start, stop, step) works at both outer and inner levels",
      "So far, most variables held one value at a time",
    ],
    mermaid: `mindmap
  root((Session 4))
    break
    continue
    Nested loops
    range at two levels
    Innermost loop rule`,
  },

  /* ── Scene 1: Lists ── */
  {
    type: "scene",
    theme: "ops",
    title: "Lists — Ordered Collections",
    los: [
      "Understand the purpose of lists and how they store multiple elements",
      "Demonstrate indexing and iteration to access elements in a list",
      "Explain mixed data types in lists and how to determine length",
      "Apply negative indexing and reverse iteration",
      "Illustrate list manipulation with append(), insert(), and extend()",
    ],
    mermaid: `flowchart LR
    V[Single variable] --> L[List container]
    L --> I[Index access]
    L --> M[Update methods]`,
  },
  {
    theme: "ops",
    title: "Why Lists? — Store Many Values Together",
    image: IMG.dataStructures,
    definition:
      "A list is a mutable, ordered sequence written with square brackets []. One variable name can hold many related values.",
    bullets: [
      "Ordered — each item has a position (index starting at 0)",
      "Mutable — you can add, remove, and change items later",
      "Flexible — can store strings, numbers, booleans, and more in one list",
      "Real use — shopping items, marks, port numbers, student records",
    ],
    code: `# Create a list of four snack names
snacks = ["mysore pak", "chakkuli", "kodubale", "obbattu"]  # Four items in one list
print(snacks)           # Show all items in the list
print(type(snacks))     # Confirm the data type is list`,
    mermaid: `flowchart TB
    A[One variable name] --> B[Item 0]
    A --> C[Item 1]
    A --> D[Item 2]
    A --> E[Item 3]`,
  },
  {
    theme: "ops",
    title: "Indexing and Iteration",
    image: IMG.listIndexing,
    definition:
      "Use index numbers to access one element, or loop with for to visit every element in order.",
    code: `# Same festival snack list
snacks = ["mysore pak", "chakkuli", "kodubale", "obbattu"]  # List of four snacks
print(snacks[0])   # First item — index 0
print(snacks[2])   # Third item — index 2

for item in snacks:  # Loop through each snack
    print(item)  # Print current snack name`,
    table: [
      ["Index", "0", "1", "2", "3"],
      ["Value", "mysore pak", "chakkuli", "kodubale", "obbattu"],
    ],
    bullets: [
      "Index 0 is always the first item",
      "Last valid index is len(list) - 1",
      "Common error — snacks[4] raises IndexError (only 0 to 3 exist)",
    ],
    mermaid: `flowchart LR
    I0[Index 0] --> V0[First element]
    I1[Index 1] --> V1[Second element]
    LOOP[for item in list] --> ALL[Visit each value]`,
  },
  {
    theme: "ops",
    title: "Mixed Types and len()",
    definition:
      "A list can hold different data types in the same container. len() counts how many elements are stored.",
    code: `# One record with mixed data types
student = ["Ananya", 18, True, 87.5]  # Name, age, pass flag, marks
print(student)              # Print the full list
print(len(student))         # Count elements → 4`,
    bullets: [
      "String, int, bool, and float can coexist in one list",
      "len(list) → number of elements",
      "len(student) is 4 — it counts list items, not letters in the name",
    ],
    mermaid: `flowchart TB
    L[List with 4 slots] --> S[String]
    L --> N[Integer]
    L --> B[Boolean]
    L --> F[Float]
    LEN[len → 4]`,
  },
  {
    theme: "ops",
    title: "Negative Indexing and Reverse Iteration",
    definition:
      "Negative indexes count from the right. -1 is always the last element. Reverse loops walk from end to start.",
    code: `# List of exam marks
marks = [72, 85, 90, 68]  # Four mark values
print(marks[-1])   # Last item → 68
print(marks[-2])   # Second-last item → 90

for i in range(len(marks) - 1, -1, -1):  # Start last, move left
    print(marks[i], end=" ")  # Print each mark without newline`,
    bullets: [
      "-1 → last item, -2 → second-last",
      "range(len(list)-1, -1, -1) prints in reverse",
      "Useful when you need the latest value without knowing length",
    ],
    mermaid: `flowchart LR
    L[List left to right] --> R[Negative index from right]
    R --> M1[-1 last]
    R --> M2[-2 second-last]`,
  },
  {
    theme: "ops",
    title: "List Methods — append(), insert(), extend()",
    definition:
      "Lists grow and change with built-in methods. append adds one item at the end; insert places at a chosen index; extend merges many items.",
    code: `# Start with a small shopping basket
basket = ["rice", "dal"]  # Two starting items
basket.append("oil")              # Adding oil at end
basket.insert(1, "salt")          # Insert salt at index 1
basket.extend(["sugar", "tea"])   # Add sugar and tea at end
print(basket)                     # Show final basket list`,
    table: [
      ["Method", "What it does"],
      ["append(x)", "Add one item at the end"],
      ["insert(i, x)", "Insert x at index i"],
      ["extend(iterable)", "Add each item from another sequence"],
    ],
    mermaid: `flowchart TB
    A[Start list] --> B[append — end]
    A --> C[insert — chosen index]
    A --> D[extend — many items]`,
  },
  {
    type: "activity",
    theme: "ops",
    title: "Build a Weekend Plan List",
    definition:
      "Create a list with three plans, print first and last with indexes, then append and insert one more item each.",
    code: `# Create a weekend plan list
weekend = ["market", "temple", "movie"]  # Three weekend plans
print(weekend[0], weekend[-1])   # Print first and last plan
weekend.append("walk")            # Adding walk at end
weekend.insert(0, "yoga")         # Adding yoga at start
print(weekend)                    # Show updated list
print(len(weekend))               # Count total plans`,
    mermaid: `flowchart LR
    C[Create list] --> P[Print indexes]
    P --> A[append + insert]
    A --> L[len and loop]`,
  },

  /* ── Scene 2: Strings ── */
  {
    type: "scene",
    theme: "cond",
    title: "Strings — Text as a Sequence",
    los: [
      "Define strings and explain indexing in strings",
      "Extract characters from even positions using indexing",
      "Explain immutability and string concatenation",
      "Apply string slicing to access parts of a string",
      "Use upper(), title(), capitalize(), islower(), and isupper()",
    ],
    mermaid: `flowchart LR
    S[String] --> I[Index]
    S --> SL[Slice]
    S --> M[Methods]`,
  },
  {
    theme: "cond",
    title: "Strings and Character Indexing",
    image: IMG.stringSlicing,
    definition:
      "A string is an immutable sequence of characters in quotes. Each character has an index starting from 0.",
    code: `# String of six characters
city = "Mysuru"  # City name as text
print(city[0])    # First character → M
print(city[3])    # Fourth character → u
print(city[-1])   # Last character → u
print(len(city))  # Total characters → 6`,
    bullets: [
      "Strings behave like ordered character lists",
      "Indexes work the same as lists — 0 from left, -1 from right",
      "Spaces and symbols also count as characters",
    ],
    mermaid: `flowchart TB
    S[M y s u r u] --> I0[0]
    S --> I3[3]
    S --> IN[-1 last]`,
  },
  {
    theme: "cond",
    title: "Characters at Even Positions",
    definition:
      "Use range(0, len(s), 2) to visit indexes 0, 2, 4, … and pick every second character.",
    code: `# Pick characters at even indexes: 0, 2, 4, 6
word = "KANNADA"  # Sample word
for i in range(0, len(word), 2):  # Visit indexes 0, 2, 4, 6
    print(word[i], end="")  # Print character without newline`,
    bullets: [
      "Even indexes → 0, 2, 4, 6",
      "Step of 2 in range controls the jump",
      "Useful for patterns, filtering, and simple text processing",
    ],
    mermaid: `flowchart LR
    W[K A N N A D A] --> E[Indexes 0 2 4 6]
    E --> O[K N A A]`,
  },
  {
    theme: "cond",
    title: "Immutability and Concatenation",
    definition:
      "Strings cannot be changed in place. Use + to join strings into a new string object.",
    code: `# Strings cannot be edited in place
name = "rama"  # Original lowercase name
# name[0] = "R"   # TypeError — cannot edit one letter

name = "R" + name[1:]   # Build new string with capital R
first = "Good"            # First word
second = "Morning"        # Second word
greeting = first + " " + second  # Join words with space
print(greeting)           # Print Good Morning`,
    bullets: [
      "Immutability — no item assignment on a string",
      "Concatenation — + joins strings",
      "Assigning back replaces the variable with a new string",
    ],
    mermaid: `flowchart TB
    O[Old string] --> N[Build new string]
    N --> A[Assign to variable]
    X[In-place edit] --> E[TypeError]`,
  },
  {
    theme: "cond",
    title: "String Slicing",
    definition:
      "Slice with [start:stop:step]. Start is included; stop is excluded — same rule as range().",
    code: `# Slice parts of a phrase
phrase = "PythonBasics"  # Sample text
print(phrase[0:6])    # Slice indexes 0 to 5 → Python
print(phrase[6:])     # From index 6 to end → Basics
print(phrase[::2])    # Every second character → PtoBsc
print(phrase[::-1])   # Reverse full string`,
    table: [
      ["Slice", "Meaning"],
      ["[6:]", "From index 6 to end"],
      ["[:6]", "From start up to (not including) 6"],
      ["[::2]", "Every second character"],
      ["[::-1]", "Reverse the string"],
    ],
    mermaid: `flowchart LR
    S[Full string] --> A[start:stop]
    S --> B[start:stop:step]
    B --> R[Reverse with -1 step]`,
  },
  {
    theme: "cond",
    title: "Common String Methods",
    definition:
      "Methods return new strings or booleans. They do not change the original unless you assign the result back.",
    code: `# String methods return new strings or booleans
text = "bengaluru city"  # Original lowercase text
print(text.upper())        # Convert to ALL CAPS
print(text.title())        # Capitalise each word
print(text.capitalize())   # Capitalise first letter only
print("hello".islower())   # Check all lowercase → True
print("HELLO".isupper())   # Check all uppercase → True`,
    table: [
      ["Method", "Result"],
      ["upper()", "ALL CAPS"],
      ["title()", "Each Word Capitalised"],
      ["capitalize()", "First letter only"],
      ["islower() / isupper()", "True or False"],
    ],
    mermaid: `flowchart TB
    T[Original text] --> U[upper / title / capitalize]
    T --> C[islower / isupper]
    U --> N[New string returned]`,
  },
  {
    type: "activity",
    theme: "cond",
    title: "Clean a Name Badge",
    definition:
      "Store a lowercase name, print even-index characters, slice the first word, then print title() form.",
    code: `# Clean and inspect a lowercase name
name = "ananya sharma"  # Full name in lowercase
for i in range(0, len(name), 2):  # Step by 2 for even indexes
    print(name[i], end="")  # Print even-index character
print()                     # Move to next line
print(name[:6])             # Slice first six characters
print(name.title())         # Capitalise each word`,
    mermaid: `flowchart LR
    L[Lowercase input] --> E[Even indexes]
    E --> SL[Slice first word]
    SL --> T[title output]`,
  },

  /* ── Scene 3: Sets and Tuples ── */
  {
    type: "scene",
    theme: "ops",
    title: "Sets and Tuples",
    los: [
      "Explain mutability and immutability for sets and tuples",
      "Create sets and use their unique-value property",
      "Apply add(), remove(), discard(), and list-to-set conversion",
      "Identify tuple immutability and differences from lists",
      "Perform tuple slicing and list-to-tuple conversions",
    ],
    mermaid: `flowchart LR
    M[Mutable list/set] --> U[Can change]
    I[Immutable str/tuple] --> L[Locked]`,
  },
  {
    theme: "ops",
    title: "Mutability vs Immutability",
    definition:
      "Mutable objects can change after creation. Immutable objects cannot be edited in place.",
    table: [
      ["Structure", "Mutable?", "Ordered?", "Duplicates?"],
      ["List", "Yes", "Yes", "Yes"],
      ["String", "No", "Yes", "Yes"],
      ["Set", "Yes (contents)", "No guaranteed order", "No"],
      ["Tuple", "No", "Yes", "Yes"],
    ],
    bullets: [
      "List and set — good for changing collections",
      "String and tuple — good for fixed or protected data",
    ],
    mermaid: `flowchart TB
    M[Mutable] --> L[List]
    M --> S[Set]
    I[Immutable] --> ST[String]
    I --> T[Tuple]`,
  },
  {
    theme: "ops",
    title: "Sets — Unique Values Only",
    image: IMG.setTuple,
    definition:
      "A set stores unique elements in curly braces {}. Duplicates are automatically removed.",
    code: `# Set removes duplicate city names automatically
cities = {"Mysuru", "Bengaluru", "Mysuru", "Hubballi"}  # Set with duplicate
print(cities)       # Print unique cities only
print(len(cities))  # Count unique cities → 3

empty = set()       # Create empty set — not {}`,
    bullets: [
      "Duplicates are ignored — only one copy kept",
      "No indexing — sets are unordered",
      "{} creates an empty dictionary, not a set",
    ],
    mermaid: `flowchart LR
    I[Input with duplicates] --> S[Set]
    S --> U[Unique values only]`,
  },
  {
    theme: "ops",
    title: "Set Operations and List Conversion",
    definition:
      "Use add(), remove(), and discard() to manage set elements. Convert a list to a set to drop duplicates quickly.",
    code: `# Manage unique roll numbers in a set
rolls = {101, 102, 103}  # Starting set of roll numbers
rolls.add(104)              # Adding roll 104
rolls.discard(999)          # Safe remove — no error if missing

marks = [80, 90, 80, 70, 90]  # List with duplicate marks
unique = set(marks)           # Convert list to set
print(unique)                 # Print unique marks only`,
    table: [
      ["Method", "Behaviour"],
      ["add(x)", "Insert if new"],
      ["remove(x)", "Delete x — error if absent"],
      ["discard(x)", "Delete x — no error if absent"],
    ],
    mermaid: `flowchart TB
    L[List with duplicates] --> S["set(list)"]
    S --> C[Unique collection]
    C --> A["add / discard"]`,
  },
  {
    theme: "ops",
    title: "Tuples — Fixed Ordered Packs",
    definition:
      "A tuple is an immutable ordered sequence in parentheses (). Indexing works; assignment does not.",
    code: `# Fixed train ticket details as a tuple
ticket = ("12628", "Sleeper", "S5", 43)  # train, class, coach, berth
print(ticket[0])            # Read train number
print(ticket[2], ticket[3]) # Read coach and berth
# ticket[3] = 44            # TypeError — cannot change tuple`,
    table: [
      ["Feature", "List", "Tuple"],
      ["Brackets", "[]", "()"],
      ["Change later?", "Yes", "No"],
      ["append()", "Yes", "No"],
    ],
    mermaid: `flowchart LR
    T[Tuple created] --> R[Read by index]
    T --> X["Assign t[i] = ..."]
    X --> E[TypeError]`,
  },
  {
    theme: "ops",
    title: "Tuple Slicing and Conversions",
    definition:
      "Tuples support the same slicing rules as strings and lists. Convert with tuple() and list() when you need to lock or unlock edits.",
    code: `# Tuple slicing works like lists and strings
days = ("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun")  # Week days
print(days[-3:])     # Slice last three days
print(days[::2])     # Pick every second day

temp = ["red", "green", "blue"]  # Mutable colour list
locked = tuple(temp)    # Convert list to tuple
unlocked = list(locked) # Convert tuple back to list`,
    bullets: [
      "Negative slicing reads from the end",
      "[::2] picks even indexes",
      "tuple(list) locks; list(tuple) unlocks for editing",
    ],
    mermaid: `flowchart LR
    L[List] --> T[tuple]
    T --> LC[Fixed pack]
    LC --> UL[list] --> EDIT[Edit allowed]`,
  },
  {
    type: "activity",
    theme: "ops",
    title: "List, Set, and Tuple Together",
    definition:
      "Remove duplicate join names with a set, keep an editable squad list, and store fixed venue details in a tuple.",
    code: `# Use list, set, and tuple together
names = ["Asha", "Ravi", "Asha", "Neha"]  # List with duplicates
squad = list(set(names))                  # Remove duplicates via set
squad.append("Kiran")                     # Adding Kiran at end
venue = ("Bengaluru", "Stadium", "Court-2")  # Fixed venue tuple
print(squad)                              # Print editable squad list
print(venue[1])                           # Read stadium from tuple`,
    mermaid: `flowchart TB
    L[Repeating list] --> S[Set dedupe]
    S --> LI[Editable list]
    F[Fixed venue] --> TU[Tuple]`,
  },

  /* ── Scene 4: Dictionaries ── */
  {
    type: "scene",
    theme: "cond",
    title: "Dictionaries — Key–Value Pairs",
    los: [
      "Define dictionaries and explain key–value pairs with no duplicate keys",
      "Create a dictionary and retrieve values using keys",
      "Calculate len() of pairs and nested list values",
      "Iterate over dictionaries with mixed value types",
      "Use get(), keys(), values(), pop(), popitem(), and clear()",
    ],
    mermaid: `flowchart LR
    K[Key label] --> V[Value data]
    D[Dictionary] --> K
    D --> V`,
  },
  {
    theme: "cond",
    title: "What Is a Dictionary?",
    image: IMG.dictionary,
    definition:
      "A dictionary maps unique keys to values using {}. Look up by label, not by position.",
    code: `# Dictionary with labelled key-value pairs
student = {
    "name": "Kavya",       # Key name maps to string
    "age": 17,             # Key age maps to number
    "city": "Mangaluru",   # Key city maps to string
}
print(student)             # Print full dictionary

demo = {"a": 1, "a": 2}    # Duplicate key — second value wins
print(demo)                # Print {'a': 2}`,
    bullets: [
      "Each pair written as key: value",
      "Duplicate keys — only the last assignment is kept",
      "Like a contacts app — find a number by name, not by row number",
    ],
    mermaid: `flowchart TB
    D[Dictionary] --> K1[name → Kavya]
    D --> K2[age → 17]
    D --> K3[city → Mangaluru]`,
  },
  {
    theme: "cond",
    title: "Create and Retrieve by Key",
    definition:
      "Build an empty dict with {}, add pairs with dict[key] = value, and read with dict[key].",
    code: `# Build a menu dictionary step by step
menu = {}                      # Create empty dictionary
menu["idli"] = 40              # Adding idli price
menu["dosa"] = 60              # Adding dosa price
menu["filter coffee"] = 25     # Adding coffee price

print(menu["dosa"])            # Read dosa price → 60
# print(menu["pongal"])        # KeyError if key missing`,
    bullets: [
      "dict[key] retrieves the value",
      "Missing key with [] raises KeyError",
      "Prefer clear key names — price, name, status",
    ],
    mermaid: `flowchart LR
    E[Empty dict] --> A[Add pairs]
    A --> G[Get by key]
    G --> V[Return value]`,
  },
  {
    theme: "cond",
    title: "len() — Pairs vs Nested Values",
    definition:
      "len(dict) counts key–value pairs. len(dict[key]) counts items inside a list or string value.",
    code: `# Count pairs vs nested list length
report = {
    "student": "Rahul",  # String value
    "subjects": ["Maths", "Science", "English", "Kannada"],  # List value
    "scores": [88, 91, 76, 84],  # List value
}
print(len(report))              # Count key-value pairs → 3
print(len(report["subjects"]))  # Count subjects in list → 4
print(len(report["student"]))   # Count letters in name → 5`,
    mermaid: `flowchart TB
    D["len(dict) → pairs"] --> P["3 keys"]
    N["len(dict[key]) → nested size"] --> S["4 list items"]`,
  },
  {
    theme: "cond",
    title: "Iteration and Mixed Value Types",
    definition:
      "Loop over keys by default. Values can be strings, numbers, booleans, lists, or other types.",
    code: `# Dictionary values can be different types
shop = {
    "name": "Sri Ganesh Stores",  # String value
    "open": True,                 # Boolean value
    "items": ["soap", "oil", "rice"],  # List value
    "rating": 4.5,                # Float value
}

for key in shop:  # Loop gives keys by default
    print(key, "→", shop[key])    # Print key and its value

for key, value in shop.items():  # Loop key-value pairs
    print(key, ":", value)       # Print each pair`,
    mermaid: `flowchart LR
    D[Dictionary] --> K["for key in dict"]
    K --> V["shop[key]"]
    D --> I["for key, value in items"]`,
  },
  {
    theme: "cond",
    title: "Dictionary Methods — get, pop, keys, values, clear",
    definition:
      "get() is safe for missing keys. pop() removes a known key. keys() and values() list labels and data. clear() empties the dict.",
    code: `# Contact card with dictionary methods
contact = {"name": "Meera", "phone": "9876543210", "city": "Udupi"}  # Contact dict

print(contact.get("email"))               # Safe lookup → None
print(contact.get("email", "not shared")) # Lookup with default value
removed = contact.pop("city")             # Remove city and get value
print(removed)                            # Print removed city name

print(list(contact.keys()))               # List all keys
print(list(contact.values()))             # List all values`,
    table: [
      ["Method", "Purpose"],
      ["get(key, default)", "Safe lookup"],
      ["pop(key)", "Remove and return value"],
      ["popitem()", "Remove last inserted pair"],
      ["clear()", "Remove all pairs"],
    ],
    mermaid: `flowchart TB
    G[get — safe read] --> P[pop — remove key]
    P --> K[keys / values views]
    K --> C[clear — empty dict]`,
  },
  {
    type: "activity",
    theme: "cond",
    title: "Mini Marks Register",
    definition:
      "Build a dict with name, scores list, and passed flag. Print lengths, loop over pairs, then use get() and pop().",
    code: `# Mini marks register dictionary
record = {
    "name": "Ananya",        # Student name
    "scores": [78, 85, 90],  # List of marks
    "passed": True,          # Pass status
}
print(len(record))                    # Count dictionary pairs
print(len(record["scores"]))          # Count marks in list

for key, value in record.items():  # Loop through all pairs
    print(key, value)              # Print key and value

print(record.get("grade", "Not assigned"))  # Safe lookup with default
record.pop("passed")                        # Remove passed key
print(record.keys())                        # Show remaining keys`,
    mermaid: `flowchart LR
    B[Build dict] --> L[len checks]
    L --> I[items loop]
    I --> M[get and pop]`,
  },

  {
    type: "end",
    theme: "summary",
    title: "Key Takeaways",
    definition:
      "You learned Python data structures for storing many values — ordered lists, text strings, unique sets, fixed tuples, and labelled dictionaries.",
    bullets: [
      "Lists — ordered, mutable; indexing, negative index, append/insert/extend",
      "Strings — immutable sequences; slicing and case methods",
      "Sets — unique values; tuples — immutable ordered packs",
      "Dictionaries — key–value lookup with get(), keys(), values(), pop(), clear()",
      "Choose the structure that matches the job — edit, unique, fixed, or labelled",
    ],
    mermaid: `mindmap
  root((You Learned))
    Lists
    Strings
    Sets
    Tuples
    Dictionaries
    Choose the right container`,
  },
];
