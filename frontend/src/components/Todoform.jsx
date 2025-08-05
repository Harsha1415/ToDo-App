import React from 'react'
import { useState } from 'react'

function Todoform({onSubmit}) {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({title, description, completed: false});
    setTitle('');
    setDescription('');
};

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-md">
  <input
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    placeholder="Title"
    className="p-2 border border-gray-300 rounded"
  />
  <input
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    placeholder="Description"
    className="p-2 border border-gray-300 rounded"
  />
  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
    Add Todo
  </button>
</form>
  );
}

export default Todoform;