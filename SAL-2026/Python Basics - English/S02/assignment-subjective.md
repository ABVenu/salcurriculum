# Assignment Subjective

Total Questions: 1  
Difficulty: Medium  
Type: Practical Implementation

---

## Q1 (Practical, Medium)

**Karthik** manages overdue books at a college library. He wants a Python program that calculates each student's library fine and displays an appropriate reminder message based on how high the fine is.

### Problem Statement

Write a Python program that:

1. Stores the student name as text.
2. Stores the number of days the book is late as a whole number.
3. Stores the fine per late day as a whole number.
4. Calculates the **total fine** by multiplying days late by fine per day.
5. Prints the student name, days late, and total fine clearly.
6. Uses **if-elif-else** to print a reminder message based on the total fine:
   - `"Account blocked until fine is paid."` when total fine is **100 or above**
   - `"Urgent: Pay fine within 2 days."` when total fine is **50 or above but below 100**
   - `"Fine can be paid at the library counter."` when total fine is **below 50**
7. Adds at least two comments explaining important steps.
8. Uses meaningful variable names throughout.

Use these fixed values in your program:

- Student name: `"Karthik"`
- Days late: `7`
- Fine per day: `12`

### Expected Output

Your exact wording can be slightly different, but the output must clearly show:

```text
Student: Karthik
Days Late: 7
Total Fine: 84
Urgent: Pay fine within 2 days.
```

### Constraints

- Use a single Python file.
- Use meaningful variable names.
- Use `print()` to display the output.
- Use arithmetic operators for the fine calculation; do not hard-code the total fine directly.
- Use comparison operators inside your conditional statements.
- Apply correct **indentation** (4 spaces) for all blocks inside `if`, `elif`, and `else`.
- Check higher fine ranges before lower ones in the **if-elif-else** chain.
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

1. Store the student name, days late, and fine per day in variables.
2. Multiply days late by fine per day to get the total fine.
3. Print the student name, days late, and total fine.
4. Use an if-elif-else chain to choose the correct reminder message, checking the highest fine range first.

### Reference Solution — `library_fine.py`

```python
# Store library fine details
student_name = "Karthik"
days_late = 7
fine_per_day = 12

# Calculate total fine using multiplication
total_fine = days_late * fine_per_day

# Display fine summary
print("Student:", student_name)
print("Days Late:", days_late)
print("Total Fine:", total_fine)

# Choose reminder message based on fine amount
if total_fine >= 100:
    print("Account blocked until fine is paid.")
elif total_fine >= 50:
    print("Urgent: Pay fine within 2 days.")
else:
    print("Fine can be paid at the library counter.")
```

### Sample Verification

For the given values:

- Total fine: `7 * 12 = 84`
- `84 >= 100` is **False**
- `84 >= 50` is **True** → prints **Urgent: Pay fine within 2 days.**

### Alternative Approaches

- The total fine can be stored in a variable named `fine_amount` or `library_fine` as long as the calculation is clear.
- The reminder messages can be reworded slightly, but the same three fine ranges must be handled correctly.
- An additional `print()` line for currency formatting is optional as long as the required values remain clear.
