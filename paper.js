class paperObject{
constructor(x,y,radius){
    
    var option={
    isStactic:false,
    restitution:1.0,
    friction:0.5,
    density:1.2
  
  }
this.body=Bodies.circle(x,y,radius,option)
this.radius=radius

World.add(world,paperObject)
}
display(){


rectMode(CENTER);
push();
fill("pink")
circle(200,457,this.radius)
}
}


