new p5();
var input, ipinput, ipinputto, greeting, greeting1, greeting2;

var x = 180
var y = 200

function setup() {
	createCanvas(400, 400);
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
	rect(x - 30, y - 30, 90, 90);
	rect(x + 10, y + 10, 10, 10);
	strokeWeight(0);
	fill(100, 100, 100);
	rect(y, x - 20, 50, 50);
	rect(y, x + 40, 50, 50);
	rect(y - 60, x + 40, 50, 50);
	rect(y - 60, x - 20, 50, 50);
	text("this " + ipinput.value() + " want's to send this message: " + input.value() + " to " + ipinputto.value(), 30, 30);

}