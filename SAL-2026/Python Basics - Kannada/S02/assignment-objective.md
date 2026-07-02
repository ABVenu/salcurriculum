# Assignment Objective

Total Questions: 10

Difficulty Flow: Easy → Moderate → Hard

Question Types:
- 6 MCQ (Single Correct): Q1–Q6
- 4 MSQ (Multiple Correct): Q7–Q10

---

## Q1 (MCQ, Easy)

At a **tiffin centre**, a customer orders 4 plates of idli at ₹15 per plate. A Python program must find the cost of the idli order.

Which operator should be used?

A. `*` (multiplication)  
B. `+` (addition)  
C. `/` (division)  
D. `%` (modulus)

**Correct Answer:** A

**Answer Explanation:**  
When quantity and rate are known, the item cost is found by multiplying them. `4 * 15` gives `60`.

**Why other options are wrong:**  
- B: Addition combines amounts; it does not calculate quantity × rate.  
- C: Division splits a total; it is not used to find cost from quantity and rate.  
- D: Modulus gives remainder; it is not used for this bill line item.

---

## Q2 (MCQ, Easy)

A community hall has **25 chairs** and arranges **6 chairs per row**. A program needs to find how many **complete rows** can be formed.

Which operator gives the correct answer?

A. `//` (floor division)  
B. `/` (regular division)  
C. `+` (addition)  
D. `**` (exponentiation)

**Correct Answer:** A

**Answer Explanation:**  
Floor division keeps only the whole-number part of division. `25 // 6` is `4`, meaning four complete rows can be formed.

**Why other options are wrong:**  
- B: Regular division gives `4.166...`, not a whole row count.  
- C: Addition does not divide chairs into equal rows.  
- D: Exponentiation raises a number to a power; it does not count complete groups.

---

## Q3 (MCQ, Easy)

A parking token machine accepts only **₹50 notes**. A driver has **₹230** and wants to know how much money will be **left over** after paying with the largest possible number of ₹50 notes.

Which operator helps find the leftover amount?

A. `%` (modulus)  
B. `//` (floor division)  
C. `/` (division)  
D. `-` (subtraction)

**Correct Answer:** A

**Answer Explanation:**  
Modulus (`%`) returns the remainder after division. `230 % 50` is `30`, which is the amount left after using four ₹50 notes.

**Why other options are wrong:**  
- B: Floor division tells how many full ₹50 notes fit (`4`), not the leftover cash.  
- C: Regular division gives a decimal quotient, not the remainder.  
- D: Subtraction alone does not directly answer "leftover after grouping by 50" in one step.

---

## Q4 (MCQ, Easy)

A **movie ticket** program must charge a child ticket when age is **below 12**.

Which comparison operator fits this check?

A. `<`  
B. `=`  
C. `>=`  
D. `==`

**Correct Answer:** A

**Answer Explanation:**  
`<` checks whether the left value is less than the right value. `age < 12` correctly identifies child ticket eligibility.

**Why other options are wrong:**  
- B: A single `=` stores a value; it does not compare values.  
- C: `>=` checks "12 or above," which is the opposite of "below 12."  
- D: `==` checks exact equality with 12, not all ages below 12.

---

## Q5 (MCQ, Moderate)

What is the value of `result` after this line runs?

```python
result = 24 - 6 * 2
```

A. `12`  
B. `36`  
C. `18`  
D. `24`

**Correct Answer:** A

**Answer Explanation:**  
Multiplication has higher precedence than subtraction. Python calculates `6 * 2 = 12` first, then `24 - 12 = 12`.

**Why other options are wrong:**  
- B: This would require adding instead of subtracting after multiplication.  
- C: This treats the expression as `24 - 6 = 18` and ignores the remaining `* 2`.  
- D: This ignores the `- 6 * 2` part completely.

---

## Q6 (MCQ, Moderate)

A bank balance alert program uses this code:

```python
balance = 420

if balance < 500:
    print("Warning: Low balance!")
else:
    print("Balance is healthy.")
```

What is printed on the screen?

A. `Warning: Low balance!`  
B. `Balance is healthy.`  
C. Both messages  
D. Nothing is printed

**Correct Answer:** A

**Answer Explanation:**  
The condition `balance < 500` checks whether 420 is below 500. That is **True**, so the `if` block runs and prints the warning.

**Why other options are wrong:**  
- B: The healthy message runs only when balance is 500 or above.  
- C: Only one block runs in an if-else structure.  
- D: The `if` block executes because the condition is true.

---

## Q7 (MSQ, Moderate)

A beginner is reviewing Python **arithmetic operators**.

Which of the following are arithmetic operators?

A. `+`  
B. `==`  
C. `//`  
D. `**`

**Correct Answers:** A, C, D

**Answer Explanation:**  
`+` is addition, `//` is floor division, and `**` is exponentiation. All three perform calculations on numeric values.

**Why other options are wrong:**  
- B: `==` is a comparison operator that checks equality; it does not perform arithmetic.

---

## Q8 (MSQ, Moderate)

Which statements about **if-else** statements are correct?

A. The `if` block runs only when its condition is **True**.  
B. The `else` block runs when the `if` condition is **False**.  
C. Both the `if` and `else` blocks always run every time.  
D. Exactly one of the `if` or `else` blocks runs in a simple if-else structure.

**Correct Answers:** A, B, D

**Answer Explanation:**  
In a basic if-else, Python checks the condition once. If it is true, the `if` block runs; otherwise, the `else` block runs. Only one path is taken.

**Why other options are wrong:**  
- C: The blocks are alternatives; they do not both execute in the same run.

---

## Q9 (MSQ, Hard)

A learner runs these two lines:

```python
print(16 / 2 * 2)
print(16 / (2 * 2))
```

Which statements about the output are correct?

A. The first `print()` displays `16.0`.  
B. The second `print()` displays `4.0`.  
C. The first `print()` displays `4.0`.  
D. Parentheses change the order of calculation in the second line.

**Correct Answers:** A, B, D

**Answer Explanation:**  
At the same precedence level, operators run left to right. In the first line: `16 / 2 = 8.0`, then `8.0 * 2 = 16.0`. In the second line, parentheses run first: `2 * 2 = 4`, then `16 / 4 = 4.0`.

**Why other options are wrong:**  
- C: `4.0` is the result of the second line, not the first.

---

## Q10 (MSQ, Hard)

A shop discount program uses this structure:

```python
if purchase_amount >= 5000:
    print("You get 20% discount!")
elif purchase_amount >= 2000:
    print("You get 10% discount!")
elif purchase_amount >= 1000:
    print("You get 5% discount!")
else:
    print("No discount on this purchase.")
```

Which statements are correct?

A. With `purchase_amount = 2500`, the program prints `You get 10% discount!`.  
B. Python checks conditions from top to bottom and stops at the first match.  
C. With `purchase_amount = 2500`, the program prints `You get 5% discount!`.  
D. Putting `elif purchase_amount >= 1000` before `elif purchase_amount >= 2000` would still give 10% discount correctly to a ₹2500 bill.

**Correct Answers:** A, B

**Answer Explanation:**  
For `purchase_amount = 2500`, the first check (`>= 5000`) fails, the second check (`>= 2000`) passes, and the program prints the 10% message. Python runs only the first matching block.

**Why other options are wrong:**  
- C: 2500 qualifies for the 10% tier, not the 5% tier.  
- D: Lower thresholds placed before higher ones would wrongly give 5% to many customers who should get 10% or 20%.
