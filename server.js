var io = require('socket.io').listen(8000);

io.sockets.on('connection', function (socket) {
   
   socket.on('css', function(data){
      socket.broadcast.emit('css',{ css: data });
   });

   socket.on('html', function(data){
      socket.broadcast.emit('html',{ html: data });
   });

});