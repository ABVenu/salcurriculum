#### **Scene 1.1**

1. **What does this code print?**

   ```python
   raw = [5, 7, 5, 9, 7]
   unique_vals = set(raw)
   print(len(unique_vals))
   ```

   a) `5`  
   b) `7`  
   c) `2`  
   d) `3`  

   **Answer:** d) `3`  

   **Explanation:** Converting the list to a set drops the duplicate `5` and `7`. The unique values are `5`, `7`, and `9`, so the length is `3`.

2. **What is printed by this code?**

   ```python
   directions = ["north", "south", "east"]
   locked = tuple(directions)
   print(locked[1])
   ```

   a) `south`  
   b) `north`  
   c) `east`  
   d) `directions`  

   **Answer:** a) `south`  

   **Explanation:** `tuple()` locks the current list values into a tuple. Indexing still starts at `0`, so index `1` is `"south"`.

3. **Which statement is correct?**  
   a) Empty braces `{}` create an empty set, not a dictionary  
   b) Writing `pack[0] = 9` is allowed on a tuple of three items  
   c) `set()` is the correct way to start an empty set  
   d) A set supports `pack[0]` the same way a list does  

   **Answer:** c) `set()` is the correct way to start an empty set  

   **Explanation:** `{}` creates an empty dictionary. Use `set()` for an empty set. Sets have no index, and tuples cannot be rewritten by index assignment.
