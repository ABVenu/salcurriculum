#### **Scene 2.1**

1. **What is the output of this code?**

   ```python
   for i in range(1, 3):
       for j in range(1, 5):
           if j == 3:
               break
           print(i, j)
   ```

   a) `(1, 1) (1, 2) (1, 3) (1, 4)`  
   b) `(1, 1) (1, 2) (2, 1) (2, 2)`  
   c) `(1, 1) (1, 2) (1, 3) (2, 1)`  
   d) `(1, 1) (2, 1) (3, 1) (4, 1)`  

   **Answer:** b) `(1, 1) (1, 2) (2, 1) (2, 2)`  

   **Explanation:** For each outer value, the inner loop prints when `j` is 1 and 2. At `j == 3`, `break` exits only the inner loop, so the outer loop still continues with `i = 2`.

2. **How many lines does this code print?**

   ```python
   for x in range(1, 4):
       for y in range(1, x + 1):
           print(x, y)
   ```

   a) 6 lines, since the inner loop runs 1, then 2, then 3 times  
   b) 9 lines, since both loops always run exactly three times  
   c) 4 lines, since `x + 1` is written as the inner stop value  
   d) 3 lines, since each outer value prints only one inner value  

   **Answer:** a) 6 lines, since the inner loop runs 1, then 2, then 3 times  

   **Explanation:** When `x` is 1, 2, and 3, the inner loop runs 1, 2, and 3 times. Total lines = 1 + 2 + 3 = 6. The inner stop depends on the current outer value.

3. **What happens if `break` is used inside the inner loop of a nested pair of loops?**  
   a) Both the inner loop and the outer loop stop at the same time  
   b) Only the outer loop stops, while the inner loop keeps running  
   c) Only the inner loop stops, while the outer loop may continue  
   d) The whole program ends, and no later code can run at all  

   **Answer:** c) Only the inner loop stops, while the outer loop may continue  

   **Explanation:** `break` and `continue` affect only the loop that directly contains them. In nested loops, an inner `break` leaves the inner loop, but the outer loop still moves to its next value unless separate logic stops it too.
