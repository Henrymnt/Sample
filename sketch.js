var box;
var edges;
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,50,50);
  edges=createEdgeSprites();


}

function draw() {
  background(30);

  if(keyDown("up")){
    box.velocityY=-2;
  }
  if(keyDown("down")){
    box.velocityY=2;
  }
  if(keyDown("left")){
    box.velocityX=-2;
  }
  if(keyDown("right")){
    box.velocityX=2;
  }

  box.bounceOff(edges);

drawSprites();

}




