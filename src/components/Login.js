import { useRef } from "react";

const Login = (props) => {
  const nameRef = useRef("");
  const formHandler = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;

    if (name.trim().length === 0) {
      alert("name field is empty");
      return;
    }

    /*  console.log(name); */
    props.userName(name);
    nameRef.current.value = "";
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
