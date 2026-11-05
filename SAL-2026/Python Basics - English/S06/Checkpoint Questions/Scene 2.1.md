#### **Scene 2.1**

1. **What does this code print?**

   ```python
   profile = {"name": "Isha", "city": "Jaipur", "marks": 91}
   profile["city"] = "Indore"
   print(profile["city"])
   print(len(profile))
   ```

   a) `Jaipur` then `3`  
   b) `Indore` then `4`  
   c) `city` then `3`  
   d) `Indore` then `3`  

   **Answer:** d) `Indore` then `3`  

   **Explanation:** Updating an existing key replaces its value. The city becomes `Indore`, and the pair count stays `3` because no new key was added.

2. **How many lines does this loop print?**

   ```python
   bag = {"x": 1, "y": 2, "z": 3}
   for key in bag:
       print(key, bag[key])
   ```

   a) 3 lines, because the loop visits each key once  
   b) 6 lines, because keys and values print on separate lines  
   c) 2 lines, because `len(bag)` counts only unique numbers  
   d) 1 line, because only the first key is visited  

   **Answer:** a) 3 lines, because the loop visits each key once  

   **Explanation:** The dictionary has three pairs. Each round of the loop prints one key with its value, so three lines are printed.

3. **What is true about `len(report)` in this code?**

   ```python
   report = {
       "student": "Omar",
       "topics": ["lists", "sets", "maps"],
   }
   print(len(report))
   print(len(report["topics"]))
   ```

   a) Both prints show `5` because all items are counted together  
   b) The first print is `2` and the second print is `3`  
   c) The first print is `3` and the second print is `2`  
   d) Both prints show `2` because only keys are counted  

   **Answer:** b) The first print is `2` and the second print is `3`  

   **Explanation:** `len(report)` counts dictionary pairs (`2`). `len(report["topics"])` counts items inside the stored list (`3`).
