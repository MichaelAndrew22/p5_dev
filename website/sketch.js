var socket

function setup() {
	//createCanvas(windowWidth,windowHeight);
//	background("gray");
//	cursor(CROSS);
          slider = createSlider(0, 180, 90, 5);
	  slider.position(30, 90);
 	 slider.style('width', '400px');
	slider.style('height', '300px');
	
	socket = io.connect('http://192.168.0.4:4444');
	frameRate(11);
}

function draw() {
//background(second()*3);

//cursor(CROSS);
//fill("orange");
//ellipse(mouseX,mouseY,77,77);

var data = {
  angle: slider.value()
}
//fill("orange")
//stroke("white");
//textAlign(CENTER);
//textFont('Georgia');
//textSize(55);
//text(slider.value(),width/2,height/2);
socket.emit('coords', data);
}
