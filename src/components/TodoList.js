import { useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = ({ userName }) => {
  const [todos, setTodos] = useState([
    { id: 1, title: "university fee", completed: false },
    { id: 2, title: "office task", completed: true },
    { id: 3, title: "bike tuning", completed: false },
    { id: 4, title: "bill submition", completed: true },
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

  const chekTodo = (toId, status) => {
    setTodos(
      todos.map((todo) =>
        todo.id === toId ? { ...todo, completed: status } : todo
      )
    );
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
              checkTodo={chekTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
