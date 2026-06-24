# Zerodha Clone – Full Stack Trading Platform

## 🚀 Live Demo

**Frontend:**[ https://zerodha-clone-pi-ruddy.vercel.app/](https://zerodha-clone-o3d27girk-theharshitcodes-projects.vercel.app/)

**Backend API:** https://zerodha-cejh.onrender.com

---

# 📌 Overview

Zerodha Clone is a full-stack stock trading platform inspired by Zerodha, built using React.js, Node.js, Express.js, and MongoDB.

The platform allows users to register, authenticate securely, manage portfolios, track holdings, place buy/sell orders, maintain watchlists, and monitor investment performance through an interactive dashboard.

This project was built to demonstrate real-world full-stack engineering concepts including authentication, REST API design, portfolio management, protected routes, deployment workflows, and scalable backend architecture.

---

# ✨ Features

## Authentication & Security

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Password Hashing with bcrypt
* Request Validation
* Global Error Handling
* Rate Limiting
* Security Headers (Helmet)
* CORS Protection

## Trading Features

* Buy Stocks
* Sell Stocks
* Holdings Management
* Portfolio Tracking
* Order History
* Watchlist Management

## Dashboard

* Portfolio Summary
* Current Holdings
* Watchlist Overview
* Recent Transactions
* Profit & Loss Calculation
* Return Percentage Calculation

---

# 🛠️ Tech Stack

## Frontend

* React.js
* React Router DOM
* Axios
* Context API
* CSS3
* Vite

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* Bcrypt
* Joi Validation

## Deployment

* Vercel (Frontend)
* Render (Backend)

---

# 📂 Project Structure

```text
frontend/
│
├── public/
├── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   └── App.jsx
│
└── package.json

backend/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── validators/
│   ├── utils/
│   └── app.js
│
└── package.json
```

---

# 🔐 Authentication Flow

```text
User Registration
        ↓
Password Hashing
        ↓
User Login
        ↓
JWT Token Generation
        ↓
Protected API Access
        ↓
Authorized Dashboard Access
```

---

# 📈 Trading Workflow

## Buy Stock

```text
Select Stock
      ↓
Enter Quantity
      ↓
Place Buy Order
      ↓
Update Holdings
      ↓
Update Portfolio
```

## Sell Stock

```text
Select Stock
      ↓
Enter Quantity
      ↓
Place Sell Order
      ↓
Update Holdings
      ↓
Recalculate Portfolio
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/theharshitcode/Zerodha-Clone.git
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## Backend Setup

```bash
cd backend

npm install

npm start
```

---

# 🔧 Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

REFRESH_TOKEN_SECRET=your_refresh_token_secret

CLIENT_URL=http://localhost:5173
```

---

# 🌐 API Modules

## Authentication

* Register User
* Login User
* Logout User
* Get Current User

## Holdings

* Get Holdings
* Update Holdings

## Portfolio

* Portfolio Summary
* Profit & Loss Analysis

## Orders

* Buy Stock
* Sell Stock
* Transaction History

## Watchlist

* Add Stock
* Remove Stock
* Get Watchlist

## Dashboard

* Portfolio Summary
* Holdings
* Watchlist
* Recent Orders

---

# 📚 Learning Outcomes

This project helped in understanding:

* Full Stack Development
* REST API Design
* JWT Authentication
* MongoDB Data Modeling
* Portfolio Management Logic
* Protected Routes
* Backend Architecture
* Deployment Workflow
* Production Environment Setup
* Authentication & Authorization

---

# 🔮 Future Improvements

* Real-Time Stock Prices
* WebSocket Integration
* Google OAuth Login
* Portfolio Analytics
* Redis Caching
* Notification System
* Unit & Integration Testing
* CI/CD Pipeline
* Microservices Architecture

---

# 👨‍💻 Author

**Harshit Saxena**

B.Tech Computer Science Engineering

Full Stack Developer | MERN Stack Developer

GitHub: https://github.com/theharshitcode

---

# ⭐ Support

If you found this project useful, please consider giving it a star on GitHub.
