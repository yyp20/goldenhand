class GetBonoBack {
  constructor() {
    this.x = (20 * width) / 24;
    this.y = (11 * height) / 24;
    this.w = (2 * width) / 24;
    this.h = (4 * height) / 24;
  }
  display() {
    if (bonoIsGone.firstTime == 1 || bonoIsGone.firstTime == 2) {
      stroke(0);
      if (this.open()==1 && bonoIsGone.firstTime == 1) {
        fill(243,120,167);
      } else if (this.open()==0 && bonoIsGone.firstTime == 1){
        fill(248,166,214);
      } else if (bonoIsGone.firstTime == 2){
        fill(100);
      }
      rectMode(CORNER);
      rect(this.x, this.y, this.w, this.h, 10);
      textAlign(CENTER, CENTER);
      fill(0);
      noStroke();
      textFont(mainFont);
      textSize(height / 35);
      text("도망친\n보노보노\n찾아오기", this.x + this.w / 2, this.y + this.h / 2);
      textAlign(CENTER, BASELINE);
    }
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
