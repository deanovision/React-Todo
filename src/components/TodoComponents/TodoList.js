import React from "react";
import Todo from "./Todo";
import "./Todo.css";
import TodoForm from "./TodoForm";
const listItems = [
  { todoItem: "Sample Todo Item 1" },
  { todoItem: "Sample Todo Item 2" }
];
class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      list: listItems,
      todoItem: ""
    };
  }
  render() {
    return (
      <div className="todo-container">
        <div className="todo-item">
          {this.state.list.map(function(listInfo, index) {
            return <Todo key={index} listProps={listInfo} />;
          })}
        </div>
        <div>
          <TodoForm todoItem={this.state.todoItem} />
        </div>
      </div>
    );
  }
}
export default TodoList;
