import React from "react";
import "./Todo.css";
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
  render() {}
}
