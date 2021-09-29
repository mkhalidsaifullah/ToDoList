import { useRef, useState } from "react";
import "./TodoList.css";

const TodoList = ({ userName }) => {
  const [todos, setTodos] = useState([
    { id: 1, title: "university fee" },
    { id: 2, title: "office task1" },
    { id: 3, title: "bike tuning" },
    { id: 4, title: "bill submition" },
  ]);

  const todoRef = useRef("");

  const formHandler = (e) => {
    e.preventDefault();
    const title = todoRef.current.value;
    const id = Math.random();

    if (title.trim().length === 0) {
      alert("To do list item field can not be empty");
      return;
    }

    setTodos((prvTodos) => [{ id, title }, ...prvTodos]);
    todoRef.current.value = "";
  };

  return (
    <div>
      <h1 className="h1todo-list">Wellcome {userName}</h1>

      <form onSubmit={formHandler}>
        <input
          type="text"
          placeholder="Please add your list item "
          ref={todoRef}
        />
        <input type="submit" value="ADD" />
      </form>

      <ul className="toItem-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" className="completed" />
            {todo.title}
            <button className="delete-todo"> X </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
