#### **Scene 1.1**

1. **What is printed by this code?**

   ```python
   scores = [10, 20, 30, 40]
   total = 0
   for score in scores:
       total = total + score
   print(total)
   ```

   a) `40`  
   b) `4`  
   c) `100`  
   d) `10`  

   **Answer:** c) `100`  

   **Explanation:** The loop visits every item and adds it to `total`. The running sum becomes 10, then 30, then 60, then 100.

2. **What order of values is printed by this code?**

   ```python
   vals = [5, 8, 11, 14]
   for i in range(len(vals) - 1, -1, -1):
       print(vals[i])
   ```

   a) `14 11 8 5`  
   b) `5 8 11 14`  
   c) `8 11 14`  
   d) `14 11 8`  

   **Answer:** a) `14 11 8 5`  

   **Explanation:** The `range` starts at the last valid index and steps by `-1`, so the loop walks the list from right to left and prints every item once.

3. **Which statement about lists is correct?**  
   a) `append()` replaces the first item and keeps the length same  
   b) Valid indexes on a 4-item list are only `1`, `2`, `3`, and `4`  
   c) Index assignment can replace one item without adding a new box  
   d) `len()` counts characters inside string items, not list items  

   **Answer:** c) Index assignment can replace one item without adding a new box  

   **Explanation:** Writing `items[i] = value` overwrites one existing position. `append()` grows the list. Indexes start at `0`, and `len()` counts items, not letters inside a string item.
