
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies; // name spacing

var engine,world; 
var ground;
var ball;
function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
engine= Engine.create();
world=engine.world;
var ground_options={
isStatic:true
}
//JSON
ground=Bodies.rectangle(200,395,400,50,ground_options );
World.add(world,ground);


var ball_options={

restitution:1

}


ball=Bodies.circle(200,120,20,ball_options);
World.add(world,ball);

console.log(ground);

}

function draw() {
  background(0);  

  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  //drawSprites();
}