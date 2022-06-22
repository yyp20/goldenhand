class Minimize {
  constructor() {
    this.x = (18 * width) / 24 + width / 48;
    this.y = (3 * height) / 24;
    this.h = height / 24;
    this.w = width / 24 + width / 48;
    this.B = false;
    this.countdown = 2;
    this.click = 0;
    this.plag = 0; // plag ==1일 때 팝업창
    this.timer = 0;
  }
  //최소화 버튼
  display() {
    if (this.open() == 1) fill(200);
    else fill(220);
    stroke(0);
    rectMode(CORNER);
    rect(this.x, this.y, this.w, this.h, 5);
    stroke(3);
    line(
      this.x + this.w / 2 - this.w / 6,
      this.y + this.h / 2,
      this.x + this.w / 2 + this.w / 6,
      this.y + this.h / 2
    );
  }

  run() {
    image(
      wallpaper,
      width / 24 - 2,
      height / 24 + 5,
      (22 * width) / 24 + 6,
      (22 * height) / 24 - 10
    );
    noStroke();
    fill(220);
    rect(
      width / 24 - 2,
      (22 * height) / 24 - 5,
      (22 * width) / 24 + 6,
      height / 24
    );
    image(
      windows,
      width / 24 + 5,
      (22 * height) / 24 - 5,
      width / 24 - width / 96,
      (width / 24 - width / 96) * (windows.width / windows.height)
    );
    fill(240);
    rect(
      (2 * width) / 24 + width / 48,
      (22 * height) / 24 - 5,
      (7 * width) / 24,
      height / 24
    );
    image(
      pptIcon,
      (10 * width) / 24,
      (22 * height) / 24 - 3,
      width / 24 - width / 96 - 3,
      (width / 24 - width / 96 - 5) * (windows.width / windows.height)
    );
  }
  //마우스오버 여부
  open() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    ) {
      this.B = true;
      return true;
    } else {
      return false;
    }
  }

  //최소화 눌렀을 경우
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
      this.run();

      //팝업창
      if (this.plag == 1) {
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
        text("과제를 지켜냈습니다!", x + w / 2, y + (h * 3) / 5 + 5);
      }
    }
    if (this.countdown == 0) {
      this.click = 0;
      this.plag = 0;
    }
  }
}
