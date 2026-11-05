### **Session Notes: Package Manager, npm, and Express**
### [Live Coding Notes](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/742a4ba5-f50e-4503-8fe4-4f00a919518f/gadIzswBux3mHWSM.zip)

### **Learning Objectives**

By the end of this session, learners will:

- Understand **what a package manager is** and why it is needed.
- Learn about **npm (Node Package Manager)** and its role in managing dependencies.
- Initialize a Node.js project using **`npm init -y`**.
- Understand the purpose and importance of **`package.json`**.
- Learn about **`package-lock.json`** and **`node_modules`**, and their significance.
- Understand **what Express.js is**, why it is used, and how it simplifies backend development.
- Learn key Express concepts: **Port, Request (`req`), Response (`res`), Route, and Endpoint**.
- Create a **basic Express server** with a simple GET route.

---

## **What is a Package Manager?**

A **package manager** is a tool that helps developers **install, update, manage, and remove software libraries (packages)** in a project. These packages contain pre-written code that simplifies development by avoiding the need to write everything from scratch.

### **Why is a Package Manager Needed?**

- **Efficient Dependency Management** – Automates package installation and updates.
- **Version Control** – Ensures consistency across environments.
- **Fast & Easy Setup** – Install all dependencies with a single command.

### **Examples of Package Managers**

| **Language**         | **Package Manager**                  |
| -------------------- | ------------------------------------ |
| JavaScript (Node.js) | **npm (Node Package Manager), Yarn** |
| Python               | pip                                  |
| Java                 | Maven, Gradle                        |
| PHP                  | Composer                             |

---

## **What is npm (Node Package Manager)?**

npm (**Node Package Manager**) is the default package manager for Node.js. It allows developers to easily install and manage JavaScript libraries in their projects.

### **Features of npm**

- **Manages Dependencies** – Install, update, and remove libraries.
- **Provides Access to Open-Source Packages** – Thousands of libraries are available via `npm`.
- **Handles Versioning** – Prevents compatibility issues between different package versions.

### **Check npm Version**

To check if npm is installed, run:

```sh
npm -v
```

If npm is installed, this command will return a version number (e.g., `9.0.0`).

---

## **Basic npm Commands**

| **Command**                | **Purpose**                                                          |
| -------------------------- | -------------------------------------------------------------------- |
| `npm init -y`              | Initialize a Node.js project with default settings (`package.json`). |
| `npm install <package>`    | Install a package (e.g., `npm install express`).                     |
| `npm install <package> -g` | Install a package globally (e.g., `npm install nodemon -g`).         |
| `npm uninstall <package>`  | Remove a package (e.g., `npm uninstall express`).                    |
| `npm list`                 | List installed dependencies.                                         |
| `npm update <package>`     | Update a package to the latest version.                              |

---

## **Project Initialization (`npm init -y`)**

To start a new Node.js project, initialize npm, which creates a configuration file (`package.json`) for managing project dependencies.

### **Initialize a Node.js Project**

```sh
npm init -y
```

This command generates a `package.json` file with default settings.

---

## ** What is `package.json`? How Important is It?**

**`package.json`** is a configuration file that contains information about a Node.js project, including:

- **Project Metadata** (name, version, description).
- **Dependencies** (external libraries required for the project).
- **Scripts** (commands for running, testing, and building the project).

### **Example `package.json` File**

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "A sample Node.js project",
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

### **Why is `package.json` Important?**

- Defines **all project dependencies**, ensuring consistency.
- Helps developers easily install all dependencies using `npm install`.
- Allows **easy project sharing and collaboration**.

---

## **What is `package-lock.json`, `node_modules`?**

### **1. `package-lock.json`**

- Stores the **exact versions** of installed dependencies.
- Ensures that all developers get the same dependency versions.

  **Why is it needed?**

- Prevents version mismatches across environments.
- Ensures stability in production deployments.

### **2. `node_modules` Folder**

- Stores all installed libraries and their dependencies.
- Contains **compiled and executable** versions of the installed packages.

⚠️ **Important:**

- `node_modules` can be **very large** and should not be uploaded to GitHub.
- Developers use **`.gitignore`** to exclude `node_modules` from version control.

---

#### Using the first external modules

```javascript
/// npm init -y  ---> project initialization
/// npm i is-even ---> install is-even
// import the external module 
var isEven = require("is-even");

// use the external module
console.log(isEven(0));
//=> true
console.log(isEven("1"));
//=> false
console.log(isEven(2));
//=> true
console.log(isEven("3"));
//=> false
```

---

## **What is Express.js? Why is It Needed?**

**Express.js** is a **minimal and flexible web framework** for Node.js that simplifies server and API development.

### **Why Use Express?**

| **Feature**            | **Benefit**                                                     |
| ---------------------- | --------------------------------------------------------------- |
| **Simple Routing**     | Easily handle different HTTP requests (GET, POST, PUT, DELETE). |
| **Middleware Support** | Process requests before reaching the final route handler.       |
| **Performance**        | Lightweight and fast.                                           |
| **Easy Integration**   | Works well with databases like MongoDB and PostgreSQL.          |

### **Installing Express**

```sh
npm install express
```

---

## **Key Express Concepts**

| **Term**             | **Description**                                                  |
| -------------------- | ---------------------------------------------------------------- |
| **Port**             | A communication channel for a server (e.g., `localhost:3000`).   |
| **Request (`req`)**  | Data sent by the client (e.g., query parameters, form data).     |
| **Response (`res`)** | Data sent back to the client (e.g., JSON, HTML, error messages). |
| **Route**            | A defined URL path that triggers a function.                     |
| **Endpoint**         | A specific route that provides a response to the client request. |

### **Example:**

1. **Route:** `https://api.example.com/users`
2. **Endpoint with query param:** `https://api.example.com/users?id=123`

---

## **Creating a Basic Express Server**

### **Step 1: Create a new `index.js` file**

```js
const express = require("express"); // Import express
const app = express(); // Initialize an express app

// Define a basic GET route
app.get("/", (req, res) => {
  res.send("Welcome to my Express server!");
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

### **Step 2: Run the Server**

```sh
node index.js
```

**Output in Terminal:**

```
Server running on http://localhost:3000
```

**Test in Browser/Postman:**

- Open `http://localhost:3000/` → **Response:** "Welcome to my Express server!"

---

## **Using Nodemon for Auto Restart**

When using `node index.js`, any code changes require manually stopping and restarting the server. **Nodemon** automatically restarts the server when a file changes.

### **Install Nodemon Globally**

```sh
npm install -g nodemon
```

### **Run the Server with Nodemon**

```sh
nodemon index.js
```

**Benefits of Nodemon**

- **Auto-restarts** the server on code changes.
- Saves time during development.

---

## **Conclusion**

- **Package Managers** like npm simplify dependency management.
- **npm** allows installing, updating, and managing libraries.
- **`package.json`** stores project dependencies and metadata.
- **`package-lock.json`** ensures consistent dependency versions.
- **Express.js** makes server-side development easier.
- **A basic Express server** can handle GET requests on a specific port.
- **Nodemon** helps auto-restart the server on code changes.
