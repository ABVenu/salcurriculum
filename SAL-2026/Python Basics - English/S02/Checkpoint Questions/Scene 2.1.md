#### **Scene 2.1**

1. **What role does indentation play in Python conditional statements?**  
   a) It is optional decoration that does not affect which code runs  
   b) It defines which lines belong inside an `if`, `elif`, or `else` block  
   c) It converts strings into numbers before a condition is checked  
   d) It replaces the need for a colon `:` at the end of an `if` line  

   **Answer:** b) It defines which lines belong inside an `if`, `elif`, or `else` block  

   **Explanation:** Python uses leading spaces (usually 4 per level) instead of curly braces — indented lines run only when their condition is True; lines with less indentation are outside the block.

2. **What will this program print when `number = 17`?**  
   ```python
   if number % 2 == 0:
       print(number, "is even.")
   else:
       print(number, "is odd.")
   ```  
   a) `17 is even.`  
   b) `17 is odd.`  
   c) Both messages  
   d) An error because `%` cannot be used in a condition  

   **Answer:** b) `17 is odd.`  

   **Explanation:** `17 % 2` gives remainder `1`, and `1 == 0` is False — so the `else` block runs and prints that 17 is odd.

3. **What will this program print when `marks = 33` and `passing_marks = 35`?**  
   ```python
   if marks >= passing_marks:
       print("Result: PASS")
   else:
       print("Result: FAIL")
   ```  
   a) `Result: PASS`  
   b) `Result: FAIL`  
   c) Both messages  
   d) Nothing  

   **Answer:** b) `Result: FAIL`  

   **Explanation:** `33 >= 35` is False, so the `else` block runs. Storing `passing_marks` in a variable makes the pass rule easy to update without changing the comparison logic.
