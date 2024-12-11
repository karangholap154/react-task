import React, { useState } from 'react';
import './TodoApp.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [isEditing, setIsEditing] = useState(null);
  const [editInput, setEditInput] = useState('');

  // Handle adding a new task
  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), title: taskInput, completed: false }
      ]);
      setTaskInput('');
    }
  };

  // Handle toggling task completion (move between sections)
  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Handle editing task
  const editTask = (id) => {
    const taskToEdit = tasks.find(task => task.id === id);
    setIsEditing(id);
    setEditInput(taskToEdit.title);
  };

  // Save edited task
  const saveEditTask = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, title: editInput } : task
    ));
    setIsEditing(null);
    setEditInput('');
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="task-form">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      {/* Uncompleted Tasks */}
      <div className="task-section uncompleted">
        <div className="task-list">
          {tasks.filter(task => !task.completed).map((task) => (
            <div className="task" key={task.id}>
              <h3>{task.title}</h3>
              <div className="task-actions">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                  className="task-checkbox"
                />
                <button onClick={() => editTask(task.id)} className="task-button">Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Completed Tasks */}
      <div className="task-section completed">
        <div className="task-list">
          {tasks.filter(task => task.completed).map((task) => (
            <div className="task completed" key={task.id}>
              <h3>{task.title}</h3>
              <div className="task-actions">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                  className="task-checkbox"
                />
                <button onClick={() => editTask(task.id)} className="task-button">Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Editing Task Modal */}
      {isEditing !== null && (
        <div className="edit-modal">
          <input
            type="text"
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
            placeholder="Edit task"
          />
          <button onClick={() => saveEditTask(isEditing)}>Save</button>
          <button onClick={() => setIsEditing(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default App;
