import { useState } from "react";
import Login from "./components/Login";
import TodoList from "./components/TodoList";
import "./components/Login.css";
import "./components/TodoList";
import "../src/images/backdrop.jpg";
function App() {
  const [user, setUser] = useState("");
  const userHandler = (user) => {
    setUser(user);
  };

  console.log(user);

  return (
    <>
      <img
        src="./images/backdrop.jpg"
        alt="image"
        width="300px"
        height="300px"
      />
      <div className="main-div">
        {!user && <Login userName={userHandler} />}
        {user && <TodoList userName={user} />}
      </div>
    </>
  );
}

export default App;
