**Scene 2.0**

### \*What is the purpose of this server-side Socket.IO code?\*\*

```javascript
io.on("connection", (socket) => {
  socket.on("chatMessage", (msg) => {
    io.emit("chatMessage", msg);
  });
});
```

A) When a client sends a "chatMessage" event, the server broadcasts the message to all connected clients
B) It disconnects all clients when they send a "chatMessage"
C) It listens only for system events, not client messages
D) It stores chat messages in a database

**Answer:** A) When a client sends a "chatMessage" event, the server broadcasts the message to all connected clients

---

### **What does this code do on the client side?**

```javascript
socket.on("notification", (data) => {
  alert(`New notification: ${data.text}`);
});
```

A) Sends a notification to the server
B) Listens for "notification" events from the server and shows an alert with the message text
C) Emits a notification event to all clients
D) Connects the client to a notification service

**Answer:** B) Listens for "notification" events from the server and shows an alert with the message text

### **What is the difference between `io.on("connection", callback)` and `socket.on("event", callback)` in this Socket.IO server code?**

```javascript
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("message", (msg) => {
    console.log("Received message:", msg);
  });
});
```

A) `io.on("connection")` listens for new client connections, while `socket.on("message")` listens for messages from a specific connected client
B) Both listen for messages from all clients
C) `io.on` listens for client disconnections, `socket.on` listens for connections
D) `socket.on` listens for new client connections, `io.on` listens for messages

**Answer:** A) `io.on("connection")` listens for new client connections, while `socket.on("message")` listens for messages from a specific connected client

---
