import React from 'react';
import './App.css';
import Todo from "./components/Todo";
import AddTodo from './components/AddTodo';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  state = {
    todoList: [
      {
        id: uuidv4(),
        title: "clean the garage",
        completed: false
      },
      {
        id: uuidv4(),
        title: "listen to blink-182",
        completed: false
      }
    ]
  }
// can now change the state of markComplete through the id of the todoList
//if task is completed show it is completed
  markComplete = (id) => {
    this.setState({todoList: this.state.todoList.map(task => {
      if(task.id === id) {
        task.completed = !task.completed 
      }
      return task;
    }) });
  }

  //delete task 
  //filter through the tasks return new array without the completed task
  //use spread operator ... to copy array
  deleteTask = (id) => {
    this.setState({ todoList: [...this.state.todoList.filter(task => task.id
      !== id)] 
    });
  }

  //add a task to todoList
  //const newTask updates the state of the todoList

  addTask = (title) => {
    const newTask ={
      id: uuidv4(),
      title,
      completed: false
    }
    this.setState({todoList: [...this.state.todoList, newTask]})
  }

  render() {
  //  console.log(this.state.todoList)
  //adding props from children
    return(
      <div>
        <div className="container">
        <h1>Todo List</h1>
        <AddTodo addTask={this.addTask}/>
        <Todo todo={this.state.todoList} markComplete={this.markComplete}
        deleteTask={this.deleteTask}/>
        </div>
      </div>
    )
  }
}

export default App;
