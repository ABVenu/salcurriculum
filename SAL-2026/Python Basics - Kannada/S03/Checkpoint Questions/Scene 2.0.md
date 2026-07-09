#### **Scene 2.0**

1. **When is a `for` loop with `range()` usually the better choice?**  
   a) When savings must grow each month until a balance goal is reached  
   b) When the repeat count is known in advance  
   c) When user input must pass a check before the loop can end  
   d) When the `while` test might never become `False`  

   **Answer:** b) When the repeat count is known in advance  

   **Explanation:** **`for`** with `range()` is ideal for a fixed count. **`while`** fits problems where repetition depends on a condition changing over time.

2. **What numbers does `range(1, 5)` generate?**  
   a) `0, 1, 2, 3, 4`  
   b) `1, 2, 3, 4, 5`  
   c) `5, 4, 3, 2, 1`  
   d) `1, 2, 3, 4`  

   **Answer:** d) `1, 2, 3, 4`  

   **Explanation:** `range(start, stop)` begins at `start` and stops **before** `stop`. So `range(1, 5)` includes 1 through 4, but not 5.

3. **Which `range()` call counts down from 10 to 1?**  
   a) `range(1, 10)`  
   b) `range(10, 1)`  
   c) `range(10, 0, -1)`  
   d) `range(0, 10, -1)`  

   **Answer:** c) `range(10, 0, -1)`  

   **Explanation:** A **negative step** makes `range()` count backwards. `range(10, 0, -1)` gives 10, 9, 8, …, 1 and stops before 0.

4. **How many times does the loop body run?**

   ```python
   for num in range(1, 4):
       print(num)
   ```

   a) 4 times  
   b) 3 times  
   c) 5 times  
   d) 1 time  

   **Answer:** b) 3 times  

   **Explanation:** `range(1, 4)` produces 1, 2, and 3 — three values. The number 4 is not included because `range()` stops before the stop value.

5. **What numbers does `range(0, 10, 2)` generate?**  
   a) `0, 1, 2, 3, 4, 5, 6, 7, 8, 9`  
   b) `1, 3, 5, 7, 9`  
   c) `0, 2, 4, 6, 8`  
   d) `2, 4, 6, 8, 10`  

   **Answer:** c) `0, 2, 4, 6, 8`  

   **Explanation:** The third argument in `range(start, stop, step)` is the **step**. Here it jumps by 2 from 0 up to (but not including) 10 — giving even numbers 0 through 8.
