var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1 = createSprite(200, 400, 50, 80);
  obj1.shapeColor = "green";
  obj1.velocityX = 4;
  obj2 = createSprite(900, 400, 50, 80);
  obj2.shapeColor = "green";
  obj3 = createSprite(1000, 400, 50, 80);
  obj3.shapeColor = "green";
  obj4 = createSprite(300, 400, 50, 80);
  obj4.shapeColor = "green";
  obj4.velocityX = -4;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  bounceOff(obj1, obj4);
  drawSprites();
}

