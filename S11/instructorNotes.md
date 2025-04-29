#### Authentication

### Learning Objectives

- Understanding the need for security measures & its implementation responsibility in the backend
- Password Protection: Hashing & comparing the password
- Secured Login: Token Based Authentication system using jwt

## Scenes

**1.0** Understanding need of Security Measures & its Implementation responsiblity in backend

- 1.1 - Why security measures are needed, why it is responsiblity of backend
- 1.2 - Types of security measures needed
- 1.3 - Difference between Hashing & Encryption

**2.0** Hashing & comparing the password

- 2.1 - Why hashing password is needed? why can't raw password be stored
- 2.2 - Implementation of hashing and storing password in db using bycrypt
- 2.3 - implementation of comparing the hashed password

**3.0** Token Based Authentication system using jwt

- 3.1 - Just hashing and comparing is servers complete security?
- 3.2 - Need of an system, where once user proves the identity by providing right password, should be allowed for protected Operations
- 3.3 - Implementation of Generation of JWT
- 3.4 - Verifying the JWT and allow to protected routes

## Pitfalls

**1.0**

- Security measures are part of backend and important

**2.0**

- working process of hashing & comparing password, how exactly it differs from raw password

**3.0**

- If hashing & comparision is done, then why jwt is needed
- Many students thinks that hashing & jwt are alternative options, not like it is continued part of authentication system

## Content/Pedagagoy

## **Scenes**

### **1.0 Understanding the Need for Security Measures & Its Implementation Responsibility in Backend**

#### **1.1 Why Security Measures Are Needed, and Why It Is the Responsibility of the Backend**

Security measures are the cornerstone of any backend system. They protect user data, ensure the integrity of the application, and maintain trust between users and your service.

- **Protecting Sensitive Data**: Backend systems store sensitive user data, like passwords, emails, payment information, etc. If this data is compromised, it can have severe consequences.
- **Ensuring User Privacy**: By applying proper security measures, you ensure that unauthorized users do not gain access to personal or private information.

- **Preventing Attacks**: Security measures prevent common attacks like:
  - **SQL Injection**: Malicious queries that can access your database.
  - **Cross-Site Scripting (XSS)**: Injecting harmful scripts into your pages.
  - **Man-In-The-Middle (MITM) Attacks**: Intercepting data between client and server.

Without security measures in place, your system is vulnerable to these attacks, and your users' data will be at risk.

---

#### **1.2 Types of Security Measures Needed**

To maintain the security of a backend system, a range of measures should be implemented:

- **Authentication**: Verifying the identity of a user (e.g., login).
- **Authorization**: Ensuring that a user has permission to access a resource.
- **Password Hashing**: Storing passwords securely so they cannot be retrieved if compromised.
- **Encryption**: Protecting data in transit (e.g., using HTTPS) and in storage.
- **Input Validation**: Ensuring user-provided data is safe and formatted correctly.
- **Rate Limiting**: Preventing brute-force attacks by limiting login attempts.
- **Session Management**: Managing sessions securely, often with JWT or cookies.

---

#### **1.3 Difference Between Hashing & Encryption**

- **Hashing** is a **one-way process**. It converts a password (or any data) into a fixed-length string of characters, called a hash. This hash cannot be converted back to the original data. It’s used to store passwords securely.

  - Example: A raw password `mySecret123` hashed with `bcrypt` might result in `2a$10$A4Bde9D4...`. You cannot reverse it to get the original password.

- **Encryption**, on the other hand, is a **two-way process**. It turns data into a scrambled version and can be decrypted back to the original data using a key.

  - Example: Data encryption is used when transmitting sensitive data like credit card information.

> **Why It Matters**:  
> Without **hashing**, storing passwords as plain text makes them vulnerable to attackers. Imagine a hacker gaining access to your database and easily seeing every user's password.

---

### **2.0 Hashing & Comparing the Password**

#### **2.1 Why Hashing Passwords Is Needed? Why Can't Raw Passwords Be Stored?**

Storing passwords in plain text is a **major security vulnerability**.

- **Risk**: If your database is compromised, all users' passwords are exposed.
- **Real-Life Example**: In the case of the **2012 LinkedIn breach**, over **6 million user passwords** were leaked because the company was storing them in plain text.

- **Solution**: Hashing ensures that even if the database is compromised, attackers can't retrieve the original passwords.

> **Without Hashing**: Imagine a hacker gaining access to your database and seeing usernames and their plain text passwords. All user accounts are instantly compromised.

---

#### **2.2 Implementation of Hashing and Storing Password in DB Using bcrypt**

```javascript
const bcrypt = require("bcrypt");

async function hashPassword(plainPassword) {
  const saltRounds = 10; // Strength of the hash
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword;
}

// Usage example
const myPassword = "mySecret123";
hashPassword(myPassword).then((hashed) => console.log(hashed)); // Example output: $2b$10$A4Bd...
```

**Explanation**:

- `bcrypt.hash()` takes the plain password and adds a "salt" to make the hash unique. This makes it harder for attackers to use precomputed hash tables (rainbow tables) to crack the password.

**Why It's Secure**:

- Even if two users have the same password, they will have different hashes because of the salt.
- `bcrypt` makes cracking hashed passwords more computationally expensive, reducing the risk of brute-force attacks.

---

#### **2.3 Implementation of Comparing the Hashed Password**

When a user logs in, you don’t compare the plain password with the stored password. Instead, you compare the **hashed** version of both.

```javascript
async function comparePasswords(plainPassword, hashedPassword) {
  const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
  return isMatch;
}

// Usage example
const plain = "mySecret123";
const hashed = await hashPassword(plain);

comparePasswords(plain, hashed).then(console.log); // true
comparePasswords("wrongPassword", hashed).then(console.log); // false
```

**Why It's Important**:

- This ensures that even if someone accesses your password storage, they cannot retrieve the original passwords.

---

### **3.0 Token-Based Authentication System Using JWT**

#### **3.1 Just Hashing and Comparing: Is the Server's Complete Security?**

While hashing ensures password security, it doesn't cover all security aspects.

- **Problem**: Every time a user logs in, we can’t keep asking for their password. This creates an **inconvenience** for the user and puts **extra load** on the server.
- **Solution**: **JWT (JSON Web Token)** is a stateless, secure way to authenticate users after the initial login. It allows users to access protected routes without repeatedly sending their passwords.

---

#### **3.2 Need for a System Where Once User Proves Identity, They Can Access Protected Operations**

- **Why?**: After successful login, the server issues a JWT token.
- **What happens?**: The token contains information like user ID and role, which allows access to specific routes without requiring the user to send credentials again.

**Example**:  
User logs in, and the server generates a JWT token, which is returned to the client. The client then sends this token with each subsequent request to protected routes.

---

#### **3.3 Implementation of Generation of JWT**

```javascript
const jwt = require("jsonwebtoken");

function generateToken(payload) {
  const secretKey = "your_secret_key";
  const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
  return token;
}

// Usage example
const token = generateToken({ id: "user123", role: "user" });
console.log(token); // JWT token string
```

**Explanation**:

- `jwt.sign()` creates a token with a payload (e.g., user info) and a secret key.
- **Expiration**: Tokens are time-limited (`expiresIn`), ensuring they can't be used forever.

---

#### **3.4 Verifying the JWT and Allowing Access to Protected Routes**

Once the token is generated, it is sent back to the client. The client then includes it in the `Authorization` header for future requests to protected routes.

```javascript
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const secretKey = "your_secret_key";
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded; // Attach user info to request
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
}
```

**Why It's Important**:

- The server verifies the token to ensure that the request is legitimate.
- **JWT** avoids the need for sessions, making it a stateless, scalable solution.

---
