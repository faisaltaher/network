new p5();
var input, ipinput, ipinputto, greeting, greeting1, greeting2;

var x = 180
var y = 200

function setup() {
	createCanvas(1000, 400);
	greeting = createElement('p', "what's your message");
	input = createInput();
	greeting1 = createElement('p', "who wrote the message (ip address)");
	ipinput = createInput();
	greeting1 = createElement('p', "for who are you writing this message for (ip address");
	ipinputto = createInput();
}

function draw() {
	background(255);
	fill(255)
	strokeWeight(11);
	line(y+20,x-1,y+20,x+40);
	line(y+20,x-2,y-10,x+40);
	line(y+20,x-1,y-10,x);
	strokeWeight(0);
	fill(100, 100, 100);
	rect(y, x - 20, 50, 50);
	rect(y, x + 40, 50, 50);
	rect(y - 60, x + 40, 50, 50);
	rect(y - 60, x - 20, 50, 50);
	text("first you send it to the server then the server send it to "+ipinputto.value()+" the message was: " + input.value()+ " the person who send was " + ipinput.value() , 30, 30);

}