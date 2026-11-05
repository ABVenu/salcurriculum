
# 🧪 Backend Testing & API Documentation – Student Notes

---

## 📌 What You’ll Learn

* Why testing is important in backend apps
* Types of testing: unit, integration, etc.
* How to write basic tests using **Jest**
* How to test APIs using **Supertest**
* How to test **protected routes** using **JWT**
* How to generate **test reports**
* Why API documentation matters & how to write it using **Swagger**

---

## 🔍 1. Testing Basics

### ✅ What is Testing?

Testing is the process of checking if your code behaves the way it should. It helps **catch bugs early**, improve **code quality**, and build **confidence** before deploying.

### 🛠️ Why is Backend Testing Important?

| ✅ Benefit           | 🧠 Why It Matters                            |
| ------------------- | -------------------------------------------- |
| **Data Integrity**  | Make sure DB operations work as expected     |
| **API Validations** | Check if routes return correct responses     |
| **Security**        | Test protected endpoints, tokens, validation |
| **Collaboration**   | Avoid breaking others' code while updating   |
| **Scalability**     | Automation makes testing faster & reliable   |

> Think of it like **testing a parachute before skydiving** – you can’t take chances!

![Software Dev Flow](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/797e2699-4688-4fd9-874e-e0493fec2515/LbRvi00D0ushqQRB.png)

---

## 📂 2. Types of Testing

### 🔎 Based on Scope

| Type            | What it Tests                     | Example                             |
| --------------- | --------------------------------- | ----------------------------------- |
| **Unit Test**   | Individual functions              | `sum(a, b)` returns correct result  |
| **Integration** | Multiple modules working together | Register API + DB write             |
| **End-to-End**  | Entire user flow                  | Register → Login → Access Dashboard |

### 🎯 Based on Intent

| Type           | Why We Test                          | Example                           |
| -------------- | ------------------------------------ | --------------------------------- |
| **Functional** | Check if it works correctly          | `POST /login` returns token       |
| **Negative**   | Handle invalid input                 | Invalid password returns 401      |
| **Regression** | Make sure old features still work    | Old APIs working after changes    |
| **Smoke**      | Major functions work post-deployment | App boots and `/api/status` works |

---

## 🧪 3. Writing Tests using Jest

### 🧰 Install Jest

```bash
npm install --save-dev jest
```

In your `package.json`:

```json
"scripts": {
  "test": "jest"
}
```

### ✨ Sample Unit Test

```js
// utils/sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// utils/sum.test.js
const sum = require('./sum');
test("adds 2 + 3 to equal 5", () => {
  expect(sum(2, 3)).toBe(5);
});
```

### 💡 Jest Keywords

| Term          | What it Does               |
| ------------- | -------------------------- |
| `test()`      | Defines a single test case |
| `expect()`    | Used to write assertions   |
| `toBe()`      | Checks exact match         |
| `describe()`  | Groups multiple tests      |
| `beforeAll()` | Setup before tests run     |
| `afterAll()`  | Clean up after tests       |

---

## 🌐 4. API Testing with Supertest

### ✅ Setup

```bash
npm install --save-dev supertest
```

### 🔄 Sample Express Route (for testing)

```js
// routes/user.js
app.post('/api/register', async (req, res) => {
  // assume validation & DB save here
  res.status(201).json({ message: "User created" });
});
```

### 🧪 Test with Supertest

```js
const request = require("supertest");
const app = require("../app");

describe("POST /api/register", () => {
  it("should create a new user", async () => {
    const res = await request(app)
      .post("/api/register")
      .send({ name: "John", email: "john@test.com", password: "123456" });

    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe("User created");
  });
});
```

---

## 🔐 5. Testing Protected Routes with JWT

### 🔑 Example Protected Route

```js
// middleware/auth.js
const jwt = require("jsonwebtoken");
module.exports = function (req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(403).json({ error: "Invalid token" });
  }
};
```

```js
// routes/todos.js
app.get("/api/todos", authMiddleware, (req, res) => {
  res.json([{ id: 1, title: "Learn Testing" }]);
});
```

### 🧪 Test Protected Route

```js
const jwt = require("jsonwebtoken");

describe("GET /api/todos", () => {
  let token;
  beforeAll(() => {
    token = jwt.sign({ id: "user123" }, process.env.JWT_SECRET);
  });

  it("should return todos with valid token", async () => {
    const res = await request(app)
      .get("/api/todos")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("should return 401 without token", async () => {
    const res = await request(app).get("/api/todos");
    expect(res.statusCode).toBe(401);
  });
});
```

---

## 📊 6. Test Reports

Run tests and generate coverage report:

```bash
npx jest --coverage
```

> This gives a detailed breakdown of how much of your code is tested.

---

## 📚 7. API Documentation using Swagger

### 🔧 Setup

```bash
npm install swagger-ui-express swagger-jsdoc
```

### 🧩 Create Swagger Config

```js
// swagger.js
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "My API", version: "1.0.0" },
  },
  apis: ["./routes/*.js"], // Path to the API docs
};

const specs = swaggerJsDoc(options);
module.exports = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
```

### 🧾 Add Comments to Routes

```js
/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 */
```

### 🧪 Visit Swagger UI

Run your app and go to:

```
http://localhost:3000/api-docs
```

> Here you can test your APIs directly from the browser.

---

## 🧠 Quick Reminders

| 💥 Pitfall                   | 🚫 Why It’s Bad                |
| ---------------------------- | ------------------------------ |
| Confusing tests with Postman | Postman ≠ automated test suite |
| Skipping test DB setup       | Leads to flaky or unsafe tests |
| Ignoring API docs            | Makes collaboration hard       |

---


