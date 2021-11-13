
var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "0";
var img;
var img2;
var mode; //determine whether game has started

function preload(){
  img = loadImage('sword.png');
  img2 = loadImage('level1.jpg');
  img3 = loadImage('level2.jpeg');
  img4 = loadImage('level3.jpg');
  img5 = loadImage('level4.jpg');
  img6 = loadImage('handdemon.png');
  img7 = loadImage('swampdemon.png');
  img8 = loadImage('drumdemon.png');
  img9 = loadImage('spiderdemon.png');
  img10 = loadImage('level5.jpg');
  img11 = loadImage('enmu.png');
  img12 = loadImage('winner.gif');
  img13 = loadImage('titlescreen.jpeg');
}


function setup(){
  mode = 0;  //initially the game has not started
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
  noCursor();

} // end of setup ===================================================

function draw(){
  
  clear();
  background(img13);
  if (mode==0){
    text('Press enter to start');
  }
  if (mode==1) {
    gameState = "L1";
  }
 
   background(img13);
  image(img, mouseX-16, mouseY-16,32,32);
  fill(250);
  text('Press ENTER to slay some demons!', width/2, height/2);
  textStyle(BOLD);
  
  if(gameState == "L1"){
  levelOne();
  }
  if(gameState == "L2"){
    levelTwo();
  }
  if(gameState == "L3"){
    levelThree();
  }
  if(gameState == "L4"){
    levelFour();
  }
   if(gameState == "L5"){
    levelFive();
  }
  if(gameState == "WIN"){
    youWin();
  }
    
  text(("Score: " + score),width/2,40);
} // end of draw ==================================================

function keyPressed() {
  if(keyCode===ENTER) {
    mode=1;
  }
}

function levelOne(){  //Final Selection against hand demon
  background(img2);
  text("Level 1", width/2,height-20);
  image(img, mouseX-16, mouseY-16,32,32);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  if(score>=10){
    gameState = "L2";
  }
    
  
  line(ballx,bally,mouseX,mouseY);
  image(img6, ballx-35,bally-35, ballSize+30, ballSize+30);
  
} // end of level 1 ==============================================

function levelTwo(){  //Battle in Northwest Town against swamp demons
  background(img3);
  image(img, mouseX-16, mouseY-16,32,32);
  text("Level 2", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  if(score>=20){
    gameState = "L3";
  }
    
  
  //line(ballx,bally,mouseX,mouseY);
  image(img7, ballx-30,bally-30, ballSize+20, ballSize+20);
  
} // end of level 2 ==============================================

function levelThree(){  //Battle against Kyogai, the drum demon
  background(img4);
  image(img, mouseX-16, mouseY-16,32,32);
  text("Level 3", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  if(score>=30){
    gameState = "L4";
  }
    
  
  //line(ballx,bally,mouseX,mouseY);
  image(img8, ballx-32.5, bally-32.5, ballSize+25, ballSize+25);
  
} // end of level 3 ==============================================

function levelFour(){  //Battle against Rui 
  background(img5);
  image(img, mouseX-16, mouseY-16,32,32);
  text("Level 4", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  if(score>=45){
    gameState = "L5";
  }
    
  
  //line(ballx,bally,mouseX,mouseY);
  image(img9, ballx-15, bally-15, ballSize-10, ballSize-10);
  
} // end of level 4 ==============================================

function levelFive(){  //Battle against Enmu
  background(img10);
  image(img, mouseX-16, mouseY-16,32,32);
  text("Level 5", width/2,height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  if(score>=60){
    gameState = "WIN";
  }
    
  
  //line(ballx,bally,mouseX,mouseY);
  image(img11, ballx-17.5, bally-17.5, ballSize-5, ballSize-5);
  
} // end of level 5 ==============================================

function youWin(){
 background(img12);
  fill(0);
  textSize(35);
  text("You Slayed all the Demons!!!!", width/2,height-20);
  textStyle(BOLD);
}
