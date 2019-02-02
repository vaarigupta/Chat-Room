const express = require('express');
const path = require('path');
var publicPath = path.join(__dirname , '../public');
var app = express();

var PORT = process.env.PORT || 3000;
app.use(express.static(publicPath));
app.use((req,res,next)=>{
  res.send("<h1>Welcome to Chat App</h1>");
  next();
})

app.listen(PORT , ()=>{
  console.log(`up on port ${PORT}`);
})
