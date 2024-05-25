import React from "react";
import TaskList from "../Components/TaskList";

export default function Tasks({ tasks, onAdd, onClear }) {
  return (
    <div className="tasks-container">
      <h2 className="tasks-heading">Tasks</h2>

      <TaskList onAdd={onAdd} />

      {tasks.length === 0 && (
        <p className="tasks-paragraph">
          This project does not have any task yet
        </p>
      )}

      {tasks.length > 0 && (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span>{task.text}</span>
              <button onClick={() => onClear(task.id)}>Clear</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
