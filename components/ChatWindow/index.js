import React, { useContext, useState } from "react";
import UsersList from "./UsersList";
import MessageList from "./MessageList";
import Input from "./Input";
import { WebsocketContext } from "../WebsocketContext";
import styles from "./ChatWindow.module.css";

//TODO: Fix username
const addMessage = (event, socket, username = "", updateMessages, messages) => {
  const inputNode = event.target;
  const newMessage = {
    username: username,
    messageText: event.target.value
  };

  // TODO: refactor
  if (event.key === "Enter") {
    if (!newMessage.messageText) {
      event.target.className = "requiredField";
      event.target.placeholder = "There was no text to send!";
      setTimeout(() => {
        inputNode.className = "";
        inputNode.placeholder = "Enter a message...";
      }, 2000);
    } else {
      if (event.target.className === "requiredField") {
        event.target.className = "";
        event.target.placeholder = "Enter a message...";
      }
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
  const [connectedUsers, updateConnectedUsers] = useState([]);

  socket.on("ADD_MESSAGE", newMessage =>
    updateMessages([...messages, newMessage])
  );

  socket.on("UPDATE_USERS", newConnectedUsers =>
    updateConnectedUsers([...newConnectedUsers])
  );

  return (
    <div className={styles.chatWindow}>
      <UsersList userList={connectedUsers} />
      <MessageList messages={messages} />
      <Input
        addMessage={e => addMessage(e, socket, "", updateMessages, messages)}
      />
    </div>
  );
};

export default ChatWindow;
