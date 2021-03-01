var bullet,wall,thickness;
var speed,weight;

function setup() {
   createCanvas(1600,400);

   speed=random(223,321);
weight=random(25,30);
  
 bullet= createSprite(500,200,50,10);
 wall=createSprite(1200,200,60,100);
 wall.shapeColor=(80,80,80);

 bullet.velocityX=15;

 thickness=random(22,83);

}

function draw() {

  background("black");  

  if(collided(bullet,wall)){
    bullet.velocityX=0;
     var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
     if(damage<10){
       wall.shapeColor=("green");
     }
     if(damage>10){
       wall.shapeColor=("red");
     }
  }
  drawSprites();
}
  collided(bullet,wall);

  function collided(bullet,wall){
bullletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if(bullletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}
