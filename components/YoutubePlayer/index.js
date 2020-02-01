import React, { useContext, useState } from "react";
import Video from "react-youtube";
import queryString from "query-string";
import Searchbar from "./Searchbar";
import { WebsocketContext } from "../WebsocketContext";
import styles from "./YoutubePlayer.module.css";

const useVideoID = (videoID = "2g811Eo7K8U") => {
  const [url, setUrl] = useState("");
  const queries = url.split("?")[1];
  const newVideoID = queryString.parse(queries).v || videoID;
  return { setUrl, videoID: newVideoID };
};

const handleSearch = (e, setUrl, socket) => {
  if (e.key === "Enter") {
    setUrl(e.target.value);
    socket.emit("SEARCH_BROADCAST", e.target.value);
  }
};

const handleOnChange = (e, updateSearchTerm, socket) => {
  updateSearchTerm(e.target.value);
  socket.emit("SEARCHTERM_BROADCAST", e.target.value);
};

const YoutubePlayer = () => {
  const { socket } = useContext(WebsocketContext);
  const [searchTerm, updateSearchTerm] = useState("");
  const { setUrl, videoID } = useVideoID();

  socket.on("SEARCH", url => setUrl(url));
  socket.on("SEARCHTERM", searchTerm => updateSearchTerm(searchTerm));

  return (
    <div className={styles.YoutubePlayer}>
      <div className={styles.searchbarContainer}>
        <Searchbar
          handleOnChange={e => handleOnChange(e, updateSearchTerm, socket)}
          handleSearch={e => handleSearch(e, setUrl, socket)}
          searchTerm={searchTerm}
        />
      </div>
      <Video
        id="video"
        containerClassName={styles.videoContainer}
        videoId={videoID}
        opts={{ height: "100%", width: "100%" }}
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
