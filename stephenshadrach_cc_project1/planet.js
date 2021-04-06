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
    stroke(0);
    strokeWeight(5);
    push();
    translate(.5, .5);
    line(this.pos.x - 90 / 2, this.pos.y - 40 / 2, this.pos.x - 30 / 2, this.pos.y - 40 / 2);
    line(this.pos.x + 90 / 2, this.pos.y - 40 / 2, this.pos.x  + 30 / 2, this.pos.y - 40 / 2);
    line(this.pos.x - 60 / 2, this.pos.y + 40 / 2, this.pos.x + 60 / 2, this.pos.y + 40 / 2);
    pop();
  }

  reflectedDisplay(angle) { // diplays the lines representing sunlight
    push();

    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);

    translate(this.pos.x, this.pos.y);

    let ring = this.size * .5 + 30;
    stroke(this.color);

    for (let i = 0; i < 15; i++) { // creates fifteen lines
      rotate(angle + i * TWO_PI / 15);
      line(ring, 0, ring + 40, 0);
    }
    pop();

    fill(0);
    stroke(0);
    strokeWeight(7);
    ellipse(this.pos.x - 30 , this.pos.y - 20, 20, 20);
    ellipse(this.pos.x + 30 , this.pos.y - 20, 20, 20);
    curve(this.pos.x - 30, this.pos.y, this.pos.x - 30, this.pos.y + 20,
      this.pos.x + 30, this.pos.y + 20, this.pos.x + 30, this.pos.y);
  }
}
