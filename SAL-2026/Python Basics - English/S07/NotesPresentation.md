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

# **Functions in Python**

Instructor notes. Brief points to teach from. Diagrams stay at original size. About two code snippets per concept.

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #475569; background: #f8fafc; padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **Quick Recap — Data Structures**

- Already: lists, strings, sets, tuples, dictionaries + `if` / loops
- Pain: same job copied many times (greeting, GST, pass/fail)
- **Today:** name the job once — **functions**
- **Part 1 — Define & call** · **Part 2 — Inputs, defaults, decisions**

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #2563eb; background: #eff6ff; padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **What You Will Learn**

- Why functions · `def` + call · parameter vs argument · `return`
- Multiple params · defaults · `if`/`else` inside · bill-total style

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #7c3aed; background: #f5f3ff; padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **Why Named Jobs**

- Copy-paste: fix every copy; hard to see the job; change rules in many places
- **Official:** named block for one reusable job
- **Simple:** labelled recipe — write once, ask by name
- **Example:** canteen plates × price

![Named job once — copy-paste bill slips versus one reusable bill_total function card called with different plate counts](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-english/s07/s07-01-why-functions.png?v=20261028)

```mermaid
flowchart TD
    A[Same job needed again] --> B{Written as a function?}
    B -->|No| C[Copy the lines]
    C --> D[Fix every copy if the rule changes]
    B -->|Yes| E[Call the name with new values]
    E --> F[One definition does the work]
```

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #be123c; background: linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%); padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **Part 1 — Defining and Calling a Function**

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #0d9488; background: #f0fdfa; padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **`def` and Call**

![def stores the body under a name — the body waits until say_hello is called with parentheses](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-english/s07/s07-02-def-and-call.png?v=20261028)

```python
def say_hello():
    print("Hello")

say_hello()
```

```python
def show_ready():
    print("Order ready")

show_ready()
show_ready()   # same job twice
```

- Body does **not** run at definition — only on call with `()`
- Wrong indent / missing `()` = body never runs as expected

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #b45309; background: #fffbeb; padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **Parameter vs Argument · `return`**

| Word | Where | Meaning |
|------|-------|---------|
| Parameter | `def greet(person):` | Placeholder |
| Argument | `greet("Meera")` | Real value |

![Parameter is the placeholder cup on the recipe card — argument is the real value poured in at the call](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-english/s07/s07-03-parameter-argument.png?v=20261028)

```python
def greet(person):
    print("Hello,", person)

greet("Meera")
greet("Rahul")
```

```python
def double(n):
    return n * 2

answer = double(7)
print(answer)          # 14
print(double(10))      # 20
```

- `print` shows; **`return`** gives caller a reusable value
- No `return` → `None`
- Code after `return` in same function does not run

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #c2410c; background: #fff7ed; padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **print vs return · Trace**

![print only displays on screen — return hands a value back so the caller can store it and keep calculating](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-english/s07/s07-04-print-vs-return.png?v=20261028)

```python
def show_square(n):
    print(n * n)

def get_square(n):
    return n * n

show_square(5)           # displays 25
value = get_square(5)
print(value + 1)         # 26
```

```python
def add_pair(a, b):
    print("Inside:", a, b)
    return a + b

first = add_pair(4, 6)
print("Stored:", first)       # 10
print(add_pair(1, 2) * 3)     # 9
```

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #be123c; background: linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%); padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **Part 2 — Inputs, Defaults, and Decisions**

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #047857; background: #ecfdf5; padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **Multiple Parameters · Defaults**

![Default parameter city equals Mumbai fills automatically when omitted — a second call can override it with Pune](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-english/s07/s07-05-default-parameters.png?v=20261028)

```python
def area(length, breadth):
    return length * breadth

print(area(5, 3))    # 15
```

```python
def welcome(name, city="Mumbai"):
    print("Hello,", name, "from", city)

welcome("Meera")              # default city
welcome("Rahul", "Pune")      # override
```

- Defaults **after** required params
- Named args: `travel(mode="train", city="Pune")`

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #1d4ed8; background: #eff6ff; padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **Decisions Inside · Bill Total**

![Bill total flow multiplies plates by price adds packing and can branch on membership inside the function](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-english/s07/s07-06-bill-and-decisions.png?v=20261028)

```python
def result_status(marks):
    if marks >= 40:
        return "Pass"
    else:
        return "Fail"

print(result_status(72))
print(result_status(33))
```

```python
def bill_total(plates, price, packing=0):
    return plates * price + packing

print(bill_total(3, 40))       # 120
print(bill_total(3, 40, 10))   # 130
```

```python
def payable(amount, member):
    if member:
        return amount * 0.9
    return amount
```

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #0f766e; background: #f0fdfa; padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **Activity · Takeaways**

```python
def tea_bill(cups, price=15):
    return cups * price

def label(score):
    if score >= 50:
        return "Good"
    return "Retry"

print(tea_bill(2), tea_bill(2, 20), label(62), label(40))
```

| Term | Role |
|------|------|
| `def` / call | Define / run with `()` |
| Parameter / argument | Placeholder / real value |
| `return` | Send result to caller |
| Default | Used when argument omitted |

</div>

