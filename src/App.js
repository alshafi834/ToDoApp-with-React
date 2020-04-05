import React, { Component } from "react";
import "./App.css";
import NewToDoForm from "./NewToDoForm";
import ToDoList from "./ToDoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello change",
      newTodo: "",
      toDos: [
        {
          title: "Learn React",
          done: false,
        },
        {
          title: "Learn JSX",
          done: false,
        },
      ],
    };
  }

  formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.state.newTodo);
    this.setState({
      newTodo: "",
      toDos: [
        ...this.state.toDos,
        {
          title: this.state.newTodo,
          done: false,
        },
      ],
    });
  };
  newToDoChange = (event) => {
    this.setState({
      newTodo: event.target.value,
    });
  };
  checkDoneHandler = (event, index) => {
    const toDos = [...this.state.toDos];
    //toDos[index] = { ...toDos[index] };
    toDos[index].done = event.target.checked;
    console.log(toDos);
    this.setState({
      toDos,
    });
  };
  removeToDo = (index) => {
    const toDos = [...this.state.toDos];
    toDos.splice(index, 1);
    this.setState({
      toDos,
    });
  };

  makeAllDone = () => {
    const toDos = this.state.toDos.map((todo) => {
      return {
        title: todo.title,
        done: true,
      };
    });

    this.setState({
      toDos,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <NewToDoForm
          formSubmitHandler={this.formSubmitHandler.bind(this)}
          newToDoChange={this.newToDoChange.bind(this)}
          newTodo={this.state.newTodo}
        />
        <button onClick={() => this.makeAllDone()}>All Done</button>
        <ToDoList
          toDos={this.state.toDos}
          removeToDo={this.removeToDo.bind(this)}
          checkDoneHandler={this.checkDoneHandler.bind(this)}
        />
      </div>
    );
  }
}

export default App;
