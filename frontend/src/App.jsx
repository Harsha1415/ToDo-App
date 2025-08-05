import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import TodoApp from "./components/Todoapp";  
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-200">
      <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
      <Link to="/signup" className="text-green-500 hover:underline">Signup</Link>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />  
      <Routes>
        <Route path="/" element={<TodoApp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}


export default App;
