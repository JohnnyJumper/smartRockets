class dna{


	getGenes() { return this.genes;	}

	constructor(genes) {
		
		this.mag = 0.3;
		this.genes = [];
		
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
		let mutation_plan = floor(random(0, this.genes.length*0.05));
		while (mutation_plan--)
		{
			let mutant = floor(random(0, this.genes.length));
			this.genes[mutant] = p5.Vector.random2D().setMag(this.mag);
		}
	}
}
