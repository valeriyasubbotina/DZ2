import React from "react";

import classNames from "classnames/bind";
import styles from "./ProjectAdd.module.scss";
import { ThemeContext } from "../../theme-context";

const cx = classNames.bind(styles);

class ProjectAdd extends React.Component {
  static contextType = ThemeContext;

  state = {
    name: "",
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleAddClick = () => {
    this.props.addProject(this.state.name);
  };

  render() {
    let theme = this.context;
    return (
      <div className={cx("project-add", { [`project-add-${theme}`]: true })}>
        <h1
          className={cx("project-add-title", {
            [`project-add-title-${theme}`]: true,
          })}
        >
          Добавление нового проекта
        </h1>
        <div className={cx("input", { [`input-${theme}`]: true })}>
          <label htmlFor="name">Введите название проекта</label>
          <input
            type="text"
            id="name"
            placeholder="Название задачи"
            onChange={this.handleNameChange}
          />
        </div>

        <div id="actions">
          <button
            className={cx("add-button", { [`add-button-${theme}`]: true })}
            onClick={this.handleAddClick}
            disabled={!this.state.name}
          >
            Добавить
          </button>
        </div>
      </div>
    );
  }
}

export default ProjectAdd;
