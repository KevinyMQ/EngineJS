class Rect2Obj extends Object{

	//super(this.transform);
	constructor(){
		//this.transform =
		super(new Transform(300,200,1,1));
//		super.addComponent(new TestComponent());
		super.addComponent(new Renderer(this.transform, 100,100, "red"));
		super.addComponent(new BoxColider(EntityList.entitieslist, this.transform, 100,100));
		super.addComponent(new Rect2(this));
		//console.log(this.y);
	}



}
