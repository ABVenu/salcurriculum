#### **Scene 2.1**

1. **What is the output of this code?**

   ```python
   total = 0
   for num in range(1, 6):
       total = total + num
   print(total)
   ```

   a) `10`  
   b) `21`  
   c) `15`  
   d) `5`  

   **Answer:** c) `15`  

   **Explanation:** The loop adds 1 + 2 + 3 + 4 + 5. `range(1, 6)` includes 5 because it stops before 6. The accumulator `total` ends at **15**.

2. **What is the last number printed by this code?**

   ```python
   for num in range(5, 51, 5):
       print(num)
   ```

   a) `50`  
   b) `45`  
   c) `5`  
   d) `55`  

   **Answer:** a) `50`  

   **Explanation:** `range(5, 51, 5)` jumps by 5: 5, 10, 15, …, 50. It stops before 51, so **50** is the last value printed.

3. **What is the output of this code?**

   ```python
   n = 4
   result = 1
   for i in range(1, n + 1):
       result = result * i
   print(result)
   ```

   a) `10`  
   b) `4`  
   c) `120`  
   d) `24`  

   **Answer:** d) `24`  

   **Explanation:** This calculates `4!` = 1 × 2 × 3 × 4 = **24**. `range(1, n + 1)` gives multipliers 1 through 4 when `n` is 4.
