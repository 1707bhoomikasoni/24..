var box1,box2,ground,ball,box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  box1=new Box(1200,640,200,15)
  box2=new Box(1095,600,15,100)
  box3=new Box(1305,540,15,230)
  ground=new Ground(width/2,650,1500,10)
  ball=new paper(200,645)

}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed()
  ellipseMode(CENTER)
  drawSprites();
 box1.display()
 box2.display()
 box3.display()
ground.display()
ball.display()
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:+21,y:-16})
  }
}

