var box;

function setup() {
  createCanvas(500,500);
box = createSprite (250,250,50,50)
}










function draw() 
{
  background(30);
  
  if (keyIsDown(UP_ARROW)){
box.position.y = box.position.y -5
}
if (keyIsDown(DOWN_ARROW)){
box.position.y = box.position.y +5
}
if (keyIsDown(RIGHT_ARROW)){
box.position.x = box.position.x +5
}
if (keyIsDown(LEFT_ARROW)){
box.position.x = box.position.x -5
}




drawSprites()
}




