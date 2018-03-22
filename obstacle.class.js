class Obstacle {

	getPos() { return this.position; }

	constructor(x, y, dir) {
		this.position = createVector(x, y);
		this.origin = this.position.copy();
		this.diameter = 30;
		this.dir = dir;
		this.velocity = createVector(2*this.dir, 0);
	}
	
	update() {
		if (this.position.x >= (this.origin.x + 40) || (this.position.x <= this.origin.x - 40))
			this.dir *= -1;
		this.velocity.x *= this.dir;
		this.position.add(this.velocity);
	}

	show() {
		push();
		fill(255,0,0);
		ellipse(this.position.x, this.position.y, this.diameter);
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
