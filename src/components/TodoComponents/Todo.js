import React from "react";
import "./Todo.css";
const Todo = props => {
  return (
    <div
      className={props.toggleClass(props.listProps)}
      onClick={() => props.toggleItems(props.listProps.id)}
    >
      {props.listProps.task}
    </div>
  );
};
export default Todo;
