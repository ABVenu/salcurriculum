## JavaScript Problem: Custom Reducer – Total Age Calculator

### **Objective:**

Create a **custom reducer function** that behaves like JavaScript’s `.reduce()` — to calculate the total of a specific property from an array of objects.

---

### **Reference Example (for understanding only):**

Here’s how `.reduce()` works on simple numbers:

```js
const numbers = [1, 2, 3, 4];

const add = (acc, num) => acc + num;

const result = numbers.reduce(add, 0);
console.log(result); // Output: 10
```

---

### **Your Task:**

1. Write a function named **`customReduce`** that:

   - Takes **three arguments**:
     - An array of **objects**
     - A **callback function**
     - An **initial value**
   - Returns a **single value** by applying the callback on every object and accumulating the result.

2. - Use arrow functions
   - Use the spread operator
   - **Do not use `.reduce()`**

3. After completing the code, answer:
   - Which is the **callback function**?
   - Which is the **higher-order function**?

---

### **Data to Use:**

```js
const users = [
  { name: "Alice", age: 24 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
  { name: "Eve", age: 22 },
];
```

---

### **Expected Usage:**

```js
// A function that takes an accumulator and a user object, and returns updated accumulator by adding user’s age
const addAge = // you write this!

const totalAge = customReduce(users, addAge, 0);
console.log(totalAge);
```

---

### **Expected Output:**

```js
93;
```

---

### ✍️ Final Step:

After writing your function, clearly mention:

- 👉 **Callback Function**: ****\_****
- 👉 **Higher-order Function**: ****\_****

---

## NEM Project

## Problem Statement: **Pet Care Management System API**

Design and implement a RESTful API using **Node.js**, **Express**, and **MongoDB (Mongoose)** for a **Pet Care Management Platform**. The platform enables two types of users: **PetParents** and **Veterinarians**. PetParents can register pets, while Veterinarians can manage their availability and handle pet consultations through appointments.

---

## Data Models

### 1. **User Model**

The `User` model should include the following fields:

- **`name`** – Required string representing the user's name.
- **`email`** – Required and unique string to ensure one user per email.
- **`role`** – Required string with enum values: `"PetParent"` or `"Veterinarian"`.

This model captures the base identity of all users and distinguishes their role in the platform.

---

### 2. **Pet Model**

The `Pet` model should include the following fields:

- **`name`** – Required string representing the pet's name.
- **`type`** – Optional string indicating the pet's type (e.g., dog, cat).
- **`age`** – Optional number field for the pet's age.
- **`owner`** – Required reference (`ObjectId`) to a user with the `"PetParent"` role.
- **`consultations`** – An embedded array of subdocuments, each added by the vet after closing an appointment. Each item should have:
  - `status`: A string indicating visit status (e.g., "completed", "follow-up").
  - `notes`: A string detailing the vet's notes.
  - `consultationFee`: Number for fee charged.
  - `veterinarian`: Reference to a user with `"Veterinarian"` role.
  - `timestamp`: Defaults to the current date and time.

---

### 3. **Veterinarian Profile Model**

The `VeterinarianProfile` model should include the following fields:

- **`user`** – Required reference to a `User` with the `"Veterinarian"` role.
- **`availableDays`** – An array of strings (e.g., `["Mon", "Tue"]`) indicating weekly availability.
- **`isAvailable`** – Boolean flag indicating whether the vet is currently available for appointment.
- **`currentAppointment`** – Optional reference to a `Pet` that is currently being treated.

> **Note:** Only Veterinarians have associated profiles with availability and appointment status.

---

## Functional Requirements

### PetParent Functionalities

- Create a new Pet linked to the logged-in user.
- Schedule an appointment with a veterinarian:
  - Only vets available on the current weekday and marked `isAvailable: true` can be booked.
  - Upon booking, set `isAvailable: false` and assign the `currentAppointment` to the selected pet.
- View pet details and all consultations.

---

### Veterinarian Functionalities

- Set or update availability (`availableDays`, `isAvailable`).
- Close an appointment:
  - Add consultation details (status, notes, fee, pet reference) to the pet's record.
  - Set `isAvailable: true` and clear `currentAppointment`.

---

## Middleware Requirements

### 1. **Custom Logger Middleware**

- Log the following for every incoming request:
  - HTTP method
  - Request URL
  - Timestamp

### 2. **Rate Limiting Middleware**

- Apply rate limiter to **all GET routes**:
  - Max 5 requests per minute per IP.
  - Auto reset after 1 minute.

---

## Special Functional Route

### **Veterinarian Dashboard**

- **Route:** `GET /vets/:vetId/dashboard`
- **Response should include:**
  - Total number of consultations handled
  - Total consultation fees collected
  - List of pet names treated

---

## Relationship Handling & Data Integrity

- When a **PetParent** is deleted:
  - All pets created by them should also be deleted.
- When a **Veterinarian** is deleted:
  - All `consultations` in pets referencing that vet should be removed.
  - Their `VeterinarianProfile` should also be deleted.

---

## Best Practices & Conventions

- Maintain clean project structure: `models/`, `routes/`, `controllers/`, `middlewares/`, `config/`
- Use `.env` for sensitive values like `PORT`, `MONGO_URI`, etc.
- Use `mongoose.populate()` to simplify reference data queries.
- Use modular controller files and route handling.
- Protect role-based access (e.g., only PetParents can create pets).

---

## Submission Instructions

- Submit the Masai Repo Link

---
