class Saving {
  constructor() {
    this.x = (width * 2) / 24;
    this.y = (height * 3) / 24;
    this.h = (height * 3) / 48;
    this.w = (width * 2) / 24;
    this.B = false;
    this.click = 0;
    this.countdown = 2;
    this.timer = 0;
  }

  //저장 버튼
  display() {
    if (warning.countdown <= 2 && warning.saved == 0) {
      fill(255, 0, 0);
    } else if (this.open() == 1) {
      fill(58, 75, 154);
    } else {
      fill(41, 51, 90);
    }

    stroke(0);
    rectMode(CORNER);
    rect(this.x, this.y, this.w, this.h, 10);
    textAlign(CENTER);
    fill(255);
    noStroke();
    textFont(mainFont);
    textSize(height / 30);
    text("저장", this.x + this.w / 2, this.y + this.h / 2 + height / 90);
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
  popUp(x, y) {
    if (this.open() == 1 && mouseIsPressed == 1) {
      this.countdown = 2;
      this.click = 1;
      this.timer = timer;
    }
    if (this.click >= 1 && this.countdown > 0) {
      if (timer == this.timer + 2 && this.countdown >= 1) {
        this.countdown = 0;
      }
      //팝업창
      let w = (8 * width) / 24;
      let h = (4 * height) / 24;
      stroke(0);
      rectMode(CORNER);
      fill(240);
      rect(x, y, w, h);
      fill(210);
      rect(x, y, w, h / 5);
      rectMode(CENTER);
      textAlign(CENTER);
      textSize(17);
      noStroke();
      fill(0);
      textFont(mainFont);
      text("저장되었습니다.", x + w / 2, y + (h * 3) / 5 + 5);
      if (this.countdown == 0) {
        this.click = 0;
      }
    }
    rectMode(CORNER);
  }
}
