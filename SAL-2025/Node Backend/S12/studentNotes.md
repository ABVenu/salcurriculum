# 🛡️ Authorization

### [Live Coding Notes](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/2c445356-71dd-4176-902e-09ba9537f18f/XRCkjdymzmnnTlkD.zip)

## 🔍 Learning Objectives

- Understand the difference between **Authentication** and **Authorization**
- Learn about **Role-Based Access Control (RBAC)** and how to implement it
- Explore how **Third-Party Authentication (OAuth)** works and is integrated
- Understand the **Access & Refresh Token** mechanism for improved security and user experience

---

## 🔐 Authentication vs. Authorization

| Feature         | Authentication                 | Authorization                                                                |
| --------------- | ------------------------------ | ---------------------------------------------------------------------------- |
| What it does    | Verifies _who_ the user is     | Determines _what_ the user can do                                            |
| When it happens | First step                     | After authentication                                                         |
| Example         | Login with username & password | Checking if the user is an admin before allowing access to delete a resource |

---

## 🎭 Why Authorization is Needed

Imagine an LMS like Masai:

- Everyone is a "user" — but not all users can perform the same actions.
- **Student Role**: Can attend lectures, submit assignments
- **Admin Role**: Can create lectures, assign homework, manage users
- **RBAC** helps define **who can do what** and limits access based on **roles**, not individuals.

Benefits of RBAC:

- 🔐 Enhanced security
- 🧹 Cleaner permission management
- ⚖️ Easily scalable for growing systems

### 🔧 Basic RBAC Implementation in Node.js

**1. Store role information with the user:**

```js
// When registering user
{
  email: 'user@example.com',
  password: 'hashed_password',
  role: 'student' // or 'admin'
}
```

**2. Include role in the JWT token during login:**

```js
const token = jwt.sign({ userId, role }, process.env.JWT_SECRET, {
  expiresIn: "20m",
});
```

**3. Middleware to authorize roles:**

```js
const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ msg: "Access Denied" });
    }
    next();
  };
};

// Usage in routes:
router.post(
  "/create-lecture",
  authenticate,
  authorizeRoles("admin"),
  createLectureHandler
);
```

---

## ⏰ Token Expiry (Why and How?)

- **Why expire tokens?**
  To ensure that if a token is stolen, it can’t be used forever.
- Used in:

  - Banking apps
  - Government portals
  - Secure web services

```js
jwt.sign(payload, secret, { expiresIn: "10m" });
```

🔁 Downside: Repeated login prompts — which leads to the need for **refresh tokens** (covered later if time permits).

---

## 🌐 Third-Party Authentication (OAuth)

![OAuth](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/6a828b09-b8f9-46dd-87b1-be4c3e840059/V02qMroHCsVqRZNX.png)

#### What Is Third-Party Authentication?

- Instead of building and managing your own login system, you integrate **authentication APIs** provided by major platforms like:

  - **Google**
  - **Facebook**
  - **GitHub**
  - **Twitter**, and others

- These companies act as **Identity Providers**.

  - Your system redirects the user to the provider.
  - The provider authenticates the user.
  - Upon success, the provider sends your system a token (usually via **OAuth** or **OpenID Connect**) confirming the user's identity.
  - You then allow access based on that confirmation.

### Why Use It?

- 🌟 Better UX — users can sign in using Google, GitHub, Facebook
- 🔒 Improved security — no password storage in your DB
- 🧹 Simplified backend — rely on providers like Google/GitHub to verify identity

---

### 💡 How OAuth Works

![OAuth Flow](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/22e3405c-333b-46c0-9f5a-fdbb8c4ea88e/blp3ZlU2FwQyUaGO.png)

**Flow:**

1. User clicks "Login with GitHub"
2. Redirected to GitHub login
3. GitHub verifies credentials
4. Redirects back to your app with a temporary token
5. You use that token to:

   - Get user’s basic profile (name, email)
   - Create a local session or your own JWT

---

### 🛠️ GitHub OAuth Implementation (Using Passport.js)

#### Steps:

1. **Install Dependencies**:

```bash
npm install passport passport-github2 express-session
```

2. **Register App on GitHub**:

- Go to [GitHub Developer Settings](https://github.com/settings/developers)
- Get **Client ID** and **Client Secret**

3. **Configure Passport**:

```js
const GitHubStrategy = require("passport-github2").Strategy;

passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // Save or find user in your DB
      return done(null, profile);
    }
  )
);
```

4. **Auth Routes**:

```js
app.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["user:email"] })
);
app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  (req, res) => {
    // Successful login
    res.redirect("/dashboard");
  }
);
```

---

## 🔁 Access Token vs Refresh Token (If Covered)

> Used to **keep users logged in** securely without asking them to re-authenticate frequently.

| Token Type    | Validity                | Purpose                                      |
| ------------- | ----------------------- | -------------------------------------------- |
| Access Token  | Short (e.g., 10 mins)   | Grants access to protected routes            |
| Refresh Token | Long (e.g., 30–40 mins) | Used to get a new access token without login |

### 🔄 Example Flow:

1. User logs in
2. Server sends:

   - Access Token (10 mins)
   - Refresh Token (40 mins)

3. After 10 mins, frontend silently sends refresh token to get a new access token.
4. After 40 mins, refresh token expires → login required again.

![Access vs Refresh](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/a412e494-1e99-4c32-8730-cf479f72eb3d/3RTfQILZdhiaUcjz.png)

---

### 🔐 Key Concepts Recap

- **Authentication** = Who are you?
- **Authorization** = What are you allowed to do?
- **RBAC** = Manage what users can do based on roles
- **OAuth** = Login using third-party providers (GitHub, Google)
- **Access & Refresh Tokens** = Maintain session security while improving user experience

---

## ⚠️ Common Pitfalls

- 🔁 Forgetting that RBAC should come **after** token validation
- 🔐 Misconfiguring OAuth callback or missing `clientSecret`
- 🤯 Confusing why we need **two tokens** (Access + Refresh)

## Conclusion

In any secure application:

- **Authentication** verifies **who** the user is
- **Authorization** checks **what** that user is allowed to do
- **RBAC** allows for scalable and maintainable permission control
- **Third-party OAuth** enhances user experience and reduces security risks
- **Access & Refresh Tokens** balance security and usability for session handling
