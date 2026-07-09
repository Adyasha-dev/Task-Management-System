````md
# Task Management System

A full-stack Task Management System built using the MERN Stack. The application allows users to register, log in securely using JWT authentication, and manage their personal tasks with complete CRUD functionality.

---

## 🚀 Tech Stack

### Frontend

- React.js
- Vite
- Bootstrap
- Material UI (MUI)
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt

---

## ✨ Features

- User Registration
- User Login with JWT Authentication
- Protected Routes
- Create Task
- View All Tasks
- Update Task
- Delete Task
- Task Status Management
  - Pending
  - In Progress
  - Completed
- Responsive UI

---

## 📁 Project Structure

```
Task-Management-System
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.jsx
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
```

```bash
cd Task-Management-System
```

---

### 2. Backend Setup

Navigate to the server folder.

```bash
cd server
```

Install dependencies.

```bash
npm install
```

Create a `.env` file.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend server.

```bash
nodemon server.jsx
```

---

### 3. Frontend Setup

Open a new terminal.

```bash
cd client
```

Install dependencies.

```bash
npm install
```

Start the React application.

```bash
npm run dev
```

---

## 🔐 Authentication

Protected APIs require a JWT token.

Add the following header when accessing protected routes:

```
Authorization: Bearer <your_jwt_token>
```

---

## 📌 API Endpoints

### Authentication

| Method | Endpoint             | Description   |
| ------ | -------------------- | ------------- |
| POST   | `/api/auth/register` | Register User |
| POST   | `/api/auth/login`    | Login User    |

### Tasks

| Method | Endpoint                | Description        |
| ------ | ----------------------- | ------------------ |
| POST   | `/api/tasks`            | Create Task        |
| GET    | `/api/tasks`            | Get All Tasks      |
| GET    | `/api/tasks/:id`        | Get Single Task    |
| PUT    | `/api/tasks/:id`        | Update Task        |
| PATCH  | `/api/tasks/:id/status` | Change Task Status |
| DELETE | `/api/tasks/:id`        | Delete Task        |

---

## 📊 Task Status Flow

```
Pending
   ↓
In Progress
   ↓
Completed
```

---

## 🧪 Running the Project

### Backend

```bash
cd server
nodemon server.jsx
```

### Frontend

```bash
cd client
npm run dev
```

---

## 👨‍💻 Author

**Adyasha Biswal**
````
