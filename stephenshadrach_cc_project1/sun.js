class Sun { // creates a new sun object
  constructor(x, y, s, c){
    this.pos = createVector(x, y);
    this.size = s;
    this.color = c;
    this.vel = createVector(1, 0);
  }

display(){ // displays a planet
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }

move(){ // moves sun
    this.pos.sub(this.vel);
    if (this.pos.x < -300) {
      this.pos.x = 1700;
    }
  }
}
