## Equipment Rental Management System

### Problem Statement

Build a **Node.js + Express + MongoDB** application called **Equipment Rental Management System**, where two types of users—**Owner** and **Contractor**—can interact with the system based on their roles.

The application enables owners to share their equipments and Contractors to rent them, with proper rental restrictions and automation. allowed category of equipments are `construction`, `mechanical` & `mechanical`

Create schemas, maintain relationships in such a way that, it should support all the features asked below

---

### Functional Requirements

#### Roles:

- **Owner**: Can perform full CRUD operations on equipment.
- **Contractor**: Can only view **available** equipment and rent one item at a time.

---

### Database Design

- Create a **schema design** that supports all possibilities mentioned in this problem statement.
- Maintain proper **relationships** between users and equipment where necessary.
- Store user role information clearly and manage equipment ownership and rental linkage appropriately.

---

### Basic Features

#### For **Owner**:

- Add, view, update, and delete equipment.
- Only manage their own equipment listings.

#### For **Contractor**:

- View all **available** equipment.
- Rent an equipment — this should:
  - Mark equipment as unavailable
  - Link it to the contractor renting it

---

### Additional Features

- **Cron Job + Redis Integration**:
  - Use a cron job to run every **2 minutes**.
  - Any equipment rented should **automatically become available** after 2 minutes.
  - Use Redis to temporarily track rented equipment IDs with expiration logic.

---

### Authentication

- Implement `/signup` and `/login` routes.
- **Store raw passwords** (no password hashing needed).
- On login, **generate a JWT token** and use it for all protected operations.

---

### Middlewares

1. **Auth Middleware**:

   - Checks for a valid JWT token.
   - Confirms the user’s role before accessing protected routes.

2. **Deletion Watcher Middleware**:

   - Prevents deletion of equipment if it is currently **rented**.

3. **Rent Control Middleware**:
   - Ensures a contractor can rent **only one** equipment at a time.

---

### **Other Instructions**

- **Commit every 20 minutes** or after completing a logical unit of work.
- **Maintain a clean coding structure** with proper file and folder separation.
- **Segregate code** into appropriate folders like `routes/`, `controllers/`, `models/`, `middlewares/`, etc.
- **Use a `.env` file** to store sensitive information like `PORT`, `MONGO_URI`, `JWT_SECRET`, etc.
- **Finally, submit your GitHub repo link on the Masai GitHub Submission Portal**.
