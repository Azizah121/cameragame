
var block;
var floor;
function setup(){
  createCanvas(400,400)
 block=createSprite(200,360,40,40);

 floor=createSprite(200,400,400,60)
}

camera.position.x=width/2;
camera.position.y=block.y;
function draw(){
  background("white");
  block.shapeColor=("red");
  floor.shapeColor=("green");
  
  if(keyDown(UP_ARROW)){
    block.velocityY=-7;
  }
    if(keyDown(DOWN_ARROW)){
    block.velocityY=7;
  }
    if(keyDown(LEFT_ARROW)){
    block.velocityX=-7;
  } 
    if(keyDown(RIGHT_ARROW)){
    block.velocityX=7;
  }


 drawSprites();
}
