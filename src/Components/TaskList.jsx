import React, { useState } from 'react';

export default function TaskList({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState('');
  const [error, setError] = useState('');

  function handleChange(event) {
    setEnteredTask(event.target.value);
    if (event.target.value.trim()) {
      setError(''); // Clear error when input is valid
    }
  }

  function handleClick() {
    if (enteredTask.trim() === '') {
      setError('Task cannot be empty');
      return;
    }
    onAdd(enteredTask.trim());
    setEnteredTask('');
  }

  return (
    <div className="task-input-container">
      <input
        type="text"
        onChange={handleChange}
        value={enteredTask}
        className="task-input"
        placeholder="Enter a task"
      />
      <button className="task-button" onClick={handleClick}>
        Add Task
      </button>
      {error && <p className="error-message"></p>}
    </div>
  );
}
