/* adjective: reflective

  1. when the sun appears near the planets, lines that represent light are reflected from them and move around randomly
  2. the planets will also light up

*/


let planets, stars = [];
let b, r, l;

function setup() {
  createCanvas(windowWidth, windowHeight);
  b = new Planet(200, 300, 150, '#0000b1');
  r = new Planet(700, 600, 100, '#991616');
  l = new Planet(1100, 400, 125, '#e386e3')

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

  b.display();
  r.display();
  l.display();
}
