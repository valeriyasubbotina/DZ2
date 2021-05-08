import "./TaskAdd.css";
import React from "react";

class TaskAdd extends React.Component {
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
    return (
      <div id="task-add">
        <div className="input">
          <label htmlFor="name">Введите название задачи</label>
          <input
            type="text"
            id="name"
            placeholder="Название задачи"
            onChange={this.handleNameChange}
          />
        </div>

        <div className="input">
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
            id="add-button"
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
