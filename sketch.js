
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, stone, stoneObj;
var mango1, mango2, mango3;
var mango4, mango5, mango6;

function preload()
{
	boy = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var groundObj = new Ground();
	stoneObj = new Stone();
	var treeObj = new Tree();
	var launcherObj = new Launcher();

	var mango1 = new Mango(200, 200);
	var mango2 = new Mango(220, 200);
	var mango3 = new Mango(240, 200);
	var mango4 = new Mango(260, 200);
	var mango5 = new Mango(280, 200);

	Engine.run(engine);
  
}

function draw() {
	rectMode(CENTER);
	background(0);
  
	detectCollision(stoneObj, mango1);
	detectCollision(stoneObj, mango2);
	detectCollision(stoneObj, mango3);
	detectCollision(stoneObj, mango4);
	detectCollision(stoneObj, mango5);
 
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();

	drawSprites();
  }
  
  function mouseDragged(){
	  Matter.Body.setPosition(stone, {x:mouseX, y:mouseY});
  }
  
  function mouseReleased(){
	  stoneObj.fly();
  }
  
  function detectCollision(lstone, lmango){
	  mangoBodyPosition = lmango.body.position;
	  stoneBodyPosition = lstone.body.position;
  
	  var distanve = dist(mangoBodyPosition.x, mangoBodyPosition.y, stoneBodyPosition.x, stoneBodyPosition.y);
  }
  
  function keyPressed(){
	  if(keyCode === 32){
		  Matter.Body.setPosition(stoneObj.body, {x:235, y:420});
		  launcherObject.attach(stoneObj.body);
	  }
  }

