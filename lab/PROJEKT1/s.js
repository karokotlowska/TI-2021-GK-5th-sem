var canv9 = document.getElementById("canvas5");
var ct9 = canv9.getContext("2d");
let t9;
let frame9 = 0;
const frames9 = 2000;
const maxDepth9 = 4;
var width2 = canv9.width;
var height2 = canv9.height;
let n9;

function moveCos(v) {
  return 1 - (cos(v * TWO_PI) * 0.5 + 0.5);
}

function draw(){
  ct9.clearRect(0, 0, canv9.width, canv9.height);
  frame9 += 40 / (1000 / 60);
  t9 = frame9 / frames9;
  ct9.fillStyle = "#4056a1";
  ct9.fillRect(0, 0, width2, height2);

  n9=3;
  
  const depth9 = maxDepth9 * moveCos(t9 * 2);
 
  drawFractal(width2/2, height2/2, 270, depth9);
}

function getAngle(angle, radius) {
  return {
    x: cos(angle * TWO_PI) * radius,
    y: sin(angle * TWO_PI) * radius,
  }
}

function drawFractal(x, y, size, depth9) {
  const df =0.5*depth9;
  for (let i = 0; i < n9; i++) {
    const f = i / n9;
    const angle = f + 0.75;

    if (depth9 > 0) {
      const scale = 0.5;
      const r = size * (df*scale);
      const p = getAngle(angle, r);
      const s = size * (scale);

      drawFractal(x + p.x, y + p.y, s, depth9 - 1);
    } //else {
      const p1 = getAngle(angle, size);
      const p2 = getAngle(angle + 1 / n9, size);
     ct9.strokeStyle="white";
     ct9.beginPath();
     ct9.moveTo(x + p1.x, y + p1.y);
     ct9.lineTo(x + p2.x, y + p2.y);
     ct9.stroke();
  }
  
}




