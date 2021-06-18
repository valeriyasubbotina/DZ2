import React from "react";
import Task from "../Task/Task";
import { TaskAdd } from "../TaskAdd/TaskAdd";

import classNames from "classnames/bind";
import styles from "./MyTodoList.module.scss";
import { ThemeContext } from "../../theme-context";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { handleTaskComplete, handleLoadTasks } from "../../actions/task";

const cx = classNames.bind(styles);

const mapStateToProps = (state) => ({
  projectsById: state.projects.projectsById,
  tasksById: state.tasks.tasksById,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchOnTaskComplete: (task, projectId) =>
    dispatch(handleTaskComplete(task, projectId)),
  dispatchLoadTasks: (projectId) => dispatch(handleLoadTasks(projectId)),
});

class MyTodoListComponent extends React.Component {
  static contextType = ThemeContext;
  state = {
    isLoading: true,
    isError: false,
  };

  componentDidMount() {
    this.props
      .dispatchLoadTasks(this.props.match.params.projectId)
      .then(() => {
        setTimeout(() => {
          this.setState((state) => ({ ...state, isLoading: false }));
        }, 300);
      })
      .catch((err) => {
        console.error(err);
        this.setState((state) => ({ ...state, isError: true }));
      });
  }

  completeTask = (id, completed) => {
    const task = {
      ...this.props.tasksById[id],
      completed: !completed,
    };
    this.props.dispatchOnTaskComplete(task, this.props.match.params.projectId);
  };

  render() {
    let theme = this.context;
    return (
      <div>
        {this.state.isError && <Redirect to="/" />}
        {this.state.isLoading ? (
          <div
            className={cx("task-list-loading", {
              [`task-list-loading-${theme}`]: true,
            })}
          >
            Загрузка...
          </div>
        ) : (
          <div>
            <TaskAdd projectId={this.props.match.params.projectId} />
            <div className={cx("task-list", { [`task-list-${theme}`]: true })}>
              <h1
                className={cx("task-list-title", {
                  [`task-list-title-${theme}`]: true,
                })}
              >
                {this.props.projectsById[this.props.match.params.projectId] &&
                  "Проект: " +
                    this.props.projectsById[this.props.match.params.projectId]
                      .name}
              </h1>
              {Object.keys(this.props.tasksById).length === 0 && (
                <h3
                  className={cx("task-list-no-tasks", {
                    [`task-list-no-tasks-${theme}`]: true,
                  })}
                >
                  Нет задач {this.state.isError.toString()}
                </h3>
              )}
              {Object.values(this.props.tasksById).map((task) => (
                <Task
                  key={task.id.toString()}
                  name={task.name}
                  description={task.description}
                  completed={task.completed}
                  onClick={() => this.completeTask(task.id, task.completed)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export const MyTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyTodoListComponent);
