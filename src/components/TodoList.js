import { useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = ({ userName }) => {
  const [todos, setTodos] = useState([
    { id: 1, title: "university fee" },
    { id: 2, title: "office task" },
    { id: 3, title: "bike tuning" },
    { id: 4, title: "bill submition" },
  ]);

  const addTodos = (id, title) => {
    setTodos((prvTodos) => [{ id, title }, ...prvTodos]);
  };

  // delete todos

  const deleteTodo = (toId) => {
    setTodos((prvTodos) => {
      return prvTodos.filter((todo) => toId !== todo.id);
    });
  };

  return (
    <div>
      <h1 className="h1todo-list">Wellcome {userName}</h1>
      <div className="todo-form">
        <AddTodo addTodos={addTodos} />

        {/* Printing todos */}

        <ul className="toItem-list">
          {todos && <h1>These are TODOS</h1>}
          {todos.map((todo) => (
            <Todo
              key={todo.id.toString()}
              todo={todo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
