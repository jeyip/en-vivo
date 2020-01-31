import React from "react";
import PropTypes from "prop-types";
import styles from "./MessageList.module.css";

const MessageList = ({ messages = [] }) => {
  return (
    <ul className={styles.messageList}>
      {messages.map((message, index) => {
        if (message.self) {
          return (
            <li className="self" key={`${index}-self-${message.messageText}`}>
              <p className="username">{message.username}:</p>
              <p className="chatMessages">{message.messageText}</p>
            </li>
          );
        } else {
          return (
            <li key={`${index}-${message.username}-${message.messageText}`}>
              <p className="username">{message.username}:</p>
              <p className="chatMessages">{message.messageText}</p>
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
