# **📌 Session Notes: Express Request Methods, CRUD Operations & Dynamic Routing**

#### [Live Coding Notes](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/0e357d1d-bf7a-4442-8802-984610a11c04/oUrufAgvByO3e1oy.zip)

---

## **1️⃣ Understanding the Request-Response Cycle**

Before diving into request methods and CRUD operations, let's revisit the **request-response cycle**:

1. **Client sends a request** – A user or API client (browser, Postman, mobile app) sends a request.
2. **Server processes the request** – The Express server handles the request, applies logic, and interacts with a database if needed.
3. **Server sends a response** – The server returns data, a success/error message, or a status code.

📌 **Example flow of a request**:

```plaintext
Client  --->  [HTTP Request]  --->  Server  --->  [Process Request]  --->  [Send Response]  --->  Client
```

## ![Request Response Cycle](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/9e50da94-c445-4522-a15e-a42407c79cee/pjdK1bz2KhXQCUIe.png)

## **2️⃣ Exploring HTTP Request Methods in Express**

Express provides built-in methods to handle different HTTP requests:

| **Method** | **Purpose**          | **Example Use Case**  |
| ---------- | -------------------- | --------------------- |
| `GET`      | Retrieve data        | Fetch a list of users |
| `POST`     | Create new data      | Add a new user        |
| `PUT`      | Update existing data | Modify user details   |
| `DELETE`   | Remove data          | Delete a user         |

📌 **Why are different HTTP methods needed?**

- They follow **RESTful API principles**, ensuring a clear structure.
- Each method serves a distinct purpose, reducing confusion.

✅ **Example: Handling different HTTP methods in Express**

```js
const express = require("express");
const app = express();

app.use(express.json()); // Middleware to parse JSON body

let users = [{ id: 1, name: "John Doe" }];

// GET request - Fetch all users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST request - Add a new user
app.post("/users", (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT request - Update a user
app.put("/users/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  if (!user) return res.status(404).send("User not found");

  user.name = req.body.name || user.name;
  res.json(user);
});

// DELETE request - Remove a user
app.delete("/users/:id", (req, res) => {
  users = users.filter((u) => u.id != req.params.id);
  res.send("User deleted successfully");
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

📌 **Key Takeaways:**

- `app.use(express.json())` is necessary to parse JSON request bodies.
- `req.params` retrieves dynamic values from the URL.
- `req.body` contains the data sent in `POST` and `PUT` requests.

---

## **3️⃣ Creating a Simple CRUD Operation in Express**

CRUD stands for **Create, Read, Update, Delete** – the four basic operations performed on a database.

| **Operation** | **HTTP Method** | **Endpoint** | **Description**     |
| ------------- | --------------- | ------------ | ------------------- |
| **Create**    | `POST`          | `/users`     | Add a new user      |
| **Read**      | `GET`           | `/users`     | Get all users       |
| **Update**    | `PUT`           | `/users/:id` | Modify user details |
| **Delete**    | `DELETE`        | `/users/:id` | Remove a user       |

📌 **How CRUD works in Express?**

- `POST` **creates** a new user.
- `GET` **retrieves** users from the database.
- `PUT` **updates** existing user data.
- `DELETE` **removes** a user.

---

## **4️⃣ Understanding Dynamic Routing in Express**

### **📌 Path Parameters (`req.params`)**

📌 **Definition:**  
Path parameters are used to create **dynamic routes** by capturing values from the URL.

📌 **Why needed?**

- To access specific resources, such as fetching user details by ID.
- Useful for CRUD operations that require identification (e.g., `/users/:id`).

✅ **Example: Fetching a user by ID**

```js
app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  if (!user) return res.status(404).send("User not found");
  res.json(user);
});
```

💡 **How it works:**

1. A request to `/users/2` will extract `2` as `req.params.id`.
2. The server searches for a user with ID `2` in the `users` array.
3. If found, it returns user details; otherwise, it sends a `404 Not Found` message.

---

### **📌 Query Parameters (`req.query`)**

📌 **Definition:**  
Query parameters allow sending additional information in a URL for **filtering, sorting, or searching**.

📌 **Why needed?**

- Used to refine search results (e.g., filtering users by name).
- Helps with pagination, sorting, and search queries.

✅ **Example: Searching users by name**

```js
app.get("/search", (req, res) => {
  const keyword = req.query.q;
  res.send(`Searching for: ${keyword}`);
});
```

💡 **How it works:**

1. A request to `/search?q=John` extracts `John` as `req.query.q`.
2. The server processes the query and returns relevant results.

📌 **Difference between Path Params and Query Params**  
| **Feature** | **Path Params (`req.params`)** | **Query Params (`req.query`)** |
|------------|------------------|----------------|
| **Usage** | Identify a specific resource | Modify/filter the request |
| **Format** | `/users/:id` (e.g., `/users/1`) | `/search?q=John` |
| **Required?** | Yes (part of the route) | No (optional) |
| **Best For** | CRUD operations | Filtering, sorting |

---

## **5️⃣ Response Methods: `res.send()` vs `res.json()`**

| **Method**   | **Usage**                                                        | **Example Output**               |
| ------------ | ---------------------------------------------------------------- | -------------------------------- |
| `res.send()` | Sends a response (string, object, buffer, etc.)                  | `res.send("Hello World")`        |
| `res.json()` | Sends JSON response (auto-sets `Content-Type: application/json`) | `res.json({ message: "Hello" })` |

📌 **Key Differences:**

- `res.send()` can return **any type of content** (HTML, plain text, JSON).
- `res.json()` strictly sends **JSON data**.

✅ **Example: Sending different response types**

```js
app.get("/send", (req, res) => {
  res.send("<h1>Welcome to My API</h1>"); // Sends HTML
});

app.get("/json", (req, res) => {
  res.json({ message: "Hello, this is JSON!" }); // Sends JSON
});
```

---

## **📌 Summary**

- **Explored Express request methods** (GET, POST, PUT, DELETE).
- **Implemented CRUD operations** to manage user data.
- **Used dynamic routing** with `req.params` (path parameters).
- **Used query parameters** (`req.query`) for filtering and searching.
- **Understood response methods (`res.send()` vs `res.json()`)**.
