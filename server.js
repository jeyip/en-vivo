const app = require("express")();
var server = require("http").Server(app);
const io = require("socket.io")(server);

server.listen(5000);

// let connectedUsers = [];

io.on("connection", socket => {
  console.log("user connected");

  socket.on("ADD_MESSAGE_BROADCAST", message => {
    socket.broadcast.emit("ADD_MESSAGE", message);
  });

  socket.on("SEARCHTERM_BROADCAST", searchTerm => {
    socket.broadcast.emit("SEARCHTERM", searchTerm);
  });

  socket.on("SEARCH_BROADCAST", url => {
    socket.broadcast.emit("SEARCH", url);
  });

  // socket.on("NEW_USER_BROADCAST", username => {
  //   connectedUsers = [...connectedUsers, { [socket.id]: username }];
  //   socket.emit("UPDATE_USERS", connectedUsers);
  // });

  socket.on("PLAY_VIDEO_BROADCAST", () => {
    socket.broadcast.emit("PLAY_VIDEO");
  });

  socket.on("PAUSE_VIDEO_BROADCAST", () => {
    socket.broadcast.emit("PAUSE_VIDEO");
  });

  socket.on("disconnect", () => {
    // connectedUsers = connectedUsers.filter(
    //   user => user[socket.id] === socket.id
    // );
    // socket.broadcast.emit("UPDATE_USERS", connectedUsers);
  });
});
