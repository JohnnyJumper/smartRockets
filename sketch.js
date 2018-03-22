var canvas;
var debug;
var popul;
var count;

var lifespan;
var target;
var infoTable;
var obstacles;
var gen;
var mutate;
var dir1 = 1;
var dir2 = -1;

function centerCanvas() {
	let x = (windowWidth - width) / 2;
	let y = (windowHeight - height) / 2;
	canvas.position(x, y);
}

function createObstacles()  {
	for (var y = 200; y <= 500; y+=150) {
		for (var x = -130; x < 1020; x+=60) {
			if (y != 350)
				obstacles.push(new Obstacle(x, y, 1));
			else
				obstacles.push(new Obstacle(x , y, 1));
		}
	}
}

function setup() {
	canvas =  createCanvas(1000, 800);
	obstacles = [];
	mutate = true;
	gen = 0;
	debug = false;
	canvas.style('display', 'block');
	lifespan = 300;
	count = 0;
	target = createVector(width/2, 50);
	createObstacles();
	popul = new population();
	infoTable = new info(width, height);
}

function mousePressed() {
	if (debug) {
		debug = !debug;
		noLoop();
	}
	else {
		debug = !debug;
		Loop();
	}
}


function draw() {
	background(51);
	popul.run();
	count++;
	for (var i = 0; i < obstacles.length; i++) {
		obstacles[i].update();
		obstacles[i].show(); 
	}
	ellipse(target.x, target.y, 20, 20);
	if (count == lifespan || popul.alldead) {
		gen++;
		popul.evolve(popul);
		count = 0;
		obstacles = [];
		createObstacles();
	}
}

function windowResized() {
	centerCanvas();
}
