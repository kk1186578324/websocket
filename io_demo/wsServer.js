
var app = require('http').createServer()
var io = require('socket.io')(app);

var clientCount = 0;
app.listen(3000);
io.on('connection', function (socket) {
	clientCount++
	socket.nickname = "user" + clientCount
	io.emit('enter',socket.nickname + 'comes in')
  socket.on('message', function(str){ 
  	io.emit('message',socket.nickname + 'says:'+str)
  });
  socket.on('disconnect', function (data) {
    io.emit('leave',socket.nickname+'left')
  });
});
console.log("listen:3000");