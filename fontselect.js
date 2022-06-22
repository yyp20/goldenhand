class Fontselect {
  constructor() {
    this.x = (width * 3) / 24;
    this.y = (height * 11) / 48;
    this.w = (width * 9) / 48;
    this.h = (height * 3) / 48;
    this.B = false;
    this.B1 = false;
    this.B2 = false;
    this.B3 = false;
    this.B4 = false;
    this.B5 = false;
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
    textSize(height / 30);
    textFont(mainFont);
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
      rect(this.x, this.y, this.w, this.h * 5);

      fill(0);
      noStroke();
      textFont(font1);
      textSize(height / 30);
      text(
        "나눔스퀘어",
        this.x + this.w / 2,
        this.y + this.h / 2 + height / 90
      );

      fill(0);
      noStroke();
      textFont(font2);
      textSize(height / 30);
      text(
        "궁서",
        this.x + this.w / 2,
        this.y + this.h / 2 + height / 90 + this.h
      );

      fill(0);
      noStroke();
      textFont(font3);
      textSize(height / 30);
      text(
        "도장체",
        this.x + this.w / 2,
        this.y + this.h / 2 + height / 90 + this.h * 2
      );

      fill(0);
      noStroke();
      textFont(font4);
      textSize(height / 25);
      text(
        "손편지체",
        this.x + this.w / 2,
        this.y + this.h / 2 + height / 90 + this.h * 3
      );

      fill(0);
      noStroke();
      textFont(font5);
      textSize(height / 20);
      text(
        "와일드",
        this.x + this.w / 2,
        this.y + this.h / 2 + height / 90 + this.h * 4
      );
    }
  }

  open_font1() {
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

  open_font2() {
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

  open_font3() {
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

  open_font4() {
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

  open_font5() {
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
}
