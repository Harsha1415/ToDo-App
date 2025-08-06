# 📝 Full Stack Todo App (FastAPI + React)

A simple Todo Application built using **FastAPI (Backend)** and **React.js (Frontend)** with **JWT Authentication**, **PostgreSQL Database**, and Full **CRUD Operations** for Todos.

---

## 🚀 Features
- ✅ User Signup & Login (JWT Authentication)
- ✅ Protected Todo CRUD (Create, Read, Update, Delete)
- ✅ PostgreSQL database integration
- ✅ Token-based authentication (Bearer Tokens)
- ✅ Fully responsive UI with TailwindCSS
- ✅ FastAPI Swagger UI for API testing

---

## 🛠️ Tech Stack
- **Backend**: FastAPI, SQLAlchemy, PostgreSQL, JWT
- **Frontend**: React.js, Axios, React Router, TailwindCSS
- **Database**: PostgreSQL

---

## ⚙️ Backend Setup (FastAPI)

1. Navigate to backend directory:
    ```bash
    cd backend
    ```

2. Create a Python Virtual Environment:
    ```bash
    python -m venv env
    env\Scripts\activate  # For Windows
    # OR
    source env/bin/activate  # For Mac/Linux
    ```

3. Install Dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4. Ensure PostgreSQL is running and Database is created:
    - Database Name: `todo_db`
    - Update `DATABASE_URL` in `database.py` if needed.

5. Run FastAPI Server:
    ```bash
    uvicorn app.main:app --reload
    ```

6. API Documentation:
    - Swagger UI: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## ⚙️ Frontend Setup (React.js)

1. Navigate to frontend directory:
    ```bash
    cd frontend
    ```

2. Install NPM dependencies:
    ```bash
    npm install
    ```

3. Run React Dev Server:
    ```bash
    npm run dev
    ```

4. Frontend URL:
    - React App: [http://localhost:5173](http://localhost:5173)

---

## 📝 Usage Flow
1. Signup as a new user.
2. Login to receive JWT Token (stored in LocalStorage).
3. Manage Todos (Add, Update, Delete) — Token is sent in Authorization Header.
4. Logout to clear token and navigate back to Login.

---

## 📂 Project Structure
