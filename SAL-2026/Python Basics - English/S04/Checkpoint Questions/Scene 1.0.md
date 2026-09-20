#### **Scene 1.0**

1. **What is the main purpose of the `break` statement inside a loop?**  
   a) To skip one value and keep looping through the remaining values  
   b) To change the loop condition from `True` to `False` permanently  
   c) To exit the current loop at once and run the next line after it  
   d) To restart the same loop again from its very first starting value  

   **Answer:** c) To exit the current loop at once and run the next line after it  

   **Explanation:** `break` exits the loop that contains it right away. Code after the loop still runs. `continue` only skips one iteration; `break` does not restart the loop or rewrite the condition by itself.

2. **What is the output of this code?**

   ```python
   for n in range(1, 6):
       if n == 4:
           break
       print(n)
   ```

   a) `1 2 3`  
   b) `1 2 4`  
   c) `2 3 4`  
   d) `1 3 4`  

   **Answer:** a) `1 2 3`  

   **Explanation:** The loop prints 1, 2, and 3. When `n` becomes 4, `break` runs before `print(n)`, so 4 and 5 are never printed.

3. **Which statement best describes using `break` with `if` inside a `while` loop?**  
   a) The `if` check can stop the loop early even when `while` is still true  
   b) The `if` check replaces the `while` test, so no stop condition is needed  
   c) The `if` check must be written only after the loop has already finished  
   d) The `if` check can print a note but cannot change how the loop runs  

   **Answer:** a) The `if` check can stop the loop early even when `while` is still true  

   **Explanation:** A `while` loop can allow many rounds, but an `if` + `break` can stop it as soon as a special goal or match is found. That early exit is clearer than forcing every stop reason into one complex `while` condition.

4. **How is `continue` different from `break`?**  
   a) `continue` ends the whole program, while `break` ends only one loop  
   b) `continue` skips one round, while `break` ends that loop completely  
   c) `continue` works only in `for`, while `break` works only in `while`  
   d) `continue` resets the counter, while `break` keeps the counter same  

   **Answer:** b) `continue` skips one round, while `break` ends that loop completely  

   **Explanation:** Use `continue` when only one round should be ignored. Use `break` when no further iterations are needed. Both work in `for` and `while` loops.

5. **What is printed by this code?**

   ```python
   for n in range(1, 8):
       if n % 3 == 0:
           continue
       print(n)
   ```

   a) `1 2 3 4 5`  
   b) `1 2 4 5 6`  
   c) `1 2 4 5 7`  
   d) `2 3 4 5 7`  

   **Answer:** c) `1 2 4 5 7`  

   **Explanation:** When `n` is 3 or 6, `continue` skips `print(n)`. All other values from 1 to 7 are printed, and the loop still visits every number in the range.
