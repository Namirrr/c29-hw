const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
  bunny = Matter.Bodies.rectangle(200, 660, 50, 40)
  Matter.World.add(world, bunny)

  fruit = Matter.Bodies.circle(250, 350, 30)
  Matter.World.add(world, fruit)

  rope = Matter.Constraint.create( {pointA : {x: 250, y: 80}, 
   bodyB: fruit
  })
  Matter.World.add(world, rope)

  
}

function draw() 
{
  background(51);
  ground.show();
  
rect(bunny.position.x, bunny.position.y, 50, 40)
ellipse(fruit.position.x, fruit.position.y, 30)
line(250,80, rope.bodyB.position.x, rope.bodyB.position.y)

  Engine.update(engine);
  

 
   
}
