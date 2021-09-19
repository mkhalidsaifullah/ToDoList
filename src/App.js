import { useState } from "react";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState("");
  const userHandler = (user) => {
    setUser(user);
  };
  
  console.log(user);

  return (
    <>
      <Login userName={userHandler} />
    </>
  );
}

export default App;
