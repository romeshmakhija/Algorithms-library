var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 150, 50);
  movingRect = createSprite(200,200,50,150);
fixedRect.shapeColor = "green";
movingRect.shapeColor = "green";
fixedRect.debug = true;
movingRect.debug = true;

}




function draw() {
  background(0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  
  }

  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

 
  drawSprites();
}









