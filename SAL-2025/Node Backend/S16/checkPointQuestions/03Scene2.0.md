**Scene 2.0**

### **Which of the following correctly passes a Bearer token in the headers using `fetch` in JavaScript?**

A)

```javascript
fetch("/api/data", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
```

B)

```javascript
fetch("/api/data", {
  method: "GET",
  auth: token,
});
```

C)

```javascript
fetch("/api/data", {
  auth: `Bearer ${token}`,
  headers: {
    "Content-Type": "application/json",
  },
});
```

D)

```javascript
fetch("/api/data", {
  headers: {
    authorization: token,
  },
});
```

**Answer:** A)

```javascript
fetch("/api/data", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
```

---
