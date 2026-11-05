### 📘 **Assignment: Integration Testing with Auth and CRUD in Express.js**

#### 📌 **Problem Statement**

Build a backend-only Express.js application with the following features, and write comprehensive **integration test cases** for each part using a testing library like `jest` + `supertest`.

---

### 🚀 Features to Implement

#### 1. **User Authentication**

* **Signup**: Register a new user (`POST /auth/signup`)
* **Login**: Login the user and return a JWT token (`POST /auth/login`)

#### 2. **Protected Routes**

* All following routes require a valid JWT token in the `Authorization` header.

---

### ✏️ **CRUD on Todos**

> Model: `{ id, title, description, status }`

* **Create Todo** → `POST /todos`
* **Read Todos** → `GET /todos`
* **Update Todo** → `PUT /todos/:id`
* **Delete Todo** → `DELETE /todos/:id`

> Note: All todos must be user-specific. A user should access only their own todos.

---

### 🧪 **Integration Tests Required**

#### ✅ Auth Integration Tests

* User can successfully signup
* User can login and receive JWT
* Login fails for invalid credentials
* Accessing protected route without token should fail
* Accessing protected route with invalid token should fail

#### ✅ Todos Integration Tests

* Create todo (with valid token)
* Get all todos for logged-in user
* Update a specific todo (ensure only owner can update)
* Delete a specific todo
* Access fails for unauthenticated user
* Access fails if trying to update/delete other's todo

---

### 🔧 **Testing Guidelines**

* Use `beforeAll`, `afterAll`, `beforeEach`, and `afterEach` to setup/teardown DB and app state.
* Use a test-specific in-memory DB or a separate test database.
* Group tests logically using `describe` blocks.

---

### 📄 **Test Report**

* Integrate an **HTML report generator** (like `jest-html-reporter`) to generate a visual report of test cases.
* On running the tests, the HTML report should be saved in a `/test-report` folder.

---

### ⚠️ Constraints

* Do **not** include installation instructions or boilerplate setup.
* Do **not** use any frontend.
* Use only necessary NPM packages to keep it clean and backend-focused.

---


### Submission Instructions
* Please complete and submit the Github Repo Link
