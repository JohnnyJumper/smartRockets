var canvas;
var popul;
var count;

var lifespan;
var target;
var infoTable;
var obstacles;

function centerCanvas() {
	let x = (windowWidth - width) / 2;
	let y = (windowHeight - height) / 2;
	canvas.position(x, y);
}


function setup() {
	canvas =  createCanvas(1000, 800);
	obstacles = [];
	// frameRate(30);
	canvas.style('display', 'block');
	lifespan = 250;
	count = 0;
	target = createVector(width/2, 50);
	for (var y = 200; y <= 500; y+=150) {
		for (var x = 240; x < 800; x+=60)
			obstacles.push(new Obstacle(x, y));
	}
	console.log(obstacles);
	popul = new population();
	infoTable = new info(width, height);
}

function mousePressed() {
	noLoop();
}


function draw() {
	background(51);
	popul.run();
	count++;
	if (count == lifespan) {
		popul.evolve(popul);
		count = 0;
	}
	for (var i = 0; i < obstacles.length; i++) {
		obstacles[i].show(); 
	}
	ellipse(target.x, target.y, 20, 20);
}

function windowResized() {
	centerCanvas();
}
