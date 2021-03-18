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
