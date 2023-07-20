import React, { useState } from "react";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTaskList([...taskList, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    const updatedList = [...taskList];
    updatedList.splice(index, 1);
    setTaskList(updatedList);
  };

  return (
    <div>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Add your task..."
        />
        <button type="submit">Add Task</button>
      </form>
      {taskList.length !== 0 ? (
        <ul>
          {taskList.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => removeTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Added tasks will show here.</p>
      )}
    </div>
  );
}

export default App;
