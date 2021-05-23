var bullet,wall,speed,weight,thickness;

function setup() {
  createCanvas(1000,400);

  bullet=createSprite(40, 200, 50, 20);
  thickness=random(22,83);
  wall=createSprite(900,200,thickness,200);
  wall.shapeColor=("grey");

  speed=random(223,321);
  weight=random(30,52);
  

  bullet.velocityX=speed;

  
}

function draw() {
  background(255,255,255);  
  damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

    if(wall.x-bullet.x<wall.width/2+bullet.width/2){
      bullet.velocityX=0;
      if(damage>10){
        wall.shapeColor=("red")
      }
      
      else {wall.shapeColor=("green")}
    }

  drawSprites();
}