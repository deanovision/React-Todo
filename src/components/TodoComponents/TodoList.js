import React from "react";
import Todo from "./Todo";
import "./Todo.css";
const TodoList = props => {
  return (
    <div className="todo-item">
      {props.list.map(function(listInfo) {
        return (
          <Todo
            key={listInfo.id}
            listProps={listInfo}
            toggleItems={props.toggleItems}
            toggleClass={props.toggleClass}
          />
        );
      })}
    </div>
  );
};
export default TodoList;
