/* adjective: reflective

  1. space background constantly moving, start slow and speed up movement
  2. when the sun appears near the balls, shapes that represent thoughts are reflected inside them and move around randomly
    (i.e. ":)", ":(", "?", "!", "<3")

  no user input (based off of time)
  
*/


//create array for CrystalBall objects

let x;
let y;
let stars;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  x = new Array(100);
  y = new Array(100);
  stars = new Array(100);

  for(let i = 0; i < 100; i++) { // creates random x and y locations for potential stars
    x[i] = random(0, width);
    y[i] = random(0, height);
  }

  for(let j = 0; j < 100; j++){ // loads stars array with stars at random places
    stars[j] = new Star(x[j], y[j]);
  }
}

function draw() {
  for(let j = 0; j < 100; j++){ // displays stars
    stars[j].display();
  }
}


class Star { // creates a new star object
  constructor(x, y){
    this.xLoc = x;
    this.yLoc = y;
  }

  display(){
    stroke(255);
    strokeWeight(5);
    point(this.xLoc, this.yLoc);
  }
}
