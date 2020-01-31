import React, { useContext, useState } from "react";
import Video from "react-youtube";
import queryString from "query-string";
import Searchbar from "./Searchbar";
import styles from "./YoutubePlayer.module.css";
import { WebsocketContext } from "../WebsocketContext";

const opts = {
  height: "700",
  width: "100%"
};

const handleSearch = (e, setUrl) => {
  e.key === "Enter" && setUrl(e.target.value);
};

const YoutubePlayer = () => {
  const { socket } = useContext(WebsocketContext);
  const [url, setUrl] = useState("");
  const queries = url.split("?")[1];
  const videoId = queryString.parse(queries).v || "2g811Eo7K8U";

  return (
    <div className={styles.YoutubePlayer}>
      <Searchbar handleSearch={e => handleSearch(e, setUrl)} />
      <Video
        id="video"
        videoId={videoId}
        opts={opts}
        onReady={e => {
          socket.on("PLAY_VIDEO", () => e.target.playVideo());
          socket.on("PAUSE_VIDEO", () => e.target.pauseVideo());
        }}
        onPlay={() => socket.emit("PLAY_VIDEO_BROADCAST")}
        onPause={() => socket.emit("PAUSE_VIDEO_BROADCAST")}
      />
    </div>
  );
};

export default YoutubePlayer;
