class Picture {
  constructor() {
    this.x = (width * 3) / 24;
    this.y = (height * 11) / 48;
    this.w = (width * 2) / 24;
    this.h = (height * 3) / 48;
    this.B = false;
    this.click = 0;
    this.clickY = 0;
    this.clickN = 0;
    this.clickO = 0;
    this.firstTime = 0;
    this.inserted = 0;
    this.popUpY = 0;
    this.popUpN = 0;
    this.trans = 2.5;
    this.popUpOkay = 0;
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
    text("그림", this.x + this.w / 2, this.y + this.h / 2 + height / 90);
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
      rect(this.x, this.y + this.h, this.w, this.h * 2);
      if (this.showOpen() == 0) {
        fill(153, 175, 242);
      } else {
        fill(110, 140, 236);
      }
      rectMode(CENTER);
      rect(
        this.x + this.w / 2,
        this.y + 2 * this.h,
        width / 24 + width / 48,
        height / 12,
        10
      );
      rectMode(CORNER);
      textAlign(CENTER);
      noStroke();
      fill(0);
      if (this.inserted == 0)
        text(
          "파일\n삽입",
          this.x + this.w / 2,
          this.y + 2 * this.h - height / 96 - 1
        );
      else
        text(
          "파일\n제거",
          this.x + this.w / 2,
          this.y + 2 * this.h - height / 96 - 1
        );
    }
  }
  showOpen() {
    if (this.B == 1) {
      if (
        mouseX > this.x + this.w / 2 - (width / 24 + width / 48) / 2 &&
        mouseX < this.x + this.w / 2 + (width / 24 + width / 48) / 2 &&
        mouseY > this.y + 2 * this.h - height / 24 &&
        mouseY < this.y + 2 * this.h + height / 24
      ) {
        return true;
      } else {
        return false;
      }
    }
  }

  popUp(x, y) {
    let w = (8 * width) / 24;
    let h = (9 * height) / 24;
    if (bonoIsGone.firstTime == 0 || bonoIsGone.firstTime == 2) {
      if (this.showOpen() == 1 && mouseIsPressed) {
        this.click = 1;
      }
      if (this.click == 1) {
        stroke(0);
        rectMode(CORNER);
        fill(240);
        rect(x, y, w, h);
        fill(210);
        rect(x, y, w, height / 24);
        rectMode(CENTER);
        textAlign(CENTER);
        textSize(17);
        noStroke();
        fill(0);
        textFont(mainFont);
        if (this.inserted == 0) {
          text("파일을 삽입하시겠습니까?", x + w / 2, y + (7 * height) / 24);
        } else {
          text(
            "삽입된 파일을 제거하시겠습니까?",
            x + w / 2,
            y + (7 * height) / 24
          );
        }
        stroke(0);
        fill(210);
        rectMode(CORNER);
        rect(
          x + width / 24 + width / 48,
          y + h - height / 24 - height / 48,
          (2 * width) / 24,
          height / 24
        );
        rect(
          x + (4.5 * width) / 24,
          y + h - height / 24 - height / 48,
          (2 * width) / 24,
          height / 24
        );
        noStroke();
        fill(0);
        text(
          "예",
          x + width / 24 + width / 48 + width / 24,
          y + h - height / 24 + height / 192 + 2
        );
        text(
          "아니오",
          x + (4.5 * width) / 24 + width / 24,
          y + h - height / 24 + height / 192 + 2
        );
        textSize(14);
        text("보노보노.png", x + w / 2, y + (2 * height) / 24 - height / 96);
        imageMode(CENTER);
        image(
          bonoIcon,
          x + w / 2,
          y + (4 * height) / 24,
          (3 * width) / 24,
          (bonoIcon.height * 3 * width) / 24 / bonoIcon.width
        );
        imageMode(CORNER);
      }
      rectMode(CORNER);

      if (this.inserted == 0 && this.popUpY == 1 && mouseIsPressed) {
        this.clickY = 1;
        if (this.clickY == 1 && this.click != 0) {
          this.click = 0;
          this.inserted = 1;
          bonoIsGone.timer = timer;
          bonoIsGone.opacity = 1;
          this.clickY = 0;
          this.B = 0;
        }
      } else if (this.inserted == 0 && this.popUpN == 1 && mouseIsPressed) {
        this.clickN = 2;
        if (this.clickN == 2 && this.click != 0) {
          this.click = 0;
          this.inserted = 0;
          this.clickN = 0;
          this.B = 0;
        }
      } else if (this.inserted == 1 && this.popUpY == 1 && mouseIsPressed) {
        this.clickY = 3;
        if (this.clickY == 3 && this.click != 0) {
          this.click = 0;
          this.inserted = 0;
          this.clickY = 0;
          this.B = 0;
        }
      } else if (this.inserted == 1 && this.popUpN == 1 && mouseIsPressed) {
        this.clickN = 4;
        if (this.clickN == 4 && this.click != 0) {
          this.click = 0;
          this.inserted = 1;
          this.clickN = 0;
          this.B = 0;
        }
      }
    } else {
      //보노보노 도망친 후
      if (this.showOpen() == 1 && mouseIsPressed) {
        this.click = 1;
      }
      if (this.click == 1) {
        stroke(0);
        rectMode(CORNER);
        fill(240);
        rect(x, y, w, h);
        fill(210);
        rect(x, y, w, height / 24);
        rectMode(CENTER);
        textAlign(CENTER);
        textSize(17);
        noStroke();
        fill(0);
        textFont(mainFont);
        if (this.inserted == 0) {
          text("파일이 없습니다.", x + w / 2, y + (7 * height) / 24);
        }
        rectMode(CORNER);
        stroke(0);
        fill(210);
        rectMode(CORNER);
        rect(
          x + this.trans*width / 24 + width / 48,
          y + h - height / 24 - height / 48,
          (2 * width) / 24,
          height / 24
        );
        noStroke();
        fill(0);
        text(
          "창 끄기",
          x + this.trans*width / 24 + width / 48 + width / 24,
          y + h - height / 24 + height / 192 + 2
        );
        textSize(14);
        text("보노보노.png", x + w / 2, y + (2 * height) / 24 - height / 96);
        if (this.inserted == 0 && this.popUpOkay == 1 && mouseIsPressed) {
          this.clickO = 1;
          if (this.clickO == 1 && this.click != 0) {
            this.click = 0;
            this.clickO = 0;
            this.B = 0;
          }
        }
      }
    }
    if (
      mouseX > x + width / 24 + width / 48 &&
      mouseX < x + width / 24 + width / 48 + (2 * width) / 24 &&
      mouseY > y + h - height / 24 - height / 48 &&
      mouseY < y + h - height / 24 - height / 48 + height / 24
    ) {
      this.popUpY = 1;
    } else this.popUpY = 0;
    if (
      mouseX > x + this.trans* width / 24 + width / 48 &&
      mouseX < x + this.trans* width / 24 + width / 48 + (2 * width) / 24 &&
      mouseY > y + h - height / 24 - height / 48 &&
      mouseY < y + h - height / 24 - height / 48 + height / 24
    ) {
      this.popUpOkay = 1;
    } else this.popUpOkay = 0;
        if (
      mouseX > x + (4.5 * width) / 24 &&
      mouseX < x + (4.5 * width) / 24 + (2 * width) / 24 &&
      mouseY > y + h - height / 24 - height / 48 &&
      mouseY < y + h - height / 24 - height / 48 + height / 24
    ) {
      return (this.popUpN = true);
    } else return (this.popUpN = false);
  }
}
