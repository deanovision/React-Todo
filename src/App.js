import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
const listItems = [
  { id: 1, task: "Sample Todo Item 1", completed: false },
  { id: 0, task: "Sample Todo Item 2", completed: false }
];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: listItems,
      id: Date.now(),
      task: "",
      completed: false
    };
  }
  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  updateTodoList = event => {
    event.preventDefault();
    const newListItems = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      list: [...this.state.list, newListItems]
    });
  };
  render() {
    return (
      <div className="todo-container">
        <div className="todo-item">
          <TodoList list={this.state.list} />
        </div>
        <div>
          <TodoForm
            task={this.state.task}
            handleChanges={this.handleChanges}
            updateTodoList={this.updateTodoList}
          />
        </div>
      </div>
    );
  }
}

export default App;
