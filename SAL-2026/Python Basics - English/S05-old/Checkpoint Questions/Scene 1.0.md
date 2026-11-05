#### **Scene 1.0**

1. **Why are lists useful in Python?**  
   a) They convert every value into a string before storing it  
   b) They store many related values together in one ordered container  
   c) They allow only one data type per list and block mixed values  
   d) They automatically sort items from smallest to largest on creation  

   **Answer:** b) They store many related values together in one ordered container  

   **Explanation:** A list is an ordered, mutable sequence. One variable can hold multiple values and support indexing, iteration, and update methods such as `append()`.

2. **What is printed by this code?**

   ```python
   ports = [8080, 443, 22]
   print(ports[1])
   ```

   a) `8080`  
   b) `22`  
   c) `1`  
   d) `443`  

   **Answer:** d) `443`  

   **Explanation:** List indexing starts at `0`. Index `1` refers to the second element, which is `443`.

3. **What is the output of this code?**

   ```python
   data = ["user_01", 42, True, 3.14]
   print(len(data))
   ```

   a) `4`  
   b) `3.14`  
   c) `42`  
   d) `3`  

   **Answer:** a) `4`  

   **Explanation:** A list may contain mixed types. `len()` returns the number of elements in the list, not the size of an individual value.

4. **What value does this code print?**

   ```python
   values = [10, 20, 30, 40]
   print(values[-1])
   ```

   a) `10`  
   b) `20`  
   c) `40`  
   d) `-1`  

   **Answer:** c) `40`  

   **Explanation:** Negative indexing counts from the right. Index `-1` always refers to the last element in the list.

5. **After this code runs, how many items are in `buffer`?**

   ```python
   buffer = [0]
   buffer.append(1)
   buffer.insert(0, -1)
   buffer.extend([2, 3])
   ```

   a) `3`  
   b) `5`  
   c) `2`  
   d) `4`  

   **Answer:** b) `5`  

   **Explanation:** `append(1)` adds one element at the end. `insert(0, -1)` places `-1` at the front. `extend([2, 3])` adds two more elements. The final length is `5`.
