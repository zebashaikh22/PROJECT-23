var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var line1,line2,line3;
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
	
    groundSprite1=createSprite(width/2,650, 200,20);
	groundSprite1.shapeColor=color(180)
	
	groundSprite2=createSprite(510,620,20,100);
	groundSprite2.shapeColor=color(180)
	
	groundSprite3=createSprite(310,620,20,100);
	groundSprite3.shapeColor=color(180)

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35,width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	
    ground1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground1);

    ground2 = Bodies.rectangle(width/2,620, width, 10 , {isStatic:true} );
 	World.add(world, ground2);

	ground3 = Bodies.rectangle(width/2,620, width, 10 , {isStatic:true} );
 	World.add(world, ground3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



