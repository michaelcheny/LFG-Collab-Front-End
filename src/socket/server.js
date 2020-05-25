const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

// app.get("/", (req, res) => {
//   res.send("<h1>Hello world</h1>");
// });

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("join", ({ user, room }) => {
    console.log(`${user} has joined this room (room ${room})`);
    socket.join(room);
  });

  socket.on("SEND_MESSAGE", (msg) => {
    // console.log("message: " + msg);
    console.log("room: " + msg.room);
    io.to(msg.room).emit("RECEIVE_MESSAGE", msg);
  });
});

http.listen(3002, () => {
  console.log("listening on *:3002");
});
