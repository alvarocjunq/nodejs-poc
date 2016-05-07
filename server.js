var app = require('./custom-express')();

var server = app.listen(3000, function(){
	console.log('server rodando');
});

var socketIO = require('socket.io');
var io = socketIO(server);
app.set('socketIO', io);