## Vehicle Renting App

### Problem Statement

Build a **Node.js + Express + MongoDB** application called **Vehicle Renting App**, where two roles—**Owner** and **Rider**—can interact with the system based on their access rights.

The application enables Owner to share their Vehicles and Riders to rent them, with proper rental restrictions and automation. allowed category of books are `2Wheeler`, `Car`, `Bus` & `MiniBus`

---

### Functional Requirements

#### Roles:

- **Owner**: Can perform **CRUD operations** on vehicles they own.
- **Rider**: Can **view available vehicles** and **rent** them with limits.

---

### Database Design

- Design a **flexible schema** that supports the functionalities and interactions described in the problem.
- Maintain proper **relationships** between users (owners/riders) and vehicles.
- Include fields that track vehicle availability and current renter details.

---

### Basic Features

#### For **Owner**:

- Create, read, update, and delete vehicles.
- Only manage their own vehicle listings.

#### For **Rider**:

- View all **available** vehicles.
- Rent a vehicle — this should:
  - Mark the vehicle as **rented**
  - Associate the vehicle with the rider’s ID

---

### Additional Features

- **Cron Job + Redis Integration**:
  - Set up a **cron job to run every 2 minutes**.
  - Any vehicle rented should automatically **become available** after this time.
  - Use **Redis** to store and track the rented vehicle IDs and manage expiry.

---

### Authentication

- Implement `/signup` and `/login` routes.
- **Store raw passwords** (no password hashing needed).
- On login, **generate a JWT token** and use it for all protected operations.

---

### Middlewares

1. **Auth Middleware**:

   - Verifies the validity of JWT token.
   - Ensures the role (`owner` or `rider`) is authorized for the route.

2. **Deletion Watcher Middleware**:

   - Blocks deletion of vehicles that are currently **rented**.

3. **Rent Control Middleware**:
   - Prevents a **Rider** from renting **more than 2 vehicles at a time**.

---

### Other Instructions

- **Commit your code every 20 minutes** or after meaningful updates.
- Maintain a **modular project structure**:
  - Organize code into `routes/`, `controllers/`, `models/`, `middlewares/`, `cron/`, `config/`
- Use `.env` to manage sensitive configurations like `PORT`, `MONGO_URI`, `JWT_SECRET`, etc.
- **Submit your code to your Masai GitHub account**, and share the repository link through the designated portal.

---
