class info {

	constructor(width, height) {
		let w = width/2;
		let h = 100;

		this.newAverage = 0;
		this.averageValue = 0;
		this.maxValue = 0;
		this.div = createDiv('Info-table').size(w, h);
		this.div.position(windowWidth/2 - width/4, height + 20);
		this.div.class('info_table');

		this.countP = createP('Time to live = ');
		this.count = createP(count);
		this.averageP = createP('Average Fitness = ');
		this.average = createP(this.averageValue).size(100,22);
		this.maxP = createP('Max Fitness = ');
		this.max = createP(this.maxValue);
		this.generationP = createP('Generation = #');
		this.generation = createP(gen);


		this.averageP.position(windowWidth/2 - width/6, height + 25);
		this.average.position(windowWidth/2 - 30, height + 25);
		this.maxP.position(windowWidth/2 - width/6, height + 45);
		this.max.position(windowWidth/2 - 30, height + 45);
		this.countP.position(windowWidth/2 - width/6, height + 65);
		this.count.position(windowWidth/2 - 30, height + 65);
		this.generationP.position(windowWidth/2 - width/6, height + 85);
		this.generation.position(windowWidth/2 - 30, height + 85);
	}


	update(average, max) {
		this.average.html((average = 0 ? 0 : average));
		this.max.html((max  <= 0 ? 0 : max ));
		this.count.html(lifespan - count);
		this.generation.html(gen);
	}
}
