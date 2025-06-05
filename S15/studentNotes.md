# Real-Time Communication: Events, Sockets & Chats

#### [Live Coding Notes - Simplechatapp](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/656212dc-37bc-4dcc-96ff-1ece0a5225c6/HQMRBeX1peo2ICRJ.zip)

## Learning Objectives

By the end of this lesson, you will be able to:

- Understand what real-time communication is and why it’s important.
- Identify different types of communication: one-way, two-way, and full-duplex.
- Recognize the limitations of traditional HTTP request-response for real-time applications.
- Understand the concept of Event-Driven Architecture (EDA) and its role in real-time communication.
- Learn what WebSockets are and how they enable full-duplex communication.
- Understand the main terms and functions used in socket programming, especially with `socket.io`.
- Implement a basic real-time chat application using WebSockets and `socket.io`.
- Learn how to enhance a chat app by integrating Redis for fast message storage and MongoDB for backup with cron jobs.

---

## What is Real-Time Communication (RTC)?

Real-time communication means exchanging information instantly or with minimal delay so that both parties can interact almost simultaneously.

**Examples:**

- Chat messages
- Live delivery or order updates
- Video calls
- Voice calls

Here, we focus mainly on **text-based real-time communication** like chat apps and notifications.

---

## Types of Communication

Real-time communication can be categorized as:

1. **One-Way Communication**
   Only one side sends information, and the other just receives.
   _Example: Radio, TV broadcasts._

2. **Two-Way (Half-Duplex) Communication**
   Both sides can send messages but not at the same time. One must wait for the other.
   _Example: Walkie-talkies._

3. **Full-Duplex Communication**
   Both sides can send and receive messages simultaneously.
   _Example: Phone calls, chat applications._

---

## Why Traditional Request-Response Cycle Limits Real-Time Communication

![Req Res Cycle vs Sockets](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/4e42812a-b2ee-4b60-af22-9436ac598fb5/0zDc3zRZdMJLHXPt.png)

- Traditional HTTP follows a **request → response → close connection** pattern.
- For chat or live updates, constantly opening and closing connections is inefficient and slow.
- It also causes high server load and delays message delivery.
- We need a **persistent, always-open connection** to allow quick two-way data flow without repeated handshakes.

---

## Event-Driven Architecture (EDA)

EDA is a programming style where the application reacts to **events** (actions or changes).

- Events are triggers, like button clicks or incoming messages.
- Node.js uses this pattern heavily, making it efficient and scalable.
- This fits real-time apps perfectly: code runs only when an event happens, saving resources.

**Example:**
When User A sends a message, it triggers a `sendMessage` event. User B listens for an `appendMessage` event to display it instantly.

---

### Quick Code Example for EDA in Node.js

```javascript
const EventEmitter = require("events");
const emitter = new EventEmitter();

// Listen for 'greet' event
emitter.on("greet", (name) => {
  console.log(`Hello, ${name}`);
});

// Fire the 'greet' event with 'Alice'
emitter.emit("greet", "Alice");
```

**Output:**
`Hello, Alice`

---

## What Are WebSockets and How Do They Help?

- WebSocket is a protocol that allows **full-duplex communication** over a single, persistent TCP connection.
- It starts as a normal HTTP request and then upgrades to a WebSocket connection.
- This keeps the connection alive and allows the server and client to send messages to each other at any time.

---

### How WebSockets Work

1. Client sends an HTTP request asking to **upgrade** to WebSocket.

   ```http
   GET /chat HTTP/1.1
   Host: example.com
   Upgrade: websocket
   Connection: Upgrade
   ```

2. Server agrees and switches protocols.

3. A **persistent TCP connection** opens.

4. Both client and server can now send/receive messages freely.

![How Socket Works](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/8d94187c-fc22-4b6a-be23-c55de9f788a1/RGLgGQlfGmWcqpRm.png)

---

## Key Terms and Functions in Socket Programming (`socket.io`)

| Term            | Meaning                                                        |
| --------------- | -------------------------------------------------------------- |
| **Socket**      | A single connection between client and server.                 |
| **Server (io)** | The backend WebSocket server instance.                         |
| **Client**      | The frontend/browser that connects to the server.              |
| **Event**       | Named signals used to send or receive messages (e.g., 'chat'). |
| **Emit**        | Method to **send** an event with data.                         |
| **On**          | Method to **listen** for events.                               |
| **Broadcast**   | Send a message to all clients except the sender.               |
| **Room**        | Group of sockets for private or group messaging.               |

---

### Server-Side Example (Node.js + `socket.io`)

```js
io.on("connection", (socket) => {
  console.log("User connected");

  // Listen for chat messages from this client
  socket.on("chatMessage", (msg) => {
    console.log("Message received: ", msg);

    // Send message to all clients (including sender)
    io.emit("chatMessage", msg);

    // Or send to all except sender:
    // socket.broadcast.emit('chatMessage', msg);
  });

  // Detect when user disconnects
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});
```

---

### Client-Side Example (Browser JavaScript)

```js
const socket = io(); // Connect to server

// Send a message to server
socket.emit("chatMessage", "Hello Server");

// Listen for incoming messages
socket.on("chatMessage", (data) => {
  console.log("New message:", data);
});
```

---

### Typical Message Flow

```
Client emits 'sendMessage' with data
      ↓
Server listens with 'on(sendMessage)'
      ↓
Server emits 'newMessage' to clients
      ↓
Clients listen with 'on(newMessage)' and update UI
```

---

## Building a Basic Chat Application

![Simple Chat Application](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/49732978-5fad-42f1-b8b9-3e73de96dea8/aECsWm1Es2LrOEQH.png)

- Create a basic group chat app.
- Events used:

  - `register`: to register a user.
  - `sendMessage`: send a message to the server.
  - `chatHistory`: server sends chat history to clients.

- Frontend will be simple HTML listening for and emitting these events.
- Chats are stored temporarily in an array (local memory).

---

## Enhancing the Chat Application With Database Backup

![Simple Chat Application with Real Time Database Backup](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/628f50f7-cd66-4d73-9e19-1f60c96c8fe2/y00AXZNlYoS3fQxu.png)

- Use **Redis** for storing chats in real-time (fast access).
- Use a **cron job** to regularly backup chat messages from Redis into **MongoDB**.
- This setup simulates real-world chat apps where fast data is kept in memory and long-term data in the database.

---

## Important Pitfalls to Keep in Mind

- Moving from request-response model to event-driven architecture is a mindset change.
- Understand which events run on client and which on server.
- Redis is used as a fast in-memory store; MongoDB is for permanent storage. Directly using MongoDB for all chat data can be slow.

---

### Basic Chat Application

#### Backend (Node.js + Express + socket.io)

```js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;
const chatMessages = []; // stores chat history in memory

// Serve static files (frontend)
app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("User connected: ", socket.id);

  // Send existing chat history to new client
  socket.emit("chatHistory", chatMessages);

  // Listen for new chat messages
  socket.on("sendMessage", (msg) => {
    const message = {
      id: socket.id,
      text: msg,
      time: new Date().toLocaleTimeString(),
    };
    chatMessages.push(message);

    // Broadcast message to all clients including sender
    io.emit("receiveMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected: ", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
```

---

#### Frontend (`public/index.html`)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Basic Chat App</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        max-width: 600px;
        margin: 30px auto;
      }
      #chat {
        border: 1px solid #ddd;
        height: 300px;
        overflow-y: scroll;
        padding: 10px;
      }
      #messageInput {
        width: 80%;
        padding: 8px;
      }
      #sendBtn {
        padding: 8px 12px;
      }
      .message {
        margin-bottom: 10px;
      }
      .time {
        font-size: 0.8em;
        color: gray;
        margin-left: 10px;
      }
    </style>
  </head>
  <body>
    <h2>Basic Chat Application</h2>
    <div id="chat"></div>
    <input id="messageInput" placeholder="Type a message..." />
    <button id="sendBtn">Send</button>

    <script src="/socket.io/socket.io.js"></script>
    <script>
      const socket = io();

      const chatDiv = document.getElementById("chat");
      const input = document.getElementById("messageInput");
      const sendBtn = document.getElementById("sendBtn");

      // Append message to chat div
      function appendMessage(msg) {
        const div = document.createElement("div");
        div.classList.add("message");
        div.textContent = msg.text;
        const timeSpan = document.createElement("span");
        timeSpan.classList.add("time");
        timeSpan.textContent = msg.time;
        div.appendChild(timeSpan);
        chatDiv.appendChild(div);
        chatDiv.scrollTop = chatDiv.scrollHeight; // auto scroll
      }

      // Load chat history on connect
      socket.on("chatHistory", (messages) => {
        chatDiv.innerHTML = ""; // clear before adding
        messages.forEach(appendMessage);
      });

      // Receive new messages
      socket.on("receiveMessage", (msg) => {
        appendMessage(msg);
      });

      // Send message to server
      sendBtn.addEventListener("click", () => {
        const text = input.value.trim();
        if (text) {
          socket.emit("sendMessage", text);
          input.value = "";
          input.focus();
        }
      });

      // Optional: send message on Enter key
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          sendBtn.click();
        }
      });
    </script>
  </body>
</html>
```

---

### How to Run

1. Save backend code in `server.js`
2. Create folder `public` and save frontend as `public/index.html`
3. Run:

   ```
   npm init -y
   npm install express socket.io
   node server.js
   ```

4. Open browser at `http://localhost:3000` in multiple tabs to test chatting.

---

This is a very basic example with no authentication or database — just enough to show real-time communication using sockets and event-driven architecture. You can enhance this by adding user registration, persistent storage, message timestamps, typing indicators, etc.

---

## Conclusion

Real-time communication is essential for modern interactive applications like chats, notifications, and live updates. Traditional HTTP request-response cycles don’t meet the needs of such apps due to their limitations in bidirectional, persistent communication.

WebSockets combined with event-driven architecture provide a powerful way to implement full-duplex communication, enabling instant data exchange. Libraries like `socket.io` simplify the implementation of sockets with easy-to-use methods for emitting and listening to events.

Building a basic chat app is a great way to understand these concepts. Further enhancements with Redis and MongoDB show how real-world applications handle performance and persistence.

---
