import "./App.css";
import React from "react";
import MyTodoList from "../MyTodoList/MyTodoList";

function App() {
  return (
    <div className="App">
      <h1 id="title">My To-Do List</h1>
      <MyTodoList />
    </div>
  );
}

export default App;
