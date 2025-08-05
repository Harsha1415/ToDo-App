import React from "react";
import { useState } from "react";
import { signup } from "../api.js";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await signup(form);  // Sending as JSON
    navigate("/login");
  } catch (err) {
    console.error(err);
    alert("Signup failed. Username may already exist.");
  }
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Signup</h2>
        <input
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="password"
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
        >
          Signup
        </button>
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="w-full mt-4 text-green-500 hover:underline text-sm"
        >
          Already have an account? Login
        </button>
      </form>
    </div>
  );
}

export default Signup;
