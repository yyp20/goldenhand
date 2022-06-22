class Skipopening {
  constructor() {
    this.x = (width / 6) * 4.95;
    this.y = height / 25;
    this.w = width / 7;
    this.h = height / 15;
  }

  display() {
    rectMode(CORNER);
    stroke(41,51,90);
    
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    ) {
    fill(153, 175, 242);
    } else {
      fill(153, 175, 242, 200);
    }
    
    
    rect(this.x, this.y, this.w, this.h, 10);
    fill(0);
    textAlign(CENTER, CENTER);
    textFont(font1);
    noStroke();
    textSize(25);
    text("SKIP", this.x + this.w / 2, this.y + this.h / 2 - 2);
    textAlign(CENTER, BASELINE);
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
