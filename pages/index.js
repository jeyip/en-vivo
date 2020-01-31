import React from "react";
import { WebsocketContext } from "../components/WebsocketContext";
import YoutubePlayer from "../components/YoutubePlayer";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");

const App = () => {
  return (
    <div id="app">
      <YoutubePlayer />
    </div>
  );
};

export default function AppWithSockets() {
  return (
    <WebsocketContext.Provider value={{ socket }}>
      <App />
    </WebsocketContext.Provider>
  );
}
