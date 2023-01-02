
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);
	engine = Engine.create();
	world = engine.world;               

	//Create the Bodies Here.
	var ball_option = {
		isStatic: false,
		restitution: 0.3,
		friction: 0, 
		density: 1.2
	}

	ball = Bodies.circle(50,20,10,ball_option)
	World.add(world,ball)
	ground = new Ground(400,390,800,10)
	leftground = new Ground(500,330,10,100)
	rightground = new Ground(700,330,10,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  ground.display()
  leftground.display()
  rightground.display()	
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:15,y:-15})
	}
}


