class Rocket {

	dna() {	return this.dna; }

	applyForce(force) {
		this.acceleration.add(force);
	}

	constructor(newDNA){
		this.position = createVector(width/2, height * 7/8);
		this.velocity = createVector(0, 0);
		this.acceleration = createVector(0, 0);
		if (newDNA)
			this.dna = newDNA;
		else
			this.dna = new dna();
		this.dead = false;
		this.winner = false;
		this.lifeTime = 1;
	}

	checkStatus() {
		this.dist = this.position.dist(target);
		if (this.dist < 16) {
			this.winner = true;
			this.lifetime = count;
			return ;
		}
		for (var i = 0; i< obstacles.length; i++) {
			if (obstacles[i].checkStatus(this))
				break ;
		}
	}


	update() {
		this.checkStatus();
		if (this.dead || this.winner)
			return ;
		this.applyForce(this.dna.genes[count]);
		this.velocity.add(this.acceleration);
		this.position.add(this.velocity);
		this.acceleration.mult(0);
	}

	calculateFitness() {
		this.dist = this.position.dist(target);
		let factor = this.dist * this.lifeTime;

		factor = (factor == 0) ? 1 : factor;
		if (this.winner) {
			this.fitness = 10 / (factor);
		}
		else if (this.dead) {
			this.fitness = 3 / (factor);
		} else
			this.fitness =  5 / (factor);
	}

	show() {
		push();
		translate(this.position.x, this.position.y);
		fill(255, 87, 51);
		rotate(this.velocity.heading());
		rectMode(CENTER);
		rect(0, 0, 25, 5);
		pop();
	}
}
