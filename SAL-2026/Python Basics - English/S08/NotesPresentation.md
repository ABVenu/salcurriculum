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

# **args, kwargs, and Built-in Functions**

Instructor notes. Brief points to teach from. About two code snippets per concept.

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #475569; background: #f8fafc; padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **Quick Recap — Functions**

- Already: `def`, arguments, defaults, `return`, `if` inside
- Gap: unknown count of values; optional named fields; ready-made container tools
- **Part 1 — `*args` / `**kwargs`** · **Part 2 — Built-ins for list/str/set/tuple/dict**

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #2563eb; background: #eff6ff; padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **What You Will Learn**

- `*args` → tuple of positional extras · `**kwargs` → dict of named extras
- Both together · list/string/set/tuple/dict built-ins · one mixed program

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #be123c; background: linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%); padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **Part 1 — `*args` and `**kwargs`**

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #0d9488; background: #f0fdfa; padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **`*args` — Extra Positional Values**

- **Official:** collects extra positional args into a **tuple**
- **Simple:** bag for leftover values by position
- **Example:** bill with 2 or 12 amounts

![*args collects extra positional values into a tuple bag that the function can loop and total](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-english/s08/s08-01-args-bag.png?v=20261028)

```python
def total_marks(*args):
    total = 0
    for mark in args:
        total = total + mark
    return total

print(total_marks(70, 80))           # 150
print(total_marks(70, 80, 90, 60))   # 300
```

```python
def report(title, *scores):
    print(title)
    for score in scores:
        print(score)

report("Unit Test", 88, 76, 91)
```

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #b45309; background: #fffbeb; padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **`**kwargs` — Named Values · Both Together**

- **Official:** extra named args → **dictionary**
- **Simple:** labelled bag of keys and values

![**kwargs collects named extras into a dictionary of key-value pairs such as name city and marks](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-english/s08/s08-02-kwargs-dict.png?v=20261028)

```python
def show_student(**kwargs):
    for key in kwargs:
        print(key, "→", kwargs[key])

show_student(name="Meera", city="Mumbai", marks=88)
```

![Signature order is required params then *args then **kwargs — one call can fill all three](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-english/s08/s08-03-args-kwargs-together.png?v=20261028)

```python
def describe(tag, *args, **kwargs):
    print("Tag:", tag)
    print("Extra values:", args)
    print("Named values:", kwargs)

describe("order", 2, 3, item="tea", price=30)
```

- Order in `def`: normal → `*args` → `**kwargs`

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #c2410c; background: #fff7ed; padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **Practical Mix · Activity**

```python
def pack_summary(*args, **kwargs):
    total = 0
    for value in args:
        total = total + value
    print("Total:", total)
    for key in kwargs:
        print(key, kwargs[key])

pack_summary(10, 20, 5, city="Pune", note="paid")
```

```python
def inspect(label, *args, **kwargs):
    print(label)
    print(len(args))
    print(kwargs.get("city", "none"))

inspect("demo", 10, 20, city="Mumbai", note="ok")
```

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #be123c; background: linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%); padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **Part 2 — Built-in Functions for Collections**

- **Built-in:** ready-made tool Python already provides
- You already used `len`, `append`, `add` — today the fuller toolkit

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #047857; background: #ecfdf5; padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **List & String Tools**

![List built-in toolkit — insert extend pop sort and reverse change how items sit in the sequence](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-english/s08/s08-04-list-builtins.png?v=20261028)

![String built-in toolkit — strip lower replace split and join clean and reshape text](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-english/s08/s08-05-string-builtins.png?v=20261028)

```python
items = ["tea", "samosa"]
items.insert(1, "coffee")
items.extend(["idli", "vada"])
last = items.pop()
items.remove("coffee")
numbers = [3, 1, 4, 2]
numbers.sort()
numbers.reverse()
```

```python
text = "  mumbai Central  "
print(text.strip())
print(text.lower())
print(text.upper())
line = "good morning mumbai"
print(line.replace("mumbai", "pune"))
parts = line.split(" ")
print("-".join(parts))
```

- Many list methods change **in place** and return `None` (`sort`)
- String methods return a **new** string

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #1d4ed8; background: #eff6ff; padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **Set · Tuple · Dictionary Tools**

![Set union intersection difference, tuple count and index, dictionary get pop and update in one toolkit view](https://s13n-curr-images-bucket.s3.ap-south-1.amazonaws.com/sal-2026/python-basics-english/s08/s08-06-set-tuple-dict-builtins.png?v=20261028)

```python
a = {1, 2, 3, 4}
b = {3, 4, 5}
a.remove(1)
a.discard(99)
print(a.union(b))
print(a.intersection(b))
print(a.difference(b))
```

```python
days = ("Mon", "Tue", "Wed", "Tue")
print(days.count("Tue"))
print(days.index("Wed"))

student = {"name": "Meera", "city": "Mumbai", "marks": 88}
print(student.get("email", "not shared"))
print(list(student.keys()))
removed = student.pop("marks")
student.update({"city": "Pune", "passed": True})
```

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #a21caf; background: #faf5ff; padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **Combined Program · Activity**

```python
raw_name = "  meera iyer  "
clean = raw_name.strip().title()
parts = clean.split(" ")
subjects = ["maths", "science"]
subjects.append("english")
subjects.sort()
card = {"name": clean, "city": "Mumbai"}
card.update({"subjects": subjects, "count": len(subjects)})
print(card.get("name"))
print("-".join(parts))
```

```python
bag = ["idli", "dosa"]
bag.extend(["tea"])
bag.sort()
text = "  paid  ".strip().upper()
card = {"item": bag[0], "status": text, "count": len(bag)}
print(card.get("item"), card.get("status"), card.get("count"))
# dosa PAID 3
```

| Job | Tool |
|-----|------|
| Many list items | `extend` |
| Clean spaces | `strip` |
| Words ↔ string | `split` / `join` |
| Safe dict read | `get` |
| Merge fields | `update` |

</div>

<div markdown="1" style="color: #0f172a; border-left: 5px solid #0f766e; background: #f0fdfa; padding: 14px 18px; margin: 18px 0; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">

## **Key Takeaways**

- `*args` → tuple · `**kwargs` → dict
- Built-ins save rewriting common loops
- Strings → new text; many list methods → in-place
- Upcoming: generative AI / prompts (theory)

</div>

