#### **Scene 2.0**

1. **Why do programs need conditional statements?**  
   a) To store values in variables without using operators  
   b) To run different blocks of code based on whether a condition is True or False  
   c) To convert integers into strings automatically  
   d) To make Python ignore indentation errors  

   **Answer:** b) To run different blocks of code based on whether a condition is True or False  

   **Explanation:** Conditionals let a program decide — for example, whether a student passes or fails, or whether a person is old enough to vote — instead of doing the same thing every time.

2. **What will this program print when `marks = 28`?**  
   ```python
   if marks >= 35:
       print("Congratulations! You have passed.")
   print("Result processing complete.")
   ```  
   a) `Congratulations! You have passed.` only  
   b) `Result processing complete.` only  
   c) Both lines, one after the other  
   d) Nothing — the program stops with an error  

   **Answer:** b) `Result processing complete.` only  

   **Explanation:** `28 >= 35` is False, so the indented line inside `if` is skipped. The last `print()` is outside the `if` block and always runs.

3. **What will this program print when `marks = 42`?**  
   ```python
   if marks >= 35:
       print("Pass")
   else:
       print("Fail")
   ```  
   a) `Pass`  
   b) `Fail`  
   c) Both `Pass` and `Fail`  
   d) Nothing  

   **Answer:** a) `Pass`  

   **Explanation:** `42 >= 35` is True, so the `if` block runs and `else` is skipped. Exactly one of the two blocks runs — never both.

4. **A student has `marks = 78`. Using the grade bands below, which grade is printed?**  
   ```python
   if marks >= 90:
       print("Grade: A")
   elif marks >= 75:
       print("Grade: B")
   elif marks >= 60:
       print("Grade: C")
   else:
       print("Grade: F — Fail")
   ```  
   a) `Grade: A`  
   b) `Grade: B`  
   c) `Grade: C`  
   d) `Grade: F — Fail`  

   **Answer:** b) `Grade: B`  

   **Explanation:** Python checks conditions from top to bottom and stops at the first True match. `78 >= 90` is False, but `78 >= 75` is True — so Grade B is printed.

5. **Which statement correctly describes `=` and `==` in Python?**  
   a) Both `=` and `==` are used to compare two values for equality  
   b) `=` assigns a value to a variable; `==` checks whether two values are equal  
   c) `==` assigns a value; `=` checks equality inside an `if` condition  
   d) Neither symbol can be used inside conditional statements  

   **Answer:** b) `=` assigns a value to a variable; `==` checks whether two values are equal  

   **Explanation:** `age = 18` stores 18 in `age`, while `age == 18` asks "is age equal to 18?" and gives True or False — using `=` inside `if` causes a SyntaxError.
