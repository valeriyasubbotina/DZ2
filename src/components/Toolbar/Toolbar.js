import React from "react";

import classNames from "classnames/bind";
import styles from "./Toolbar.module.scss";
import { ThemeContext } from "../../theme-context";

import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Toolbar(props, context) {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <div className={cx("toolbar", { [`toolbar-${theme}`]: true })}>
          <div className={cx("toolbar-left")}>
            <h1
              className={cx("toolbar-left-title", {
                [`toolbar-left-title-${theme}`]: true,
              })}
            >
              My To-Do List
            </h1>

            <Link
              to="/"
              className={cx("toolbar-left-link", {
                [`toolbar-left-link-${theme}`]: true,
              })}
            >
              Проекты
            </Link>
          </div>

          <div className={cx("toggler")}>
            <img
              src="/images/sun.svg"
              alt="light"
              className={cx("theme-icon", { [`theme-icon-${theme}`]: true })}
            />
            <label className={cx("switch")}>
              <input type="checkbox" onInput={props.changeTheme} />
              <span className={cx("slider", "round")}></span>
            </label>
            <img
              src="/images/moon.svg"
              alt="dark"
              className={cx("theme-icon", { [`theme-icon-${theme}`]: true })}
            />
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default Toolbar;
