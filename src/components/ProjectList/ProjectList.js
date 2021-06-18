import React from "react";

import classNames from "classnames/bind";
import styles from "./ProjectList.module.scss";
import { ThemeContext } from "../../theme-context";

import { Link } from "react-router-dom";
import Project from "../Project/Project";
import { ProjectAdd } from "../ProjectAdd/ProjectAdd";

import { connect } from "react-redux";

const cx = classNames.bind(styles);

const mapStateToProps = (state) => ({
  projects: Object.values(state.projects.projectsById),
});

class ProjectListComponent extends React.Component {
  static contextType = ThemeContext;
  render() {
    let theme = this.context;
    return (
      <div>
        <ProjectAdd />
        <div
          className={cx("project-list", { [`project-list-${theme}`]: true })}
        >
          <h1
            className={cx("project-list-title", {
              [`project-list-title-${theme}`]: true,
            })}
          >
            Проекты
          </h1>
          {this.props.projects.length === 0 && (
            <h3
              className={cx("project-list-no-projects", {
                [`project-list-no-projects-${theme}`]: true,
              })}
            >
              Нет проектов
            </h3>
          )}
          {this.props.projects.map((project) => (
            <Link
              to={`/project/${project.id.toString()}`}
              key={project.id.toString()}
            >
              <Project name={project.name} tasksCount={project.tasksCount} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export const ProjectList = connect(mapStateToProps)(ProjectListComponent);
