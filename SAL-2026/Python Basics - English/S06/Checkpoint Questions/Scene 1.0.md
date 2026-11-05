#### **Scene 1.0**

1. **Why choose a set instead of a list?**  
   a) A set keeps values in fixed left-to-right order forever  
   b) A set stores each value only once and drops duplicates  
   c) A set lets you read any item with an index such as `[0]`  
   d) A set grows only with `append()` and never with `add()`  

   **Answer:** b) A set stores each value only once and drops duplicates  

   **Explanation:** A set is an unordered collection of unique values. Repeats are ignored. Sets do not support indexing like a list.

2. **What is `len(tags)` after this code runs?**

   ```python
   tags = {"math", "science", "math", "art"}
   print(len(tags))
   ```

   a) `4`  
   b) `2`  
   c) `3`  
   d) `1`  

   **Answer:** c) `3`  

   **Explanation:** The second `"math"` is ignored. The set keeps three unique values: math, science, and art.

3. **What is `len(ids)` after both `add()` calls?**

   ```python
   ids = {11, 12}
   ids.add(13)
   ids.add(12)
   print(len(ids))
   ```

   a) `4`  
   b) `3`  
   c) `2`  
   d) `13`  

   **Answer:** b) `3`  

   **Explanation:** `add(13)` inserts a new value, so the set grows to 3. `add(12)` does nothing extra because `12` is already present.

4. **What best describes a tuple?**  
   a) An unordered bag that automatically removes duplicate values  
   b) A labelled lookup table where each key maps to one value  
   c) A mutable row that grows when you call `append()`  
   d) An ordered pack of values that stays fixed after creation  

   **Answer:** d) An ordered pack of values that stays fixed after creation  

   **Explanation:** A tuple is written with `()`. You can read items by index, but you cannot rewrite an item or use `append()` on it.

5. **What does this code print?**

   ```python
   coord = (3, 8, 15)
   print(coord[0])
   print(coord[-1])
   print(len(coord))
   ```

   a) `3` then `15` then `3`  
   b) `3` then `8` then `3`  
   c) `8` then `15` then `3`  
   d) `3` then `15` then `15`  

   **Answer:** a) `3` then `15` then `3`  

   **Explanation:** Index `0` is the first value `3`. Index `-1` is the last value `15`. `len()` counts the three items in the tuple.
