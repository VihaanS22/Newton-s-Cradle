
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5
var ground
var rope, rope2, rope3, rope4, rope5
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;



	bob1 = new Bob(300, 400, 50)
	bob2 = new Bob(310, 400, 50)
	bob3 = new Bob(400, 400, 50)
	bob4 = new Bob(450, 400, 50)
	bob5 = new Bob(500, 400, 50)
	

ground = new Ground(400, 50, 500, 10)
rope= new Rope(bob1.body,ground.body, -100,  0);
rope2 = new Rope(bob2.body,ground.body, -50, 0);
rope3= new Rope(bob3.body,ground.body, 0, 0);
rope4= new Rope(bob4.body,ground.body, +50, 0);
rope5= new Rope(bob5.body,ground.body, +100, 0);
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);
ground.display(); 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  

  
  drawSprites();
 
}

function keyPressed() { 
  
  
  if (keyDown("up")) 
  console.log("Key Is Pressed")
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-70,y:-70}); } 

}

function keyPressed() { 
  if (keyDown("down")) 
  console.log("Key Is Pressed")
  { Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-70,y:-70}); } 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-70,y:-70}); } 

} 



