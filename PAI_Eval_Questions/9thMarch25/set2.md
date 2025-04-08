
## Problem Statement: **House Repair Management System**

Design and implement a RESTful API using **Node.js**, **Express**, and **MongoDB (Mongoose)** for a **House Repair Management System**. The platform enables **House Owners** to create and manage houses with room specifications, while **Repairers** can view available houses, apply for repairs, update repair status, and generate bills.

---

## Data Models

### 1. **User Model**

The `User` model should include the following fields:

- **`name`** – This field is required and should store the user's name as a string.
- **`email`** – This is a required string field and must be unique for every user in the system.
- **`role`** – This is a required enum field that can be either `"owner"` or `"repairer"`.

This ensures clean user segregation and functionality mapping based on roles.

---

### 2. **House Model**

The `House` model should include the following fields:

- **`name`** – A required string representing the house name.
- **`address`** – An optional string representing the house address.
- **`owner`** – A required reference (`ObjectId`) to the user who owns the house.
- **`repairStatus`** – A boolean indicating whether the house needs repair (`true`) or not (`false`). Defaults to `false`.
- **`repairer`** – An optional reference (`ObjectId`) to the user assigned as the repairer.
- **`bill`** – A numeric field storing the bill amount after repair completion. Defaults to `0`.

#### Rooms (Embedded Subdocuments):

- **`rooms`** – An array of subdocuments. Each room includes:
  - `floorArea` – Required number representing the area in sq ft.
  - `numWindows` – Optional number (default: 0).
  - `numWalls` – Optional number (default: 4).

> **Note:** Rooms are embedded subdocuments inside the house schema, not separate collections.

---

## Functional Requirements

### Owner Functionalities

- Create a new user with role `"owner"`.
- Create a new house.
- Add or remove rooms in a house.
- Change the `repairStatus` to `true` or `false` (to list or delist from repair queue).
- Delete a user:
  - All their owned houses should be deleted automatically.

---

### Repairer Functionalities

- Create a new user with role `"repairer"`.
- View all houses where `repairStatus === true`.
- Apply to repair a house (set `repairer` and change `repairStatus` to `false`).
- Generate and attach a bill to the house after repair using the formula:
  ```
  Bill = Σ (floorArea * 200 + numWindows * 50 + numWalls * 100)
  ```
- Delete a repairer:
  - Their ID should be removed from all assigned houses.
  - Bill should be reset to `0`.

---

### Special Route: Repairer Dashboard

- **Route:** `GET /repairer/:repairerId/dashboard`
- **Response:**
```json
{
  "repairer": "John Doe",
  "totalBillAmount": 12000,
  "repairedHouses": [
    { "houseName": "Sky Residency", "bill": 7000 },
    { "houseName": "Ocean View", "bill": 5000 }
  ]
}
```

This route should calculate the sum of all bills from houses repaired by the given repairer.

---

## Middleware Requirements

### 1. **Custom Logger Middleware**

- Log for every request:
  - HTTP Method
  - Request URL
  - Timestamp

### 2. **Rate Limiting Middleware**

- Apply to all **GET** routes:
  - Limit: **5 requests per minute per IP**
  - Auto-reset after 1 minute

---

## Special Note

To establish a **complete and consistent sense of relationship**, ensure the following edge cases are handled:

- When a user is deleted:
  - If **owner**, delete all their houses.
  - If **repairer**, remove their ID from `repairer` field of houses and reset the `bill` to `0`.

---

## Best Practices & Conventions

- Maintain a clean folder structure: `models/`, `routes/`, `controllers/`, `middlewares/`, `config/`
- Use `.env` for sensitive configuration (`PORT`, `MONGO_URI`, etc.)
- Use `mongoose.populate()` to fetch user details in houses
- Use modular controllers and separation of concerns

---

## Submission Instructions

- Submit the Masai Repo Link

---

