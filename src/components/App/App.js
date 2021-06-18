import React from "react";
import { MyTodoList } from "../MyTodoList/MyTodoList";
import { ProjectList } from "../ProjectList/ProjectList";
import Toolbar from "../Toolbar/Toolbar";

import classNames from "classnames/bind";
import styles from "./App.module.scss";
import { ThemeContext } from "../../theme-context";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../../reducers/index";
import { Provider } from "react-redux";
import { handleLoadProjects } from "../../actions/project";

let store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(handleLoadProjects());

const cx = classNames.bind(styles);

const WrappedMyTodoList = withRouter(MyTodoList);

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
      <Provider store={store}>
        <ThemeContext.Provider value={this.state.theme}>
          <Router>
            <div className={cx("App", { [`App-${this.state.theme}`]: true })}>
              <Toolbar changeTheme={this.toggleTheme} />
              <Switch>
                <Route exact path="/">
                  <ProjectList />
                </Route>
                <Route exact path="/project/:projectId">
                  <WrappedMyTodoList />
                </Route>
                <Redirect to="/" />
              </Switch>
            </div>
          </Router>
        </ThemeContext.Provider>
      </Provider>
    );
  }
}

export default App;
