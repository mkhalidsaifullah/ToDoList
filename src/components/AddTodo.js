import React, { useRef } from "react";

const AddTodo = ({ addTodos }) => {
  const todoRef = useRef("");

  const formHandler = (e) => {
    e.preventDefault();
    const title = todoRef.current.value;
    const id = Math.random();

    if (title.trim().length === 0) {
      alert("To do list item field can not be empty");
      return;
    }

    addTodos(id, title);
    todoRef.current.value = "";
  };
  return (
    <form onSubmit={formHandler}>
      <input
        className="todo-item"
        type="text"
        placeholder="Please add your list item "
        ref={todoRef}
      />

      <input className="todo-button" type="submit" value="ADD" />
    </form>
  );
};

export default AddTodo;
