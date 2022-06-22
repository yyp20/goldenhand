class MoreHint {
  constructor() {
    this.x = (20 * width) / 24;
    this.y = (16 * height) / 24;
    this.w = (2 * width) / 24;
    this.h = (2 * height) / 24;
  }

  display() {
    if (minigameNo == false) {
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
    } else if (minigameNo == true) {
      fill(100);
    }
    stroke(0);
    rectMode(CORNER);
    rect(this.x, this.y, this.w, this.h, 10);

    textAlign(CENTER);
    fill(0);
    noStroke();
    textFont(mainFont);
    textSize(height / 35);
    text("힌트\n더 받기", this.x + this.w / 2, this.y + this.h / 2 - 5);
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
