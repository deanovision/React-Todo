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
  toggleItems = id => {
    console.log(id);
    const newList = this.state.list.map(listInfo => {
      if (listInfo.id === id) {
        return { ...listInfo, completed: !listInfo.completed };
      } else return listInfo;
    });
    this.setState({
      list: newList
    });
  };
  clearItems = event => {
    event.preventDefault();
    const filteredList = this.state.list.filter(listItems => {
      return listItems.completed === false;
    });
    this.setState({
      list: filteredList
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
  toggleClass = props => {
    if (props.completed === true) {
      return "completed";
    } else {
      return "not-completed";
    }
  };
  render() {
    return (
      <div className="todo-container">
        <h1 claassName="heading">Todo List</h1>
        <div className="todo-item">
          <TodoList
            list={this.state.list}
            toggleItems={this.toggleItems}
            toggleClass={this.toggleClass}
          />
        </div>
        <div>
          <TodoForm
            task={this.state.task}
            handleChanges={this.handleChanges}
            updateTodoList={this.updateTodoList}
          />
          <button className="clear-items" onClick={this.clearItems}>
            Clear Completed Items
          </button>
        </div>
      </div>
    );
  }
}

export default App;
