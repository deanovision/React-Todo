import React from "react";
const TodoForm = props => {
  return (
    <form>
      <input type="text" value={props.todoItem} placeholder="Todo Item" />
    </form>
  );
};
export default TodoForm;
