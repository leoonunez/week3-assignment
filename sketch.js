//GLOBAL VARIABLES

  let posx, posy, d;

function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(600, 400);

  posx = width/2;
  posy = height/2;
  d = 300;
}

function draw() {
  background(200,90,200,35);
  stroke('green');
  strokeWeight(3);
  fill('cyan');
  circle(posx,posy,d);
  stroke('red');
  fill(180,200,180,200);
  strokeWeight(10);
  circle(posx,posy,d/2);
  d += 0.4;
  posx += 1;
  //posy += 0.2;
}

