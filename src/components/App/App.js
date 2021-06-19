import React from "react";
import MyTodoList from "../MyTodoList/MyTodoList";
import ProjectList from "../ProjectList/ProjectList";
import Toolbar from "../Toolbar/Toolbar";

import classNames from "classnames/bind";
import styles from "./App.module.scss";
import { ThemeContext } from "../../theme-context";
import normalizeState from "../../normalizeState";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";

const cx = classNames.bind(styles);

const projects = require("../../projects.json");

const WrappedMyTodoList = withRouter(MyTodoList);

class App extends React.Component {
  state = {
    theme: "light",
    lastProjectId: 3,
    lastTaskId: 6,
    ...normalizeState(projects),
  };

  toggleTheme = () => {
    this.setState((state) => ({
      theme: state.theme === "dark" ? "light" : "dark",
    }));
  };

  addProject = (name) => {
    this.setState((currentState) => {
      const newProject = {
        id: ++currentState.lastProjectId,
        name: name,
        tasksIds: [],
      };

      return {
        lastProjectId: currentState.lastProjectId,
        projectsById: {
          ...currentState.projectsById,
          [newProject.id]: newProject,
        },
      };
    });
  };

  completeTask = (id, completed) => {
    const oldTask = this.state.tasksById[id];

    const newTask = { ...oldTask, completed: !completed };

    this.setState((currentState) => {
      return {
        tasksById: {
          ...currentState.tasksById,
          [id]: newTask,
        },
      };
    });
  };

  addTask = (name, description, projectId) => {
    this.setState((currentState) => {
      const newTask = {
        id: ++currentState.lastTaskId,
        name: name,
        description: description,
        completed: false,
      };

      const oldProject = currentState.projectsById[projectId];

      const newProject = {
        ...oldProject,
        tasksIds: [...oldProject.tasksIds, newTask.id],
      };

      return {
        lastTaskId: currentState.lastTaskId,
        tasksById: {
          ...currentState.tasksById,
          [newTask.id]: newTask,
        },
        projectsById: {
          ...currentState.projectsById,
          [projectId]: newProject,
        },
      };
    });
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <Router>
          <div className={cx("App", { [`App-${this.state.theme}`]: true })}>
            <Toolbar changeTheme={this.toggleTheme} />
            <Switch>
              <Route exact path="/">
                <ProjectList
                  projects={Object.keys(this.state.projectsById).map(
                    (id) => this.state.projectsById[id]
                  )}
                  addProject={this.addProject}
                />
              </Route>
              <Route exact path="/project/:projectId">
                <WrappedMyTodoList
                  tasksById={this.state.tasksById}
                  projectsById={this.state.projectsById}
                  addTask={this.addTask}
                  completeTask={this.completeTask}
                />
              </Route>
              <Redirect to="/" />
            </Switch>
          </div>
        </Router>
      </ThemeContext.Provider>
    );
  }
}

export default App;
