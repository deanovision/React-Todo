import React from "react";
import Todo from "./Todo";
import "./Todo.css";
import TodoForm from "./TodoForm";
const listItems = [
  { id: Date.now(), task: "Sample Todo Item 1", completed: false },
  { id: Date.now(), task: "Sample Todo Item 2", completed: false }
];
class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      list: listItems,
      id: "",
      task: "",
      completed: ""
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
      task: this.state.task
    };
    this.setState({
      list: [...this.state.list, newListItems]
    });
  };
  render() {
    return (
      <div className="todo-container">
        <div className="todo-item">
          {this.state.list.map(function(listInfo) {
            return <Todo key={listInfo.id} listProps={listInfo} />;
          })}
        </div>
        <div>
          <TodoForm
            task={this.state.task}
            id={Date.now()}
            completed={false}
            handleChanges={this.handleChanges}
            updateTodoList={this.updateTodoList}
          />
        </div>
      </div>
    );
  }
}
export default TodoList;
