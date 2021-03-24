/* adjective: reflective

  1. when the sun appears near the planets, lines that represent light are reflected from them and move around randomly
  2. the planets will also light up

*/


let planets, stars = [];
let l, b, r;
let s;
let angle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  l = new Planet(200, 300, 150, '#b57edc');
  b = new Planet(700, 650, 100, '#091973');
  r = new Planet(1100, 350, 125, '#991616');
  s = new Sun(1700, 500, 300, '#cfc934');
  angle = TWO_PI / 15;

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

  checkOverlap();

  s.display();
  s.move();
}

function checkOverlap() { // checks if the sun overlaps with planet
  if (s.overlaps(l)) {
    lr = new Planet(200, 300, 150, '#C6ADD9'); // new planet that represents light reflected on the lavender planet
    l.reflectedDisplay(angle);
    lr.display();
    angle += .001; // makes lines move around the planet
  } else if (s.overlaps(b)) {
    br = new Planet(700, 650, 100, '#0090F5'); // new planet that represents light reflected on the blue planet
    b.reflectedDisplay(angle);
    br.display();
    angle += .001; // makes lines move around the planet
  } else if (s.overlaps(r)) {
    rr = new Planet(1100, 350, 125, '#FF7E8F'); // new planet that represents light reflected on the red planet
    r.reflectedDisplay(angle);
    rr.display();
    angle += .001; // makes lines move around the planet
  }
}
