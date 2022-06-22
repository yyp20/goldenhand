class Design {
  constructor() {
    this.x = (width * 21) / 48;
    this.y = (height * 3) / 24;
    this.h = (height * 3) / 48;
    this.w = (width * 5) / 48;
    this.B = false;
  }

  //그리기 버튼
  display() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    ) {
      fill(110, 140, 236);
    } else {
      fill(153, 175, 242);
    }
    stroke(0);
    rectMode(CORNER);
    rect(this.x, this.y, this.w, this.h, 10);
    textAlign(CENTER);
    fill(0);
    noStroke();
    textFont(mainFont);
    textSize(height / 30);
    text("디자인", this.x + this.w / 2, this.y + this.h / 2 + height / 90);
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
