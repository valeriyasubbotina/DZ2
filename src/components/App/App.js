import React from "react";
import MyTodoList from "../MyTodoList/MyTodoList";
import Toolbar from "../Toolbar/Toolbar";

import classNames from "classnames/bind";
import styles from "./App.module.scss";
import { ThemeContext } from "../../theme-context";

const cx = classNames.bind(styles);

class App extends React.Component {
  state = {
    theme: "light",
  };

  toggleTheme = () => {
    this.setState((state) => ({
      theme: state.theme === "dark" ? "light" : "dark",
    }));
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <div className={cx("App", { [`App-${this.state.theme}`]: true })}>
          <Toolbar changeTheme={this.toggleTheme} />
          <MyTodoList />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
