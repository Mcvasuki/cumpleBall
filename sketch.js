
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var groundobj , ball , leftSide, rightside
var world;
var radius = 40
var ground1
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
rectMode(CENTER)


	engine = Engine.create();
	world = engine.world;
	var ball_opiions = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2

	}

	ball = Bodies.circle(260,100,radius/2, ball_opiions)

	//Create the Bodies Here.

     ground1 = new ground(width/2 , 670 , width , 20)
	 leftSide= new ground(1100,600, 20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x , ball.position.y , radius  , radius)
  ground1.display()
  leftSide.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position ,{x:85 ,  y:-85}

		)
	}
}


