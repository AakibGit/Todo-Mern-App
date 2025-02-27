
# **MERN Stack To-Do Application**

A full-stack To-Do application built with the **MERN stack (MongoDB, Express.js, React, Node.js)**, featuring authentication and authorization, CRUD operations, and responsive UI with **Tailwind CSS**.

---

## **Features**

- User Authentication (Register, Login, Logout) using JWT.
- Authorization: Protect routes and ensure only authenticated users can access tasks.
- CRUD Operations for managing to-dos.
- Responsive and clean UI using **Tailwind CSS**.
- API integration with error handling.
- Secure backend implementation with hashed passwords and JWT.

---

## **Tech Stack**

### **Frontend**
- **React.js** (JavaScript framework)
- **React Router** for routing
- **Axios** for API requests
- **Tailwind CSS** for styling

### **Backend**
- **Node.js** with **Express.js**
- **MongoDB** (NoSQL database) using **Mongoose**
- **bcrypt.js** for password hashing
- **jsonwebtoken** for authentication

---

## **Folder Structure**

### **Frontend**
```
frontend/
├── src/
│   ├── components/
│   │   ├── AuthForm.js
│   │   ├── Navbar.js
│   │   └── TodoItem.js
│   ├── pages/
│   │   ├── LoginPage.js
│   │   ├── RegisterPage.js
│   │   └── TodosPage.js
│   ├── utils/
│   │   └── api.js
│   ├── App.js
│   ├── index.css
│   └── index.js
```

### **Backend**
```
backend/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── todoController.js
├── middleware/
│   ├── authMiddleware.js
├── models/
│   ├── Todo.js
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   └── todoRoutes.js
├── server.js
```

---

## **Getting Started**

### **1. Clone the Repository**
```bash
git clone https://github.com/AakibGit/Todo-Mern-App.git
cd Todo-Mern-App
```

---

### **2. Setup Backend**

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. Start the backend server:
   ```bash
   npm run server
   ```

---

### **3. Setup Frontend**

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

---

## **Usage**

1. **Register**: Create a new account.
2. **Login**: Access the application with your credentials.
3. **Add To-Dos**: Add, view, and manage your tasks.
4. **Delete To-Dos**: Remove completed or unnecessary tasks.

---

## **API Endpoints**

### **Authentication**
- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Authenticate and get a token

### **To-Do**
- **GET** `/api/todos` - Fetch all todos (Protected)
- **POST** `/api/todos` - Create a new todo (Protected)
- **DELETE** `/api/todos/:id` - Delete a todo (Protected)

---

## **Scripts**

### **Frontend**
| Command          | Description               |
|------------------|---------------------------|
| `npm start`      | Start the React app       |
| `npm run build`  | Build the app for production |

### **Backend**
| Command          | Description                  |
|------------------|------------------------------|
| `npm run server` | Start the backend server     |
| `npm run dev`    | Start in development mode    |

---


## **Contributing**

Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add new feature"`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

---

