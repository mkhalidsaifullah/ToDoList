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
    <div className="login-main">
      {
        <>
          {/* <img className = "backdrop" src="../images/backdrop.jpg" alt="image" /> */}
          <form className="login-form" onSubmit={formHandler}>
            <input
              className="login-name"
              type="text"
              placeholder="Please enter your name"
              ref={nameRef}
            />
            <br />
            <input className="submit-btn" type="submit" value="SUBMIT" />
          </form>
        </>
      }
    </div>
  );
};

export default Login;
