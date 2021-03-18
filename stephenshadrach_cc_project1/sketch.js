/* adjective: reflective

  1. when the sun appears near the planets, lines that represent light are reflected from them and move around randomly
  2. the planets will also light up

*/


let planets = [];
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
