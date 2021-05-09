
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;
var roofObject;





function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    roofObject=new ground(400,250,230,20)
	bobObject1=new papper(320,575,40)
	bobObject2=new papper(360,575,40)
	bobObject3=new papper(400,575,40)
	bobObject4=new papper(440,575,40)
	bobObject5=new papper(480,575,40)
	rope1=new rope(bobObject1.body,roofObject.body,-80, 0)
	rope2=new rope(bobObject2.body,roofObject.body,-40, 0)
	rope3=new rope(bobObject3.body,roofObject.body,0, 0)
	rope4=new rope(bobObject4.body,roofObject.body,40, 0)
	rope5=new rope(bobObject5.body,roofObject.body,80, 0)
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roofObject.display()
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()



  
  drawSprites();
 
}



function keyPressed() {
	if (keyCode===UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{
			x:-50,y:-145
		})
	}
}




