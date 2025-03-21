**Scene 1.0**

### **1. What is the purpose of the `package.json` file in a Node.js project?**

A) It stores JavaScript code for the project  
B) It defines metadata, dependencies, and scripts for the project  
C) It is used only for frontend development  
D) It replaces the need for `node_modules`

**Correct Answer:** **B** (It defines metadata, dependencies, and scripts for the project)

### **2. What happens when you run `npm install` without any package name?**

A) It installs npm globally  
B) It updates all globally installed packages  
C) It installs all dependencies listed in `package.json` into `node_modules`  
D) It removes `node_modules`

**Correct Answer:** **C** (It installs all dependencies listed in `package.json` into `node_modules`)

### **3. How do you install a package globally in npm?**

A) `npm install package-name`  
B) `npm install -g package-name`  
C) `npm install --global package-name`  
D) Both B and C

**Correct Answer:** **D** (Both `npm install -g package-name` and `npm install --global package-name`)

4. ### **What is the role of the `node_modules` folder?**
   A) It stores all locally installed dependencies of the project  
   B) It contains the `package.json` file  
   C) It is used to write custom modules for a Node.js app  
   D) It keeps a list of installed global npm packages

**Correct Answer:** **A** (It stores all locally installed dependencies of the project)

5. ### How does a `dependency` differ from a `package` in Node.js?

   A) A dependency is a required package that another package relies on, while a package is a bundle of JavaScript modules with metadata.
   B) A package can be installed globally, but a dependency must always be local.
   C) A package is always built-in to Node.js, but a dependency must be installed separately.
   D) A dependency must always be a library, whereas a package can be anything.

   ### Solution:

   **Option A:** A **dependency** is a package that another package relies on, while a **package** is a bundle of JavaScript modules with metadata.

---

**Scene 1.1**

1. ### **What command is used to initialize a new Node.js package with default settings?**
   A) `npm create package.json`  
   B) `npm init -y`  
   C) `npm start`  
   D) `npm generate`

**Correct Answer:** **B** (npm init -y)

2. ### **How can you list all globally installed npm packages?**
   A) `npm list`  
   B) `npm list -g`  
   C) `npm global list`  
   D) `npm show all`

**Correct Answer:** **B** (npm list -g)

3. ### **What happens when you install a package locally in a Node.js project?**
   A) The package is installed in the `node_modules` folder of the current project  
   B) The package is available for all Node.js projects on the system  
   C) The package is added globally in npm  
   D) The package is installed without affecting `package.json`

**Correct Answer:** **A** (The package is installed in the `node_modules` folder of the current project)

---

**Scene 2.0**


---

### **1. What is the primary purpose of a server in web development?**  
A) To store only frontend files  
B) To process client requests and send responses  
C) To generate frontend UI  
D) To run JavaScript code in the browser  

**Correct Answer:** **B** (To process client requests and send responses)  

---

### **2. In Express.js, what method is used to define a GET route?**  
A) `app.get()`  
B) `app.post()`  
C) `app.route()`  
D) `app.fetch()`  

**Correct Answer:** **A** (`app.get()`)  


3. ### **Which of the following best describes the difference between a URL and a specific URL?**  

A) A **URL** is a general format for accessing resources, while a **specific URL** points to an exact resource or endpoint.  

B) A **URL** is only used in frontend development, while a **specific URL** is used in backend APIs.  

C) A **URL** is the domain name, and a **specific URL** is only used for dynamic routes.  

D) A **URL** is only used for GET requests, while a **specific URL** can handle all HTTP methods.  

**Correct Answer:** **A**  
**Explanation:** A **URL** (Uniform Resource Locator) is a general format that defines web addresses (e.g., `https://example.com/api/users`), while a **specific URL** refers to a fully defined address pointing to a particular resource (e.g., `https://example.com/api/users/123`).  



4. ### **What is the difference between an endpoint and a route in an Express.js server?**  

A) A route is the full URL, and an endpoint is only the base domain  
B) A route is a specific **endpoint + HTTP method**, while an endpoint is a specific URL that responds to a request  
C) There is no difference; both terms mean the same thing  
D) An endpoint is only for GET requests, while a route can handle all HTTP methods  

✅ **Correct Answer:** **B**  
📝 **Explanation:**  
- A **route** in Express.js is defined by a **specific HTTP method (GET, POST, etc.) and an endpoint** (e.g., `app.get('/users')`).  
- An **endpoint** is just the **URL path** where the server listens for requests (e.g., `/users`).  


5. ### **What does the following Express route do?**  
```js
app.post('/login', (req, res) => {
    res.send('Login successful');
});
```
A) Defines a route that handles GET requests at `/login`  
B) Defines a route that handles POST requests at `/login`  
C) Defines a global middleware for authentication  
D) Sends an automatic response to all routes  

**Correct Answer:** **B** (Defines a route that handles POST requests at `/login`)  

---

**Scene 2.1**
Here are **three more MCQs** related to **server, route, Express, URL, and endpoint**:  

---

1. ### **In Express.js, what happens if a request is made to a route that is not defined?**  

A) The request is ignored, and nothing happens  
B) Express automatically redirects to the homepage (`/`)  
C) The request remains unhandled
D) The server crashes  

**Correct Answer:** **C** The request remains unhandled

---
2. ### **What is required to create a basic Express.js server?**  

A) Importing Express, creating an `app` instance, defining routes, and starting the server  
B) Installing a database and setting up authentication  
C) Writing only frontend HTML, CSS, and JavaScript files  
D) Running `express --start` in the terminal  

**Correct Answer:** **A** (Importing Express, creating an `app` instance, defining routes, and starting the server) 

3. ### **Which of the following best describes an Express.js route?**  

A) A function that handles a specific HTTP request type at a defined URL  
B) A database query that retrieves data from the backend  
C) A middleware function that runs before a request reaches the server  
D) A method used to connect Express to a frontend framework  

**Correct Answer:** **A** (A function that handles a specific HTTP request type at a defined URL)  
📝 **Explanation:** A **route** in Express.js defines how the server **responds to client requests** based on the HTTP method (GET, POST, etc.) and a URL pattern.  


---
**Scene 3.0**




### **1. Why is an API testing tool required?**  

A) To manually test APIs by writing code for each request  
B) To automate API requests, validate responses, and simulate real-world scenarios  
C) To replace backend development entirely  
D) To generate frontend UI designs  

**Correct Answer:** **B** (To automate API requests, validate responses, and simulate real-world scenarios)   **Explanation:** API testing tools help developers **test API endpoints, automate requests, and validate responses** efficiently without manually writing scripts for every test.  



### **2. What are the key benefits of using Postman for API testing?**  

A) It allows sending HTTP requests and validating responses without writing code  
B) It integrates with CI/CD pipelines for automated API testing  
C) It supports collections, pre-request scripts, and test automation  
D) All of the above  

**Correct Answer:** **D** (All of the above)  
**Explanation:** Postman provides a **user-friendly interface**, **automation capabilities**, and **integration with DevOps workflows**, making API testing efficient.  

---

### **3. Which of the following is a best practice when using Postman?**  

A) Hardcoding API keys in every request  
B) Organizing requests into collections
C) Sending API requests without checking response codes  
D) Only using Postman for manual testing without automation  

**Correct Answer:** **B** (Organizing requests into collections)  
**Explanation:** Using **collections**, **variables**, and **tests** improves API request organization, reusability, and automation in Postman.  

---

### **4. How does Postman act as a simulation of the frontend?**  

A) It allows developers to test API responses without needing an actual frontend application  
B) It automatically generates a full UI for APIs  
C) It converts API responses into frontend UI components  
D) It only works when connected to a frontend framework like React or Angular  

**Correct Answer:** **A** (It allows developers to test API responses without needing an actual frontend application)  
**Explanation:** Postman **simulates frontend behavior** by sending API requests and receiving responses just as a real frontend would, allowing testing without a full UI.  

---



 



