class Planet { // creates a new planet object
  constructor(x, y, s, c){
    this.pos = createVector(x, y);
    this.size = s;
    this.color = c;
  }

display(){ // displays a planet
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}
