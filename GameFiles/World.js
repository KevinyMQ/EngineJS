class World {

	static canvas;
	static canvasContext;
	//static canvasContext;

	constructor() {

		//variables for the mainLoop
		this.delta = 0;
		this.lastFrameTimeMs = 0;
		this.timeStep = 1000/60;

		//Add your entities here
		this.rect1Obj = new Rect1Obj();
		this.rect2Obj = new Rect2Obj();
		//this.textObj = new TextObj();
		this.points = 0;
	}

	init() {
		World.canvas = document.getElementById('gameCanvas');
		World.canvasContext = World.canvas.getContext('2d');
		//var as = document.getElementById("scream");
		//World.canvas.drawImage();
		requestAnimationFrame(this.mainLoop.bind(this));

		World.canvas.addEventListener('mousemove', MouseInput.updateMousePos);

		//this.bricks.brickReset();
	}

	mainLoop(timeStamp) {
		if(timeStamp < this.lastFrameTimeMs + this.timeStep) {
			requestAnimationFrame(this.mainLoop.bind(this));
			return;
		}
		this.delta += timeStamp - this.lastFrameTimeMs;
		this.lastFrameTimeMs = timeStamp;
		while(this.delta >= this.timeStep) {
			this.moveEverything(this.timeStep);
			this.delta -= this.timeStep;
		}
		this.drawEverything();
		requestAnimationFrame(this.mainLoop.bind(this));
	}

	moveEverything(deltaTime) {
		for (var i=0; i < EntityList.entitieslist.length; i++){
				//if(EntityList.entitieslist[i].component[2] != null){
					EntityList.entitieslist[i].component[1].process(deltaTime);
					EntityList.entitieslist[i].component[2].process(deltaTime);
				//}
		}
	}

	drawEverything() {
		Utils.clearScreen();
		if(EntityList.entitieslist[1].component[2].isColliding){
			this.points += 1;
		}
		Utils.colorText(this.points, 600, 550, "white");

		//console.log(EntityList.entitieslist[2].component[0].process());
		for (var i=0; i < EntityList.entitieslist.length; i++){
			if(EntityList.entitieslist[i].component[0] != null){
			EntityList.entitieslist[i].component[0].process();
		}
		}

	}



}
