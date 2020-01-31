const express = require("express");
const app = express();

const io = require("socket.io")(
  app.listen(5000, () => {
    console.log("listening on port 5000");
  })
);

// TODO: Figure out how to have multiple channels with connectedUsers for each channel
let connectedUsers = [];

io.on("connection", socket => {
  console.log("user connected");

  socket.on("ADD_MESSAGE_BROADCAST", message => {
    socket.broadcast.emit("ADD_MESSAGE", message);
  });

  socket.on("newUser", username => {
    connectedUsers = [...connectedUsers, { [socket.id]: username }];
    socket.broadcast.emit("UPDATE_USERS", connectedUsers);
  });

  socket.on("PLAY_VIDEO_BROADCAST", () => {
    socket.broadcast.emit("PLAY_VIDEO");
  });

  socket.on("PAUSE_VIDEO_BROADCAST", () => {
    socket.broadcast.emit("PAUSE_VIDEO");
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
    connectedUsers = connectedUsers.filter(
      user => user[socket.id] !== socket.id
    );
    socket.broadcast.emit("UPDATE_USERS", connectedUsers);
  });
});