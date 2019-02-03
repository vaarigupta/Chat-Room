const express = require('express');
const path = require('path');
const socket = require('socket.io');
var publicPath = path.join(__dirname , '../public');
var PORT = process.env.PORT || 3000;

/// Express Set up
var app = express();
var server = app.listen(PORT , ()=>{
  console.log(`listening on port ${PORT}`);
})
//Serving Static Content - All the Content in Public Folder
app.use(express.static(publicPath));


///Set up webSocket at Server
var io = socket(server);

io.on('connection',(socketClient)=>{
  console.log("Client Connected - " , socketClient.id);

  socketClient.on('chat',(data)=>{
    io.sockets.emit('chat',data);
  })

  socketClient.on('typing',(user)=>{
    socketClient.broadcast.emit('typing',user);
  })
})
