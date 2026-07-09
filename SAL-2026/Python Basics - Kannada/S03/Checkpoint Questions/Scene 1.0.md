#### **Scene 1.0**

1. **Why do programs need loops?**  
   a) To store several different data types inside one variable  
   b) To convert text input into numeric values for calculations  
   c) To print the final output only once at the very end  
   d) To avoid copying the same block of code many times  

   **Answer:** d) To avoid copying the same block of code many times  

   **Explanation:** Loops automate repetition — one instruction can handle 50 students, 50 bills, or 50 plates instead of writing separate code for each case.

2. **What does `countdown = countdown - 1` do inside a loop?**  
   a) Adds 1 to the value stored in `countdown`  
   b) Subtracts 1 from the value stored in `countdown`  
   c) Resets `countdown` back to zero on every round  
   d) Tests whether `countdown` is exactly equal to the number 1  

   **Answer:** b) Subtracts 1 from the value stored in `countdown`  

   **Explanation:** This is **decrementing** — the value goes down by 1 each round. A rocket countdown from 5 to 1 uses this pattern before the loop stops.

3. **Which line correctly starts a `while` loop in Python?**  
   a) `while count <= 5:`  
   b) `while (count <= 5)`  
   c) `for count <= 5:`  
   d) `while count = 5:`  

   **Answer:** a) `while count <= 5:`  

   **Explanation:** A `while` loop needs the keyword `while`, a **condition**, and a **colon** at the end. Single `=` assigns a value; it does not check a condition.

4. **A `while` loop prints `1` forever and never stops. What is the most likely bug?**  
   a) The `while` test uses `>` instead of `>=`  
   b) `print()` was placed outside the indented block  
   c) `count = count + 1` was never added inside the loop  
   d) The counter variable was initialized to zero before the loop began  

   **Answer:** c) `count = count + 1` was never added inside the loop  

   **Explanation:** Without an update, the counter never changes — the condition stays `True` forever. This is a common **infinite loop** mistake.

5. **Which pair names the two main loop types taught in Python?**  
   a) `if` and `else`  
   b) `print` and `input`  
   c) `True` and `False`  
   d) `while` and `for`  

   **Answer:** d) `while` and `for`  

   **Explanation:** Python's two primary loops are **`while`** (repeat until a condition changes) and **`for`** (repeat for each number in a `range()`). Choosing the right one depends on the problem.
