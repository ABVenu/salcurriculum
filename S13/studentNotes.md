# Auth & Communication – Email Integration & Password Reset Flow

### [Live Coding Notes](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/fd427009-e2c1-4b03-b19d-94e829be0c11/U1HfBWQPHGtqOsXv.zip)

---

## Learning Objectives

- Understand the need for user communication in modern applications.
- Learn typical communication modes: Email, SMS, WhatsApp.
- Implement email sending using Nodemailer in Node.js.
- Set up Google App Passwords securely for email communication.
- Understand and implement "Forgot Password" and "Reset Password" flows.
- Optionally integrate WhatsApp Business API for user notifications.
- Implement Token Blacklisting to invalidate sensitive tokens post-reset.

---

## 1. Introduction: Need for Communication

### 1.1 Why Communication is Needed

- Communication bridges the app and the user. It builds trust, enhances user experience, and confirms actions.
- It provides proof or acknowledgment for actions like:

  - Signup confirmations
  - Password resets
  - OTP verifications
  - Promotional offers
  - Transaction receipts

### 1.2 Modes of Communication

- **Email**
- **SMS (Mobile Messages)**
- **Social Media Messages (e.g., WhatsApp)**
- **Voice Calls (less common)**

---

## 2. Sending Emails Using Nodemailer

### 2.1 Nodemailer Overview

Nodemailer is a Node.js module that allows you to send emails using SMTP (Simple Mail Transfer Protocol).

**Installation:**

```bash
npm install nodemailer
```

### 2.2 Example Configuration

```js
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // STARTTLS
  auth: {
    user: "your-email@gmail.com",
    pass: "your-app-password",
  },
});
```

- `host`: SMTP server for Gmail
- `port`: 587 (STARTTLS)
- `secure: false`: Upgrades to secure connection via STARTTLS

---

## 3. Google App Passwords for Nodemailer

### 3.1 Why Use App Passwords?

- Gmail doesn't allow direct use of your account password if 2-Step Verification is on.
- App passwords are **16-digit tokens** used specifically for third-party apps like Nodemailer.

### 3.2 How to Generate App Passwords
![Sample Google App](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/a938748c-8f7a-4f13-bd29-4f7d678d2040/MyVBNEFOOoUolWPM.png)
1. Visit: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Ensure 2-Step Verification is enabled.
3. Choose App → "Mail", and Device → "Node.js".
4. Click **Generate** and copy the 16-digit app password.
5. Use it in your code instead of your actual Gmail password.

---

## 4. Implementing Forgot and Reset Password
![Password Reset Logic](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/2cd0065c-2a7f-4519-bca5-23c9ff72cae8/KYi1ckRXILMqenyI.png)
### 4.1 User Schema (Mongoose Example)

```js
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("User", userSchema);
```

---

### 4.2 Forgot Password Route

This route generates a token and sends a reset link to the user's email.

```js
const jwt = require("jsonwebtoken");
const User = require("./models/User");

app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const token = jwt.sign({ id: user._id }, "RESET_SECRET", {
    expiresIn: "10m",
  });

  const resetLink = `http://localhost:3000/reset-password/${token}`;

  await transporter.sendMail({
    from: "your-email@gmail.com",
    to: email,
    subject: "Reset Your Password",
    html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
  });

  res.json({ message: "Reset link sent to your email." });
});
```

---

### 4.3 Reset Password Route

This route accepts a valid token and updates the user’s password.

```js
app.post("/reset-password/:token", async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    const decoded = jwt.verify(token, "RESET_SECRET");
    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.password = newPassword;
    await user.save();

    res.json({ message: "Password reset successful." });
  } catch (err) {
    res.status(400).json({ message: "Invalid or expired token" });
  }
});
```

---

## 5. Token Blacklisting (Optional but Recommended)

### 5.1 Why Blacklist Tokens?

If a user resets their password, any previous token (JWT) could still be valid until it expires. Token blacklisting prevents misuse of those tokens.

### 5.2 Implementation Strategy

- Create a new collection: `BlacklistedTokens`
- During password reset, add the old refresh token or JWT to this collection.
- In the auth middleware, check if the incoming token is blacklisted.

```js
const isTokenBlacklisted = async (token) => {
  const blacklisted = await Blacklist.findOne({ token });
  return !!blacklisted;
};

// In auth middleware
if (await isTokenBlacklisted(token)) {
  return res.status(401).json({ message: "Token is invalidated" });
}
```

---

## 6. Optional: WhatsApp API Integration

### 6.1 Overview

WhatsApp API allows programmatic messaging to users. Two ways to test:

- **Developer Test API** (1 registered test user)
- **Meta WhatsApp Business API** (limited to 1,000 free messages/month)

### 6.2 Meta API Flow

- Get API Key from [https://developers.facebook.com](https://developers.facebook.com)
- Set recipient’s phone number in WhatsApp Business settings
- Send messages using APIs like:

```bash
POST https://graph.facebook.com/v15.0/PHONE_NUMBER_ID/messages
Headers: Authorization: Bearer ACCESS_TOKEN
Body:
{
  "messaging_product": "whatsapp",
  "to": "recipient_number",
  "type": "text",
  "text": { "body": "Your OTP is 123456" }
}
```

---

## Pitfalls and Clarifications

- **Nodemailer is only a transporter**. Password reset is a **separate flow** built around secure tokens.
- Ensure email service credentials (App Password) are stored securely using `.env`.
- **Reset tokens must expire** and should be invalidated (via blacklist) once used.
- WhatsApp API integration requires more setup (Meta approval) than email.

---

## Conclusion

In this session, we covered the importance of user communication in backend systems and implemented real-world flows using:

- **Nodemailer** for email communication.
- **JWT tokens** for password reset flows.
- **Secure Google App Passwords**.
- Optional integration of **WhatsApp API** for user messaging.
- Introduced **Token Blacklisting** as a security layer post-sensitive actions.

These features not only improve user trust and experience but also form essential building blocks for secure, scalable applications.

---
