
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paper1, paper2, paper3, paper4;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	
	paper1 = new paper(1000,450, 40);
	
	dustbinObj=new dustbin(1400,650);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  groundObject.display();

  Engine.run(engine);
  
  paper1.display();
  
  dustbinObj.display();

}

function keyPressed() {
	if(keyCode === UP_ARROW)  {
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:150, y: -300});
	 }
}
