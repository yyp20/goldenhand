class Goppt {
  constructor() {
    this.x = (width * 16) / 24;
    this.y = (height * 20) / 24;
    this.w = (width * 7) / 24;
    this.h = (height * 3) / 24;
  }

  display() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    ) {
      fill(246, 93, 93);
    } else {
      fill(237, 126, 91);
    }
    rectMode(CORNER);
    noStroke();
    image(
      image_goppt,
      (width * 6) / 24 - 10,
      (height * 4) / 24 - 10,
      (width * 12) / 24 + 20,
      (height * 9) / 24 + 5
    );
    stroke(0);
    rect(this.x, this.y, this.w, this.h, 10);
    noStroke();
    fill(255);
    textFont(font1);
    textSize(30);
    text("PPT 고치러 가기", this.x + this.w / 2, this.y + this.h / 2 + 9);
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
