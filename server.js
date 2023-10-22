var express = require("express");
var app = express();
var port = 4444
var server = app.listen(port,listening);
var servo;

var five = require("johnny-five");
var Raspi = require("raspi-io").RaspiIO;
var board = new five.Board({
  io: new Raspi()
});

board.on("ready", function() {
    servo = new five.Servo({
    pin: 12,
    controller: "PCA9685",
    center: true,
  });
   console.log("board ready");
});

app.use(express.static('website'));
//app.get('/servo/:angle/', servoResponse)

var socket = require("socket.io");
var io = socket(server)
io.sockets.on('connection',newConnection);

function newConnection(socket){
	console.log("socket");
	socket.on('coords',moveServo);

	function moveServo(data){

	servo.to(data.angle);
	console.log(data);

	}
}


function listening(){
        console.log("listening on port "+port+"...")
}

function servoResponse(request, response){
        var data = request.params;
        let angle = data.angle;
        response.send("moving to angle: " + angle);
        servo.to(angle);
}
