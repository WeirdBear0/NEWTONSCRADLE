
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}
var rod1;
var ball1, ball2, ball3, ball4, ball5, slingshot;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	rod1 = new Rod();
	ball1 = new Ball();
	ball2 = new Ball1();
	ball3 = new Ball2();
	ball4 = new Ball3();
	ball5 = new Ball4();
	slingshot = new Slingy(ball1.body, {x:200,y:50});

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  rod1.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  slingshot.display();
  
  drawSprites();
 
}



