const Todo = ({ todo, deleteTodo, checkTodo }) => {
  const deleteTodoHandler = () => {
    deleteTodo(todo.id);
  };

  const handleChange = (e) => {
    let isChecked = e.target.checked;
    checkTodo(todo.id, isChecked);
  };

  return (
    <li>
      <input
        type="checkbox"
        className="checkbox"
        defaultChecked={todo.completed ? true : false}
        onChange={handleChange}
      />

      {todo.title}

      {todo.completed && <span style={{ color: "green" }}> Completed </span>}

      <button className="delete-todo" onClick={deleteTodoHandler}>
        X
      </button>
    </li>
  );
};

export default Todo;
