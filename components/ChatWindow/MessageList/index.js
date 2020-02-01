import React from "react";
import PropTypes from "prop-types";
import styles from "./MessageList.module.css";

const MessageList = ({ messages = [] }) => {
  return (
    <ul className={styles.messageList}>
      {messages.map((message, index) => {
        if (message.self) {
          return (
            <li className="self" key={`${index}-self-${message.text}`}>
              <p className="username">{message.username}:</p>
              <p className="chatMessages">{message.text}</p>
            </li>
          );
        } else {
          return (
            <li key={`${index}-${message.username}-${message.text}`}>
              <p className="username">{message.username}:</p>
              <p className="chatMessages">{message.text}</p>
            </li>
          );
        }
      })}
    </ul>
  );
};

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object)
};

export default MessageList;
