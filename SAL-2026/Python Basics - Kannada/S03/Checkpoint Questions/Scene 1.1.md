#### **Scene 1.1**

1. **What is the output of this code?**

   ```python
   count = 1
   while count <= 3:
       print(count)
       count = count + 1
   ```

   a) `1`  
   b) `1 2 3`  
   c) `1 2`  
   d) `2 3 4`  

   **Answer:** b) `1 2 3`  

   **Explanation:** This shows **start** (`count = 1`), **stop** (`count <= 3`), and **update** (`count = count + 1`) working together. Each round prints the current `count`, then adds 1 until the condition becomes `False`.

2. **A student saves ₹500 every month starting from ₹0. The loop runs `while balance < 1000` and adds ₹500 each time. How many times does the loop body run?**  
   a) 2  
   b) 1  
   c) 3  
   d) 4  

   **Answer:** a) 2  

   **Explanation:** After month 1, balance is 500 (`500 < 1000` is still `True`). After month 2, balance is 1000 (`1000 < 1000` is `False`). The loop runs **twice**.

3. **What happens when this code is run?**

   ```python
   countdown = 5
   while countdown > 0:
       print(countdown)
       countdown = countdown + 1
   ```

   a) Prints `5`, then `4`, then `3`, then `2`, then `1`, and the loop ends cleanly  
   b) Shows `5` only one time and then stops  
   c) Raises a syntax error before any output appears  
   d) Keeps running because `countdown` never reaches zero  

   **Answer:** d) Keeps running because `countdown` never reaches zero  

   **Explanation:** The condition expects `countdown` to **decrease** toward 0, but `+ 1` makes it grow — 6, 7, 8… so `countdown > 0` stays `True` forever.
