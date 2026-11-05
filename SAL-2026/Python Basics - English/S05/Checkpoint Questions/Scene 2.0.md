#### **Scene 2.0**

1. **What best describes a string in Python?**  
   a) An ordered sequence of characters that cannot be edited in place  
   b) A numbered row of values that grows with `append()`  
   c) An unordered bag that keeps only unique whole words  
   d) A pair of labels that map each key to one stored value  

   **Answer:** a) An ordered sequence of characters that cannot be edited in place  

   **Explanation:** A string is text in quotes. Every character has an index, but you cannot replace one character inside the existing string. To change text, you build a new string.

2. **What is printed by this code?**

   ```python
   text = "ORANGE"
   print(text[0])
   print(text[-1])
   print(len(text))
   ```

   a) `O` then `A` then `5`  
   b) `R` then `E` then `6`  
   c) `O` then `G` then `6`  
   d) `O` then `E` then `6`  

   **Answer:** d) `O` then `E` then `6`  

   **Explanation:** Index `0` is the first character `O`. Index `-1` is the last character `E`. `len()` counts all six characters.

3. **What does this code print?**

   ```python
   word = "CLOUD"
   for i in range(0, len(word), 2):
       print(word[i])
   ```

   a) `C L O U D`  
   b) `C O D`  
   c) `L U`  
   d) `C L O`  

   **Answer:** b) `C O D`  

   **Explanation:** `range(0, len(word), 2)` visits only even indexes: `0`, `2`, and `4`. Those characters are `C`, `O`, and `D`.

4. **Which line correctly joins two words with a space between them?**  
   a) `msg = "Hi" , "Team"`  
   b) `msg = "Hi" & " " & "Team"`  
   c) `msg = "Hi" + " " + "Team"`  
   d) `msg = "Hi".append("Team")`  

   **Answer:** c) `msg = "Hi" + " " + "Team"`  

   **Explanation:** The `+` operator concatenates strings into a new string. A space must be joined on purpose, or the words stick together.

5. **What is the output of this slice?**

   ```python
   label = "Notebook"
   print(label[0:4])
   ```

   a) `Note`  
   b) `Note b`  
   c) `Noteb`  
   d) `book`  

   **Answer:** a) `Note`  

   **Explanation:** In a slice, `start` is included and `stop` is excluded. Indexes `0` to `3` spell `Note`.
