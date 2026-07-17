#### **Scene 2.0**

1. **When is a nested loop the better choice?**  
   a) When a program must store two different data types in one variable  
   b) When each outer-loop value needs a complete inner-loop full cycle  
   c) When a single loop condition is already enough to end the process  
   d) When the program should print only one line and then finish early  

   **Answer:** b) When each outer-loop value needs a complete inner-loop full cycle  

   **Explanation:** Nested loops handle two levels of repetition: for every outer value, the inner loop runs completely. A single condition, one print, or one variable type does not by itself require nesting.

2. **Which code correctly nests an inner `for` loop inside an outer `for` loop?**

   a)
   ```python
   for i in range(1, 3):
   for j in range(1, 4):
       print(i, j)
   ```

   b)
   ```python
   for i in range(1, 3):
       print(i)
   for j in range(1, 4):
       print(j)
   ```

   c)
   ```python
   for i in range(1, 3):
       for j in range(1, 4):
           print(i, j)
   ```

   d)
   ```python
   for i in range(1, 3):
       print(i)
       j = range(1, 4)
   ```

   **Answer:** c) The version where the second `for` is indented under the first `for`  

   **Explanation:** Nesting depends on indentation. The inner `for` must sit inside the outer loop body, and its own body must be indented one level deeper. Separate loops or assigning `range()` to a variable are not nested loops.

3. **What pairs are printed by this code?**

   ```python
   for i in range(1, 3):
       for j in range(0, 5, 2):
           print(i, j)
   ```

   a) `(1, 0) (1, 2) (1, 4) (2, 0) (2, 2) (2, 4)`  
   b) `(1, 0) (1, 2) (1, 4) (2, 0) (2, 2) (2, 5)`  
   c) `(1, 0) (1, 2) (1, 3) (2, 0) (2, 2) (2, 4)`  
   d) `(1, 1) (1, 2) (1, 4) (2, 0) (2, 2) (2, 4)`  

   **Answer:** a) `(1, 0) (1, 2) (1, 4) (2, 0) (2, 2) (2, 4)`  

   **Explanation:** Outer `range(1, 3)` gives 1 and 2. For each outer value, inner `range(0, 5, 2)` gives 0, 2, and 4 because the stop value 5 is excluded.

4. **How many times does `print(i, j)` run?**

   ```python
   for i in range(1, 4):
       for j in range(1, 3):
           print(i, j)
   ```

   a) 5 times, from adding the two stop values together  
   b) 9 times, from including both stop values in each range  
   c) 4 times, from using only the larger range for the count  
   d) 6 times, from 3 outer rounds each with 2 inner rounds  

   **Answer:** d) 6 times, from 3 outer rounds each with 2 inner rounds  

   **Explanation:** `range(1, 4)` has 3 values and `range(1, 3)` has 2 values. Total prints = 3 × 2 = 6.

5. **In nested loops that use `range(start, stop, step)`, what is true?**  
   a) Only the outer loop may use a step; the inner loop must step by 1  
   b) Outer and inner loops can each choose their own start, stop, step  
   c) Changing the inner step also forces the outer step to match it  
   d) A step works only when both loops use the exact same stop value  

   **Answer:** b) Outer and inner loops can each choose their own start, stop, step  

   **Explanation:** Each nesting level has independent control. Different starts, stops, and steps at each level create useful two-level patterns without rewriting the other loop.
