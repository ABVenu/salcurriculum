**Scene 3.0**

### **What does the following server-side code using `chatArray` do?**

```javascript
let chatArray = [];

io.on("connection", (socket) => {
  socket.emit("chatHistory", chatArray);
});
```

A) Sends the existing chat history to the newly connected client
B) Clears the chat history every time a new client connects
C) Sends chat history to all connected clients
D) Saves new messages into the database

**Answer:** A) Sends the existing chat history to the newly connected client

### **What is the purpose of this code inside the Socket.IO server?**

```javascript
let chatArray = [];

io.on("connection", (socket) => {
  socket.on("newMessage", (msg) => {
    chatArray.push(msg);
    io.emit("newMessage", msg);
  });
});
```

A) Stores incoming messages in `chatArray` and broadcasts each to all connected clients
B) Stores messages but doesn't send them to clients
C) Sends messages to one random client only
D) Overwrites `chatArray` with the new message every time

**Answer:** A) Stores incoming messages in `chatArray` and broadcasts each to all connected clients

---

### **What does the following combination of server and client code accomplish?**

**Server:**

```javascript
let chatArray = [];

io.on("connection", (socket) => {
  socket.emit("chatHistory", chatArray);

  socket.on("message", (msg) => {
    chatArray.push(msg);
    io.emit("message", msg);
  });
});
```

**Client:**

```javascript
socket.on("chatHistory", (history) => {
  history.forEach((msg) => displayMessage(msg));
});
```

A) When a user joins, they receive past messages and see new ones in real-time
B) The client only gets new messages, not chat history
C) Messages are stored per user and not shared
D) History is broadcasted to all users every time someone joins

**Answer:** A) When a user joins, they receive past messages and see new ones in real-time

---
