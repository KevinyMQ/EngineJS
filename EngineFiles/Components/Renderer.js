class Renderer extends Component{

	constructor(transform, width, height, color){
		super(2);
		this.transform = transform;
		this.width = width * transform.scaleX;
		this.height = height * transform.scaleY;
		this.color = color;
	}

	process(){
		Utils.colorRect(this.transform.x, this.transform.y, this.width,this.height,  this.color);
	}
}
