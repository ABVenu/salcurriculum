#### **Scene 1.1**

1. **What is the output of this code?**

   ```python
   protocols = ["HTTP", "TCP", "UDP"]
   for item in protocols:
       print(item[0], end="")
   ```

   a) `H T U`  
   b) `012`  
   c) `HTTP TCP UDP`  
   d) `HTU`

   **Answer:** d) `HTU`

   **Explanation:** The loop accesses each string in the list. `item[0]` returns the first character of each protocol name. With `end=""`, the output is printed on one line as `HTU`.

2. **What is printed by this code?**

   ```python
   nums = [5, 15, 25]
   for i in range(len(nums) - 1, -1, -1):
       print(nums[i], end=" ")
   ```

   a) `25 15 5`  
   b) `5 15 25`  
   c) `25 5 15`  
   d) `15 25 5`

   **Answer:** a) `25 15 5`

   **Explanation:** `range(len(nums) - 1, -1, -1)` starts at the last index and decrements by `1`. The values are printed from last to first.
