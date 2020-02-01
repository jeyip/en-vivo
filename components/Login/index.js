import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
import Router from "next/router";
import styles from "./Login.module.css";

const handleSubmit = (e, username) => {
  if (e.key === "Enter" && username) {
    localStorage.setItem("username", username);
    Router.push("/home");
  }
};

const handleOnClick = username => {
  localStorage.setItem("username", username);
  Router.push("/home");
};

const Login = () => {
  const [username, setUsername] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const buttonDisabled = !username;

  return (
    <div className={styles.loginContainer}>
      <div className={styles.layout}>
        <div className={styles.header}>Welcome,</div>
        <input
          className={styles.usernameInput}
          onChange={e => setUsername(e.target.value)}
          onKeyUp={e => handleSubmit(e, username)}
          placeholder="Enter Username"
          ref={inputRef}
          value={username}
        ></input>
        <button
          className={cx(styles.button, {
            [styles.disabled]: buttonDisabled,
            [styles.enabled]: !buttonDisabled
          })}
          disabled={buttonDisabled}
          onClick={() => handleOnClick(username)}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
