#### Backend Testing Fundamentals & API Documentation

### Learning Objectives

- Understand the need and importance of testing in backend development
- Learn different types of testing and implement basic testing snippets using Jest
- Test an existing Express project using Supertest for API endpoint validation
- Generate and interpret test reports to evaluate code coverage and test effectiveness
- Understand the need for proper API documentation and its role in development collaboration
- Implement Swagger API documentation for an Express project and test the documented routes

## Scenes

### **1.0 Introduction to Testing**

- **1.1** What is testing and why it is needed
- **1.2** Types of testing
- **1.3** Exploration of Jest and implementation of basic unit tests

### **2.0 Testing an Express Project**

- **2.1** Setting up testing environment (`.env.testing`), Supertest, and test DB connection using `beforeAll`, `afterAll`
- **2.2** Writing test cases for basic routes and creating a `User` integration test
- **2.3** Writing test cases for protected routes and creating a `Todos` integration test
- **2.4** Generating and interpreting test reports

### **3.0 API Documentation with Swagger**

- **3.1** Understanding the need for API documentation and difference between README vs. interactive API docs
- **3.2** Setting up Swagger in an Express project
- **3.3** Writing Swagger docs for routes and testing them via Swagger UI

---

## Pitfalls

**1.0**

- Confusion between Testing & Postman Testing

**2.0**

- testing env setup

**3.0**

- why api documentation needed??

## Content/Pedagagoy

### **Scene 1.0 Introduction to Testing**

### **1.1 What is Testing and Why It Is Needed**
![Software Flow](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/c676434b-94c8-4a9a-8fa6-a55f9fab8471/ciKCLSaZzVuDqbmR.png)

#### **What is Testing?**

Testing is the process of **evaluating** whether a software system or its components behave as expected.
It involves executing code under controlled conditions and **verifying** its output.

#### **Goals of Testing:**

- **Validation**: Ensure the app works correctly according to the requirements.
- **Regression Protection**: Prevent previously working features from breaking after updates.
- **Confidence for Deployment**: Confirms that code changes won’t break critical functionality.
- **Faster Debugging**: Automated tests help pinpoint failures faster than manual checking.

#### **Why Testing Is Essential in Backend Development:**

| Area                   | Benefit                                                               |
| ---------------------- | --------------------------------------------------------------------- |
| **Data Integrity**     | Ensures DB operations (like CRUD) behave as intended                  |
| **API Contracts**      | Verifies that APIs return expected status codes and structures        |
| **Security**           | Checks protected routes, auth tokens, and input validation            |
| **Team Collaboration** | Acts as a safety net during collaborative development and refactoring |
| **Scalability**        | Reduces manual effort as the project grows                            |

#### Real-life Analogy:

> Think of software testing like **checking a parachute** before a skydive — you hope it's perfect, but you still test it to avoid disasters.

---

### **1.2 Types of Testing**

> Testing is generally divided by **scope (what we’re testing)** and **intent (why we’re testing)**.

#### **Types of Testing Based on Scope**

| Type                         | Description                                       | Example                                               |
| ---------------------------- | ------------------------------------------------- | ----------------------------------------------------- |
| **Unit Testing**             | Testing **individual functions or methods**       | Checking if `add(a, b)` returns correct result        |
| **Integration Testing**      | Testing **how multiple components work together** | Checking a route that creates a user and writes to DB |
| **End-to-End (E2E) Testing** | Testing the **whole flow** as a user would        | Register → Login → Access Dashboard → Logout          |

#### **Types of Testing Based on Intent**

| Type                   | Purpose                                               | Example                                            |
| ---------------------- | ----------------------------------------------------- | -------------------------------------------------- |
| **Functional Testing** | Does the feature do what it’s supposed to?            | `POST /login` returns JWT if credentials are valid |
| **Negative Testing**   | Handles invalid or unexpected input correctly         | Wrong password returns 401                         |
| **Regression Testing** | Ensures new changes don't break existing code         | Old API routes still work after DB schema update   |
| **Smoke Testing**      | Checks if major functionalities work after deployment | App boots, main routes are accessible              |

#### Common Tools in Node.js:

- **Jest** – Unit and integration testing
- **Supertest** – API testing (routes)
- **Playwright / Cypress** – E2E testing

---

### **1.3 Exploration of Jest and Basic Unit Test Implementation**

#### What is Jest?

> Jest is a **JavaScript testing framework** developed by Facebook that allows you to write **unit and integration tests** with zero configuration.

- Works with Node.js and frontends (React, etc.)
- Built-in assertion and mocking support
- Snapshot testing and code coverage built-in

#### Install Jest

```bash
npm install --save-dev jest
```

> In `package.json`, add:

```json
"scripts": {
  "test": "jest"
}
```

---

### Writing Your First Jest Test

#### Example: Test for a Utility Function

```js
// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

```js
// sum.test.js
const sum = require("./sum");

test("adds 2 + 3 to equal 5", () => {
  expect(sum(2, 3)).toBe(5);
});
```

---

### Understanding Key Jest Terms

| Term                                 | Description                     |
| ------------------------------------ | ------------------------------- |
| `test()` or `it()`                   | Defines a test case             |
| `expect()`                           | Used to write assertions        |
| `toBe()`, `toEqual()`, `toContain()` | Matchers used to compare output |
| `describe()`                         | Groups related tests            |
| `beforeAll`, `afterAll`              | Setup/teardown for test suites  |

---

### 🧠 Bonus Tips

- Use `.test.js` or `.spec.js` file naming convention
- Keep pure logic (e.g., utilities, services) **independent** to allow easy unit testing
- Run tests using:

  ```bash
  npm test
  ```

---

### Common Pitfalls to Avoid

| Mistake                                | Consequence                    |
| -------------------------------------- | ------------------------------ |
| Not writing tests early                | Bugs creep in unnoticed        |
| Testing too much in a single test      | Harder to debug failures       |
| Not cleaning up DB/state between tests | Test results become unreliable |

---
