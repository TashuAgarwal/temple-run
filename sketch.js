var girl, temple, girlimage, templeimage;
var edges,coin,coinimage,obstacle;
var obstacleimage1,obstacleimage2,obstacleimage3,obstacleimage4,bg;
var coingroup;
var score = 0;

function preload(){
girlimage=loadImage("girl.png")
templeimage = loadImage("bg.jpg")
bg=loadImage("bg.jpg")
coinimage=loadImage("coin.png")
}

function setup(){
createCanvas(1000,700)
girl = createSprite(100,200,50,50)
girl.addImage(girlimage)

temple = createSprite(500,350,50,50);
temple.addImage(templeimage)

edges=createEdgeSprites()
temple.scale=5.5

temple.velocityY=2

coingroup= new Group()
}

function draw(){
//background(bg)
 spawncoins()
 
fill("red")
textSize(25);
text("score :"+score, 300,300);

 if(girl.isTouching(coingroup)){
     score=score+10
     
 }
 
if(keyDown(LEFT_ARROW)){
    girl.x=girl.x-5
}

if(keyDown(RIGHT_ARROW)){
    girl.x=girl.x+5
}

if(keyDown(UP_ARROW)){
    girl.y=girl.y-5
}

if(keyDown(DOWN_ARROW)){
    girl.y=girl.y+5
}

if(keyDown("space")){
    girl.velocityY =-15
}

girl.velocityY=girl.velocityY+0.8

if(temple.y > 500){
    temple.y = 200;
}

girl.collide(edges)
drawSprites()
    
} 

function spawncoins(){
    if(frameCount%45==0){
        for(i = -20; i <=30;i=i+45){
        coin=createSprite(525,i,20,20)
    coin.addImage(coinimage)
    coin.velocityY=2
    coin.scale=0.3}
    coingroup.add(coin)
    }
 }
