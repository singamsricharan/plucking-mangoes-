
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
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
}
function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
}



