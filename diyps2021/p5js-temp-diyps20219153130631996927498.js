var img;
var initials ='ax'; // your initials
var choice = '1'; // starting choice, so it is not empty
var angle = 0.0;

function preload() {
// preload() runs once, it may make you wait
  img = loadImage('RickAstley.gif');  // cat.jpg needs to be next to this .js file
  img2 = loadImage('pika.gif');
  img3 = loadImage('brushstroke.png');
  img4 = loadImage('water.jfif');
// you can link to an image on your github account
// img = loadImage('RickAstley.gif');
}

function setup() {
createCanvas(600, 400);  // canvas size
background(173,216,230);   // use our background screen color
}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // water
   
     image(img4, mouseX, mouseY, 100, 100);
    
  } else if (toolChoice == '2') { // brush stroke

     image(img3, mouseX-13, mouseY-13, 25, 25);
    
  } else if (toolChoice == '3') { // sun rays for a horizon setting comes from center of screen

    stroke(600, 200, 10, 100);
    line(mouseX, mouseY, 300, 200);
 
  } else if (toolChoice == '4') { // blue beams comes from top left

    stroke(100, 0, 255, 20);
    line(0, 0, pmouseX, pmouseY);
 
  } else if (key == '5') { // this tool calls a function
    
    stroke(0, 0, 255);
    testbox(20, 20, 200);
    testbox(200, 20, 20);
    
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
 
  } else if (toolChoice == '6') { // fun circle to scroll across the screen in a rotating motion

    stroke(200);
    rotate(angle);
    translate(mouseX,mouseY);
    ellipse(-15, -15, 30, 30);
    angle +=0.1;
    
  } else if (toolChoice == '7') { // spinning square

    translate(mouseX,mouseY);
    rotate(angle);
    rect(-15,-15,30,30);
    angle +=0.1;
  
  } else if (toolChoice == '8') { //square that tranforms based on the y axis

    fill(300, 100, 0, 0);
    translate(mouseX, mouseY);
    var scalar = mouseY / 70.0;
    scale(scalar);
    strokeWeight(1.0 / scalar);
    rect(-15, -15, 40, 30);
  
  } else if (toolChoice == '9') {

  rotate(mouseX / 100.0);
  rect(50, 50, 160, 20);
  
  } else if (toolChoice == '0') {
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 200, 150);
  
  } else if (toolChoice == 'g' || toolChoice == 'G') { // Rick Astley gif!!!!
    image(img, mouseX-25, mouseY-25, 50, 50);
    
  } else if (toolChoice == 'q' || toolChoice == 'Q') { // rick astley gif!!!
    
    image(img2, mouseX, mouseY, 50, 50);
  
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(173,216,230); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
     key = ""; // reset the key so that it doesn't keep taking screenshots
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
    filename=initials+day() + hour() + minute() +second();
    saveCanvas(filename, 'jpg');
 // }
}
