import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.css";

const ChatInput = ({ addMessage }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input
      className={styles.input}
      onKeyUp={addMessage}
      placeholder="Enter a message..."
      ref={inputRef}
      type="text"
    ></input>
  );
};

ChatInput.propTypes = {
  addMessage: PropTypes.func.isRequired
};

export default ChatInput;
