class dna{

	getGenes() { return this.genes;	}

	constructor(genes) {

		this.mag = 0.01;
		this.genes = [];
		this.mutant = false;
		this.mutationRate = 0.005;

		if (!genes) {
			for (var i = 0 ; i < lifespan; i++)
				this.genes[i] = p5.Vector.random2D().setMag(this.mag);
		}
		else {
			this.genes = genes;	
		}
	}

	crossover(Partner) {
		let answer = [];
		let midPoint = floor(random(this.genes.length));
		let partnerGenes = Partner.getGenes();
		for (var i = 0; i < this.genes.length; i++) {
			answer.push(i < midPoint ? this.genes[i] : partnerGenes[i]);
		}
		return (new dna(answer));
	}

	mutation() {
		// if (!mutate)
		// 	return ;
		let count = 0;
		for (let i = 0; i < this.genes.length; i++) {
			let chance = random(1);
			if (chance < this.mutationRate) {
				this.genes[i] = p5.Vector.random2D().setMag(this.mag);
				count++;
				if (!this.mutant && count > lifespan/20)
					this.mutant = true;
			}
		}
	}	
}
