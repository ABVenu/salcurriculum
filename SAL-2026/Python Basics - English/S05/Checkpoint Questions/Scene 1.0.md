#### **Scene 1.0**

1. **What best describes a list in Python?**  
   a) A locked pack of characters that cannot grow after creation  
   b) A single value that must always stay as a whole number  
   c) An unordered bag that automatically drops every duplicate  
   d) An ordered row of values you can grow and read by index  

   **Answer:** d) An ordered row of values you can grow and read by index  

   **Explanation:** A list keeps items in order inside `[]`. You can read any item by its index and add one more item later with `append()`.

2. **What is printed by this code?**

   ```python
   colors = ["cyan", "magenta", "yellow", "black"]
   print(colors[2])
   ```

   a) `cyan`  
   b) `yellow`  
   c) `magenta`  
   d) `black`  

   **Answer:** b) `yellow`  

   **Explanation:** Indexing starts at `0`. Index `0` is cyan, `1` is magenta, and `2` is yellow.

3. **What value does this code print?**

   ```python
   temps = [21, 24, 19, 27]
   print(temps[-2])
   ```

   a) `19`  
   b) `27`  
   c) `21`  
   d) `24`  

   **Answer:** a) `19`  

   **Explanation:** Negative indexes count from the right. `-1` is the last item (`27`), so `-2` is the second-last item (`19`).

4. **What is the output of this code?**

   ```python
   record = ["Kabir", 16, True, 8.5]
   print(len(record))
   ```

   a) `8.5`  
   b) `5`  
   c) `4`  
   d) `16`  

   **Answer:** c) `4`  

   **Explanation:** A list can store mixed types. `len()` counts how many items are in the list, not letters inside `"Kabir"` or the size of one number.

5. **What does this code print?**

   ```python
   kit = ["brush", "paint"]
   kit.append("canvas")
   print(len(kit))
   print(kit[-1])
   ```

   a) `2` then `paint`  
   b) `3` then `canvas`  
   c) `3` then `brush`  
   d) `2` then `canvas`  

   **Answer:** b) `3` then `canvas`  

   **Explanation:** `append()` adds one item at the end. The list grows to 3 items, and `-1` reads the new last item, `"canvas"`.
