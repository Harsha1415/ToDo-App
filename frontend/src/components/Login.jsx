import React from "react";
import { useState } from "react";
import { login } from "../api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

 const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new URLSearchParams();
  formData.append("username", form.username);
  formData.append("password", form.password);

  try {
    const res = await login(formData);
    localStorage.setItem("token", res.data.access_token);
    navigate("/");
  } catch (err) {
    console.error(err);
    alert("Login failed!");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-blue-600">Login</h2>
        <input
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
