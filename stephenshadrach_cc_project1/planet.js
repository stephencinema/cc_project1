class Planet { // creates a new planet object
  constructor(x, y, s, c) {
    this.pos = createVector(x, y);
    this.size = s;
    this.color = c;
  }

  display() { // displays a planet
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }

  reflectedDisplay(angle) { // diplays the lines representing sunlight
    push();
    translate(this.pos.x, this.pos.y);

    let ring = this.size * .5 + 30;
    stroke(this.color);

    for (let i = 0; i < 15; i++) { // creates fifteen lines
      rotate(angle + i * TWO_PI / 15);
      line(ring, 0, ring + 40, 0);
    }
    pop();
  }
}
