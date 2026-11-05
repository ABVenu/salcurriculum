**Scene 1.0**

### **What is the main purpose of Role-Based Access Control (RBAC) in backend systems?**

A) To reduce the need for authentication
B) To allow users to register multiple times
C) To restrict access to resources based on the user's assigned role
D) To encrypt user data before saving it in the database

**Answer:** C) To restrict access to resources based on the user's assigned role

### **Why is Role-Based Access Control (RBAC) implemented as part of the authentication middleware in a Node.js backend?**

A) To centralize role checks and prevent unauthorized access before the controller logic executes
B) To improve frontend routing performance
C) To allow route handlers to skip authentication checks
D) To delay token verification until after the database operations

**Answer:** A) To centralize role checks and prevent unauthorized access before the controller logic executes

### **Which of the following code snippets correctly demonstrates how roles are passed in an RBAC middleware function in Express?**

A)

```js
const checkRole = (req, res, next, role) => {
  if (req.user.role === role) next();
  else res.status(403).send("Forbidden");
};
```

B)

```js
const checkRole = (role) => {
  return (req, res, next) => {
    if (req.user.role === role) next();
    else res.status(403).send("Forbidden");
  };
};
```

C)

```js
function checkRole(role, req, res, next) {
  if (req.user.role === role) next();
  else res.send("Not Allowed");
}
```

D)

```js
const checkRole = (req, res, role, next) => {
  if (role === req.user.role) return next;
  else return res.status(401);
};
```

**Answer:** B)

```js
const checkRole = (role) => {
  return (req, res, next) => {
    if (req.user.role === role) next();
    else res.status(403).send("Forbidden");
  };
};
```

---

---

---
