const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree, treeImg, stone, stoneImg, ground, boy, boyImg;
var score;


function setup() {
	createCanvas(3000, 900);


	engine = Engine.create();
	world = engine.world;

	stone = new Stone(160,500,20);
	mango1 = new Mango(1300,300,30);
	mango2 = new Mango(1310,250,30);
	mango3 = new Mango(1210,200,30);
	mango4 = new Mango(1190,300,30);
	mango5 = new Mango(1230,300,30);
	mango6 = new Mango(1100,300,30);
  mango7 = new Mango(1150,280,30);
  tree = new Tree(1150,680);
  ground = new Ground(0,680,4000,20);
	boy = new James(250,600);
	chain = new Launcher(stone.body,{x:160, y:500});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  background("white")
  fill('blue');
  textSize(24);
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY", 200,200);
  text("AND ENJOY THE GAME BY PLUCKING MANGOES",300,300);
  text("SCORE:"+score,100,100);
  ground.display();
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  chain.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:160, y:500});
    chain.attach(stone.body);
  }
}
function detectCollision(lstone,lmango){
  stoneBodyPosition = lstone.body.position;
  mangoBodyPosition = lmango.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }

}