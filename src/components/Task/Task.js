import React from "react";

import classNames from "classnames/bind";
import styles from "./Task.module.scss";
import { ThemeContext } from "../../theme-context";

const cx = classNames.bind(styles);

const Task = ({ name, description, completed, onClick }) => (
  <ThemeContext.Consumer>
    {(theme) => (
      <div className={cx("task", { [`task-${theme}`]: true })}>
        <div className="task-info">
          <div className={cx("task-name", { [`task-name-${theme}`]: true })}>
            {name}
          </div>
          <div
            className={cx("task-description", {
              [`task-description-${theme}`]: true,
            })}
          >
            {description}
          </div>
        </div>
        <div className={cx("task-actions")}>
          <div
            className={cx("task-actions-completed", {
              [`task-actions-completed-${theme}`]: true,
            })}
          >
            {completed ? "Готово" : "Не готово"}
          </div>
          <button
            className={cx("task-actions-button", {
              [`task-actions-button-${theme}`]: true,
            })}
            onClick={onClick}
          >
            {completed ? "Сделано" : "Сделать"}
          </button>
        </div>
      </div>
    )}
  </ThemeContext.Consumer>
);

export default Task;
