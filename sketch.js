var  car,wall;
var  speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1400,200,60,height/2);
  car.velocityX=speed;
  car.shapeColor='white'
}

function draw() {
  background(0,0,0);  
 
  BounceOff(car,wall);
  drawSprites();
}
function BounceOff(obj1,obj2)
{ 
  if(Math.abs(obj1.x-obj2.x)<obj1.width/2+obj2.width/2)
  { deformation=(0.5*weight*speed*speed)/22500;
    obj1.velocityX=obj1.velocityX*(-1);
    obj2.velocityX=obj2.velocityX*(-1);
    calculation(deformation);
  }
}
function calculation(deformation)
{
  if(deformation<100)
  {
    car.shapeColor='green';
  }
  if(deformation>100&&deformation<=180)
  {
    car.shapeColor='yellow';
  }
  if(deformation>180)
  {
    car.shapeColor='red';
  }
}