import axios from 'axios';

const API_URL = 'http://localhost:8000';

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});


export const getTodos = () => axios.get(`${API_URL}/todos`, authHeader());
export const createTodo = (newTodo) => axios.post(`${API_URL}/todos`, newTodo, authHeader());
export const updateTodo = (id, updatedTodo) => axios.put(`${API_URL}/todos/${id}`, updatedTodo, authHeader());
export const deleteTodo = (id) => axios.delete(`${API_URL}/todos/${id}`, authHeader());


export const signup = (data) => axios.post(`${API_URL}/auth/signup`, data);  // JSON
export const login = (formData) => axios.post(`${API_URL}/auth/login`, formData, {
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});  
