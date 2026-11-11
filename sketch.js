let linhas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 220, 220);

  for (let i = 0; i < 480; i++) {
    linhas.push({
      x: random(width),
      y: random(height),
      angulo: random(TWO_PI),
      vx: random(-0.5, 0.5),
      vy: random(-0.5, 0.5)
    });
  }
}

function draw() {
  if (mouseX < width / 2) {
    background(0, 255, 255);
    stroke(192, 0, 120);
  } else {
     background(192, 0, 120);
    stroke(0, 255, 255);
  }

  strokeWeight(6);

  for (let linha of linhas) {
    let tamanho = 30;

    linha.x += linha.vx;
    linha.y += linha.vy;

    let distancia = dist(linha.x, linha.y, mouseX, mouseY);
    
    if (distancia < 130) {
    linha.vx += (linha.x - mouseX) * 0.0025;
    linha.vy += (linha.y - mouseY) * 0.0025;
}

    let xFinal = linha.x + cos(linha.angulo) * tamanho;
    let yFinal = linha.y + sin(linha.angulo) * tamanho;

    line(linha.x, linha.y, xFinal, yFinal);
 }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function adicionarLinhas() {
  for (let i = 0; i < 30; i++) {
    linhas.push({
      x: random(width),
      y: random(height),
      angulo: random(-0.3, 0.3),
      vx: random(0.8, 1.5),
      vy: random(-0.2, 0.2)
    });
  }
}
function keyPressed() {
  if (key === ' ') {
    adicionarLinhas();
  } else if (key === 'x' || key === 'X') {
    linhas = [];
  }
}