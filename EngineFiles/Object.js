class Object{
	constructor(transform){

		EntityList.pushEntity(this);
		//EntityList.pushEntity(this.testObject2);

		this.objectID = EntityList.entitieslist.length;
		this.transform = transform;

		this.component = [];
		this.x = 1;
		this.y = 2;
	}

	addComponent(component) {
    this.component.push(component);
		this.component[this.component.length-1].componentIDObject = EntityList.entitieslist.length;
  	}



  	//for (var i=0; i < this.component.length; i++){
	//		this.component[].
	//}

}
