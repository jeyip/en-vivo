const app = require("express")();
var server = require("http").Server(app);
const io = require("socket.io")(server);

server.listen(5000);

io.on("connection", socket => {
  socket.on("ADD_MESSAGE_BROADCAST", message => {
    socket.broadcast.emit("ADD_MESSAGE", message);
  });

  socket.on("SEARCHTERM_BROADCAST", searchTerm => {
    socket.broadcast.emit("SEARCHTERM", searchTerm);
  });

  socket.on("SEARCH_BROADCAST", url => {
    socket.broadcast.emit("SEARCH", url);
  });

  socket.on("PLAY_VIDEO_BROADCAST", () => {
    socket.broadcast.emit("PLAY_VIDEO");
  });

  socket.on("PAUSE_VIDEO_BROADCAST", () => {
    socket.broadcast.emit("PAUSE_VIDEO");
  });
});
