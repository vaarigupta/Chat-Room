var url = 'http://localhost:3000';
var socketClient = io.connect(url);

var output = document.getElementById('output'),
 user = document.getElementById('user'),
 message = document.getElementById('message'),
 but = document.getElementById('but'),
 feedback=document.getElementById('feedback');

 message.addEventListener('keypress',function()
 {
   socketClient.emit('typing',user.value);
 })


but.addEventListener('click',function(){
  socketClient.emit('chat',{
    message:message.value,
    user: user.value
  })
  message.value= "";
})


socketClient.on('typing',function(user)
{
  feedback.innerHTML = "<p>" + user + " is typing message ... </p>";
})

socketClient.on('chat',function(data){
  feedback.innerHTML = "";
  output.innerHTML += "<p><b>"+ data.user + "</b> : " + data.message + "</p>" ;
})
