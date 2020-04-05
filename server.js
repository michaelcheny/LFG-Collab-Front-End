const io = require("socket.io")();
// import io from 'socket.io'

io.on("connection", (client) => {
  client.on("subscribeToTimer", (interval) => {
    console.log("client is subscribing to timer with interval ", interval);
    setInterval(() => {
      client.emit("timer", new Date());
    }, interval);
  });
});

const port = 8000;
io.listen(port);
console.log("listen on port ", port);
