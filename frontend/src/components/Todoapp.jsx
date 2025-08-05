import React, { useEffect, useState } from "react";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../api";
import TodoForm from "./Todoform";
import TodoItem from "./Todoitem";
import { useNavigate } from "react-router-dom";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  const fetchTodos = async () => {
    try {
      const res = await getTodos();
      setTodos(res.data);
    } catch (err) {
      console.error(err);
      if (err.response && err.response.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleCreate = async (data) => {
    await createTodo(data);
    fetchTodos();
  };

  const handleUpdate = async (id, updatedTodo) => {
    await updateTodo(id, updatedTodo);
    fetchTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Todo App</h1>
      <button onClick={() => { localStorage.removeItem("token"); navigate("/login"); }}
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-5 py-2 rounded-full shadow-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 ease-in-out transform hover:scale-105 m-4">
        Logout
      </button>
      <TodoForm onSubmit={handleCreate} />
      <div className="w-full max-w-md space-y-4 mt-6">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
