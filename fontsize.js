class Fontsize {
  constructor() {
    this.x = (width * 19) / 48;
    this.y = (height * 11) / 48;
    this.w = (width * 5) / 48;
    this.h = (height * 3) / 48;
    this.B = false;
    this.B1 = false;
    this.B2 = false;
    this.B3 = false;
    this.B4 = false;
    this.B5 = false;
    this.B6 = false;
  }

  display() {
    fill(196, 212, 242);
    stroke(0);
    rectMode(CORNER);
    rect(this.x, this.y, this.w, this.h);
    if (
      mouseX > this.x + this.w &&
      mouseX < this.x + this.w + (width * 3) / 48 &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    ) {
      fill(166, 191, 236);
    } else {
      fill(196, 212, 242);
    }
    rect(this.x + this.w, this.y, (width * 3) / 48, this.h);
    textAlign(CENTER);
    fill(0);
    noStroke();
    textFont(mainFont);
    textSize(height / 30);
    text(
      "▽",
      this.x + this.w + (width * 3) / 96,
      this.y + this.h / 2 + height / 90
    );
  }

  open() {
    if (
      mouseX > this.x + this.w &&
      mouseX < this.x + this.w + (width * 3) / 48 &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    ) {
      return true;
    } else {
      return false;
    }
  }

  show() {
    if (this.B == 1) {
      fill(196, 212, 242);
      stroke(0);
      rect(this.x, this.y, this.w, this.h * 6);

      fill(0);
      noStroke();
      textAlign(CENTER);
      textFont(mainFont);
      textSize(20);
      text("20", this.x + this.w / 2, this.y + (this.h * 2) / 3);
      text("24", this.x + this.w / 2, this.y + (this.h * 5) / 3);
      text("28", this.x + this.w / 2, this.y + (this.h * 8) / 3);
      text("32", this.x + this.w / 2, this.y + (this.h * 11) / 3);
      text("36", this.x + this.w / 2, this.y + (this.h * 14) / 3);
      text("40", this.x + this.w / 2, this.y + (this.h * 17) / 3);
    }
  }

  open_size1() {
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

  open_size2() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y + this.h &&
      mouseY < this.y + this.h * 2
    ) {
      return true;
    } else {
      return false;
    }
  }

  open_size3() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y + this.h * 2 &&
      mouseY < this.y + this.h * 3
    ) {
      return true;
    } else {
      return false;
    }
  }

  open_size4() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y + this.h * 3 &&
      mouseY < this.y + this.h * 4
    ) {
      return true;
    } else {
      return false;
    }
  }

  open_size5() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y + this.h * 4 &&
      mouseY < this.y + this.h * 5
    ) {
      return true;
    } else {
      return false;
    }
  }

  open_size6() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y + this.h * 5 &&
      mouseY < this.y + this.h * 6
    ) {
      return true;
    } else {
      return false;
    }
  }
}
