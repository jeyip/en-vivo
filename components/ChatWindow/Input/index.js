import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./Input.module.css";

const ChatInput = ({ onSubmit }) => {
  const [isFocused, setFocus] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input
      className={cx(styles.input, { [styles.focus]: isFocused })}
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
      onKeyUp={onSubmit}
      placeholder="Enter a message..."
      ref={inputRef}
      type="text"
    />
  );
};

ChatInput.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default ChatInput;
