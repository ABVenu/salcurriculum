#### **Scene 2.1**

1. **What is printed by this code?**

   ```python
   first = "Hi"
   second = "Team"
   msg = first + " " + second
   print(msg)
   print(len(msg))
   ```

   a) `HiTeam` then `6`  
   b) `Hi Team` then `7`  
   c) `Hi Team` then `6`  
   d) `Hi  Team` then `8`  

   **Answer:** b) `Hi Team` then `7`  

   **Explanation:** `"Hi"` has 2 characters, the space has 1, and `"Team"` has 4. The joined string is `Hi Team` with length `7`.

2. **What does this code print?**

   ```python
   code = "PLANET"
   print(code[1:4])
   print(code[::-1])
   ```

   a) `PLA` then `TENALP`  
   b) `LAN` then `PLANET`  
   c) `LANE` then `TENALP`  
   d) `LAN` then `TENALP`  

   **Answer:** d) `LAN` then `TENALP`  

   **Explanation:** Slice `[1:4]` keeps indexes `1`, `2`, and `3` → `LAN`. Step `-1` builds a new reversed string: `TENALP`.

3. **Why does this line fail if it is uncommented?**

   ```python
   title = "draft"
   # title[0] = "D"
   ```

   a) Index `0` is never allowed on a string of length 5  
   b) `title[0]` can be read only after calling `len(title)` first  
   c) A string cannot be changed by assigning to one character index  
   d) The letter `"D"` must be stored in a list before it is used  

   **Answer:** c) A string cannot be changed by assigning to one character index  

   **Explanation:** Strings are immutable. Replacing one character in place raises `TypeError`. Build a new string with concatenation and slicing instead.
