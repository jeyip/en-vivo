import React, { useContext, useState, useEffect } from "react";
import UserList from "./UserList";
import MessageList from "./MessageList";
import Input from "./Input";
import { WebsocketContext } from "../WebsocketContext";
import styles from "./ChatWindow.module.css";

const addMessage = (event, socket, username = "", updateMessages, messages) => {
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
  const [connectedUsers, updateConnectedUsers] = useState([]);

  useEffect(() => {
    // Automatically scrolls to newest message in list
    const messageListNode = document.getElementById("messageList");
    messageListNode.scrollTop = messageListNode.scrollHeight;
  }, [messages]);

  socket.on("ADD_MESSAGE", newMessage =>
    updateMessages([...messages, newMessage])
  );

  socket.on("UPDATE_USERS", newConnectedUsers =>
    updateConnectedUsers([...newConnectedUsers])
  );

  return (
    <div className={styles.chatWindow}>
      <UserList userList={connectedUsers} />
      <MessageList messages={messages} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Input
          addMessage={e => addMessage(e, socket, "", updateMessages, messages)}
        />
      </div>
    </div>
  );
};

export default ChatWindow;
