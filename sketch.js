var bullet,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  thickness=random(22,83)
  bullet=createSprite(50,200,50,30)
  bullet.shapeColor=("black")
  wall=createSprite(1500,200,thickness,height/2)
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255); 
  if(hasCollided(bullet,wall)){
    bullet.velocityX=5;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10)
    {
      wall.shapeColor=("red")
    }
    if(damage<10)
    {
      wall.shapeColor=("green")
    }
          
  }

  drawSprites();
}

function hasCollided(lwall,lbullet){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return false;
}
return true;
}