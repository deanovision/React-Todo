import React from "react";
import TodoList from "./TodoList";
const Todo = props => {
  return <div>{props.listProps.todoItem}</div>;
};
export default Todo;
