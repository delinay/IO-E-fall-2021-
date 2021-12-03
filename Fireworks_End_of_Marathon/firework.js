function Firework(_col, _pos,_speed) {

  // COLOR AFTER EXPLOSION
  launchSound.play();
  this.speed = _speed;
  this.col = _col;
  this.pos = _pos;

  this.firework = new Particle(this.pos, height, this.col,this.speed, true);

  this.done = function() {
    if (this.exploded && this.particles.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  this.exploded = false;
  this.particles = [];

  this.update = function() {
    if (!this.exploded) {
      this.firework.applyForce(gravity);
      this.firework.update();
      if (this.firework.vel.y > 0) {
        this.explode();
        this.exploded = true;
      }
    }
    for (var i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();
      if (this.particles[i].done()) {
        this.particles.splice(i, 1);
      }
    }

  }

  this.explode = function() {

    for (var i = 0; i < 100; i++) {
      var p = new Particle(this.firework.pos.x, this.firework.pos.y, this.col, false);
      this.particles.push(p);
    }
    xplosionSound.play();
  }

  this.show = function() {
    if (!this.exploded) {
      this.firework.show();
    }
    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }
  }
}