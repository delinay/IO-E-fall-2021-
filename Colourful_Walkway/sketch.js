function setup() {
  createCanvas(740, 160);
  background(0);

}


function draw() {
  let r = random(65);
  let g = random(150);
  let b = random(255);

  fill(r, g, b, 100);
  ellipse(mouseX, mouseY, 50, 50);
  
} 