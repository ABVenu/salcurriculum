#### **Scene 1.1**

1. **What is the output of this code?**

   ```python
   for n in range(1, 8):
       if n == 2:
           continue
       if n == 6:
           break
       print(n)
   ```

   a) `1 3 4 5`  
   b) `1 2 3 4`  
   c) `3 4 5 7`  
   d) `1 3 4 6`  

   **Answer:** a) `1 3 4 5`  

   **Explanation:** Value 1 prints; 2 is skipped by `continue`; 3, 4, and 5 print; then at 6, `break` ends the loop before 6 or 7 can print.

2. **Why can this `while` loop run forever?**

   ```python
   x = 1

   while x <= 4:
       if x == 3:
           continue
       print(x)
       x = x + 1
   ```

   a) The test `x <= 4` turns false at 3, so the loop starts again from 1  
   b) The `print()` call sets `x` back to 1 during every single round  
   c) A `while` loop cannot use `continue` unless `break` is also used  
   d) At `x == 3`, `continue` skips the update, so `x` never moves on  

   **Answer:** d) At `x == 3`, `continue` skips the update, so `x` never moves on  

   **Explanation:** In a `while` loop, the counter must be updated before `continue`, or the same value repeats forever. Here, `x = x + 1` sits after `continue`, so once `x` is 3 the update never runs.

3. **A loop must skip multiples of 4, but stop completely when the value becomes 9. Which order of checks is correct before `print(n)`?**  
   a) Use `break` for multiples of 4, then `continue` when the value is 9  
   b) Use `continue` when the value is 9, then `break` for multiples of 4  
   c) Print the value first, then `continue` for 9 and `break` for multiples of 4  
   d) Use `break` when the value is 9, then `continue` for multiples of 4  

   **Answer:** d) Use `break` when the value is 9, then `continue` for multiples of 4  

   **Explanation:** Stopping at 9 needs `break`. Skipping multiples of 4 needs `continue`. Checking stop first prevents printing 9; checking skip second filters unwanted values before `print(n)`.
