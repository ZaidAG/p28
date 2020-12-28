
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
	mango1= new Mango(740,100,3000);
	tree=new Trees(400,600,20,150);
	surface=new Grounds(400,700,1000,205);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  mango1.display();
  tree.display();
  surface.display();

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    chain.fly();
}


