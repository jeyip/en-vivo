import React from "react";
import { WebsocketContext } from "../components/WebsocketContext";
import ChatWindow from "../components/ChatWindow";
import YoutubePlayer from "../components/YoutubePlayer";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");

// TODO: Fix Provider and Proptypes and activeTab
const App = () => {
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
