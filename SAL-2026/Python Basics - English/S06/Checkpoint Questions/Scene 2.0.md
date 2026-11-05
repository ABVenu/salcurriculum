#### **Scene 2.0**

1. **What best describes a dictionary?**  
   a) An unordered bag that stores only unique numbers  
   b) A locked ordered pack that cannot change after creation  
   c) A collection of key–value pairs looked up by the key  
   d) A row of characters joined with the `+` operator  

   **Answer:** c) A collection of key–value pairs looked up by the key  

   **Explanation:** A dictionary stores labelled pairs. You read a value with `dictionary[key]`, not with a seat-number style index like `0` or `1`.

2. **What happens if the same key is written twice when creating a dictionary?**  
   a) Python keeps both values under that key at the same time  
   b) The latest value for that key wins, and length counts one pair  
   c) Python raises `KeyError` and refuses to create the dictionary  
   d) The first value stays forever and the second value is ignored  

   **Answer:** b) The latest value for that key wins, and length counts one pair  

   **Explanation:** Keys must be unique. If a key repeats during creation, the later value replaces the earlier one, so only one pair remains for that key.

3. **What does this code print?**

   ```python
   info = {"brand": "Nova", "year": 2024, "active": True}
   print(info["brand"])
   print(len(info))
   ```

   a) `Nova` then `3`  
   b) `brand` then `3`  
   c) `Nova` then `2024`  
   d) `True` then `3`  

   **Answer:** a) `Nova` then `3`  

   **Explanation:** `info["brand"]` reads the value stored under the key `"brand"`. `len()` counts pairs, so the length is `3`.

4. **After this code runs, what are `note["price"]` and `len(note)`?**

   ```python
   note = {"item": "ink", "price": 30}
   note["price"] = 35
   note["stock"] = 12
   ```

   a) `30` and `2`  
   b) `35` and `2`  
   c) `12` and `3`  
   d) `35` and `3`  

   **Answer:** d) `35` and `3`  

   **Explanation:** Assigning to an existing key replaces the value, so price becomes `35`. Assigning to a new key `"stock"` adds a pair, so `len(note)` becomes `3`.

5. **How do you visit every pair in a dictionary with a loop?**  
   a) Loop the keys, then read each value with `dictionary[key]`  
   b) Use `dictionary[0]`, then `dictionary[1]`, in a fixed index order  
   c) Call `append()` on each key before printing the matching value  
   d) Convert the dictionary to a set first, then print each index  

   **Answer:** a) Loop the keys, then read each value with `dictionary[key]`  

   **Explanation:** `for key in dictionary` gives each key. Use `dictionary[key]` to read the value for that key. Dictionaries are not read by numeric seat indexes.
