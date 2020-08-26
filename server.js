const path = require("path");
const express = require("express");
const app = express();
const http = require("http");
const socket = require("socket.io");

const port = 3000 || process.env.port;

const server = http.createServer(app);

const io = socket(server);
//static folder for html template
app.use(express.static(path.join(__dirname, "public")));

// //run when client connects to the server

io.on("connect",function (socket) {
   console.log("new client connected" + socket);
  })

app.listen(port, function () {
  console.log("listening on port " + port);
});
