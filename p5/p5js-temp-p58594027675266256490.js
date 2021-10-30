function setup() {
createCanvas(600, 600);
}
function draw() {
// integer RGBA notation
background('rgb(0,255,135)');

//woop
//w
line(50,10,70,120);
line(70,120,85,25);
line(85,25,100,120);
line(100,120,115,10);

//o
noFill();
strokeJoin(ROUND);
rect(125,10,50,110);

//o
noFill();
strokeJoin(ROUND);
rect(185,10,50,110);

//p
line(245,10,245,120);
noFill();
strokeJoin(ROUND);
rect(245,10,40,45);

//w
line(320,10,340,120);
line(340,120,355,25);
line(355,25,370,120);
line(370,120,385,10);

//o
noFill();
strokeJoin(ROUND);
rect(395,10,50,110);

//o
noFill();
strokeJoin(ROUND);
rect(455,10,50,110);

//p
line(515,10,515,120);
noFill();
strokeJoin(ROUND);
rect(515,10,40,45);

//body
fill('blue');
rect(150, 450,245,240);

//left arm
fill('blue');
arc(145,600,250,300,PI,PI+HALF_PI);
fill('rgb(244,164,96)'); 
rect(25,560,120,100);

//right arm
fill('blue'); 
arc(400,600,250,300,PI+HALF_PI,TWO_PI);
fill('rgb(244,164,96)'); 
rect(400,560,120,100);

//head
fill('rgb(222,184,135)');
ellipse(270,290,325,300);     //head
fill('white');
strokeWeight(5); 
circle(220,300,50);    //left eye
fill(0);
circle(220,300,25);  //left pupil
line(190,265,250,268);   //left eyebrow
fill('white');
circle(320,300,50);   //right eye
fill(0);
circle(320,300,25);  //right pupil
line(300,268,350,265);  //right eyebrow
fill('red');
arc(270,350,100,100,TWO_PI,PI);  //mouth


//hair
fill(0);
ellipse(283,185,340,105); //base
fill(0);
triangle(107,300,100,180,155,150);  //left side
fill(0);
ellipse(110,213, 30,127);  //left side add on
fill(0);
ellipse(300,170,300,108);  //top
fill(0);
ellipse(185,165,170, 70);  //top add on
fill(0);
triangle(435,300,350,150,450,180); //right side
fill(0);
ellipse(435,215, 30,135);   //left sdie add on




}
