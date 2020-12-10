
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var side1, side2, side3, side1Image;
var paper, paperImage;
function preload(){
  paperImage = loadImage("paper.png");
  side1Image = loadImage("dustbin.png")
}

function setup() {
	createCanvas(1200, 400);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    side1 = new Dustbin(1000,360,200,20);
    side2 = new Side(895,275,20,200);
    side2.visible = false;
    side3 = new Side(1060,275,20,200);
    side3.visible = false;
    paper = new Paper(200,345,30,30);
    ground = new Ground(600,380,1200,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  side2.display();
  side3.display();
  paper.display();
  ground.display();
  side1.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:40,y:-50})
	}
}



