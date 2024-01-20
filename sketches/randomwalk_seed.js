let x, y;
let r, g, b;
let currentSpeed = 1;

// Initially will show an empty canvas
function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('canvas-parent')
  background(51);
}

// Working canvas will be set when clicked the button
function setupOnClick(speed, seed) {
  randomSeed(seed); // Seed is set in our RNPG
  currentSpeed = speed;
  var canvas = createCanvas(400, 400);
  canvas.parent('canvas-parent')
  x = width / 2;
  y = height / 2;
  r = random(255), g = random(255), b = random(255);
  background(51);
}

function draw() {
  for (let i = 0; i < currentSpeed; i++) {
    let nextX = x + random(-20, 20);
    let nextY = y + random(-20, 20);
    nextX = constrain(nextX, 0, width);
    nextY = constrain(nextY, 0, height);
  
    r += random(-10, 10);
    g += random(-10, 10);
    b += random(-10, 10);
    r = constrain(r, 0, 255);
    g = constrain(g, 0, 255);
    b = constrain(b, 0, 255);
  
    stroke(r, g, b);
    line(x, y, nextX, nextY);
  
    x = nextX;
    y = nextY;
  }
}