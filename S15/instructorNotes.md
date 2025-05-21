#### Real-Time Communication: Events, Sockets & Chats

### Learning Objectives

## Scenes

**1.0** Real Time Communication & Event Driven Architecture

- 1.1 - what is real time communication, why they are needed?? typical examples
- 1.2 - Types of communication, oneway, twoway, duplex
- 1.3 - Establishment of limitation of req-res cycle in case of real time communication, which is duplex communication
- 1.4 - Brief overview of EDA, why events to be used in case of Real Time Communication/Updations
- 1.5 - Simple snippets for understand the EDA

**2.0** Introduction and Implementation of Sockets

- 2.1 - what are sockets?, how they help is duplex communication?
- 2.2 - working principles of sockets
- 2.3 - Terminologies/inbuilt functions used in sockets
- 2.4 - Implementation of basic chat application using socket.io, where chats are stored in simple array locally

**3.0** Enhancing Simple Chat Application By Integrating DB Backup

- 3.1 - enhancing chat application by storing chats in Redis and Regular backups in Mongo DB using cron

## Pitfalls

**1.0**

- Switch from req - response cycle to EDA

**2.0**

- How events are created and consumed ?
- Which are the events created in server side, which are the event created in client side

**3.0**

- Integration of Redis then Mongo, why not directly Mongo??

## Content/Pedagagoy

### **Scene 1.0: Real-Time Communication & Event-Driven Architecture**

---

#### **1.1 What is Real-Time Communication (RTC)?**

- Real-time communication refers to the exchange of information with minimal delay, allowing for nearly simultaneous interactions between sender and receiver.
- Examples include:

  - Chat messages
  - Live order or delivery notifications
  - Video calls
  - Voice calls (e.g., a phone call)

> In this session, we will focus specifically on **text-based real-time communication**, such as **chat applications** and **notification systems**.

---

#### **1.2 Types of Communication**

Real-time communication can be broadly classified into three types based on how information flows:

1. **One-Way Communication:**

   - Only one side can send information; the receiver cannot respond.
   - **Examples:** Radio broadcasts, Television programs.

2. **Two-Way (Half-Duplex) Communication:**

   - Both parties can communicate, but not simultaneously. One must wait for the other to finish.
   - **Examples:** Walkie-talkies (used by police), Traditional client-server model.

3. **Duplex (Full-Duplex) Communication:**

   - Both parties can send and receive data at the same time, enabling seamless two-way interaction.
   - **Examples:** Phone calls, Chat apps, Video conferencing.

---

#### **1.3 Limitations of Request-Response Cycle in Duplex Communication**

The traditional **request-response model** (used in HTTP) follows a strict pattern:

- A client sends a request → server processes and responds → connection is closed.
- This model is fine for typical web applications but **not suitable for real-time duplex communication** where the connection must remain open.

> **In a chat application:**

- If each message triggers a new HTTP request, it becomes inefficient and server-intensive.
- Opening and closing connections repeatedly creates overhead and breaks the "live" experience.

Thus, for real-time and bidirectional communication, we need a model that:

- Keeps the connection alive,
- Sends/receives data dynamically,
- Reacts instantly when data is updated.

This is where **Event-Driven Architecture (EDA)** and **WebSockets** come into play.

---

#### **1.4 Introduction to Event-Driven Architecture (EDA)**

- EDA is a software architecture paradigm where the flow of the program is determined by **events**.
- You’ve already seen events in the frontend: `click`, `change`, `input`, etc.
- Similarly, **Node.js** has built-in support for events. In fact, Node.js gained popularity for its **asynchronous, non-blocking, event-driven** nature.

##### Why EDA for Real-Time Communication?

- In EDA, specific code executes **only when a particular event is triggered**.
- This makes the system **loosely coupled** – parts of the application remain inactive unless their corresponding event is fired.

> **Example use case in chat:**

- When **User A sends a message**, it triggers a `sendMessage` event.
- **User B’s system is listening for an `appendMessage` event**, which appends the new message to their chat window.

This approach allows dynamic, efficient, and real-time interaction between systems without constant polling or request overhead.

---

#### **1.5 Simple Code Snippet to Understand EDA in Node.js**

```javascript
const EventEmitter = require("events");
const emitter = new EventEmitter();

// Registering a listener
emitter.on("greet", (name) => {
  console.log(`Hello, ${name}`);
});

// Triggering the event
emitter.emit("greet", "Alice");
```

##### Explanation:

- `EventEmitter`: Core module in Node.js used to handle events.
- `.on('greet', callback)`: Listens for the `greet` event.
- `.emit('greet', 'Alice')`: Fires the event with data (`'Alice'`).

> Output:
> `Hello, Alice`

---

### Scene 2.0: Introduction and Implementation of WebSockets

#### 2.1 - what are WebSockets?, how they help is duplex communication?

- WebSocket is a standardized communication protocol that enables simultaneous two-way communication over a single TCP connection.
- It has full-duplex or bi-directional capabilities that distinguishes it from HTTP. WebSocket achieves HTTP compatibility by using the HTTP Upgrade header to transition protocols. It allows servers to push content to clients without initial requests and maintains open connections for continuous message exchange, making it ideal for real-time data transfer

#### **2.2 How Sockets Work: The Underlying Principle**

The typical **lifecycle of a WebSocket connection** looks like this:

1. **Client sends an HTTP request** with an `Upgrade` header:

   ```http
   GET /chat HTTP/1.1
   Host: example.com
   Upgrade: websocket
   Connection: Upgrade
   ```

2. **Server agrees and switches protocols** to WebSocket.
3. A **persistent TCP connection** is established.
4. Now, **both client and server** can emit and listen to custom **events** over this connection.

##### Simplified Steps:

1. **Handshake**: A normal HTTP request is made with a special header asking the server to upgrade the connection to WebSocket.
2. **Upgrade Acknowledged**: Server accepts and upgrades the protocol.
3. **Persistent Socket Channel**: A bi-directional, event-based channel is established.
4. **Real-Time Data Exchange**: Both ends can send or receive messages anytime.

##### Internally:

- WebSocket runs over **TCP** (not HTTP).
- It starts as HTTP for the handshake but then upgrades to a different protocol.
- The connection remains open until either client or server closes it.

##### Why It Matters:

- Saves bandwidth and time by avoiding repeated handshakes.
- Enables truly **interactive** applications.
- Reduces latency to near-zero for real-time interactions.

-- INSERT AN IMAGE HERE

#### 2.3 - Terminologies/inbuilt functions used in sockets

Here’s an improvised and clear explanation for:

---

### **2.3: WebSocket Terminologies & Common Functions (Using `socket.io`)**

Once the socket connection is established, communication happens through **events**. Let’s break down key **terminologies and inbuilt functions** commonly used in `socket.io` (a library that simplifies WebSocket usage in Node.js):

---

#### Key Terminologies in Socket.IO

| Term            | Description                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------- |
| **Socket**      | Represents an individual connection between the client and server.                           |
| **Server (io)** | The central WebSocket engine running on the backend (`io.on(...)`).                          |
| **Client**      | The browser or frontend code connecting to the server using `socket.connect()`.              |
| **Event**       | Named signal used to send or receive messages (e.g., `'message'`, `'chat'`).                 |
| **Emit**        | Method used to **send** an event.                                                            |
| **On**          | Method used to **listen** for an event.                                                      |
| **Broadcast**   | Sends a message to **all clients except the sender**.                                        |
| **Room**        | A logical group of sockets that can communicate together (used in group chats, games, etc.). |

---


##### Important Server-Side Functions (Node.js)

```js
io.on('connection', (socket) => {
  console.log('User connected');

  // Listen to a custom event
  socket.on('chatMessage', (msg) => {
    console.log('Message received: ', msg);
    
    // Send to all including sender
    io.emit('chatMessage', msg);

    // OR: Send to everyone *except* sender
    // socket.broadcast.emit('chatMessage', msg);
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});
```

* `io.on('connection')`: Listens for a new socket connection from a client.
* `socket.on(...)`: Listens for a specific event sent from the client.
* `socket.emit(...)`: Sends an event to **this particular client**.
* `io.emit(...)`: Sends an event to **all connected clients** (broadcast including sender).
* `socket.broadcast.emit(...)`: Sends to **everyone except the sender**.

---

#### Client-Side Functions (Browser / Frontend JS)

```js
const socket = io(); // Connect to server

// Send a message to server
socket.emit('chatMessage', 'Hello Server');

// Receive a message from server
socket.on('chatMessage', (data) => {
  console.log('New message:', data);
});
```

* `io()` – Initiates connection with the server
* `socket.emit(...)` – Sends data to server via a named event
* `socket.on(...)` – Listens for events from the server

---

#### Event Lifecycle Summary

``` 
Client: emit('sendMessage', data) // sends message
       ↓
Server: on('sendMessage', callback) // receives message
       ↓
Server: emit('newMessage', data)  // sends message
       ↓
Client: on('newMessage', callback) // receieves message
```

#### 2.4 Implementation of Basic chat application using socket.io, where chats are stored in simple array locally

- Here in this section, a basic chat app (group chat) will be implemented, where focus will be on creating events like `register`-> which registers users into the DB, `sendMessage` which sends message to the server and inretun server sends `chatHistory` which is appended in the Frontend
- Also a simple frontend using HTML will be created where, some events will be listened and some events will be emitted, need to make students to get grip on that and should feel the EDA

### Scene 3.0: Enhancing Simple Chat Application By Integrating DB Backup
- The same previous chat application will be enhanced with DB Backup support, like All Chats are stored in the Redis, an Cron Job will be running, which pushes the Chat from Redis Into DB regularly
- With the above feature, we can simulate real life chatting application, which has frequent backup into DB, but real time Chats are stored in the Redis for ready reference.