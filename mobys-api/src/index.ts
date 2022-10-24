import app from "./app";
import http from "http";
import SocketIO from "socket.io";

const server = http.createServer(app);
const io = new SocketIO.Server(server);

io.on("connection", (socket: any) => {
  console.log("SOCKET - Connection");
  socket.on("disconnect", function () {
    console.log("SOCKET - Disconnect");
  });
});

/**
 * Port Configuration
 */
const PORT = process.env.PORT || 3000;

app.set("io", io);
app.set("port", PORT);

/**
 * Listen Port
 */
server.listen(PORT, () => console.log(`Server Started: http://localhost:${PORT}`));
