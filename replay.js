class Replay {
  constructor() {
    this.x = (width * 16) / 24 + 10;
    this.y = (height * 20) / 24 + 5;
    this.w = (width * 7) / 24 - 10;
    this.h = (height * 3) / 24 - 5;
  }

  display() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    ) {
      fill(150);
    } else {
      fill(255);
    }
    stroke(0);
    rectMode(CORNER);
    rect(this.x, this.y, this.w, this.h, 10);
    textAlign(CENTER);
    fill(0);
    noStroke();
    textFont(font1);
    textSize(height / 22 - 5);
    text(
      "다른 엔딩 보러 가기",
      this.x + this.w / 2,
      this.y + this.h / 2 + height / 95
    );
  }

  open() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    ) {
      return true;
    } else {
      return false;
    }
  }
}
