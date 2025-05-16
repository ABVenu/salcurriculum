#### Auth & Communication – Email Integration & Password Reset Flow

### Learning Objectives

- Understanding need of communications
- Typical communication modes
- Nodemailer
- Implementation of password reset logic using node mailer
- (Yet To Be Decided) Integration of whatsapp for OTPS or other fast communication
- Token Blacklisting

## Scenes

**1.0** Need Of Communications

- 1.1 - Need of Communications, its importance & how it is part of backend
- 1.2 - What typical things are communicated & modes
- 1.3 - Basic Implementation of Node Mailer and sending an sample email
- 1.4 - Exploring Google App Password which is required to send email

**2.0** Implementation of Password Reset Logic

- 2.1 - Creation of Simple Frontend with signup/login/forget password UI
- 2.2 - Implementaion of Node Mailer to send password reset link
- 2.3 - Integration of both Frontend-Backend and demonstarting entire things

**3.0** Integrating Whatsapp API for messaging communication (yet to be fixed)
or Token Blacklisting

- Token Blacklisting:
  - need of token blacklisting
  - implementation of token blacklisting
    ------ or -----
- Integrating Whatsapp API
  - Generation of Facebook's whatsapp API Token (1000 messages limit per month)
  - Or Utilizing Developers Test API (Only One Registered Recepient Allowed)

## Pitfalls

**1.0**

- Understanding the working of node mailer

**2.0**

- Clearly diffrentiating that passoword reset methodology is nothing to with node mailer

**3.0**

- Unbderstanding documentation of SDKs to be Implementated

## Content/Pedagagoy

### Scene 1.1: Need Of Communications

- 1.1 Communications are integral part of any websites/apps, communications increases user experience and enures trust within user as users also communication severs as proof/acknowledgement

- 1.2 What typical things are communicated & modes
- To send user details, OTPs, transcation bills etc
- To send notifications, alerts , promotional offers etc
- Modes of communication

  - Email
  - Messages to Mobile
  - Messages to social media like whatsapp
  - Call

- 1.3 Sending Emails Using Nodemailer

* **Nodemailer Documentation**:
  [https://nodemailer.com/](https://nodemailer.com/)

---

### Nodemailer Configuration Example:

```js
host: 'smtp.gmail.com',
port: 587,
secure: false
```

#### Explanation:

- **host: 'smtp.gmail.com'**
  This is the SMTP server (Simple Mail Transfer Protocol) for Gmail. Nodemailer connects to this server to send emails.

- **port: 587**
  This is the recommended port for sending emails securely using STARTTLS (even though `secure: false` is set). It's used during development and production for most secure email providers like Gmail.

- **secure: false**
  Means the connection will start unencrypted but **upgrades to a secure connection** before any email data is sent (STARTTLS protocol).

---

### How Nodemailer Works (Simplified):

- Nodemailer **logs into your Gmail account** using your credentials or an app password.
- It **sends emails on your behalf**, either single or multiple at once.
- You can configure:

  - Sender address
  - Receiver(s)
  - Subject & body (HTML or plain text)
  - Attachments if needed

---

### 1.4 Exploring Google App Passwords (For Sending Emails via Nodemailer)

#### Why Use an App Password?

* Nodemailer requires **authentication** to send emails from your Gmail account.
* **Directly using your Gmail password is not allowed or secure**, especially when "2-Step Verification" is enabled.
* Instead, **Google provides an App Password**, a 16-digit code used specifically by third-party apps like Nodemailer.

---

### How App Passwords Help:

* You **generate a special app password** for your application via Google.
* This password is **only valid for sending emails** — not for logging into your Google account or other services.
* It enhances security by **limiting access only to that specific app**, not your full Google account.

---

### Steps to Create an App Password:
![Sample Google App](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/a938748c-8f7a-4f13-bd29-4f7d678d2040/MyVBNEFOOoUolWPM.png)

1. Go to 👉 [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Ensure **2-Step Verification** is enabled for your Google account.
3. Choose the app and device (e.g., "Mail" and "Node.js").
4. Click "Generate" – Google will give you a **16-character app password**.
5. **Copy and store it securely** – this will not be shown again.

---

### Use in Nodemailer Auth:

```js
auth: {
  user: 'your-email@gmail.com',
  pass: 'your-16-char-app-password'
}
```

---
### 1.5 Sending First Email
- Add receiver's email and simply call the function an email will br sent



## Scene2.0: Password Reset Logic 
- Best example of Nodemailer is sending the password reset logic
- Intergrate Frontend for better understanding 
- Complete Process from signup/login - forget password - send reset password link - & set the new password


## Scene3.0: Token Blacklisting
- Once password is reset, there is a possiblity of old token used for any Protected Routes, As the auth middleware doesn't know the token is old, 
- So best solution to avoid misusing the tokens is blacklist the token
- Generate a collection called black Listed tokens, just push the refresh token/password reset token into the collection 
- Also take care whether these tokens are not present in the collection along with token validation
- Update the auth middleware
