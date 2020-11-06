
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boyImage;
function preload()
{	
	boyImage=loadImage("images/boy.png");
}
function setup() {
	var canvas=createCanvas(1200,600);
	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);
    mango1=new Mango(1100,200,10);
    mango2=new Mango(800,200,10);
    mango3=new Mango(900,100,10);
    mango4=new Mango(1000,100,10);
    mango5=new Mango(700,250,10);
    mango6=new Mango(1100,230,10);
    mango7=new Mango(850,230,10);
    mango8=new Mango(800,150,10);
    mango9=new Mango(1000,200,10);
    mango10=new Mango(650,240,10);
    mango11=new Mango(1000,100,10);
    mango12=new Mango(1100,150,10);
	stone1=new Stone(260,430,10);
	chain1=new chain(stone1.body,{x:260,y:430});
    tree1=new Tree(600,10,100,100);
    ground1=new Ground(600,590,1200,20);
}
function draw() {
  background(255);
  Engine.update(engine);
  tree1.display();
  stone1.display();
  chain1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  dectectcollision(stone1,mango1);
  dectectcollision(stone1,mango2);
  dectectcollision(stone1,mango3);
  dectectcollision(stone1,mango4);
  dectectcollision(stone1,mango5);
  ground1.display();
  image(boyImage,200,350,300,300);
  drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x: mouseX , y: mouseY});
}
function mouseReleased(){
    chain1.fly();
}
function keyPressed(){
    if (keyCode===32){
        Matter.Body.setPosition(stone1.body,{x:200,y:200})
        chain1.attach(stone1.body);
    }
}
function dectectcollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false)
}
}