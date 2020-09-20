var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 20);
  car.velocityX = speed;

  wall = createSprite(1500, 200, 60, 200);
  wall.shapeColor = rgb(80, 80, 80)
  
  deformation = (speed * speed * weight * 0.5) / 22500;

  console.log(speed);
  console.log(weight);
  console.log(deformation);
}

function draw() {
  background(0);  

  
  if(car.isTouching(wall)){
    if(deformation < 100){
      car.shapeColor = "green";
    }
    else if(deformation < 180){
      car.shapeColor = "yellow";
    }
    else{
      car.shapeColor = "red";
    }
    car.collide(wall);
  }
  drawSprites();
}