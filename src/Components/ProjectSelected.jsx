import React from "react";
import Tasks from "../Components/Tasks";
export default function ProjectSelected({ project, onDelete, onAdd, tasks, onClear }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-Us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <>
      <div className="selected-project">
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <h1>{project.title}</h1>
          <button onClick={onDelete}>Delete</button>
        </div>
        <p>{formattedDate}</p>
        <p>{project.description}</p>
        <Tasks onAdd={onAdd} tasks={tasks} onClear= {onClear} />
      </div>
    </>
  );
}
