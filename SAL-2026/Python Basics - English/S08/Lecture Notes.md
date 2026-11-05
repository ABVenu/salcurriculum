# args, kwargs, and Built-in Functions

## What You Will Learn in This Lesson

You have already learnt how to define a function with **`def`**, pass **arguments**, use a **default**, and **`return`** a result. Fixed parameter lists work well when you know exactly how many values will arrive.

Sometimes the caller may send three numbers today and ten numbers tomorrow. Sometimes the caller may send named details such as `city="Pune"` without you listing every possible name in advance.

In this lesson, you will collect extra positional values with **`*args`**, collect named values with **`**kwargs`**, and practise ready-made tools Python already provides for **lists**, **strings**, **sets**, **tuples**, and **dictionaries**.

By the end, you will be able to:

- Explain why **`*args`** collects extra positional values
- Define and call a function that uses **`*args`**
- Explain why **`**kwargs`** collects named values
- Write a function that uses both **`*args`** and **`**kwargs`**
- Explain a **built-in function** as a ready-made tool Python provides
- Use common list and string tools such as `insert()`, `extend()`, `pop()`, `upper()`, `split()`, and `join()`
- Use common set, tuple, and dictionary tools such as `union()`, `count()`, `get()`, and `update()`
- Combine list, string, and dictionary tools in one small program

---

## Why Flexible Inputs and Ready-Made Tools Matter

A function with three fixed parameters cannot accept a fourth mark without editing the `def` line. A contacts card may also arrive with optional named fields.

Python already ships many small tools for everyday containers. You do not need to write your own loop every time you want to sort a list or make text uppercase.

- **Official Definition:** A **built-in function** or method is a ready-made action Python provides for a type such as a list or a string.
- **In Simple Words:** It is a tool that already exists. You call it by name instead of inventing it.
- **Real-Life Example:** A phone’s **Sort by name** button is built in. You do not redesign sorting for every contact list.

---

## Part 1 — `*args` and `**kwargs`

This part makes your own functions accept a flexible number of values.

### Why `*args` Exists

- **Official Definition:** **`*args`** collects extra **positional** arguments into a **tuple** inside the function.
- **In Simple Words:** Star-args is a bag for leftover values that arrived by position, without names.
- **Real-Life Example:** A shop bill may list 2 items or 12 items. The cashier still says “add these amounts,” without renaming the bill process each time.

![*args collects extra positional values into a tuple bag that the function can loop and total](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-english/s08/s08-01-args-bag.png?v=20261028)

```python
# Collect any number of marks and return their total
def total_marks(*args):  # args is a tuple of positional values
    total = 0  # Start the running total
    for mark in args:  # Visit each collected value
        total = total + mark  # Add this mark
    return total  # Send the sum back

print(total_marks(70, 80))  # 150
print(total_marks(70, 80, 90, 60))  # 300
```

**How the code works:**

- In the first call, `args` is `(70, 80)`.
- In the second call, `args` is `(70, 80, 90, 60)`.
- You loop over `args` like any tuple.
- The name `args` is a convention. The important part is the `*` before the name.

### Define and Call a Function with `*args`

You can mix one normal parameter with `*args`.

```python
# Title plus any number of scores
def report(title, *scores):  # title is required; scores collect the rest
    print(title)  # Print the heading first
    for score in scores:  # Then each score
        print(score)

report("Unit Test", 88, 76, 91)  # One title, three scores
```

**How the code works:**

- `"Unit Test"` binds to `title`.
- `88`, `76`, and `91` land in `scores` as a tuple.
- **Common error:** Putting `*args` before a required parameter without a default — keep required named parameters first.

### Why `**kwargs` Exists

- **Official Definition:** **`**kwargs`** collects extra **named** arguments into a **dictionary** inside the function.
- **In Simple Words:** Double-star kwargs is a labelled bag. Each label is a key. Each value sits under that key.
- **Real-Life Example:** A delivery form may include `city="Delhi"` and `pin="110001"` without the function listing every possible field in advance.

![**kwargs collects named extras into a dictionary of key-value pairs such as name city and marks](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-english/s08/s08-02-kwargs-dict.png?v=20261028)

```python
# Print any named student details
def show_student(**kwargs):  # kwargs becomes a dictionary
    for key in kwargs:  # Visit each key
        print(key, "→", kwargs[key])  # Print label and value

show_student(name="Meera", city="Mumbai", marks=88)
```

**How the code works:**

- Inside the function, `kwargs` is `{"name": "Meera", "city": "Mumbai", "marks": 88}`.
- You look up values by key, just as with any dictionary.
- The name `kwargs` is a convention. The important part is `**`.

### Use `*args` and `**kwargs` Together

Order in the `def` line matters: normal parameters, then `*args`, then `**kwargs`.

![Signature order is required params then *args then **kwargs — one call can fill all three](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-english/s08/s08-03-args-kwargs-together.png?v=20261028)

```python
# Mix positional extras and named extras
def describe(tag, *args, **kwargs):  # tag, then extras, then named extras
    print("Tag:", tag)  # Required first value
    print("Extra values:", args)  # Tuple of positional extras
    print("Named values:", kwargs)  # Dictionary of named extras

describe("order", 2, 3, item="tea", price=30)
```

**How the code works:**

- `tag` is `"order"`.
- `args` is `(2, 3)`.
- `kwargs` is `{"item": "tea", "price": 30}`.
- Positional extras cannot use names. Named extras cannot be collected by `*args`.

```python
# Practical: sum extras, then show labels
def pack_summary(*args, **kwargs):  # Both collectors
    total = 0  # Sum positional numbers
    for value in args:
        total = total + value
    print("Total:", total)  # Show the sum
    for key in kwargs:
        print(key, kwargs[key])  # Show each named detail

pack_summary(10, 20, 5, city="Pune", note="paid")
```

**How the code works:**

- Positional values `10`, `20`, and `5` add to `35`.
- Named values print as separate labelled lines.
- **Need:** One function handles a changing count of numbers and optional labels.

### Activity: Flexible Counter

1. Write `join_words(*args)` that prints each word on its own line.
2. Write `profile(**kwargs)` that prints every key and value.
3. Call a combined function with both styles.

```python
# Practice *args and **kwargs
def join_words(*args):  # Collect words
    for word in args:
        print(word)

def profile(**kwargs):  # Collect named fields
    for key in kwargs:
        print(key, "→", kwargs[key])

def both(*args, **kwargs):  # Use both
    print("Count:", len(args))
    print("Keys:", list(kwargs.keys()))

join_words("tea", "milk")
profile(name="Kabir", city="Delhi")
both(1, 2, 3, mode="fast")
```

### Trace `*args` and `**kwargs` Together

```python
# Predict the bags before you run
def inspect(label, *args, **kwargs):  # Mixed collectors
    print(label)  # Required first argument
    print(len(args))  # How many positional extras
    print(kwargs.get("city", "none"))  # Safe named lookup

inspect("demo", 10, 20, city="Mumbai", note="ok")
```

**Expected output:**

- `demo`
- `2`
- `Mumbai`

---

## Part 2 — Built-in Functions for Lists, Strings, Sets, Tuples, and Dictionaries

Part 1 made your own functions flexible. This part uses tools Python already attaches to everyday containers.

### What a Built-in Function Is

- **Official Definition:** A **built-in** tool is a function or method Python provides with the language for common tasks on types such as `list` and `str`.
- **In Simple Words:** You call a ready-made name instead of writing the same loop again.
- **Real-Life Example:** Spreadsheet apps already offer **SUM** and **SORT**. Python lists and strings have similar ready helpers.

You already used basic tools such as `len()`, `append()`, and `add()`. This part adds the helpers that were held back earlier.

### List Tools

![List built-in toolkit — insert extend pop sort and reverse change how items sit in the sequence](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-english/s08/s08-04-list-builtins.png?v=20261028)

```python
# insert, extend, pop, remove, sort, reverse
items = ["tea", "samosa"]  # Start small
items.insert(1, "coffee")  # Place coffee at index 1
print(items)  # ['tea', 'coffee', 'samosa']

items.extend(["idli", "vada"])  # Add many items at the end
print(items)

last = items.pop()  # Remove and return the last item
print(last)  # vada
print(items)

items.remove("coffee")  # Remove the first matching value
print(items)

numbers = [3, 1, 4, 2]  # Unsorted numbers
numbers.sort()  # Sort in place, ascending
print(numbers)  # [1, 2, 3, 4]
numbers.reverse()  # Reverse in place
print(numbers)  # [4, 3, 2, 1]
```

**How the code works:**

- **`insert(i, x)`** places `x` at index `i` and shifts later items right.
- **`extend(list)`** adds each item from another list. It does not add the whole list as one nested item.
- **`pop()`** removes by position. **`remove(value)`** removes by value.
- **`sort()`** and **`reverse()`** change the same list. They return `None`.

### String Tools

![String built-in toolkit — strip lower replace split and join clean and reshape text](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-english/s08/s08-05-string-builtins.png?v=20261028)

```python
# upper, lower, strip, replace, split, join
text = "  mumbai Central  "  # Messy text
print(text.strip())  # Remove edge spaces
print(text.lower())  # All lowercase letters
print(text.upper())  # All uppercase letters

line = "good morning mumbai"  # Sample sentence
print(line.replace("mumbai", "pune"))  # Replace a piece
parts = line.split(" ")  # Split into a list of words
print(parts)  # ['good', 'morning', 'mumbai']
joined = "-".join(parts)  # Join list items with a dash
print(joined)  # good-morning-mumbai
```

**How the code works:**

- String methods return a **new** string. They do not edit the old one in place.
- **`split`** turns text into a list. **`join`** turns a list of pieces into one string.
- **`strip`** is useful before comparing names that may have extra spaces.

### Set Tools

![Set union intersection difference, tuple count and index, dictionary get pop and update in one toolkit view](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-english/s08/s08-06-set-tuple-dict-builtins.png?v=20261028)

```python
# remove, discard, union, intersection, difference
a = {1, 2, 3, 4}  # First set
b = {3, 4, 5}  # Second set
a.remove(1)  # Remove 1 — error if missing
a.discard(99)  # Safe if 99 is absent
print(a)  # {2, 3, 4}

print(a.union(b))  # All unique values from both
print(a.intersection(b))  # Values in both
print(a.difference(b))  # Values in a but not in b
```

**How the code works:**

- **`remove`** raises an error if the value is missing. **`discard`** does not.
- **`union`**, **`intersection`**, and **`difference`** return new sets. They answer set questions without nested loops.

### Tuple Tools

```python
# count and index on a tuple
days = ("Mon", "Tue", "Wed", "Tue")  # Fixed pack
print(days.count("Tue"))  # 2
print(days.index("Wed"))  # 2 — first position of Wed
```

**How the code works:**

- Tuples have fewer methods because they cannot grow.
- **`count`** tells how many times a value appears.
- **`index`** finds the first position of a value.

### Dictionary Tools

```python
# get, keys, values, items, pop, update
student = {"name": "Meera", "city": "Mumbai", "marks": 88}  # Sample card
print(student.get("city"))  # Mumbai
print(student.get("email", "not shared"))  # Default when missing

print(list(student.keys()))  # All keys
print(list(student.values()))  # All values
print(list(student.items()))  # All pairs as tuples

removed = student.pop("marks")  # Remove marks and keep its value
print(removed)  # 88

student.update({"city": "Pune", "passed": True})  # Change city and add passed
print(student)
```

**How the code works:**

- **`get`** is safer than `student["email"]` when the key might be missing.
- **`keys`**, **`values`**, and **`items`** help you loop or inspect the card.
- **`pop`** removes one known key. **`update`** merges another dictionary into this one.

### One Small Program Using List, String, and Dictionary Tools

```python
# Clean a name, store it, and update a record
raw_name = "  meera iyer  "  # Messy input
clean = raw_name.strip().title()  # Remove spaces, then title case
parts = clean.split(" ")  # ['Meera', 'Iyer']

subjects = ["maths", "science"]  # Editable list
subjects.append("english")  # Grow the list
subjects.sort()  # Alphabetical order

card = {"name": clean, "city": "Mumbai"}  # Start a dictionary
card.update({"subjects": subjects, "count": len(subjects)})  # Add list and length
print(card.get("name"))  # Meera Iyer
print(card.get("subjects"))  # Sorted subject list
print("-".join(parts))  # Meera-Iyer
```

**How the code works:**

- The string tools clean and split the name.
- The list tools grow and sort subjects.
- The dictionary tools store and update the labelled record.
- One short program uses all three containers with built-in helpers.

### Activity: Desk Cleanup

1. Start with `names = ["rahul", "meera", "ananya"]`, make each name title case in a new list, then `sort()` that list.
2. From `"tea,milk,sugar"`, `split` on commas and `join` with `" | "`.
3. Build a dictionary for one student, `update` the city, and print `get("city")`.

```python
# Desk cleanup practice
names = ["rahul", "meera", "ananya"]  # Lowercase names
titled = []  # New list for cleaned names
for name in names:
    titled.append(name.title())  # Title case each name
titled.sort()  # Sort in place
print(titled)

pieces = "tea,milk,sugar".split(",")  # Split CSV-style text
print(" | ".join(pieces))  # Join with spaces and bars

student = {"name": "Rahul", "city": "Delhi"}  # Card
student.update({"city": "Pune"})  # Change city
print(student.get("city"))  # Pune
```

### Choosing the Right Built-in Quickly

| Job | Ready tool |
|-----|------------|
| Add many list items at once | `extend` |
| Put one list item at a chosen index | `insert` |
| Clean edge spaces in text | `strip` |
| Turn a sentence into words | `split` |
| Turn words into one string | `join` |
| Values in both sets | `intersection` |
| Safe dictionary read | `get` |
| Merge new dictionary fields | `update` |

### Activity: Predict Before You Run

```python
# Mix list, string, and dictionary tools
bag = ["idli", "dosa"]  # Start list
bag.extend(["tea"])  # Grow
bag.sort()  # Sort in place
text = "  paid  ".strip().upper()  # Clean and capitalise
card = {"item": bag[0], "status": text}  # Build a card
card.update({"count": len(bag)})  # Add count
print(card.get("item"))  # First sorted item
print(card.get("status"))  # PAID
print(card.get("count"))  # 3
```

**Expected output:**

- `dosa`
- `PAID`
- `3`

---

## Debugging Flexible Arguments and Built-ins

| Problem | Likely Cause | Fix |
|---------|--------------|-----|
| `TypeError` on argument count | Fixed parameters only | Use `*args` or add a default |
| Named values landed in the wrong bag | Confused `*` and `**` | Positional extras → `*args`; named extras → `**kwargs` |
| `sort()` seemed to print `None` | `sort` returns `None` | Call `sort()`, then print the list |
| `remove` crashed on a set | Value was missing | Use `discard` when unsure |
| `KeyError` after lookup | Used `dict[key]` for a missing key | Prefer `get(key, default)` |

---

## Key Takeaways

- **`*args`** packs extra positional values into a tuple. **`**kwargs`** packs named values into a dictionary.
- You can use both in one function when the call may send a changing mix of values and labels.
- Built-in list, string, set, tuple, and dictionary tools save you from rewriting common loops.
- String methods return new text. Many list methods change the list in place.
- In upcoming lessons you will leave these container tools and look at how generative AI writes new text from a prompt.

---

## Important Commands, Libraries & Terminologies

| Term / Command | What It Does |
|----------------|--------------|
| **`*args`** | Collects extra positional arguments into a tuple |
| **`**kwargs`** | Collects extra named arguments into a dictionary |
| **`insert` / `extend` / `pop` / `remove`** | Place, grow, or delete list items |
| **`sort` / `reverse`** | Reorder a list in place |
| **`upper` / `lower` / `strip` / `replace`** | Build new cleaned or changed strings |
| **`split` / `join`** | Move between a string and a list of pieces |
| **`remove` / `discard`** | Delete a set value (strict vs safe) |
| **`union` / `intersection` / `difference`** | Combine or compare sets |
| **`count` / `index`** | Inspect values inside a tuple |
| **`get` / `keys` / `values` / `items`** | Read dictionary contents safely |
| **`pop` / `update`** | Remove a dictionary key or merge new pairs |
| **Built-in** | Ready-made tool provided by Python |
