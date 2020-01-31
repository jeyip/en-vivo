const express = require("express");
const app = express();

const io = require("socket.io")(
  app.listen(5000, () => {
    console.log("listening on port 5000");
  })
);

io.on("connection", socket => {
  console.log("user connected");

  socket.on("PLAY_VIDEO_BROADCAST", () => {
    socket.broadcast.emit("PLAY_VIDEO");
  });

  socket.on("PAUSE_VIDEO_BROADCAST", () => {
    socket.broadcast.emit("PAUSE_VIDEO");
  });

  // notifies us when a user disconnects
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
