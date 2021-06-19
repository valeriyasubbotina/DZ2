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
  projects: Object.keys(state.projects.projectsById).map(
    (id) => state.projects.projectsById[id]
  ),
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
          {this.props.projects.map((project) => (
            <Link
              to={`/project/${project.id.toString()}`}
              key={project.id.toString()}
            >
              <Project name={project.name} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export const ProjectList = connect(mapStateToProps)(ProjectListComponent);
