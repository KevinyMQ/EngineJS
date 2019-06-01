class Rect1 extends Component{

	constructor(object){
		super();
		this.object = object;
	}

	process(){


		this.object.transform.x+= 30;
		if(this.object.transform.x > 800 || this.object.transform.x < 0 - this.object.component[0].width){
			this.object.transform.y=Math.floor((Math.random() * 500));
			this.object.transform.x = 0;
		}
	}




}
