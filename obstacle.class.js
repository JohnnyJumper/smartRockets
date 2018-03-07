class Obstacle {

	getPos() { return this.position; }

	constructor(x, y) {
		this.position = createVector(x, y);
		this.diameter = 30;
	}

	show() {
		push();
		fill(255,0,0);
		translate(this.position.x, this.position.y);
		ellipse(0, 0, this.diameter);
		fill(255);
		pop();
	}
	
	checkStatus(rocketObj) {
		let dist = p5.Vector.dist(rocketObj.position, this.position);
		if (dist < this.diameter / 2) {
			rocketObj.dead = true;
			rocketObj.lifetime = count;
			return (true);
		}
		else 
			return (false);
	}
}
