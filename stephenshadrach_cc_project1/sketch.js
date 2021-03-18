/* adjective: reflective

  when the sun appears near the crystalBalls, shapes that represent thoughts are reflected inside them and move around randomly
  (i.e. ":)", ":(", "?", "!", "<3")

  no user input (based off of time)

*/


let crystalBalls = []
let stars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  background(0);
  for (let i = 0; i < stars.length; i++) {
    stars[i].display();
    stars[i].move();
  }
}


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
