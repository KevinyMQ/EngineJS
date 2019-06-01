class Rect1Obj extends Object{

	constructor(){
		super(new Transform(100,100,1,1));
		super.addComponent(new Renderer(this.transform, 100,100, "blue"));
		super.addComponent(new BoxColider(EntityList.entitieslist, this.transform, 100,100));
		super.addComponent(new Rect1(this));
	}
}
