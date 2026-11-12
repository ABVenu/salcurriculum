#### **Scene 4.1**

1. **What happens when this code finishes?**

   ```python
   mapping = {"x": 1, "y": 2, "z": 3}
   last = mapping.popitem()
   mapping.clear()
   print(last)
   print(mapping)
   print(len(mapping))
   ```

   a) Prints `3` then `{'x': 1, 'y': 2}` then `1`  
   b) Prints `('z', 3)` then `{}` then `0`  
   c) Prints `('x', 1)` then `{'y': 2, 'z': 3}` then `2`  
   d) Raises an error because `clear()` cannot run after `popitem()`

   **Answer:** b) Prints `('z', 3)` then `{}` then `0`

   **Explanation:** In Python 3.7+, `popitem()` removes the most recently inserted pair, here `('z', 3)`. `clear()` removes all remaining pairs, so `len(mapping)` becomes `0`.

2. **A dictionary `config` has keys `"host"`, `"port"`, and `"timeout"`. Which calls return all keys and all values separately?**  
   a) `config.get()` and `config.pop()`  
   b) `len(config)` and `len(config.keys())`  
   c) `config.keys()` and `config.values()`  
   d) `config.items()` twice with the same arguments

   **Answer:** c) `config.keys()` and `config.values()`

   **Explanation:** `.keys()` provides a view of keys and `.values()` provides a view of values. Use `.items()` when key–value pairs are needed together.
