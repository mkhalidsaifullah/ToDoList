const Todo = ({ todo, deleteTodo }) => {
  const deleteTodoHandler = () => {
    deleteTodo(todo.id);
  };
  return (
    <li>
      <input type="checkbox" className="checkbox" />
      {todo.title}

      <button className="delete-todo" onClick={deleteTodoHandler}>
        X
      </button>
    </li>
  );
};

export default Todo;
