var sec, mn, hr;
var secondAngle, minuteAngle, hourAngle;
var c,b,a,d;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
  translate(200,200);
}

function draw() {
  background("black");  
  push();
  textSize(30);
  text(hr%12 +":" + mn + ":"+ sec+ " " + d,10,30);
  text("Date: "+ a +"/" + b +"/" + c,10,80);
  
  pop();
  translate(width/2,height/2);
  rotate(-90);
  
  sec = second(); //obtaining the seconds from computer
  mn = minute(); //obtaining the minute from computer
  hr = hour(); //obtaining the hour from computer
  b = day();
  a = month();
  c = year();
  
  if(hr>=12){
    d = "PM";
  }
  else{
    d = "AM";
  }

  clock();
}

function clock(){
  strokeWeight(8);
  stroke("red");
  noFill();
  secondAngle = map(sec, 0, 60, 0, 360);
  arc(0,0,300,300,0,secondAngle);

  push();
  rotate(secondAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  strokeWeight(8);
  stroke("blue");
  noFill();
  minuteAngle = map(mn%12, 0, 60, 0, 360,);
  arc(0,0,280,280,0,minuteAngle);
  
  
  push();
  rotate(minuteAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,80,0);
  pop();

  strokeWeight(8);
  stroke("green");
  noFill();
  hourAngle = map(hr, 0, 60, 0, 360);
  arc(0,0,260,260,0,hourAngle);
  
  
  push();
  rotate(hourAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,100,0);
  pop();
}