class Star { // creates a new star object
  constructor(){
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(.5, 0);
  }

display(){ // displays each star
    stroke(255);
    strokeWeight(5);
    point(this.pos.x, this.pos.y);
  }

move(){ // moves each star
    this.pos.add(this.vel);
    if (this.pos.x > width) {
      this.pos.x = random(-10, -10);
    }
  }
}
