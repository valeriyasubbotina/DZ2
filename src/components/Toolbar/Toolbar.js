import React from "react";
import "./Toolbar.css";

function Toolbar(props) {
  return (
    <div className="toolbar">
      <h1 id="title">My To-Do List</h1>

      <div className="toggler">
        <img src="/images/sun.svg" alt="light" className="theme-icon" />
        <label className="switch">
          <input type="checkbox" onInput={props.changeTheme} />
          <span className="slider round"></span>
        </label>
        <img src="/images/moon.svg" alt="dark" className="theme-icon" />
      </div>
    </div>
  );
}

export default Toolbar;
