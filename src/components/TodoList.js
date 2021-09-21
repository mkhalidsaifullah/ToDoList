import React from "react";
const todos = [
  { id: 1, title: "university fee" },
  { id: 2, title: "office task1" },
  { id: 3, title: "bike tuning" },
  { id: 4, title: "bill submition" },
];

const TodoList = ({ userName }) => {
  return (
    <div>
      <h1 className = "h1todo-list">Wellcome {userName}</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} <input type="checkbox" className="completed" />
            <button className="delete-todo">deleted </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
