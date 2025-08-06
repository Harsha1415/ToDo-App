
📝 Full Stack Todo App (FastAPI + React)
A simple Todo Application built using FastAPI (Backend) and React.js (Frontend) with JWT Authentication, PostgreSQL Database, and Full CRUD Operations for Todos.

🚀 Features
✅ User Signup & Login (JWT Authentication)

✅ Protected Todo CRUD (Create, Read, Update, Delete)

✅ PostgreSQL database integration

✅ Token-based authentication (Bearer Tokens)

✅ Fully responsive UI with TailwindCSS

✅ FastAPI Swagger UI for API testing

📂 Project Structure
pgsql
Copy
Edit
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── database.py
│   │   ├── auth.py
│   │   ├── auth_routes.py
│   │   └── todo_routes.py
│   ├── alembic/
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── api.js
│   │   ├── App.jsx
│   │   └── components/
│   │       ├── Login.jsx
│   │       ├── Signup.jsx
│   │       └── TodoApp.jsx
│   ├── public/
│   └── package.json
└── README.md

🛠️ Tech Stack
Backend: FastAPI, SQLAlchemy, PostgreSQL, JWT

Frontend: React.js, Axios, React Router, TailwindCSS

Database: PostgreSQL

⚙️ Backend Setup (FastAPI)
Navigate to backend directory:


cd backend

Create a Python Virtual Environment:

python -m venv env
env\Scripts\activate

Install Dependencies:


pip install -r requirements.txt

Ensure PostgreSQL is running and Database is created:

Database Name: todo_db

Update DATABASE_URL in database.py if needed.

Run FastAPI Server:

uvicorn app.main:app --reload

API Documentation:

Swagger UI: http://localhost:8000/docs

⚙️ Frontend Setup (React.js)
Navigate to frontend directory:

cd frontend
Install NPM dependencies:
npm instal

Run React Dev Server:
npm run dev

Frontend URL:

React App: http://localhost:5173

📝 Usage Flow
Signup as a new user.

Login to receive JWT Token (stored in LocalStorage).

Manage Todos (Add, Update, Delete) — Token is sent in Authorization Header.

Logout to clear token and navigate back to Login.
