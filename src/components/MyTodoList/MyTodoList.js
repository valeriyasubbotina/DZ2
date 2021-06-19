import React from "react";
import Task from "../Task/Task";
import TaskAdd from "../TaskAdd/TaskAdd";

import classNames from "classnames/bind";
import styles from "./MyTodoList.module.scss";
import { ThemeContext } from "../../theme-context";
import { Redirect } from "react-router-dom";

const cx = classNames.bind(styles);

class MyTodoList extends React.Component {
  static contextType = ThemeContext;

  completeTask = (id, completed) => {
    this.props.completeTask(id, completed);
  };

  addTask = (name, description) => {
    this.props.addTask(name, description, this.props.match.params.projectId);
  };

  render() {
    let theme = this.context;
    return (
      <div>
        {!this.props.projectsById[this.props.match.params.projectId] && (
          <Redirect to="/" />
        )}
        <TaskAdd addTask={this.addTask} />
        <div className={cx("task-list", { [`task-list-${theme}`]: true })}>
          <h1
            className={cx("task-list-title", {
              [`task-list-title-${theme}`]: true,
            })}
          >
            {this.props.projectsById[this.props.match.params.projectId] &&
              "Проект: " +
                this.props.projectsById[this.props.match.params.projectId].name}
          </h1>
          {this.props.projectsById[this.props.match.params.projectId] &&
            this.props.projectsById[this.props.match.params.projectId].tasksIds
              .length === 0 && (
              <h3
                className={cx("task-list-no-tasks", {
                  [`task-list-no-tasks-${theme}`]: true,
                })}
              >
                Нет задач
              </h3>
            )}
          {this.props.projectsById[this.props.match.params.projectId] &&
            this.props.projectsById[
              this.props.match.params.projectId
            ].tasksIds.map((id) => (
              <Task
                key={id.toString()}
                name={this.props.tasksById[id].name}
                description={this.props.tasksById[id].description}
                completed={this.props.tasksById[id].completed}
                onClick={() =>
                  this.completeTask(
                    this.props.tasksById[id].id,
                    this.props.tasksById[id].completed
                  )
                }
              />
            ))}
        </div>
      </div>
    );
  }
}

export default MyTodoList;
