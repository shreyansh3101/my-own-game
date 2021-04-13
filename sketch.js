var gun1,gun2,gun1Img,gun2Img;

var mainGun,mainGun1,mainGun2;

var target,targetImg;

var bullet,bulletImg;

var bg;

var bCount,bUsed;

var edges;

var etc1,etc2;

var restart,restartImg;

var value;

var START=0;
var LEVEL1=1;
var LEVEL2=2;
var LEVEL3=3;
var LEVEL4=4;
var LEVEL5=5;
var LEVEL6=6;
var LEVEL7=7;
var END=8;
var gameState=START;

function preload(){
  gun1Img=loadImage("images/startGun1.jpg");
  gun2Img=loadImage("images/startGun2.jpg");

  mainGun1=loadImage("images/mainGun1.png");
  mainGun2=loadImage("images/mainGun2.png");

  targetImg=loadImage("images/target.png")

  bulletImg=loadImage("images/bullet.png")

  bg=loadImage("images/bg.jpg")

  restartImg=loadImage("images/restart.png")

}

function setup() {
  createCanvas(1100,600); 

  gun1=createSprite(200,400)
  gun1.addImage(gun1Img);

  gun2=createSprite(800,400)
  gun2.addImage(gun2Img);

  target = createSprite(300,80);
  target.addImage(targetImg);
  target.scale=0.7;
//target.debug=true
target.setCollider("circle",0,0,20)


  etc1=createSprite(1100,300,50,600)
  etc2=createSprite(0,300,50,600)

  bCount=0;
  bUsed=0

  edges=createEdgeSprites();
  
restart=createSprite(width/2+50,height/2+30)
restart.addImage(restartImg)

}

function draw() {
background(bg);

etc1.visible=false;
etc2.visible=false;


console.log(bUsed)






  if(keyWentDown("s") && gameState!== START){
    bullet=createSprite(mainGun.x,mainGun.y)
    bullet.addImage(bulletImg)
    bullet.scale=0.45;
    bullet.velocityY=-60;
    bCount=bCount-1
    
    }

    if(gameState!==START && bCount===0 && bullet.y<0){
      
     gameState=END; 
      
    }




  if(gameState===START){
restart.visible=false;
target.visible=false;

bCount=0;

    textStyle(BOLDITALIC)
    textSize(40);
    fill("GOLD");
    text("MILITARY PRACTICE SHOOTER",200,50);

  textStyle(NORMAL)
  fill("skyblue")
  textSize(30)
  text("CHOOSE A GUN",350,150);
  


if(mousePressedOver(gun1)){
  gameState=LEVEL1;
  value = "first"
mainGun=createSprite(300,500);
mainGun.addImage(mainGun1);
}
else if(mousePressedOver(gun2)){
  gameState=LEVEL1;
  value = "first"
  mainGun=createSprite(300,500);
  mainGun.addImage(mainGun2)
}
}  



if (gameState===LEVEL1){
 
  if(value === "first"){
    bCount=1;
    value="second"
  }
  

target.visible=true;

gun1.destroy();
gun2.destroy();


textStyle(NORMAL)
  fill("red")
  textSize(30)
text("press S to shoot",500,400)
 
if(bullet!== undefined && bullet.isTouching(target) ){
  
  gameState=LEVEL2;
  
  
  }

}






if(gameState===LEVEL2){
if(value==="second"){
  bCount=2;
  value="third"
}


target.x=1000

if(bullet!== undefined && bullet.isTouching(target) ){
  
  gameState=LEVEL3;
  
  
  }

}








if(gameState===LEVEL3)
{
if(value==="third"){
bCount=2
value="fourth"
}
target.x=100;

if(bullet!== undefined && bullet.isTouching(target) ){
  
bullet.destroy()

  gameState=LEVEL4;
  
  target.velocityX=10;
  }

}





if(gameState===LEVEL4){
if(value==="fourth"){
bCount=3;
value="fifth"
}
if(target.x>=width){
  console.log("passed")
  target.x=target.x-20
  target.velocityX=target.velocityX * (-1)
  }

  if(target.x<=0){
    console.log("passed")
    target.x=target.x+20
    target.velocityX=target.velocityX * (-1)
    }

    if(bullet!== undefined && bullet.isTouching(target) ){
  
bullet.destroy()

      gameState=LEVEL5;
      
      target.velocityX=100;
      }   

}

if(gameState===LEVEL5){
if(value==="fifth"){
bCount=3;
value="sixth"
}
  if(target.x>=width){
    console.log("passed")
    target.x=target.x-200
    target.velocityX=target.velocityX * (-1)
    }
  
    if(target.x<=0){
      console.log("passed")
      target.x=target.x+200
      target.velocityX=target.velocityX * (-1)
      }

      if(bullet!== undefined && bullet.isTouching(target) ){
       
bullet.destroy()

        gameState=LEVEL6;
        
        target.velocityX=200;

        } 

}



if(gameState===LEVEL6){
if(value==="sixth"){
bCount=3;
value="seventh"
}
  if(target.x>=width){
    console.log("passed")
    target.x=target.x-400
    target.velocityX=target.velocityX * (-1)
    }
  
    if(target.x<=0){
      console.log("passed")
      target.x=target.x+400
      target.velocityX=target.velocityX * (-1)
      }

      if(bullet!== undefined && bullet.isTouching(target) ){
       
        bullet.destroy()
        
                gameState=LEVEL7;
                
                target.velocityX=0;
                } 



}


if(gameState===LEVEL7){
if(value==="seventh"){
bCount=5;
value="end"
}
  if(frameCount%5===0){
  target.x=Math.round(random(100,1000))
  }
      if(bullet!== undefined && bullet.isTouching(target) ){
       
        bullet.destroy()
        
                gameState=END;
                
                
                } 
  
}




if(gameState===END){

 restart.visible=true 
mainGun.destroy()
target.destroy()

if(mousePressedOver(restart)){
 gameState=START; 
 gun1=createSprite(200,400)
  gun1.addImage(gun1Img);

  gun2=createSprite(800,400)
  gun2.addImage(gun2Img);

  target = createSprite(300,80);
  target.addImage(targetImg);
  target.scale=0.7;
//target.debug=true
target.setCollider("circle",0,0,20)
}


}



if(gameState!==START && gameState!==LEVEL1){

mainGun.x=World.mouseX;


}
  drawSprites();

  if(gameState!==START){
    textSize(20);
    fill("blue");
    text("BULLETS LEFT: "+bCount,900,550);
    }

  if(gameState!==START){
    textSize(30)
    fill("yellow")
    text("level "+gameState,1000,25)
  }


}


