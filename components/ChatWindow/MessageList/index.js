import React from "react";
import PropTypes from "prop-types";
import styles from "./MessageList.module.css";

function MessageList({ messages }) {
  const messagesRendered = [];
  const messageList = messages;

  // TODO: refactor
  if (messageList) {
    for (let i = 0; i < messageList.length; i++) {
      if (messageList[i].self) {
        messagesRendered.push(
          <li
            className="self"
            key={`${i} - self - ${messageList[i].messageText}`}
          >
            <p className="username">{messageList[i].username}:</p>
            <p key={i} className="chatMessages">
              {messageList[i].messageText}
            </p>
          </li>
        );
      } else {
        messagesRendered.push(
          <li
            key={`${i} - ${messageList[i].username} - ${messageList[i].messageText}`}
          >
            <p className="username">{messageList[i].username}:</p>
            <p key={i} className="chatMessages">
              {messageList[i].messageText}
            </p>
          </li>
        );
      }
    }
  }

  return <ul className={styles.messageList}>{messagesRendered}</ul>;
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object)
};

export default MessageList;
