var socketClient = io.connect('http://localhost:3000');

var output = document.getElementById('output'),
 user = document.getElementById('user'),
 message = document.getElementById('message'),
 but = document.getElementById('but');



 but.addEventListener('click',function(socket)
{
  socketClient.emit('chat',{
    message:message.value,
    user : user.value
  })
  message : ""
})


socketClient.on('chat',function(data){
  output.innerHTML += "<p><b>"+ data.user + "</b> : " + data.message + "</p>" ;
})
