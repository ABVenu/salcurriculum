#### **Scene 3.1**

1. **What is printed by this code?**

   ```python
   data = [1, 2, 1, 3, 2]
   unique = set(data)
   print(len(unique))
   ```

   a) `5`  
   b) `2`  
   c) `4`  
   d) `3`  

   **Answer:** d) `3`  

   **Explanation:** Converting a list to a set removes duplicate values. The unique elements are `1`, `2`, and `3`.

2. **A program stores a fixed `(x, y, z)` coordinate that must not change after creation. Which data structure is most appropriate?**  
   a) A list, because `append()` allows easy updates  
   b) A set, because it automatically removes duplicate coordinates  
   c) A tuple, because it is immutable and preserves the fixed values  
   d) A string, because numeric coordinates cannot be stored otherwise  

   **Answer:** c) A tuple, because it is immutable and preserves the fixed values  

   **Explanation:** Tuples protect fixed ordered data from accidental modification. Lists and sets are mutable and better suited to changing collections.


