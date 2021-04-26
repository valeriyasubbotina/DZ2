import './App.css';
import React from "react"

function App() {
  return (
    <div className="App">
      <h1 id="title">My To-Do List</h1>
      <MyTodoList/>
    </div>
  );
}

const Task = ({name, description, completed, onClick}) =>(
  <div className="task">
    <div className="task-info">
      <div className="task-name">{name}</div>
      <div className="task-description">{description}</div>
    </div>
    <div className="task-actions">
      <div className="task-completed">{completed ? 'Готово' : 'Не готово'}</div>
      <button className="complete-button" onClick={onClick}>{completed ? 'Сделано' : 'Сделать'}</button>
    </div>
  </div>
)

class MyTodoList extends React.Component {
  state = {
    tasks: [
      {
        id: 1,
        name: 'Сделать домашнее задание',
        description: 'Просмотр лекции по Реакту и написание кода',
        completed: true
      },
      {
        id: 2,
        name: 'Написать на почту ЕВ',
        description: 'Вопрос по модели в курсовой работе',
        completed: false
      },
      {
        id: 3,
        name: 'Постирать спортивную форму',
        description: 'lorem qe qe qwe qeq weqwe qwe qwe eqw eqweqwe qw eqweq eqe qw eqw eqwe qwe qe qe qweq q qeqweqeqweq eq eqe q',
        completed: false
      },
      {
        id: 4,
        name: 'Написать темы постов',
        description: 'До 21 числа сдать темы в редакцию',
        completed: false
      },
      {
        id: 5,
        name: 'Скачать фильмы в дорогу',
        description: 'В джазе только девушки и Голодные игры',
        completed: false
      },
    ]
  }

  compliteTask = (id, completed) => {
    console.log(`Task ${id} completed status = ${completed}`)
  }

  render(){
    return (
    <div id="task-list">
      {this.state.tasks.map(task => <Task key={task.id.toString()} name={task.name} description={task.description} completed={task.completed} onClick={() => this.compliteTask(task.id, task.completed)} />)}
    </div>
    )
  }


}

export default App;
