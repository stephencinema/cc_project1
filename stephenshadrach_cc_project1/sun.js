class Sun { // creates a new sun object
  constructor(x, y, s, c) {
    this.pos = createVector(x, y);
    this.size = s;
    this.color = c;
    this.vel = createVector(1, 0);

    let other = new Planet();
  }

  display() { // displays a planet
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }

  move() { // moves sun
    this.pos.sub(this.vel);
    if (this.pos.x < -300) {
      this.pos.x = 1700;
    }
  }

  overlaps(other) { // boolean method to see if sun overlaps with planet
    let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
    if (d < this.size / 2 + other.size / 2) {
      return true;
    } else {
      return false;
    }
  }
}
