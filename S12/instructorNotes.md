#### Authorization

### Learning Objectives

- Need of Authorization, Understanding the difference between Authentication & Authorization
- Role Based Access Control
- Implementation of RBAC
- Third Party Auth - OAuth Implementation

## Scenes

**1.0** Need of Authorization, Understanding the difference between Authentication & Authorization

- 1.1 - Demonstration of Need Of Role Based Access
- 1.2 - Difference between Authentication & Authorization
- 1.3 - Implementation of RBAC
- 1.4 - Token Expiry, Need & Implementation

**2.0** Third Party Auth

- 2.1 - Need Of Third Party Auth
- 2.2 - How Third Party Auths works
- 2.3 - Implementation of Github OAuth using passportjs

**3.0** Access Token & Refresh Token (Only If Time Permits)

- 3.1 - Activity to demonstrate need of Continued Access with Secured Short Access Time
- 3.2 - Working principle of Access Token & Refresh Token
- 3.3 - Implementaion of Access-Refresh Token mechanism

## Pitfalls

**1.0**

- Understanding Auth Middleware Which under another Role Based Function

**2.0**

- Implementation on OAuth

**3.0**

- If 1 token can manage, then why come 2 tokens needed??

## Content/Pedagagoy

### Scene 1.0:

#### 1.1 Demonstartion of Role Based Access Control

- Example of Masai LMS, students can create Lectures, Assignments??
- Why Student's can't create??, they are also users of Masai LMS right???
- Yes, they are Masai Users, but the role is different, the permitted operations of the Student Role is Attend Lecture, solve Assignments
- Admin Role Users can create Lectures/ Assignments etc
- Why RBAC: Enhances security by ensuring users can only access resources relevant to their role
- Simplifies permission management by assigning access based on roles, not individuals
- Scales and maintains easily, especially as the application and team grow

#### 1.2 Difference between Authentication & Authorization

- Authentication means, whether User is Associated/Registered with system??
- Authorization means, yes User is Associated/Registered with system, but at what Level?? what permissions are granted??

#### 1.3 Implementation of RBAC

- Making simple stratergies like adding role in User Profile
- While login, even Role is encrypted in token
- Modifying the Auth Middleware, once token verified, check the role as well,
- Allowed role is specified at Route Level,
- Auth Middleware should allow, if role of user in token and role specified at Route is matching

```javascript
const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ msg: "Access Denied" });
    }
    next();
  };
};
```

#### 1.3 Token Expiry

- JWT provides an option to add expiry time while generating token,
- Token expiry helps in enhaching the security, that is after sometime user should login again to continue, which helps in prevention of false person using the systems
  - Best example is Mobile Banking Apps, Websites where once loggedIn, users are allowed for max 20 to 30 mins, and user should login again
- Asking to login again and again may lower the user experience, but not compromised with security
- Quicky Implement by adding `expiresIn` in jwt and demonstrate again

## Scene 2.0: Third-Party Authentication

### 2.1 Activity: Why Do We Need Third-Party Authentication?

Let's begin with a quick thought experiment:

- How many websites or online services does a person typically use in a day?
- Can they realistically remember unique login credentials for each one?
- Now imagine if, instead of creating new credentials for every platform, they could simply use the login they already use daily — like Google or Facebook — to access your system.

This leads us to a key usability and security concept: **Third-Party Authentication**.

---

#### Why Use Third-Party Authentication?

- **Better User Experience:**
  Users can log in using accounts they already trust and use frequently (Google, GitHub, Facebook, etc.), saving time and reducing friction.

- **Reduced Responsibility:**
  Your system doesn't have to store, manage, or secure passwords — lowering the risk of breaches and simplifying your backend logic.

- **Built-in Security:**
  These third-party providers offer mature, well-tested authentication systems with security features like OAuth, 2FA, session control, and login alerts.

---

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

#### 2.2 How Third Party Auth's works

- **User clicks "Login with \[Provider]"** (e.g., GitHub, Google) and is redirected to the third-party authentication page.
- **The auth provider renders its own UI** for login; the user enters credentials, which are **verified by the provider using its own database**.
- If valid, the provider **generates a token and shares minimal profile info** (like name, email) with your app.
- **User is redirected back to your app**, typically to a predefined callback route.
- Your app may **either use the third-party access token** for further API calls or **generate its own token (e.g., JWT)** for local session handling.
- **User is now considered authenticated** in your system and can access protected routes.

#### 2.3 Implementation of Github OAuth using passportjs

- Why Github??, easy to implement comnapred to others
- Document Ref Link `https://www.passportjs.org/packages/passport-github/`
- Get client ID and client secret from Github Developer Account
- We will just use Profile Information, Our Access Token will be used for all Protected Routes

### **Scene 3.0 – Access Token & Refresh Token**

---

#### **3.1 Activity: Why Do We Need Refresh Tokens?**

- Imagine you log into your **Mobile Banking App**, and the **login session expires every 5 minutes**.
  ➤ Would you be okay **logging in again and again** every few minutes just to continue banking?

- Now imagine if the **login token never expires** after logging in once.
  ➤ Would it be safe to remain permanently logged in, even if someone else gets access to your device?

➡️ **Both options are flawed** — we need a **secure and user-friendly way** to keep users logged in without compromising safety.

---

#### **3.2 Working Principle of Access & Refresh Tokens**

- To solve this, we use **two tokens**:

  - 🔐 **Access Token**:
    Short-lived (e.g., 10 minutes), used to access protected routes.

  - 🔁 **Refresh Token**:
    Long-lived (e.g., 40 minutes), used to request a new Access Token when it expires.

---

#### **How the Flow Works (Example: Net Banking Site)**

- Upon successful login, the user receives:

  - an **Access Token** (valid for 10 minutes)
  - a **Refresh Token** (valid for 40 minutes)

- While using the site:

  - At the **10-minute mark**, the **Access Token expires**.
  - The browser/app **automatically uses the Refresh Token** to request a new Access Token — all behind the scenes.
  - This **silent renewal** continues smoothly until the **40-minute mark**.

- At the **41st minute**, the Refresh Token also expires.
  ➤ The user is prompted to **log in again** for security.

#### **3.3: Implementation of Access Token - Refresh Token**

- If time permits, this will be implemented or session conludes at 3.2
