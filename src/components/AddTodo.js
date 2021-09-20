import React from "react";

const AddTodo = () => {
  return (
    <form onSubmit={formHandler}>
      <input type="text" placeholder="please add todo here" ref={nameRef} />
      <input type="submit" value="Add" />
    </form>
  );
};

export default AddTodo;
