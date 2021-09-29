import { useRef } from "react";

const Login = (props) => {
  const nameRef = useRef("");
  const formHandler = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;

    if (name.trim().length === 0) {
      alert("name field can not be empty");
      return;
    }

    props.userName(name);
    nameRef.current.value = "";
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
