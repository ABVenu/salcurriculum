#### **Scene 3.0**

1. **Which pair correctly matches mutability with the data structure?**  
   a) List — mutable; Tuple — immutable  
   b) Tuple — mutable; List — immutable  
   c) Set — immutable; String — mutable  
   d) String — mutable; Set — immutable  

   **Answer:** a) List — mutable; Tuple — immutable  

   **Explanation:** Mutable objects can be changed after creation (`list`, `set`, `dict`). Immutable objects cannot be modified in place (`str`, `tuple`).

2. **What is printed by this code?**

   ```python
   nums = {10, 20, 10, 30}
   print(len(nums))
   ```

   a) `4`  
   b) `2`  
   c) `3`  
   d) `1`  

   **Answer:** c) `3`  

   **Explanation:** A set stores unique values only. The duplicate `10` is removed, leaving `{10, 20, 30}`.

3. **A set `ids = {101, 102}` must add `103` and later attempt to remove `999`, which may not exist. Which calls are appropriate?**  
   a) `ids.append(103)` and `ids.discard(999)`  
   b) `ids.add(103)` and `ids.discard(999)`  
   c) `ids.add(103)` and `ids.remove(999)`  
   d) `ids.insert(103)` and `ids.pop(999)`  

   **Answer:** b) `ids.add(103)` and `ids.discard(999)`  

   **Explanation:** Sets use `add()` to insert one element. `discard()` removes an element if present and does not raise an error when the element is missing.

4. **Which statement about tuples is true?**  
   a) Tuples use `{}` and always allow duplicate keys  
   b) Tuples support `append()` just like lists do  
   c) Tuple items can be changed with `t[0] = 5` after creation  
   d) Tuples use `()` and cannot be changed by index assignment  

   **Answer:** d) Tuples use `()` and cannot be changed by index assignment  

   **Explanation:** Tuples are immutable ordered sequences. Indexing and slicing work, but assignment such as `t[0] = 5` raises `TypeError`.

