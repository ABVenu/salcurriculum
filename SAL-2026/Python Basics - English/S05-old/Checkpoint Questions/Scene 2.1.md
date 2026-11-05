#### **Scene 2.1**

1. **What is the output of this code?**

   ```python
   s = "0123456789"
   print(s[::-1])
   ```

   a) `0123456789`  
   b) `9876543210`  
   c) `02468`  
   d) `987654321`  

   **Answer:** b) `9876543210`  

   **Explanation:** A slice with step `-1` reverses the entire string from the last character to the first.

2. **Which expression correctly concatenates two string variables `part1` and `part2`?**  
   a) `result = part1 + part2`  
   b) `result = part1 . part2`  
   c) `result = part1 & part2`  
   d) `result = join(part1, part2)` without calling it as a string method  

   **Answer:** a) `result = part1 + part2`  

   **Explanation:** The `+` operator joins strings and produces a new string object. A separator can be added explicitly, such as `part1 + "_" + part2`.

3. **What is printed by this code?**

   ```python
   a = "ACTIVE"
   b = "Active"
   print(a.isupper())
   print(b.isupper())
   print(b.capitalize())
   ```

   a) `True` then `True` then `ACTIVE`  
   b) `False` then `False` then `Active`  
   c) `True` then `False` then `Active`  
   d) `False` then `True` then `active`  

   **Answer:** c) `True` then `False` then `Active`  

   **Explanation:** `"ACTIVE".isupper()` is `True`. `"Active".isupper()` is `False` because the string contains mixed case. `"Active".capitalize()` returns `"Active"`.
