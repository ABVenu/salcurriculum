### **PSC: Build a Car Rental System with Admin & Customer Routes**  

#### **Objective:**  
Develop a **Car Rental System** using **Express.js** that enables **admins** to manage car inventory (CRUD) and **customers** to rent and return cars. Implement middleware for request logging, return validation, and transaction logging.  

---

##  **Problem Statement**  
You have been hired as a **backend developer** for a **car rental company**. The company allows **admins** to manage the fleet of rental cars and **customers** to rent and return cars.  

In the first meeting, the **Rental Manager** explains:  
> *"Our car rental system should allow admins to add, update, and remove cars. Customers should be able to browse available cars, rent a car, and return it when they are done. However, once a car is rented, it should not be available to other customers until it is returned."*  

The **Tech Lead** adds:  
> *"We need to track who rented the car and when. Also, to prevent quick turnovers, cars cannot be returned within 2 days of renting. We should also have middleware that logs all transactions whenever a car is rented or returned."*  

To build this system, you will **split the routes into two sections**:  

---

### ** Task 1: Admin Routes for Managing Cars**  
- **Admin can perform full CRUD operations on cars.**  
- Each car should have:  
  - `id` (Unique identifier)  
  - `brand` (e.g., Toyota, BMW)  
  - `model` (e.g., Corolla, X5)  
  - `year` (Manufacturing year)  
  - `rentalPricePerDay` (Cost per day)  
  - `status` (either `"available"` or `"rented"`)  
- Cars will be stored in `db.json`.  

✅ **Admin Routes:**  
- `POST /admin/cars` → Add a new car.  
- `GET /admin/cars` → Get all cars (both available and rented).  
- `PATCH /admin/cars/:id` → Update car details.  
- `DELETE /admin/cars/:id` → Remove a car.  

---

### ** Task 2: Customer Routes for Renting & Returning Cars**  
✅ **Customer Routes:**  
- `GET /customer/cars` → Fetch **only available** cars.  
- `POST /customer/rent/:id` → Rent a car.  
- `POST /customer/return/:id` → Return a car.  

#### **Renting a Car (`POST /customer/rent/:id`)**  
- A customer can rent a car only if it's **available**.  
- The request must include the **customer’s name**.  
- When a car is rented:  
  - The car’s `status` changes from `"available"` → `"rented"`.  
  - The `rentedBy` field is updated with the **customer’s name**.  
  - The `rentedDate` is set to the **current date**.  
- Example request:  
  ```json
  {
    "customerName": "Alice Smith"
  }
  ```
- Example car entry after renting:  
  ```json
  {
    "id": 2,
    "brand": "Toyota",
    "model": "Corolla",
    "year": 2022,
    "rentalPricePerDay": 50,
    "status": "rented",
    "rentedBy": "Alice Smith",
    "rentedDate": "2025-03-24"
  }
  ```

#### **Returning a Car (`POST /customer/return/:id`)**  
- A car can only be returned if **at least 2 days** have passed since it was rented.  
- If attempted before 2 days, the request should be rejected with:  
  ```json
  { "error": "Car cannot be returned within 2 days of renting." }
  ```
- When a car is returned:  
  - The car’s `status` changes back to `"available"`.  
  - The `rentedBy` and `rentedDate` fields are **cleared**.  

---

### ** Task 3: Middleware Implementation**  

**1. Logger Middleware (`loggerMiddleware.js`)**  
- Logs **every request** (method, route, and timestamp).  
- Example logs:  
  ```
  [2025-03-24 10:00:00] POST /admin/cars
  [2025-03-24 10:05:10] GET /customer/cars
  [2025-03-24 10:10:30] POST /customer/rent/2
  ```

**2. Return Check Middleware (`returnCheckMiddleware.js`)**  
- Ensures that a **car cannot be returned within 2 days** of renting.  
- If a user tries to return a car early, respond with:  
  ```json
  { "error": "Car cannot be returned within 2 days of renting." }
  ```

**3. Rental Transaction Logger (`transactionLogger.js`)**  
- Logs whenever a car is **rented or returned**.  
- Example log:  
  ```
  [2025-03-24 11:00:00] Alice Smith rented "Toyota Corolla"
  [2025-03-26 14:15:20] Alice Smith returned "Toyota Corolla"
  ```

---

### ** Challenges & Considerations**  
- How will you **handle cases where a car ID does not exist**?  
- How will you ensure that **only available cars can be rented**?  
- What strategy will you use to **store and retrieve rental details efficiently**?  
- How will you **restrict cars from being returned too early**?  

---

### ** Your Approach**  
- **Follow MVC architecture**:  
  - Separate **models, controllers, and routes**.  
  - Use **Express Router** for better code organization.  
- **Implement proper error handling** for missing resources and invalid inputs.  
- **Use appropriate HTTP status codes** for responses.  

---

### ** Submission Guidelines**  
- Push your code to a **Masai GitHub repository**.  
- Include a **README** with setup instructions.  

---
