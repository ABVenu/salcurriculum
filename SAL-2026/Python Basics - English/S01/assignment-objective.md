# Assignment Objective

Total Questions: 10

Difficulty Flow: Easy → Moderate → Hard

Question Types:
- 6 MCQ (Single Correct): Q1–Q6
- 4 MSQ (Multiple Correct): Q7–Q10

---

## Q1 (MCQ, Easy)

A small hotel owner is writing every bill by hand. A digital billing system can calculate totals, save sales records, and show daily earnings.

What is the best reason a programming language is needed to build such a system?

A. It lets humans give clear step-by-step instructions to the computer  
B. It makes the computer understand human feelings automatically  
C. It stores physical cash inside the computer  
D. It removes the need for any logic or planning

**Correct Answer:** A

**Answer Explanation:**  
A programming language is a structured way to tell a computer what to do step by step. A billing system works because the computer follows exact instructions for input, calculation, output, and storage.

**Why other options are wrong:**  
- B: Computers do not understand feelings or vague meaning automatically.  
- C: Digital billing systems do not store physical cash inside the computer.  
- D: Programming needs clear logic and planning.

---

## Q2 (MCQ, Easy)

A kirana shop program receives item quantity, multiplies it by price, and displays the final bill.

Which part is the **Process** in the Input → Process → Output model?

A. Entering the item quantity  
B. Multiplying quantity by price  
C. Showing the final bill  
D. Saving the program file name

**Correct Answer:** B

**Answer Explanation:**  
In the IPO model, **Input** is the data received, **Process** is the calculation or logic performed, and **Output** is the result shown. Multiplying quantity by price is the processing step.

**Why other options are wrong:**  
- A: Entering quantity is input.  
- C: Showing the final bill is output.  
- D: File naming is not part of this billing calculation flow.

---

## Q3 (MCQ, Easy)

Meera wants to start practising Python without installing anything on her laptop.

Which tool is most suitable for her first practice?

A. A browser-based online compiler like OneCompiler  
B. A handwritten notebook only  
C. A calculator app only  
D. A photo editing app

**Correct Answer:** A

**Answer Explanation:**  
An online compiler lets beginners write and run Python directly in a browser. It is useful for starting practice without local installation.

**Why other options are wrong:**  
- B: A notebook can help planning, but it cannot run Python code.  
- C: A calculator cannot execute Python programs.  
- D: A photo editing app is unrelated to writing and running Python code.

---

## Q4 (MCQ, Easy)

Python reads instructions exactly as written. A beginner writes:

```python
Print("Hello")
```

What is the main problem?

A. Python is case-sensitive, so `Print` is not the same as `print`  
B. Python cannot display text on the screen  
C. Python accepts only capital letters for commands  
D. The word Hello must always be written in Kannada

**Correct Answer:** A

**Answer Explanation:**  
Python is case-sensitive. The built-in function is written as `print`, not `Print`. A change in capitalisation can cause an error.

**Why other options are wrong:**  
- B: Python can display text using `print()`.  
- C: Python keywords and function names are not written only in capital letters.  
- D: Python can store and display text in English, Kannada, or other languages when written correctly.

---

## Q5 (MCQ, Moderate)

A student writes this Python code:

```python
city = "Mysuru"
temperature = 28.5
is_raining = False
```

Which statement is correct?

A. `city` is a float, `temperature` is a string, and `is_raining` is an integer  
B. `city` is a string, `temperature` is a float, and `is_raining` is a boolean  
C. All three values are strings because they are stored in variables  
D. Python cannot store text, decimals, and true/false values in the same program

**Correct Answer:** B

**Answer Explanation:**  
Text inside quotes is a **string**, a number with a decimal point is a **float**, and `True`/`False` values are **booleans**.

**Why other options are wrong:**  
- A: The data types are incorrectly matched.  
- C: Variables can store different types; variable storage does not make every value a string.  
- D: Python can store multiple data types in the same program.

---

## Q6 (MCQ, Moderate)

A bus fare program stores the distance as text:

```python
distance_text = "15"
rate_per_km = 2.5
```

The programmer wants to multiply the distance by the rate. What should be done first?

A. Convert `distance_text` to a number using `float()` or `int()`  
B. Convert `rate_per_km` to the word `"rate"`  
C. Put both values inside quotation marks before multiplying  
D. Use `type()` to permanently change the value

**Correct Answer:** A

**Answer Explanation:**  
`"15"` is a string because it is inside quotes. It should be converted to a numeric type before arithmetic. `float("15")` gives `15.0`, and `int("15")` gives `15`.

**Why other options are wrong:**  
- B: Changing the rate to text would prevent numeric calculation.  
- C: Quotation marks make values strings, not numbers.  
- D: `type()` checks a value's type; it does not convert the value.

---

## Q7 (MSQ, Moderate)

A college stores basic student details in Python:

```python
student_name = "Anita"
student_age = 19
percentage = 88.5
has_id_card = True
```

Which statements are correct?

A. `student_name` stores text  
B. `student_age` stores a whole number  
C. `percentage` stores a decimal number  
D. `has_id_card` must be written as lowercase `true` in Python

**Correct Answers:** A, B, C

**Answer Explanation:**  
`"Anita"` is a string, `19` is an integer, `88.5` is a float, and `True` is a boolean value. In Python, boolean values use capital `T` and `F`.

**Why other options are wrong:**  
- D: Python uses `True` and `False`, not lowercase `true` and `false`.

---

## Q8 (MSQ, Moderate)

Ravi is writing his first Python program in OneCompiler.

Which actions are correct beginner practices?

A. Write code in the editor area  
B. Click Run to execute the program  
C. Use Save to keep the program for later  
D. Expect Python to run automatically without clicking Run or executing the file

**Correct Answers:** A, B, C

**Answer Explanation:**  
In an online compiler, the editor is where code is written, Run executes the program, and Save helps keep work for later use.

**Why other options are wrong:**  
- D: Typing code alone does not execute it. The program must be run.

---

## Q9 (MSQ, Hard)

A learner is designing a small notebook bill program before writing code. The customer buys 3 notebooks at ₹45 each, and the program should show the total cost.

Which statements correctly map this problem to Input → Process → Output?

A. Input can include number of notebooks and price per notebook  
B. Process can include multiplying 3 by 45  
C. Output can be the total cost, ₹135  
D. Output should happen before input because the computer can guess the bill

**Correct Answers:** A, B, C

**Answer Explanation:**  
The input values are quantity and price. The process is the multiplication. The output is the calculated total. This follows the correct IPO order.

**Why other options are wrong:**  
- D: A computer cannot guess the final bill before receiving and processing the needed information.

---

## Q10 (MSQ, Hard)

A programmer is checking why a simple marks program behaves unexpectedly:

```python
marks_text = "85"
bonus = 5
```

Which statements are correct?

A. `marks_text` is a string because `85` is written inside quotes  
B. `bonus` is an integer because it is a whole number without quotes  
C. `int(marks_text)` can convert `"85"` into the number `85` for calculation  
D. `int("hello")` safely converts the word `"hello"` into a number

**Correct Answers:** A, B, C

**Answer Explanation:**  
Quoted values are strings, whole numbers without quotes are integers, and numeric text such as `"85"` can be converted using `int()`.

**Why other options are wrong:**  
- D: `"hello"` is not numeric text, so converting it with `int()` causes a value conversion error.
