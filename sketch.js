var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    groundSprite1=createSprite(width/2,650, 200,20);
	groundSprite1.shapeColor = "red"

	groundSprite2=createSprite(300,610, 20,100);
	groundSprite2.shapeColor= "red"

	groundSprite3=createSprite(500,610, 20,100);
	groundSprite3.shapeColor= "red"


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 //RED BOXES
	 ground1 = Bodies.rectangle(width/2,670, 200,100, {isStatic:true} );
 	World.add(world, ground1);

	 ground2 = Bodies.rectangle(300,610, 20,100, {isStatic:true} );
 	World.add(world, ground2);

	 ground3 = Bodies.rectangle(500,610, 20,100, {isStatic:true} );
 	World.add(world, ground3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  spawnPackage()

  spaceBar()

  drawSprites();
 
}

function spawnPackage() {
 if (keyCode === DOWN_ARROW) {

  Matter.Body.setStatic(packageBody,false);  
  }
}

function spaceBar(){
if(frameCount%70 === 0){

var vector = Matter.Vector.create(400,200)

	Matter.Body.setPosition(packageBody,vector)
	Matter.Body.setStatic(packageBody,true); 


}
}

