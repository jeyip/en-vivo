import React, { useContext, useState, useEffect } from "react";
import MessageList from "./MessageList";
import Input from "./Input";
import { WebsocketContext } from "../WebsocketContext";
import styles from "./ChatWindow.module.css";

const onSubmit = (
  event,
  socket,
  username = "Anonymous",
  updateMessages,
  messages
) => {
  const newMessage = {
    username: username,
    text: event.target.value
  };

  if (event.key === "Enter") {
    if (newMessage.text) {
      socket.emit("ADD_MESSAGE_BROADCAST", newMessage);

      newMessage.self = true;
      updateMessages([...messages, newMessage]);
      event.target.value = "";
    }
  }
};

const ChatWindow = () => {
  const { socket } = useContext(WebsocketContext);
  const [messages, updateMessages] = useState([]);
  let username;

  useEffect(() => {
    username = localStorage.getItem("username");

    // Automatically scrolls to newest message in list
    const messageListNode = document.getElementById("messageList");
    messageListNode.scrollTop = messageListNode.scrollHeight;
  }, [messages]);

  socket.on("ADD_MESSAGE", newMessage =>
    updateMessages([...messages, newMessage])
  );

  return (
    <div className={styles.chatWindow}>
      <div className={styles.header}>En Vivo Chat</div>
      <MessageList messages={messages} />
      <div className={styles.inputContainer}>
        <Input
          onSubmit={e => {
            onSubmit(e, socket, username, updateMessages, messages);
          }}
        />
      </div>
    </div>
  );
};

export default ChatWindow;
