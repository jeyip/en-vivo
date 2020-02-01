import React, { useEffect } from "react";
import { WebsocketContext } from "../components/WebsocketContext";
import ChatWindow from "../components/ChatWindow";
import YoutubePlayer from "../components/YoutubePlayer";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");

const App = () => {
  useEffect(() => {
    socket.emit("NEW_USER_BROADCAST", localStorage.getItem("username"));
  }, []);

  return (
    <div id="app">
      <div id="aside">
        <ChatWindow />
      </div>
      <YoutubePlayer />
    </div>
  );
};

const AppWithWebsockets = () => {
  return (
    <WebsocketContext.Provider value={{ socket }}>
      <App />
    </WebsocketContext.Provider>
  );
};

export default AppWithWebsockets;
