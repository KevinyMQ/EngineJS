class Rect2 extends Component{

	constructor(object){
		super();
		this.object = object;
	}

	process(deltaTime){
		this.object.transform.x = MouseInput.x	- this.object.component[0].width/2;
		this.object.transform.y = MouseInput.y - this.object.component[0].height/2;
		//console.log(Input.key);
		//console.log(this.object.component[1].isColliding);
		this.isColliding = this.object.component[1].isColliding;
		//this.object.transform.x+=1;
		//this.object.transform.y+=1;
	}




}
