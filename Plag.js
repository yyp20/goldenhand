class Plag {
  constructor() {
    this.x = 0;
    this.countdown = 5;
    this.minimized = 0;
    this.divider = this.countdown;
    this.timer = 0;
  }

  display() {
    if (this.minimized == 0) {
      noStroke();
      fill(0, 0, 0, 160 - (127 * cos(this.x/3) + 127) / 2);
      //console.log((127 * cos(this.x) + 127) / 3);
      rectMode(CORNER);
      rect(0, 0, width, height);
      this.x += 0.05;
    }
  }

  popUp(x, y) {
    if (this.timer == timer && this.countdown == 0) {
      this.countdown = 5;
    }
    if (this.countdown>0 && this.minimized ==0) {
      this.countdown = 5+this.timer - timer;
    }
    if (this.minimized == 0) {
      let w = 8*width/24;
      let h = 4*height/24;
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
      if(this.countdown<=2){
      minimize.display();
      }
      noStroke();
      fill(0);
      textFont(mainFont);
      text("다른 조 동기가 화면을 보려고 합니다! \n" +
        this.countdown + "초 안에 최소화 버튼을 누르세요!",
        x + w / 2,
        y + (h * 3) / 5 - 5
      );
      /*
      if (frameCount % 60 == 0 && this.countdown >= 1 && this.minimized == 0) {
        this.countdown -= 1;
      }*/

      if (5+ this.timer - timer <= 0) {
        rectMode(CORNER);
        fill(0);
        rect(0, 0, width, height);
        fill(255);
        textSize(30);
        text("동기가 과제를 표절했습니다...", width / 2, height / 2);
      textFont(mainFont);
      text("▶NEXT", width - 55, height - 20);
      }
    }
    rectMode(CORNER);
  }
}
