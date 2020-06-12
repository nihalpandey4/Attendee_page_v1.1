var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: true
}));
const io = require("socket.io")(8080);
let count = 0;
let activeCount = 0;
let users = [];

io.on("connection", socket => {
  
  socket.on("raise-hand", function() {
    count = count + 1;
    console.log("Raise Hands " + count);
  });
  socket.on("hand-raised", function() {
    count = count - 1;
    console.log("Raise Hands " + count);
  });
});
