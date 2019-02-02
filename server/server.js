const express = require('express');
const path = require('path');
var publicPath = path.join(__dirname , '../public');
var app = express();
app.use(express.static(publicPath));
app.use((req,res,next)=>{
  res.send("<h1>Welcome to my page</h1>");
  next();
})

app.listen(3000 , ()=>{
  console.log("Started at 3000");
})
