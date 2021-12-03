// Simulating Forces
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/Uibl0UE4VH8
// https://thecodingtrain.com/learning/nature-of-code/2.1-simulating-forces.html
// https://editor.p5js.org/codingtrain/sketches/kYWcOmch

let mover;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mover = new Mover(0, 100);
  background(239, 204, 255);
}

function mousePressed() {
  save('forces.png'); 
}

function draw() {
  background(11, 106, 136, 1);

  if (mouseIsPressed) {
    let wind = createVector(0.2, 0);
    mover.applyForce(wind);
  }
  
  let gravity = createVector(0, 0.4);
  mover.applyForce(gravity);
  
  mover.update();
  mover.edges();
  mover.show();
}