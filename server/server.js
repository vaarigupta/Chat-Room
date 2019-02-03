const express = require('express');
const path = require('path');
const socket = require('socket.io');
var publicPath = path.join(__dirname , '../public');
var PORT = 3000;

/// Express Set up
var app = express();
var server = app.listen(3000 , ()=>{
  console.log(`listening on port 3000`);
})
//Serving Static Content - All the Content in Public Folder
app.use(express.static(publicPath));


///Set up webSocket at Server
var io = socket(server);

io.on('connection',(socketClient)=>{
  console.log("Client Connected - " , socketClient.id);
})


// io.on('disconnection',(socketClient)=>{
//   console.log("Client Disconnected - " , socketClient.id)
// })
