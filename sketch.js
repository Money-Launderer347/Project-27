
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var bobObject1 = new bob(150,600);
	bobObject1.shapeColor = "gray";

	var bobObject2 = new bob(150.2,600);
	bobObject2.shapeColor = "gray";

	var bobObject3 = new bob(150.4,600);
	bobObject3.shapeColor = "gray";

	var bobObject4 = new bob(150.6,600);
    bobObject4.shapeColor = "gray";

	var bobObject5 = new bob(150.8,600);
    bobObject5.shapeColor = "gray";


	var roof = new ground(400,100,300,50);

	var rope1 = new rope(bobObject1.body.roofObject.body,-bobDiameter*2, 0);
	var rope2 = new rope(bobObject2.body.roofObject.body,-bobDiameter*2,0);
	var rope3 = new rope(bobObject3.body.roofObject.body,-bobDiameter*2,0);
	var rope4 = new rope(bodyObject4.body.roofObject.body,-bobDiameter*2,0);
	var rope5 = new rope(bobObject5.body.roofObject.body, -bobDiameter*2,0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



