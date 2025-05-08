# **Session Notes: Express Router, Project Structuring (MVC) & Middlewares**

---
### [Live Coding Notes](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/e65deb6c-5bb8-4938-878a-1fad1aa4b0da/ouaUKUMNxovUnshN.zip)

## **Understanding Express Router**

Express Router allows you to **modularize route definitions** and keep your code clean and organized.

### **Why Use Routers?**

- Keeps routes modular and maintainable
- Prevents the main `index.js` file from becoming too cluttered
- Helps in **scaling large applications**

**Basic Usage of Router**

```js
// routes/userRoutes.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all users");
});

router.post("/", (req, res) => {
  res.send("Create a new user");
});

module.exports = router;
```

```js
// index.js
const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use("/users", userRoutes); // Mounting the router

app.listen(3000, () => console.log("Server running"));
```

**How It Works:**

- `/users` acts as a base route.
- Inside `userRoutes`, `/` becomes `/users/`.
- Clean separation of concerns between modules.

---

## **Project Structuring with MVC Pattern**

MVC stands for **Model-View-Controller** – a design pattern to organize code better.

### **What is MVC?**

| **Component**  | **Responsibility**          | **Example**                              |
| -------------- | --------------------------- | ---------------------------------------- |
| **Model**      | Data & DB logic             | Mongoose schemas                         |
| **View**       | UI layer                    | Not used in APIs (used in frontend apps) |
| **Controller** | Logic for handling requests | Express route handlers                   |

**Common Folder Structure:**

```
|- controllers
|   |- userController.js
|- models
|   |- userModel.js
|- routes
|   |- userRoutes.js
|- index.js
```

**How it fits together:**

```js
// controllers/userController.js
exports.getUsers = (req, res) => {
  res.send("Fetching users");
};
```

```js
// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { getUsers } = require("../controllers/userController");

router.get("/", getUsers);
module.exports = router;
```

**Benefits of MVC:**

- Clear separation of concerns
- Easy to debug and test
- Scalable for larger projects

---

## **Introduction to Middlewares in Express**

### **What is Middleware?**

A **middleware** is a function that runs **between the request and response cycle**.

**Why Use Middlewares?**

- For processing or validating incoming data
- Logging, authentication, error handling
- Reusing logic across routes

**Structure of Middleware**

```js
(req, res, next) => {
  // Do something
  next(); // Pass control to the next middleware/route
};
```

**Example: Logger Middleware**

```js
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(logger); // Applies to all routes
```

**Types of Middlewares:**

| **Type**          | **Use Case**                       |
| ----------------- | ---------------------------------- |
| Application-level | Applied globally using `app.use()` |
| Router-level      | Applied on specific routers        |
| Built-in          | Like `express.json()`              |
| Error-handling    | Catches and handles errors         |
| Third-party       | `cors`, `morgan`, `helmet`, etc.   |

**Using Built-in Middleware**

```js
app.use(express.json()); // Parses JSON body
```

**Using Router-level Middleware**

```js
router.use(authMiddleware); // Applies only to this router
```

---

## **Summary**

- **Express Router** helps break large applications into smaller route modules.
- **MVC Structure** promotes separation of logic and better maintainability.
- **Middlewares** enhance the request-response cycle with reusable logic.
- You can create **custom middlewares**, use **built-in** ones like `express.json()`, and **third-party** ones like `cors`.
