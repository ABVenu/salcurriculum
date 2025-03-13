### **Assignment: Implementing Modular Functions in Node.js**  

#### **Objective:**  
Create multiple functions in separate module files and export them. These functions will then be imported into `index.js` and executed using the command `node index.js`.  

---

### **Instructions:**  

1. **Create a new folder for this assignment**  

2. **Create the following JavaScript files:**  

   - `sum.js` → Function to add two numbers  
   - `multiply.js` → Function to multiply two numbers  
   - `divide.js` → Function to divide two numbers  
   - `subtract.js` → Function to subtract two numbers  

3. **Implement each function in its respective file and export it.**  

4. **Create an `index.js` file** that imports all functions and executes them.  

5. **Run the program using Node.js**  
   ```sh
   node index.js
   ```

6. **Expected Output:**  
   ```
   Sum: 15  
   Multiply: 50  
   Divide: 2  
   Subtract: 5  
   ```

---

### **Edge Cases to Handle:**  
Ensure that the functions handle edge cases properly, such as:  
- **Dividing by zero:** Instead of crashing, the function should throw an appropriate error or return a meaningful message.  
- **Non-numeric inputs:** The functions should validate inputs and handle cases where a user provides strings or undefined values.  
- **Handling negative numbers:** Ensure calculations work correctly for negative values.  
- **Handling large numbers:** Consider how the functions handle very large numbers to avoid precision issues.  

For example, calling `divide(10, 0)` should not return `Infinity`, but instead, handle the error properly. Similarly, passing `"10"` instead of `10` should either convert it to a number or throw an error.  

---

### **Learning Outcomes:**  
- Understanding **module creation and exports** in Node.js.  
- Practicing **importing and using modules** in a main file.  
- Implementing **error handling** and **edge case management** in JavaScript functions.  
- Running JavaScript files in **Node.js**.  

---

