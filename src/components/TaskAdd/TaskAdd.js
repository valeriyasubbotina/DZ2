import React from "react";

import classNames from "classnames/bind";
import styles from "./TaskAdd.module.scss";
import { ThemeContext } from "../../theme-context";

const cx = classNames.bind(styles);

class TaskAdd extends React.Component {
  static contextType = ThemeContext;

  state = {
    name: "",
    description: "",
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  };

  handleAddClick = () => {
    this.props.addTask(this.state.name, this.state.description);
  };

  render() {
    let theme = this.context;
    return (
      <div className={cx("task-add", { [`task-add-${theme}`]: true })}>
        <h1
          className={cx("task-add-title", {
            [`task-add-title-${theme}`]: true,
          })}
        >
          Добавление новой задачи к проекту
        </h1>
        <div className={cx("input", { [`input-${theme}`]: true })}>
          <label htmlFor="name">Введите название задачи</label>
          <input
            type="text"
            id="name"
            placeholder="Название задачи"
            onChange={this.handleNameChange}
          />
        </div>

        <div className={cx("input", { [`input-${theme}`]: true })}>
          <label htmlFor="description">Введите описание задачи</label>
          <input
            type="text"
            id="description"
            placeholder="Описание задачи"
            onChange={this.handleDescriptionChange}
          />
        </div>

        <div id="actions">
          <button
            className={cx("add-button", { [`add-button-${theme}`]: true })}
            onClick={this.handleAddClick}
            disabled={!this.state.name || !this.state.description}
          >
            Добавить
          </button>
        </div>
      </div>
    );
  }
}

export default TaskAdd;
