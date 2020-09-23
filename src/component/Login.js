import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { searchUserService } from "../service";

const Login = () => {
  let history = useHistory();

  const [user, setUser] = useState({
    username: "",
    password: "",
    message: "",
  });

  const changeHandler = ($event) => {
    const { name, value } = $event.target;
    setUser({ ...user, [name]: value, message: "" });
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    setUser({ ...user, message: "" });

    if (user.username === "" || user.password === "") {
      setUser({ ...user, message: "Please enter username and password" });
      return;
    }

    const response = await searchUserService(user.username);
    const data = await response.json();

    if (
      data &&
      data.results.length &&
      data.results[0].birth_year === user.password
    ) {
      setUser({ ...user, message: "Username or password is correct" });
      history.push("/search");
    } else {
      setUser({ ...user, message: "Username or password is invalid" });
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <hr />
      <div className="form-control">
        <label>Username</label>
        <input
          className="control"
          type="text"
          value={user.username}
          onChange={changeHandler}
          name="username"
        ></input>
      </div>
      <div className="form-control">
        <label>Password</label>
        <input
          className="control"
          type="password"
          value={user.password}
          onChange={changeHandler}
          name="password"
        ></input>
      </div>
      <div className="error-message">{user.message}</div>
      <div>
        <button className="login-button" onClick={loginHandler}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
