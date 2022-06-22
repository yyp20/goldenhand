class Figure {
  constructor() {
    this.x = (width * 6) / 24;
    this.y = (height * 11) / 48;
    this.w = (width * 2) / 24;
    this.h = (height * 3) / 48;
    this.B = false;
    this.B1 = false;
    this.B2 = false;
    this.B3 = false;
    this.B4 = false;
  }

  display() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    ) {
      fill(166, 191, 236);
    } else {
      fill(196, 212, 242);
    }
    stroke(0);
    rectMode(CORNER);
    rect(this.x, this.y, this.w, this.h);
    textAlign(CENTER);
    fill(0);
    noStroke();
    textSize(height / 30);
    text("도형", this.x + this.w / 2, this.y + this.h / 2 + height / 90);
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

  show() {
    if (this.B == 1) {
      fill(196, 212, 242);
      stroke(0);
      rect(this.x, this.y + this.h, this.w * 2, this.h * 3);

      image(
        figure1_1,
        this.x + (width * 1) / 96,
        this.y + this.h + (height * 2) / 96,
        (width * 3) / 48,
        (height * 3) / 48
      );

      image(
        figure2_1,
        this.x + (width * 9) / 96,
        this.y + this.h + (height * 2) / 96,
        (width * 3) / 48,
        (height * 3) / 48
      );

      image(
        figure3_1,
        this.x + (width * 1) / 96,
        this.y + this.h + (height * 10) / 96,
        (width * 3) / 48,
        (height * 3) / 48
      );

      image(
        figure4_1,
        this.x + (width * 9) / 96,
        this.y + this.h + (height * 10) / 96,
        (width * 3) / 48,
        (height * 3) / 48
      );
    }
  }

  open_figure1() {
    if (
      mouseX > this.x + (width * 1) / 96 &&
      mouseX < this.x + (width * 1) / 96 + (width * 3) / 48 &&
      mouseY > this.y + this.h + (height * 2) / 96 &&
      mouseY < this.y + this.h + (height * 2) / 96 + (height * 3) / 48
    ) {
      return true;
    } else {
      return false;
    }
  }

  open_figure2() {
    if (
      mouseX > this.x + (width * 9) / 96 &&
      mouseX < this.x + (width * 9) / 96 + (width * 3) / 48 &&
      mouseY > this.y + this.h + (height * 2) / 96 &&
      mouseY < this.y + this.h + (height * 2) / 96 + (height * 3) / 48
    ) {
      return true;
    } else {
      return false;
    }
  }

  open_figure3() {
    if (
      mouseX > this.x + (width * 1) / 96 &&
      mouseX < this.x + (width * 1) / 96 + (width * 3) / 48 &&
      mouseY > this.y + this.h + (height * 10) / 96 &&
      mouseY < this.y + this.h + (height * 10) / 96 + (height * 3) / 48
    ) {
      return true;
    } else {
      return false;
    }
  }

  open_figure4() {
    if (
      mouseX > this.x + (width * 9) / 96 &&
      mouseX < this.x + (width * 9) / 96 + (width * 3) / 48 &&
      mouseY > this.y + this.h + (height * 10) / 96 &&
      mouseY < this.y + this.h + (height * 10) / 96 + (height * 3) / 48
    ) {
      return true;
    } else {
      return false;
    }
  }

  show_figure1() {
    if (this.B1 == 1) {
      image(
        figure1,
        (width * 5) / 48,
        (height * 11) / 24,
        (width * 11) / 24,
        (height * 9) / 48
      );
    }
  }

  show_figure2() {
    if (this.B2 == 1) {
      image(
        figure2,
        (width * 5) / 48,
        (height * 11) / 24,
        (width * 11) / 24,
        (height * 9) / 48
      );
    }
  }

  show_figure3() {
    if (this.B3 == 1) {
      image(
        figure3,
        (width * 5) / 48,
        (height * 11) / 24,
        (width * 11) / 24,
        (height * 9) / 48
      );
    }
  }

  show_figure4() {
    if (this.B4 == 1) {
      image(
        figure4,
        (width * 5) / 48,
        (height * 11) / 24,
        (width * 11) / 24,
        (height * 9) / 48
      );
    }
  }
}
