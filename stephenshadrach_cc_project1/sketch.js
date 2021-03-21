/* adjective: reflective

  1. when the sun appears near the planets, lines that represent light are reflected from them and move around randomly
  2. the planets will also light up

*/


let planets, stars = [];
let l, b, r;
let s;

function setup() {
  createCanvas(windowWidth, windowHeight);
  l = new Planet(200, 300, 150, '#b57edc');
  b = new Planet(700, 650, 100, '#091973');
  r = new Planet(1100, 350, 125, '#991616');
  s = new Sun(1700, 500, 300, '#cfc934');

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

  l.display();
  b.display();
  r.display();

  checkIfOverlapping();

  s.display();
  s.move();
}

function checkIfOverlapping() { // checks if the sun overlaps with planet
  if (s.overlaps(l)) {
    lr = new Planet(200, 300, 150, '#FFFFFF'); // new temporary planet that represents light reflected on the lavender planet
    lr.display();
  } else if (s.overlaps(b)) {
    br = new Planet(700, 650, 100, '#FFFFFF'); // new temporary planet that represents light reflected on the blue planet
    br.display();
  } else if (s.overlaps(r)) {
    rr = new Planet(1100, 350, 125, '#FFFFFF'); // new temporary planet that represents light reflected on the red planet
    rr.display();
  }
}
