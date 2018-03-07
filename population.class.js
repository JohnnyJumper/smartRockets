class population {

	getAverage() { return this.averageFitness; }
	getMax() { return this.maxFitness; }

	constructor(prev) 
	{
		this.rockets = [];
		this.mattingPool = [];
		this.mutation = 0.01;

		this.populsize = 300;
		if (!prev)	{
			this.maxFitness = -1;
			this.averageFitness = 0;
		}
		else {
			this.maxFitness = prev.getMax();
			this.averageFitness = prev.getAverage();
		}
		for (var i = 0; i < this.populsize; i++)
			this.rockets[i] = new Rocket();
	}

	calculateFitness() {
		let sum = 0;
		for (var i = 0; i < this.populsize; i++) {
			this.rockets[i].calculateFitness();
			if (this.maxFitness < this.rockets[i].fitness)
				this.maxFitness = this.rockets[i].fitness;
			sum += this.rockets[i].fitness;
		}
		for (var i = 0; i < this.populsize; i++) {
			this.rockets[i].fitness /= this.maxFitness;
		}
		for (var i = 0; i < this.populsize; i++){
			for (var j = 0; j < this.rockets[i].fitness * 100; j++) {
				this.mattingPool.push(this.rockets[i]);
			}
		}
		this.averageFitness = sum / this.populsize;
		sum = 0;
	}

	evolve() {
		this.calculateFitness();
		for (var i = 0; i < this.rockets.length; i++) {
			let parentA = random(this.mattingPool).dna;
			let parentB = random(this.mattingPool).dna;
			let child = parentA.crossover(parentB);
			let chance = random(0, 1);
			if (chance <= this.mutation)
				child.mutation();
			this.rockets[i] = new Rocket(child);
		}
		this.mattingPool = [];
	}

	run() {
		for (var i = 0; i < this.rockets.length; i++) {
			this.rockets[i].update();
			this.rockets[i].show();
		}
		infoTable.update(popul.getAverage(), popul.getMax());
	}
}
