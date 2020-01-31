import React, { useContext } from "react";
import YouTube from "react-youtube";
import styles from "./YoutubePlayer.module.css";
import { WebsocketContext } from "../WebsocketContext";

const opts = {
  height: "700",
  width: "100%"
};

const YoutubePlayer = () => {
  const { socket } = useContext(WebsocketContext);
  return (
    <div className={styles.YoutubePlayer}>
      <YouTube
        id="player"
        videoId="2g811Eo7K8U"
        opts={opts}
        onReady={e => {
          socket.on("PLAY_VIDEO", () => e.target.playVideo());
          socket.on("PAUSE_VIDEO", () => e.target.pauseVideo());
        }}
        onPlay={() => {
          console.log("playing");
          socket.emit("PLAY_VIDEO_BROADCAST");
        }}
        onPause={() => {
          console.log("pausing");
          socket.emit("PAUSE_VIDEO_BROADCAST");
        }}
      />
    </div>
  );
};

export default YoutubePlayer;
