# Assignment Subjective

Total Questions: 1  
Difficulty: Medium  
Type: Practical Implementation

---

## Q1 (Practical, Medium)

**Sahana** helps her uncle at a small stationery shop. A student buys notebooks and pens, and Sahana wants a simple Python program that stores the item details, calculates the bill, and displays a clean summary.

### Problem Statement

Write a Python program that:

1. Stores the shop name as text.
2. Stores the number of notebooks purchased as a whole number.
3. Stores the notebook price as a whole number.
4. Stores the number of pens purchased as a whole number.
5. Stores the pen price as a decimal number.
6. Calculates:
   - notebook total
   - pen total
   - final bill amount
7. Prints the shop name, item totals, and final bill clearly.
8. Uses `type()` to display the data type of at least three stored values.
9. Converts one numeric text value into a number before using it in calculation.
10. Adds at least two comments explaining important steps.

Use these fixed values in your program:

- Shop name: `"Sri Lakshmi Stationery"`
- Number of notebooks: `3`
- Notebook price: `45`
- Number of pens: `"4"` stored first as text, then converted to a number
- Pen price: `12.5`

### Expected Output

Your exact wording can be slightly different, but the output must clearly show:

```text
Shop: Sri Lakshmi Stationery
Notebook Total: 135
Pen Total: 50.0
Final Bill: 185.0
```

The output must also show data type checks for at least three values, such as the shop name, notebook count, and final bill.

### Constraints

- Use a single Python file.
- Use meaningful variable names.
- Use `print()` to display the output.
- Use `int()` or `float()` to convert the pen count before calculation.
- Use arithmetic operators for calculations; do not directly hard-code the final totals.
- Do not use `input()` because the values are fixed for this task.
- Write your complete program in [OneCompiler Python](https://onecompiler.com/python).

### Submission Instruction

1. Open [https://onecompiler.com/python](https://onecompiler.com/python) and create a new Python file.
2. Write your complete program in the editor, then click **Run** and verify the output.
3. Click the **Save** button at the top right.
4. Enter your **assignment name**, set visibility to **Public**, and save.
5. Click the **Share** button, copy the link, and submit that link in the answer box on the LMS.

![Step - 1](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/5b930478-03c2-4255-a724-d0990da5e4f4/C0AFXttOJJhW3o1S.png)

![Step-2](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/c817d308-66ca-4b5a-8579-db26951ad1a2/PGcKY2hqUQgysgPo.png)

---

## Answer Explanation (Complete Ideal Solution)

### Step-by-step Walkthrough

1. Store the shop name as a string.
2. Store notebook quantity and notebook price as integers.
3. Store the pen count first as a string, then convert it to an integer before calculation.
4. Store pen price as a float.
5. Multiply quantity by price for each item.
6. Add both item totals to get the final bill.
7. Print the bill summary.
8. Use `type()` to check the data type of selected values.

### Reference Solution — `stationery_bill.py`

```python
# Store stationery shop bill details
shop_name = "Sri Lakshmi Stationery"

notebook_count = 3
notebook_price = 45

# Pen count is stored as text first, then converted for calculation
pen_count_text = "4"
pen_count = int(pen_count_text)
pen_price = 12.5

# Calculate item totals and final bill
notebook_total = notebook_count * notebook_price
pen_total = pen_count * pen_price
final_bill = notebook_total + pen_total

print("Shop:", shop_name)
print("Notebook Total:", notebook_total)
print("Pen Total:", pen_total)
print("Final Bill:", final_bill)

print(type(shop_name))
print(type(notebook_count))
print(type(final_bill))
```

### Sample Verification

For the given values:

- Notebook total: `3 * 45 = 135`
- Pen total: `4 * 12.5 = 50.0`
- Final bill: `135 + 50.0 = 185.0`

### Alternative Approaches

- `float(pen_count_text)` can also be used because multiplication with `12.5` still works correctly.
- More `type()` checks can be added for `pen_count_text`, `pen_count`, and `pen_price`.
- The print messages can be formatted differently as long as the same values are clearly displayed.
