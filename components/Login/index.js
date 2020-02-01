import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";

const submitLoginInfo = (event, username) => {
  if (event.key === "Enter" && username) {
    localStorage.setItem("username", username);
    Router.push("/home");
  }
};

const Login = () => {
  const [username, setUsername] = useState("");
  return (
    <div id="loginContainer">
      <input
        id="usernameInput"
        placeholder="Enter Username"
        onChange={e => setUsername(e.target.value)}
        onKeyUp={e => submitLoginInfo(e, username)}
        value={username}
      ></input>
      <Link href="/home">
        <button onClick={submitLoginInfo}>Sign In</button>
      </Link>
    </div>
  );
};

export default Login;
