class Warning {
  constructor() {
    this.x = 0;
    this.countdown = 5;
    this.saved = 0;
    this.timer = 0;
  }

  display() {
    if (this.saved == 0) {
      noStroke();
      fill(255, 0, 0, (127 * sin(2 * this.x) + 127) / 3);
      rectMode(CORNER);
      rect(0, 0, width, height);
      this.x += 0.1;
      //saving.display();
    }
  }

  popUp(x, y) {
    if (this.saved == 0) {
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
      fill(255, 0, 0);
      text(
        "컴퓨터가 불안정합니다! \n" +
          this.countdown +
          "초 안에 저장 버튼을 누르세요!",
        x + w / 2,
        y + (h * 3) / 5 - 5
      );
      if (this.saved == 0 && this.countdown > 0) {
        this.countdown = 5 + this.timer - timer;
      }

      if (5 + this.timer - timer <= 0) {
        rectMode(CORNER);
        fill(0);
        rect(0, 0, width, height);
        fill(255);
        textSize(30);
        text("컴퓨터가 꺼져서 과제가 날아갔습니다...", width / 2, height / 2);
        textFont(mainFont);
        text("▶NEXT", width - 55, height - 20);
      }
    }
    rectMode(CORNER);
  }
}
