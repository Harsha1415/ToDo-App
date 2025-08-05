import React, { useState } from 'react'

function Todoitem({todo, onUpdate, onDelete}) {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(todo.title);
    const [description, setDescription] = useState(todo.description);

    const handleSave = () =>{
        onUpdate(todo.id, {...todo, title, description});
        setIsEditing(false);
    }


    const toggleComplete = () => {
        onUpdate(todo.id, {...todo, completed: !todo.completed});
    };

  return (
    <div className="flex flex-col bg-white p-3 rounded shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={toggleComplete}
            className="w-4 h-4"
          />
          {isEditing ? (
            <div className="flex flex-col gap-1">
              <input
                className="p-1 border rounded"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                className="p-1 border rounded"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          ) : (
            <div>
              <p className={`font-semibold ${todo.completed ? 'line-through text-gray-400' : ''}`}>
                {todo.title}
              </p>
              <p className="text-sm text-gray-600">{todo.description}</p>
            </div>
          )}
        </div>
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="text-green-600 hover:text-green-800 font-medium"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="text-gray-500 hover:text-gray-700 font-medium"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="text-blue-500 hover:text-blue-700 font-medium"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(todo.id)}
                className="text-red-500 hover:text-red-700 font-medium"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todoitem