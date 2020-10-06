
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5
var ground
var rope
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;



	bob1 = new Bob(150, 200, 50)
	bob2 = new Bob(175, 200, 50)
	bob3 = new Bob(200, 200, 50)
	bob4 = new Bob(225, 200, 50)
	bob5 = new Bob(250, 200, 50)
	

ground = new Ground(400, 50, 500, 10)
rope= new Rope(bob1.body,ground.body, bob1.Diameter*2, 0);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
ground.display(); 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope.display();
  
  drawSprites();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100}); } 
} 


