function Particle(x, y, col,_speed,firework) {

  this.pos = createVector(x, y);
  this.speed=_speed;
  this.firework = firework;
  this.lifespan = 255;
  this.col = color(226, 88, 34); // ORANGE FLAME-LIKE COLOR
  this.sparkColor = col;
  if (this.firework) {
    // GOOD RANGE FOR VELOCITY IS FROM -6 TO -9
    this.vel = createVector(0, this.speed);
  } else {
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(1, 2));
  }
  this.acc = createVector(0, 0);

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    if (!this.firework) {
      this.vel.mult(0.983);
      this.lifespan -= 3;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.done = function() {
    if (this.lifespan < 25) {
      return true;
    } else {
      return false;
    }
  }

  this.show = function() {
    if (!this.firework) {
      strokeWeight(3);
      // COLOR AFTER EXPLOSION
      this.sparkColor = color(red(this.sparkColor), green(this.sparkColor), blue(this.sparkColor), this.lifespan);
      stroke(this.sparkColor);
    } else {
      strokeWeight(4);
      stroke(this.col, 255);
    }
    point(this.pos.x, this.pos.y);
  }

}