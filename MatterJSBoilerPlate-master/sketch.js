
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
	tree1=new Tree();
}
function draw() {
  rectMode(CENTER);
  background(255);
  stone1.display();
  chain1.display();
  tree1.display();
  drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain1.fly();
}

function keyPressed(){
    if (keyCode===32){
        slingshot.attach(bird.body);
    }
}