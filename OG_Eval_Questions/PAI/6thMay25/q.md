# **User & System Utility API**

### Objective:

Build a backend service using **Node.js** and **Express** that demonstrates core backend concepts like routing, middleware, modularization, logging, and file system operations. The application will manage user data and provide system-level utilities such as random prime generation, DNS lookup, and system information.

---

## Project Specifications:

### **Routers & Routes**

#### `user` Router (`/users`)

- `POST /add`
  ➤ Add a new user.
  ➤ Store the user data persistently in a file named `db.json`.

- `GET /:id`
  ➤ Fetch and return user details by user ID from `db.json`.

- `DELETE /:id`
  ➤ Delete a user by their ID from `db.json`.

---

#### `system` Router (`/system`)

- `GET /randomprime/:num`
  - ➤ Generate a random **prime number** between 2 and the provided number.
  - ➤ Use a **custom module** named `randomPrime.js` to implement the prime generation logic.
  - ➤ Add a **route-level middleware** named `primeLimitChecker`:

  - If `num > 1000`, send response as `"Number Too Large"`.
  - Otherwise, proceed to generate the prime.

- `GET /getipdetails?website=masaischool.com`
  - ➤ Accept a `website` query parameter.
  - ➤ Use Node's `dns` core module to resolve and **log the IP address** of the website as json response.

- `GET /getsysteminfo`
  - ➤ Provide basic information about the system as a json response
  - Basic information such as 
    - Platform
    - Architecture
    - Uptime
    - Total and free memory
       - ➤ Use Node’s built-in `os` module for this purpose.

---

### **Middlewares**

#### Logger Middleware (Application-level)

- Log every incoming request’s:

  - HTTP method
  - URL
  - Timestamp

- Store the logs in a file named `logs.txt`.

#### Prime Limit Checker (Route-level)

- Apply **only** on `/randomprime/:num`.
- If `num > 1000`, return response: `"Number Too Large"` without processing further.

---

### **Third-Party Modules**

- Use the `colors` npm package to print the message **`Server Started`** in **`rainbow color`** in the callback of `app.listen`.

---

## File Requirements:

- Use proper file/folder structure:

  - Routers (`routes/user.js`, `routes/system.js`)
  - Middlewares (`middlewares/logger.js`, `middlewares/primeLimitChecker.js`)
  - Custom Modules (`utils/randomPrime.js`)

- Store user data in `db.json`.
- Log data in `logs.txt`.

---

## Coding Standards:

- Modular structure and separation of concerns.
- Use async file operations (`fs.promises` or `fs` with callbacks).
- Sanitize and validate route parameters where applicable.
- Use environment-friendly practices (don’t hardcode data).

---

## Deliverables:

- Functional Express app
- Modular routing, middleware, and utilities
- Frequent and meaningful **Git commits**
- Final project pushed to GitHub
- **Submit GitHub repository link** on the Masai Portal

#### Reference Docs
- DNS Module [Link](https://nodejs.org/api/dns.html#dnslookuphostname-options-callback)
- OS Module [Link](https://nodejs.org/api/os.html)
- FS Module [Link](https://nodejs.org/api/fs.html#fsappendfilepath-data-options-callback)
- Colors Module [Link]((https://www.npmjs.com/package/colors))
---
