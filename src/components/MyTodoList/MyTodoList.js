import React from "react";
import Task from "../Task/Task";
import TaskAdd from "../TaskAdd/TaskAdd";

import classNames from "classnames/bind";
import styles from "./MyTodoList.module.scss";
import { ThemeContext } from "../../theme-context";

const cx = classNames.bind(styles);

class MyTodoList extends React.Component {
  static contextType = ThemeContext;

  state = {
    tasks: [
      {
        id: 1,
        name: "Сделать домашнее задание",
        description: "Просмотр лекции по Реакту и написание кода",
        completed: true,
      },
      {
        id: 2,
        name: "Написать на почту ЕВ",
        description: "Вопрос по модели в курсовой работе",
        completed: false,
      },
      {
        id: 3,
        name: "Постирать спортивную форму",
        description:
          "lorem qe qe qwe qeq weqwe qwe qwe eqw eqweqwe qw eqweq eqe qw eqw eqwe qwe qe qe qweq q qeqweqeqweq eq eqe q",
        completed: false,
      },
      {
        id: 4,
        name: "Написать темы постов",
        description: "До 21 числа сдать темы в редакцию",
        completed: false,
      },
      {
        id: 5,
        name: "Скачать фильмы в дорогу",
        description: "В джазе только девушки и Голодные игры",
        completed: false,
      },
    ],
    lastID: 5,
  };

  completeTask = (id, completed) => {
    this.setState((currentState) => {
      const index = currentState.tasks.findIndex((e) => e.id === id);

      currentState.tasks[index] = {
        ...currentState.tasks[index],
        completed: !completed,
      };

      return {
        tasks: currentState.tasks,
      };
    });
  };

  addTask = (name, description) => {
    this.setState((currentState) => {
      const newTask = {
        id: ++currentState.lastID,
        name: name,
        description: description,
        completed: false,
      };

      const newTasks = [newTask, ...currentState.tasks];

      return {
        lastID: currentState.lastID,
        tasks: newTasks,
      };
    });
  };

  render() {
    let theme = this.context;
    return (
      <div>
        <TaskAdd addTask={this.addTask} />
        <div className={cx("task-list", { [`task-list-${theme}`]: true })}>
          {this.state.tasks.map((task) => (
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
    );
  }
}

export default MyTodoList;
