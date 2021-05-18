import "./App.css";
import React from "react";
import MyTodoList from "../MyTodoList/MyTodoList";
import Toolbar from "../Toolbar/Toolbar";

const ThemeContext = React.createContext("light");

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
        <div className="App">
          <Toolbar changeTheme={this.toggleTheme} />
          <MyTodoList />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
