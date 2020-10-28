
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boyImage;
function preload()
{	
	boyImage
}
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	stone1=new Stone(235,420,30);
	chain1=new chain(stone1.body,{x:235,y:420});
}
function draw() {
  rectMode(CENTER);
  background(255);
  stone1.display();
  chain1.display();
  drawSprites();
}



