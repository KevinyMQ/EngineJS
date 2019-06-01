class BoxColider extends Component{

	constructor(entityList, transform, width, height){
		super(1);
		//this.colliders = colliders;
		this.transform = transform;
		this.width = width * this.transform.scaleX;
		this.height = height * this.transform.scaleY;
		this.isColliding = false;
	}

	process(){
		//sconsole.log(testObject2.transform.x);
		for (var i = 0; i < EntityList.entitieslist.length; i++) {
			for (var c = 0; c < EntityList.entitieslist[i].component.length; c++) {
				if(EntityList.entitieslist[i].component[c].componentIDType == 1){
					/*console.log()	;
					this.transform.x;
					EntityList.entitieslist[i].transform.x;
					EntityList.entitieslist[i].component[c].width;
					this.width;
					this.transform.y;
					EntityList.entitieslist[i].transform.y;
					EntityList.entitieslist[i].component[c].height;
					this.height;*/
					//console.log(EntityList.entitieslist[i].component[c].componentIDObject);
					if(EntityList.entitieslist[i].component[c].componentIDObject != this.componentIDObject){


					if(this.transform.x < EntityList.entitieslist[i].transform.x + EntityList.entitieslist[i].component[c].width &&
						       this.transform.x + this.width > EntityList.entitieslist[i].transform.x &&
						       this.transform.y < EntityList.entitieslist[i].transform.y + EntityList.entitieslist[i].component[c].height &&
						       this.transform.y + this.height > EntityList.entitieslist[i].transform.y){
										 this.isColliding = true;
									//console.log("colidiu");
									//return true;
						    }else {
									this.isColliding = false;
									//console.log("nao to colidindo	");

									//return false;

						    }
							}

					/*
					if(this.transform.x < EntityList.entitieslist[i].transform.x + EntityList.entitieslist[i].width &&
							 this.transform.x + this.AABB1.width > this.AABB2.posX &&
							 this.transform.y < this.AABB2.posY + this.AABB2.height &&
							 this.transform.y + this.AABB1.height > this.AABB2.posY){

							return true;
					}*/
				}
			}

}
			/*if(this.transform.x < EntityList.entitieslist[i].transform.x + EntityList.entitieslist[i].width &&
		       this.AABB1.posX + this.AABB1.width > this.AABB2.posX &&
		       this.AABB1.posY < this.AABB2.posY + this.AABB2.height &&
		       this.AABB1.posY + this.AABB1.height > this.AABB2.posY){

					return true;
		    }*/


		//

		//World.canvasContext.fillStyle = "blue";
		//World.canvasContext.fillRect(this.transform.x, this.transform.y, this.width,this.height);
		//Utils.colorRect(this.x, this.y, this.width,this.height, 'blue');
	}

}
