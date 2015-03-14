var express = require('express'),
	app  = express(),
	server = require('http').Server(app),
	path = require('path'),
	webRTC = require('webrtc.io').listen(server)
	/*io = require('socket.io')(server)*/
	;

app.set('views', path.join(__dirname,'./view'))
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'./view/assets')));
/*app.set( "ipaddr", "127.0.0.1" );
app.set( "port", 3000 );*/

app.get('/', function (req, res) {
  res.render('invite');
});

var session_now = [];

app.post('/session',function(req,res){
	var id = req.body.invite_id;
});

app.get('/id3754',function(req,res){
	res.render('session');
});

webRTC.rtc.on('chat_msg', function(data, socket) {
  var roomList = webRTC.rtc.rooms[data.room] || [];

  for (var i = 0; i < roomList.length; i++) {
    var socketId = roomList[i];

    if (socketId !== socket.id) {
      var soc = webRTC.rtc.getSocket(socketId);

      if (soc) {
        soc.send(JSON.stringify({
          "eventName": "receive_chat_msg",
          "data": {
            "messages": data.messages,
            "color": data.color
          }
        }), function(error) {
          if (error) {
            console.log(error);
          }
        });
      }
    }
  }
});

server.listen(3000);