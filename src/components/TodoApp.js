import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    const updated = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl w-96">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
        📝 My To-Do List
      </h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task..."
          className="border border-gray-300 p-2 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 p-2 rounded-md mb-2"
          >
            <span
              onClick={() => toggleComplete(index)}
              className={`cursor-pointer ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(index)}
              className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
