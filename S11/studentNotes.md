
# Authentication
### [Live Coding Notes](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/1df7daa8-2e68-479c-a526-269973f7ee43/dgHTKDQwyxAUelji.zip)

## ✅ Learning Objectives

* Understand why security is crucial in backend development
* Learn how to protect passwords using hashing
* Implement secure login using JWT (JSON Web Tokens)

---

## 🌐 1. Security Measures & Backend Responsibility

### 🔎 1.1 Why Backend Security Is Essential

* Backends handle **sensitive user data**: passwords, emails, transactions, etc.
* It’s the backend’s **responsibility** to ensure this data is **secure**.
* Without proper security, systems are vulnerable to:

  * **SQL Injection**
  * **Cross-Site Scripting (XSS)**
  * **Man-in-the-middle (MITM) attacks**

### 🛡️ 1.2 Types of Security Measures
![Security in Backend](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/8a18ae05-423c-45e5-a299-5aa8c0299664/WuQPT1PFI1ZNorhi.png)
* **Authentication**: Who are you? (e.g., login)
* **Authorization**: Are you allowed to do this?
* **Password Hashing**: Hide real passwords using algorithms
* **Encryption**: Protect data during transfer (e.g., HTTPS)
* **Input Validation**: Sanitize user input to prevent injection attacks
* **Rate Limiting**: Prevent brute-force login attempts
* **Session/JWT Management**: Manage user sessions securely

### 🔁 1.3 Hashing vs. Encryption

| Feature        | Hashing                | Encryption                   |
| -------------- | ---------------------- | ---------------------------- |
| Direction      | One-way (irreversible) | Two-way (reversible)         |
| Use Case       | Password protection    | Secure data transfer/storage |
| Can be undone? | ❌ No                   | ✅ Yes (with a key)           |

**Example**:
Hashing `mySecret123` with bcrypt → `$2b$10$N...` (cannot be reversed)

---

## 🔑 2. Password Hashing & Comparison

### 🤔 2.1 Why Not Store Raw Passwords?

* Storing raw passwords is **extremely risky**.
* If your database leaks, **every user’s credentials are exposed**.
* Solution: Hash passwords before saving to the database.

### 🧂 2.2 Hashing Passwords with `bcrypt`

```js
const bcrypt = require("bcrypt");

async function hashPassword(password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}
```

* **Salt** makes the hash unique—even if two users use the same password.
* Slows down brute-force attacks.

### 🔁 2.3 Comparing Passwords During Login

```js
async function comparePasswords(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}
```

* Compares the entered password with the stored hash securely.

---

## 🛂 3. Token-Based Authentication with JWT

### ❓ 3.1 Is Hashing Alone Enough?

* **Hashing protects passwords**, but doesn’t help with **access management**.
* Once a user logs in, we need a way to allow access to protected routes without re-checking passwords constantly.

### 🧾 3.2 Why Use JWT?

* After login, server sends back a **JWT token**.
* This token proves the user is authenticated.
* The user sends this token with each request to access protected routes.

**JWT = JSON Web Token**
Contains user data (e.g., ID, role) and is **signed** with a secret key.

### 🛠️ 3.3 Creating a JWT

```js
const jwt = require("jsonwebtoken");

function generateToken(userData) {
  return jwt.sign(userData, "your_secret_key", { expiresIn: "1h" });
}
```

* Token includes expiry (e.g., 1 hour).
* Payload might look like: `{ id: "abc123", role: "admin" }`

### 🛡️ 3.4 Verifying JWT on Protected Routes

```js
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "No token" });

  try {
    const decoded = jwt.verify(token, "your_secret_key");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
}
```

* This middleware checks if the token is valid before giving access to protected resources.

---

## ⚠️ Common Pitfalls

### 1️⃣ Security is a backend responsibility

* Never assume frontend validation is enough.
* Always sanitize, validate, and secure data on the backend.

### 2️⃣ Hashing ≠ Encryption

* **Hashing** is one-way and used for passwords.
* Don’t confuse it with encryption (e.g., HTTPS).

### 3️⃣ Hashing and JWT are not alternatives

* Hashing protects the password.
* JWT manages **user sessions** after authentication.

---

## 🧠 Summary

| Concept          | Purpose                            |
| ---------------- | ---------------------------------- |
| Hashing          | Store passwords securely           |
| bcrypt           | Node.js library for hashing        |
| JWT              | Manage user sessions post-login    |
| Token middleware | Check if user is allowed to access |

---


