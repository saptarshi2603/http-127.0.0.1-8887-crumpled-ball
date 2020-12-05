
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
 rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paperObject=new paperObject(200,50,70)
ground = new ground(600,500,1200,20)
basket1= new basket(400,50,20,200)
basket2=new basket(500,20,200,20)
basket3=new basket(600,50,20,200)


	Engine.run(engine);
 
}


function draw() {
 
  background(0);
  paperObject.display();
  ground.display();
  basket1.display();
  basket2.display()
  basket3.display()

 drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW) {
  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})

}

}


