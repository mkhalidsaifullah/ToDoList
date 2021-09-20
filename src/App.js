import { useState } from "react";
import Login from "./components/Login";
import TodoList from "./components/TodoList";

function App() {
  const [user, setUser] = useState("");
  const userHandler = (user) => {
    setUser(user);
  };

  console.log(user);

  return (
    <>
      {!user && <Login userName={userHandler} />}
      {user && <TodoList userName={user} />}
    </>
  );
}

export default App;
