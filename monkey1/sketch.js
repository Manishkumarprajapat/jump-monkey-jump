var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var survivalTime=0;
var score

function preload(){
  
  
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaimage = loadImage("banana.png");
  obstacleimage = loadImage("obstacle.png");
 
}




function setup() {
  
  monkey=createSprite(70,350,10,10);
  monkey.addAnimation("jnxn",monkey_running);
  monkey.scale=0.1;
  
  
  
  
  
  ground=createSprite(100,385,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2
  
  obstaclegroup=createGroup();
  banagroup=createGroup();
  score = 0
}


function draw() {
  background("white");
 
   ground.x=ground.width/2
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  if(banagroup.isTouching(monkey)){
   banagroup.destroyEach()
    score=score+2
  }
  if(obstaclegroup.isTouching(monkey)){
  ground.velocityX = 0;
        monkey.velocityY = 0;
        obstaclegroup.setVelocityXEach(0);
        banagroup.setVelocityXEach(0);
        obstaclegroup.setLifetimeEach(-1);
        banagroup.setLifetimeEach(-1);
  }
   monkey.velocityY = monkey.velocityY+0.8;
  monkey.collide(ground)
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,100,50)
  text("score: "+score,300,100)
  
  
  
  
 o();
  b();
  drawSprites(); 
}
function o() {
  if(frameCount%100=== 0){
    obstacle=createSprite(400,361,10,10);
    obstacle.addImage(obstacleimage)
    obstacle.scale=0.1   
    obstacle.velocityX=-4; 
    obstaclegroup.add(obstacle)
    obstacle.lifetime=100;
  }
}
function b() {
  if(frameCount%100=== 0){
    banana=createSprite(400,200,10,10);
  banana.addImage(bananaimage)
  banana.scale=0.1;
    banana.velocityX=-4;
    banagroup.add(banana);
    banana.y=Math.round(random(100,200));
    banagroup.add(banana);
    banana.lifetime=100
  }
  
}




