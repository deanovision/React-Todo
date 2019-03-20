import React from "react";
const TodoForm = props => {
  return (
    <form>
      <input
        type="text"
        value={props.task}
        name="task"
        id={props.id}
        completed={props.completed}
        placeholder="Todo Item"
        onChange={props.handleChanges}
      />
      <button onClick={props.updateTodoList}>Add Todo Item</button>
    </form>
  );
};
export default TodoForm;
