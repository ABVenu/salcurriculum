

## Problem Statement: **House Repair Management System**

Design and implement a RESTful API using **Node.js**, **Express**, and **MongoDB (Mongoose)** for a **House Repair Management System**.

This system handles:

* **Owners**: Can register and create houses.
* **Repairers**: Can register and mark repairs complete.

---

## Data Models

### 1. **User Model**

* `name`: `String`, required
* `email`: `String`, required, unique
* `role`: Enum: `"owner"` or `"repairer"` (required)

---

### 2. **House Model**

* `name`: `String`, required
* `address`: `String`, optional
* `floorArea`: `Number`, required (in sqft)
* `owner`: `ObjectId`, required (reference to `User`)
* `repairStatus`: `Boolean`, default `false`
* `repairer`: `ObjectId`, optional (reference to `User`)
* `bill`: `Number`, default `0`

> 💡 **Bill Formula:**

```js
bill = floorArea * 1000;
```

---

## Required Routes ✅ (Only The Following 5 Routes)

### 1. **Register a User**

* **Route:** `POST /users/register`
* **Body:**

```json
{
  "name": "Alice",
  "email": "alice@example.com",
  "role": "owner" // or "repairer"
}
```

---

### 2. **Create a House (Owner Only)**

* **Route:** `POST /homes/add-home/:userID`
* **Params:** `userID` (must be an owner)
* **Body:**

```json
{
  "name": "Palm Villa",
  "address": "MG Road",
  "floorArea": 1200
}
```

---

### 3. **Mark House for Repair (Owner Initiates Repair)**

* **Route:** `PATCH /homes/add-repair/:homeId?ownerId=<userID>`
* **Action:**

  * Set `repairStatus` to `true`

---

### 4. **Mark Repair Completed (Repairer Finalizes Repair)**

* **Route:** `PATCH /homes/repair-complete/:homeId?repairerId=<userID>`
* **Action:**

  * Set `repairStatus` to `false`
  * Assign `repairer`
  * Set `bill = floorArea * 1000`

---

### 5. **Get Total Repair Amount**

* **Route:** `GET /users/repairs/:userID`
* **Logic:**

  * If user is an **owner**: return total bill amount of houses they own
  * If user is a **repairer**: return total bill amount of houses they repaired

---

## Middleware Requirement

### ✅ Logger Middleware

Implement a custom logger middleware that logs every incoming request:

* HTTP method
* Request URL
* Timestamp

> 💡 Sample Log:

```
[2025-07-11T22:05:00.456Z] PATCH /homes/repair-complete/64a5...?repairerId=xyz123
```

---

## Notes

* Design proper Mongoose schemas and maintain relationships between users and houses.
* Ensure **data integrity**:

  * Check if owner exists before creating a house.
  * Check if house and user exist before updating repair status.
  * Ensure repairer and house exist before marking repair complete.
* Handle errors gracefully with meaningful messages (e.g., "User not found", "House does not exist", etc.).

---

## ✅ Submission Instructions

* Push your code to a **GitHub repository** created under your **Masai GitHub account**.
* Ensure the repo contains:

  * `models/`, `routes/`, `controllers/`, `middlewares/`, and `.env.example`
  * A properly documented `README.md`
* Submit the **GitHub repo link** as your final submission.

