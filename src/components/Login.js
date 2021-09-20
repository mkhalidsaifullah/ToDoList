import { useRef } from "react";

const Login = (props) => {
  const nameRef = useRef("");
  const formHandler = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;

    const letters = /^[A-Za-z]+$/;

    if (name.trim().length === 0) {
      alert("name field can not be empty");
      return;
    }

    if (name.match(letters)) {
      props.userName(name);
      nameRef.current.value = "";
    } else {
      alert("invalid name");
      return;
    }
  };

  return (
    <div>
      {
        <form onSubmit={formHandler}>
          <input type="text" placeholder="name" ref={nameRef} />
          <input type="submit" value="Submit" />
        </form>
      }
    </div>
  );
};

export default Login;
