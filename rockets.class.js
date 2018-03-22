class Rocket {

	dna() {	return this.dna; }

	applyForce(force) {
		this.acceleration.add(force);
	}

	constructor(newDNA){
		this.width = 5;
		this.height = 15;
		this.position = createVector(width/2, height * 7/8);
		this.velocity = createVector(0, 0);
		this.acceleration = createVector(0, 0);
		if (newDNA)
			this.dna = newDNA;
		else
			this.dna = new dna();
		this.dead = false;
		this.winner = false;
		this.mutant = this.dna.mutant;
		this.lifeTime = 1;
	}

	checkStatus() {
		this.dist = this.position.dist(target);
		if (this.dist < 19) {
			this.winner = true;
			mutate = false;
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
		this.calculateFitness();
		if (this.dead || this.winner)
			return ;
		this.applyForce(this.dna.genes[count]);
		this.acceleration.limit(1);
		this.velocity.add(this.acceleration);
		this.velocity.limit(5);
		this.position.add(this.velocity);
	}

	calculateFitness() {
		this.dist = this.position.dist(target);
		let factor = this.dist * this.lifeTime;
		factor = (factor == 0) ? 0.0001 : factor;
		this.fitness = 1 / factor;
		this.fitness = pow(this.fitness, 4) * pow(10, 8);
	}

	show() {
		if (this.dead)
			return ;
		push();
		translate(this.position.x, this.position.y);
		if (this.mutant) {
			fill(87, 255, 51);
		} else {
			fill(255, 87, 51);
		}
		rotate(this.velocity.heading());
		rectMode(CENTER);
		if (popul.getMax() <= this.fitness) {
			fill(0, 0, 255);
		}
		rect(0, 0, this.height, this.width);
		pop();
	}
}
