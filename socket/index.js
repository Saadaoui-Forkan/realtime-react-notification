const { Server } = require("socket.io");

const io = new Server({ 
    cors: {
        origin: "http://localhost:3000"
    }
 });

io.on("connection", (socket) => {
    io.emit("firstEvent", "test")
    socket.on("disconnection", (socket) => {
  }); 
});


io.listen(3001)