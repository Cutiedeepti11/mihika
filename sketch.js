var fixedRect, movingRect;
var Rosella ,Evelyn;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  Rosella=createSprite(10,200,50,50);
  Evelyn =createSprite(400,200,10,70);
  Rosella.velocityX=2;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,fixedRect))
  {
    movingRect.shapeColor="pink";
    fixedRect.shapeColor="pink";
  }
  else 
  {
movingRect.shapeColor="green";
fixedRect.shapeColor="green";
  }
 if(isTouching(Rosella,Evelyn))
 {
   Rosella.x=20;
   Rosella.y=20;
 }
  
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
        return true;
  }
  else{
      return false;
  }
}

function BounceOff(object1,object2)
{
  if(object1.x-object2.x<object2.width/2+object1.width/2&&
    object2.x - object1.x < object2.width/2 + object1.width/2)
    {

    }
  if()
}