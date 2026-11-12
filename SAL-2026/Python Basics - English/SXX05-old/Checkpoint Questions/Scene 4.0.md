#### **Scene 4.0**

1. **What makes a dictionary different from a plain list?**  
   a) A dictionary stores values only as numbers, never as text  
   b) A dictionary stores labelled key–value pairs and each key appears once  
   c) A dictionary allows duplicate keys so the same name can map twice  
   d) A dictionary keeps items in random order and ignores every label

   **Answer:** b) A dictionary stores labelled key–value pairs and each key appears once

   **Explanation:** Dictionary values are accessed by key, not by position. Assigning to an existing key replaces the previous value.

2. **What is printed by this code?**

   ```python
   config = {"timeout": 30, "retry": 5}
   print(config["retry"])
   config["limit"] = 100
   print(config["limit"])
   ```

   a) `5` then `30`  
   b) `100` then `5`  
   c) `5` then `100`  
   d) `retry` then `limit`

   **Answer:** c) `5` then `100`

   **Explanation:** `config["retry"]` returns `5`. The assignment `config["limit"] = 100` adds a new key–value pair, and the second print outputs `100`.

3. **What is the output of this code?**

   ```python
   record = {
       "id": 101,
       "tags": ["api", "json", "rest"],
       "flags": [1, 0, 1],
   }
   print(len(record))
   print(len(record["tags"]))
   ```

   a) `2` then `3`  
   b) `9` then `3`  
   c) `3` then `9`  
   d) `3` then `3`

   **Answer:** d) `3` then `3`

   **Explanation:** `len(record)` counts key–value pairs. `len(record["tags"])` counts elements inside the list stored at key `"tags"`.

4. **What is printed after this code runs?**

   ```python
   config = {"host": "localhost", "port": 8080}
   print(config.get("debug"))
   print(config.get("debug", "disabled"))
   removed = config.pop("port")
   print(removed)
   ```

   a) `KeyError` then the program stops before the third line  
   b) `disabled` then `None` then `localhost`  
   c) `None` then `disabled` then `localhost`  
   d) `None` then `disabled` then `8080`

   **Answer:** d) `None` then `disabled` then `8080`

   **Explanation:** `get("debug")` returns `None` for a missing key. `get("debug", "disabled")` returns the default value. `pop("port")` removes the key and returns `8080`.
