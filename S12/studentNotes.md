# 🛡️ Authorization
### [Live Coding Notes](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/2c445356-71dd-4176-902e-09ba9537f18f/XRCkjdymzmnnTlkD.zip)

## 🔍 Learning Objectives

- Understand the difference between **Authentication** and **Authorization**
- Learn about **Role-Based Access Control (RBAC)** and how to implement it
- Explore how **Third-Party Authentication (OAuth)** works and is integrated
- Understand the **Access & Refresh Token** mechanism for improved security and user experience

---

## 🔐 Authentication vs. Authorization

| Aspect           | Authentication                       | Authorization                       |
| ---------------- | ------------------------------------ | ----------------------------------- |
| **Purpose**      | Verifies **who** the user is         | Determines **what** the user can do |
| **Example**      | Login with email/password            | Only admins can create a course     |
| **Timing**       | Happens **before** authorization     | Happens **after** authentication    |
| **System Check** | Credentials (email, password, token) | Roles, permissions                  |

---

## 🎭 Role-Based Access Control (RBAC)

### Why RBAC Is Needed

- In a system like Masai LMS:

  - Students **can view** lectures, but **cannot create** them
  - Only **Admin or Instructors** can create lectures or assignments

- Even though all are users, their **roles** differ → so must their access

### Benefits of RBAC

- 🔒 Enhances **security** by limiting access based on roles
- 🧩 Simplifies **permission management**
- 📈 Scales well as the application grows

### How RBAC Works

- Each user has a `role` field (e.g., `"admin"`, `"student"`)
- When generating the JWT token at login, include the user’s role in the payload
- Use middleware to:

  - ✅ Verify the token
  - ✅ Check if the user's role is allowed to access that route

```js
const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ msg: "Access Denied" });
    }
    next();
  };
};
```

---

## ⏳ Token Expiry

- JWT supports a built-in `expiresIn` option:

  ```js
  jwt.sign(payload, secret, { expiresIn: "15m" });
  ```

- Why expire tokens?

  - 🚫 Prevent long-term misuse (e.g., stolen token)
  - 🔁 Forces re-authentication to confirm user is still valid

- Example: Online banking apps log you out after inactivity to **increase security**

---

## 🔁 Third-Party Authentication (OAuth)

### Why Use It?

- ✨ **User-Friendly**: No need to remember yet another password
- 🛡️ **Secure**: Delegates authentication to trusted providers (e.g., Google, GitHub)
- 💼 **Less Responsibility**: Your app doesn't manage passwords or sensitive login data

### How It Works (Simplified Flow)

1. User clicks **“Login with GitHub”**
2. Redirected to GitHub → user logs in there
3. GitHub authenticates and redirects back to your app with an **authorization code**
4. Your server exchanges this code for an **access token**
5. Use this token to access the user's profile info and consider the user **logged in**

### Tools: `passport-github`

- A Passport.js strategy for GitHub OAuth
- Steps:

  1. Create a GitHub OAuth App → get Client ID and Secret
  2. Use `passport-github` to configure GitHub as a login strategy
  3. Get user profile info and save or use as needed

📚 Docs: [https://www.passportjs.org/packages/passport-github/](https://www.passportjs.org/packages/passport-github/)

---

## 🔁 Access Token vs Refresh Token

### Problem:

- 🔒 Access tokens should expire quickly to enhance security
- 🧑‍💻 But logging in repeatedly harms user experience

### Solution:

Use **two tokens**:

- 🔐 **Access Token**: Short-lived (e.g., 10 min), used for API requests
- 🔁 **Refresh Token**: Longer-lived (e.g., 30–60 min), used to get new Access Tokens silently

### How It Works

1. On login, the server sends:

   - `accessToken` (expires in 10 mins)
   - `refreshToken` (expires in 40 mins)

2. When `accessToken` expires:

   - The client silently sends the `refreshToken` to get a new `accessToken`
   - No need to log in again!

3. When `refreshToken` expires:

   - The user is logged out and must log in again

This method balances **security** and **user convenience**.

---

## 🧠 Common Pitfalls

- ❌ Confusing authentication with authorization
- ❌ Forgetting to check roles after verifying token
- ❌ Misusing tokens (e.g., using only one token for long-lived sessions)

---

## ✅ Conclusion

In any secure application:

- **Authentication** verifies **who** the user is
- **Authorization** checks **what** that user is allowed to do
- **RBAC** allows for scalable and maintainable permission control
- **Third-party OAuth** enhances user experience and reduces security risks
- **Access & Refresh Tokens** balance security and usability for session handling
