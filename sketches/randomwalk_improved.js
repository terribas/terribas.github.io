let x, y, r, g, b;
let currentSpeed = 1;

// Initially will show an empty canvas
function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('canvas-parent')
  background(51)
}

// Working canvas will be set when clicked the button
function setupOnClick(speed) {
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
    r += random(-10, 10);
    g += random(-10, 10);
    b += random(-10, 10);
    r = constrain(r, 0, 255);
    g = constrain(g, 0, 255);
    b = constrain(b, 0, 255);
    stroke(r, g, b);
    strokeWeight(2);
    point(x, y);
    const r2 = floor(random(4));
    switch (r2) {
      case 0:
        x = x + 1;
        break;
      case 1:
        x = x - 1;
        break;
      case 2:
        y = y + 1;
        break;
      case 3:
        y = y - 1;
        break;
    }
  }
}
