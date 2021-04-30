import "./Task.css";
import React from "react";

const Task = ({ name, description, completed, onClick }) => (
  <div className="task">
    <div className="task-info">
      <div className="task-name">{name}</div>
      <div className="task-description">{description}</div>
    </div>
    <div className="task-actions">
      <div className="task-completed">{completed ? "Готово" : "Не готово"}</div>
      <button className="complete-button" onClick={onClick}>
        {completed ? "Сделано" : "Сделать"}
      </button>
    </div>
  </div>
);

export default Task;
