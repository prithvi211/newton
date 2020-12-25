
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3, rope4,rope5;
var roofOBJ
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	roofOBJ=new roof(width/2,height/4,width/7,20);
	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobObject1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	

	rope1=new rope(bobObject1.body,roofOBJ.body,-bobDiameter*2, 0)

	rope2=new rope(bobObject2.body,roofOBJ.body,-bobDiameter*1, 0)
	rope3=new rope(bobObject3.body,roofOBJ.body,0, 0)
	rope4=new rope(bobObject4.body,roofOBJ.body,bobDiameter*1, 0)
	rope5=new rope(bobObject5.body,roofOBJ.body,bobDiameter*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roofOBJ.display();
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
 
 
  drawSprites();
 
}



