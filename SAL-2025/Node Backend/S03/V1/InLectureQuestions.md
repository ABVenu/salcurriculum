1. **Which Express.js response method is used to send a JSON response?**  
   a) `res.send()`  
   b) `res.write()`  
   c) `res.json()`  
   d) `res.end()`  
   **Answer:** c) `res.json()`  
---

2. **What is the main difference between `req.query` and `req.params` in Express.js?**  
   a) `req.query` is used for URL parameters, and `req.params` is used for query strings.  
   b) `req.query` is used for query strings, and `req.params` is used for route parameters.  
   c) `req.query` is only available in POST requests.  
   d) `req.params` is used for headers, while `req.query` is for cookies.  
   **Answer:** b) 
---
3. ### **L1: System Utility API**  

    #### **Objective:**  
    Create an **Express.js** application that performs system-related operations such as reading files and retrieving system details.

    #### **Problem Statement:**  

    1. Initialize a new **Node.js** project and install **Express.js**.  
    2. Set up an **Express server** in `server.js`.  
    3. Implement the following endpoints under `/system`:  
      - **`GET /system/read?file=<filename>`**  
        - Reads the contents of a file and returns it as a response.  
        - If the file does not exist, return a **"File not found"** response.  
      - **`GET /system/details`**  
        - Returns **system-related information** in JSON format, including:  
          - Free memory  
          - Used memory  
          - Stack size  
          - Number of processors  
          - CPU architecture  
        *(Hint: Use Node.js **OS module** to fetch system details.)*  
    4. Implement a **Health Check Route** in `server.js`:  
      - **`GET /healthcheck`** → Responds with `"This is health check route"`.  
    5. Handle any **undefined routes** with a `404 Not Found` message.  

    ---

    ### **Expected Output Examples:**  

    - **GET /system/read?file=test.txt** (If the file exists)  
      ```json
      { "content": "This is a sample file content." }
      ```

    - **GET /system/read?file=unknown.txt** (If the file does not exist)  
      ```json
      { "error": "File not found" }
      ```

    - **GET /system/details** (System information)  
      ```json
      {
        "freeMemory": "4.5 GB",
        "usedMemory": "3.2 GB",
        "stackSize": "512 MB",
        "numProcessors": 8,
        "cpuArchitecture": "x64"
      }
      ```

    - **GET /healthcheck**  
      ```json
      { "message": "This is health check route" }
      ```

    - **Visiting any undefined route should return:**  
      ```json
      { "error": "404 Not Found" }
      ```

    ---

    ### **Special Instructions**  
    - Use the **OS module** to fetch system details.  
    - Implement **error handling** properly.  
    - Ensure **clean code structuring** (separating controllers and routes).  
    - **Write at least one test case** for each endpoint.  

    ---

    ### **Other Instructions**  
    - Send appropriate **HTTP status codes** along with responses.  
    - Maintain **clean coding practices**.  

    ---

    ### **Submission Guidelines**  
    - Submit a **Masai GitHub repository** after completing the code.  
    - Provide a **README** with setup instructions.