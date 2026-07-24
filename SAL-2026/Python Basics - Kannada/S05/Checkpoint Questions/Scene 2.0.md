#### **Scene 2.0**

1. **Which statement best describes a string in Python?**  
   a) A mutable list of numbers stored inside square brackets  
   b) A dictionary that maps each letter to a numeric code  
   c) An immutable sequence of characters enclosed in quotes  
   d) A set of unique characters that cannot contain spaces  

   **Answer:** c) An immutable sequence of characters enclosed in quotes  

   **Explanation:** A string is an ordered character sequence. It supports indexing and slicing, but individual characters cannot be modified in place.

2. **What characters are printed by this code?**

   ```python
   s = "0123456789"
   for i in range(0, len(s), 2):
       print(s[i], end="")
   ```

   a) `02468`  
   b) `13579`  
   c) `0123456789`  
   d) `01234`  

   **Answer:** a) `02468`  

   **Explanation:** `range(0, len(s), 2)` selects even indexes: `0`, `2`, `4`, `6`, and `8`. The corresponding characters are `0`, `2`, `4`, `6`, and `8`.

3. **What happens if you run this line after `text = "debug"`?**

   ```python
   text[0] = "D"
   ```

   a) The string becomes `"Debug"` with only the first character changed  
   b) Python creates a copy and leaves the original string unchanged  
   c) The whole variable is deleted and must be recreated manually  
   d) Python raises a `TypeError` because strings are immutable  

   **Answer:** d) Python raises a `TypeError` because strings are immutable  

   **Explanation:** Item assignment on a string is not allowed. To change the value, create a new string such as `"D" + text[1:]`.

4. **What is the output of this code?**

   ```python
   s = "ABCDEFGHIJ"
   print(s[6:])
   ```

   a) `ABCDEF`  
   b) `GHIJ`  
   c) `EFGHIJ`  
   d) `GHIJGHIJ`  

   **Answer:** b) `GHIJ`  

   **Explanation:** `s[6:]` returns the substring from index `6` through the end of the string. Indexes `6` to `9` form `"GHIJ"`.

5. **What is printed by this code?**

   ```python
   line = "error code"
   print(line.title())
   print(line.islower())
   ```

   a) `ERROR CODE` then `False`  
   b) `error code` then `True`  
   c) `Error Code` then `True`  
   d) `Error code` then `False`  

   **Answer:** c) `Error Code` then `True`  

   **Explanation:** `title()` returns a new capitalised string. The original `line` is unchanged, so `islower()` still evaluates to `True`.
