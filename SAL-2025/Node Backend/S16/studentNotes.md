## Full Stack App: Integration & Deployment

### [Live Coding Notes](https://coding-platform.s3.amazonaws.com/dev/lms/tickets/611a8832-506a-4ba1-839d-f2614582a148/HYdJJBttmBDYNytN.zip)

### 1. **Create MongoDB Cluster**

- Go to [https://cloud.mongodb.com](https://cloud.mongodb.com) and sign in.
- Create a new **project** and then a **free shared cluster (M0)**.

### 2. **Create Database & User**

- After cluster is ready:

  - Click **“Browse Collections”** > **Add Database** (name like `myAppDB`)
  - Go to **Database Access** > Add a user (username & password)
  - Set **Read and Write** permissions.

### 3. **Set Network Access**

- Go to **Network Access** > Add IP Address:

  - Either choose **0.0.0.0/0** (access from anywhere) or **Add Current IP**

### 4. **Get Connection String**

- Go to **Clusters > Connect > Drivers > Node.js**
- Copy the format like:

  ```bash
  mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
  ```

### 5. **Update `.env`**

- Replace local MongoDB link with Atlas:

  ```env
  MONGO_URI=mongodb+srv://myuser:pass123@cluster0.mongodb.net/myAppDB?retryWrites=true&w=majority
  ```

### 6. **Update Mongoose Connection Code**

```js
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));
```

---

# 🛠️ Ideal Deployment Flow for Fullstack Projects

### 1. **Prepare Backend for Deployment**

- **Use Cloud Database URLs:**
  Replace local MongoDB connection strings with your cloud database URI (e.g., MongoDB Atlas) in your backend’s `.env` file (`MONGO_URI`).

- **Configure Environment Variables:**
  Make sure all required environment variables are set correctly (`PORT`, `JWT_SECRET`, `MONGO_URI`, `REDIS_URL` if used, etc.)

- **Test Locally:**
  Run the backend locally with cloud DB to ensure connectivity and all APIs function properly.

---

### 2. **Deploy Backend to Cloud**

- Use your chosen platform (Render, Heroku, AWS, DigitalOcean, etc.) to deploy backend.

- Make sure environment variables are set in the cloud provider’s dashboard exactly as in your `.env`.

- Once deployed, **test the deployed backend APIs** using tools like Postman or CURL to ensure all routes work as expected.

- Note down the **deployed backend URL**, e.g. `https://rental-api.onrender.com/api`.

---

### 3. **Configure Frontend for Backend Integration**

- In your frontend project, update the `.env` (e.g., `.env.local`) file with the deployed backend API URL:

  ```env
  VITE_API_BASE_URL=https://rental-api.onrender.com/api
  ```

- Adjust API call code (axios or fetch) to use this environment variable.

---

### 4. **Test Frontend Locally with Deployed Backend**

- Run frontend locally (`npm run dev` or `npm start`).

- Test all features that communicate with backend: authentication, data fetch, form submissions, etc.

- Ensure that the frontend correctly communicates with the deployed backend — no CORS errors or broken routes.

---

### 5. **Deploy Frontend to Cloud**

- Use deployment platforms like Netlify, Vercel, or Render for static sites.

- Set environment variables on the hosting platform as needed (e.g., `VITE_API_BASE_URL`).

- Deploy the frontend and verify the deployed frontend correctly interacts with the deployed backend.

---

### 6. **Final Testing and Validation**

- Test all user flows on the **fully deployed system** (deployed frontend + deployed backend).

- Check for any issues like slow API responses, broken routes, authentication failures.

- Verify error handling and UI feedback.

---

### 7. **Monitor and Maintain**

- Set up logs/monitoring on backend service.

- Monitor frontend errors with tools like Sentry.

- Periodically update dependencies, environment variables, and database backups.

---

# Summary Diagram

```
Local Dev
    ↓
Setup backend .env with cloud DB link
    ↓
Test backend locally (cloud DB)
    ↓
Deploy backend (Render, Heroku, etc.)
    ↓
Test deployed backend APIs
    ↓
Update frontend .env with deployed backend URL
    ↓
Test frontend locally (connected to deployed backend)
    ↓
Deploy frontend (Netlify, Vercel, etc.)
    ↓
Test full deployed system
```

---

## Documentation Of The Projects

---

## Ideal README for **Backend**

# 🚀 Equipment Rental Management System - Backend

[![Node.js](https://img.shields.io/badge/Node.js-Backend-green)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Cloud-blue)](https://www.mongodb.com/cloud)
[![Express.js](https://img.shields.io/badge/Express.js-Framework-lightgrey)](https://expressjs.com/)
[![Render](https://img.shields.io/badge/Deployed%20On-Render-orange)](https://render.com)

## 📖 Description

This is the backend REST API for an Equipment Rental Management System. It provides secure, role-based APIs to manage users, equipment, rentals, and billing. It is built with Node.js, Express, MongoDB Atlas, and uses JWT for authentication.

---

## 🌐 Live Links

- 🔗 API: [https://rental-api.onrender.com/api](https://rental-api.onrender.com/api)
- 📄 Postman: [Postman Collection](https://www.postman.com/your-collection-link)

---

## ⚙️ Tech Stack

- Node.js + Express.js
- MongoDB Atlas + Mongoose ODM
- JWT Authentication
- Redis (optional caching)
- Cron Jobs for scheduled tasks
- Nodemailer (optional email integration)

---

## 📁 Folder Structure

```
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
├── utils/
├── config.js
├── index.js
└── .env.example
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v16+
- MongoDB Atlas Cluster (or local MongoDB)
- Redis (optional for caching)

### Installation

```bash
git clone https://github.com/your-username/equipment-rental-backend.git
cd equipment-rental-backend
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/equipmentDB
JWT_SECRET=yourSuperSecretKey
REDIS_URL=redis://localhost:6379
```

---

## 📦 Available Scripts

```bash
npm run dev      # Runs backend in development mode with nodemon
npm start        # Runs backend in production mode
npm test         # Runs automated tests
```

---

## 🔐 Authentication & Roles

- JWT-based login and signup
- User roles: `owner`, `contractor`, `admin`
- Middleware to protect routes based on roles

---

## 📚 API Endpoints Overview

| Method | Endpoint       | Description              | Access     |
| ------ | -------------- | ------------------------ | ---------- |
| POST   | `/auth/signup` | Register a user          | Public     |
| POST   | `/auth/login`  | User login               | Public     |
| GET    | `/equipments`  | List all equipment       | Auth users |
| POST   | `/equipments`  | Add new equipment        | Owner only |
| POST   | `/rentals`     | Create a rental          | Contractor |
| GET    | `/rentals/my`  | Get rentals of logged-in | Contractor |

---

## 🧱 Database Models (Summary)

- **User:** name, email, password, role
- **Equipment:** title, description, price, availability, ownerId
- **Rental:** equipmentId, contractorId, rentDate, returnDate, bill

---

## 🧪 Testing

- Run `npm test` for automated tests
- Use Postman with provided collection to test endpoints manually

---

## 🧹 Best Practices Followed

- MVC project structure
- Input validation and error handling
- JWT and password hashing with bcrypt
- Environment-based config (`.env`)
- Secure headers and CORS

---

## 🛡️ Security Notes

- Passwords hashed with bcrypt
- JWT tokens signed with secret key
- MongoDB URI and secrets stored in environment variables
- Use HTTPS in production deployments

---

## 🤝 Contributors

- [Venugopal](https://github.com/abvenu)

---

# Ideal README for **Frontend**

# 🖥️ Equipment Rental Management - Frontend

[![React](https://img.shields.io/badge/React-Frontend-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-Bundler-purple)](https://vitejs.dev/)
[![Netlify](https://img.shields.io/badge/Deployed%20On-Netlify-brightgreen)](https://netlify.com/)

## 📖 Description

Frontend web application for Equipment Rental Management System. Built with React and Vite, it provides user-friendly UI for managing equipment listings, rentals, and user authentication. The app integrates with the backend API to fetch and update data.

---

## 🌐 Live Links

- 🔗 Frontend: [https://equipment-rental.netlify.app](https://equipment-rental.netlify.app)

---

## ⚙️ Tech Stack

- React (functional components + hooks)
- React Router for navigation
- Axios for API requests
- Vite for fast build & dev
- Context API or Redux (optional) for state management

---

## 📁 Folder Structure

```

├── public/
├── src/
│ ├── components/
│ ├── context/
│ ├── pages/
│ ├── services/
│ ├── utils/
│ ├── App.jsx
│ ├── main.jsx
├── vite.config.js
├── package.json
└── .env.example

```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v16+
- Access to deployed backend API

### Installation

```bash
git clone https://github.com/your-username/equipment-rental-frontend.git
cd equipment-rental-frontend
npm install
```

### Environment Variables

Create a `.env` file in project root:

```env
VITE_API_BASE_URL=https://rental-api.onrender.com/api
```

---

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
```

---

## 🔌 API Integration

- All API requests use `VITE_API_BASE_URL` from `.env`
- Axios instance setup with baseURL
- Handles JWT token in headers for authenticated requests

---

## 🧪 Testing

- Manual testing of UI flows (login, equipment list, rent, etc.)
- Use browser devtools to monitor API calls and errors

---

## 🧹 Best Practices Followed

- Component modularity and reusability
- Clear folder structure
- Environment-based API URLs
- Error handling and user feedback
- Responsive UI design

---

## 🤝 Contributors

- [Venugopal](https://github.com/abvenu)

---

## ☁️ Backend Deployment on Render – Overview

### 1. **Create Repo on GitHub**

- Push your backend project to GitHub

### 2. **Go to [Render.com](https://render.com)**

- Click **"New + > Web Service"**
- Connect to GitHub Repo

### 3. **Render Settings**

- **Environment**: Node
- **Build Command**: `npm install`
- **Start Command**: `npm start` or `node index.js`
- Add **Environment Variables**:

  - `PORT=10000`
  - `MONGO_URI=...`
  - `JWT_SECRET=...`

### 4. **Auto Deploy**

- Enable auto-deploy on push to `main`

### 5. **Post-Deploy**

- Test endpoints
- Check Render Logs for errors

---
