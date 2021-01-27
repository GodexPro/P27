
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var chain1,chain2,chain3,chain4,chain5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);
	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,100,500,40);
	bob2 = new Bob(540,450,40);
  chain2 = new Chain(bob2.body,roof.body,140,0);
  
  
	bob3 = new Bob(470,450,40);
  chain3 = new Chain(bob3.body,roof.body,60,0);
  
  
	bob4 = new Bob(390,450,40);
  chain4 = new Chain(bob4.body,roof.body,-20,0);
  
  
	bob1 = new Bob(620,450,40);
  chain1 = new Chain(bob1.body,roof.body,220,0);
  
  
	bob5 = new Bob(310,450,40);
	chain5 = new Chain(bob5.body,roof.body,-100,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  roof.display();
  bob1.display();
  fill("white");
  chain1.display();

  bob2.display();
  chain2.display();

  bob3.display();
  chain3.display();

  bob4.display();
  chain4.display();

  bob5.display();
  chain5.display();
  
  drawSprites();

  
 
}

function keyPressed(){

  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:300,y:-95});


  }
}

