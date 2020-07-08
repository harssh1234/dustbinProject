//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var ground,ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin = new Dustbin(700,350);
	ground = new Ground(400,400);
	ball = new Ball(200,300);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin.display();
  ground.display();
  ball.display();
  ball.keyPressed();
  
  drawSprites();
 
}




