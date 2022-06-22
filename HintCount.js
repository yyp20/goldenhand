class HintCount {
  constructor(xpos){
    this.x=14.5*width/24+xpos;
    this.y=6*height/24-height/96;
    this.w=3*width/24;
    this.h=height/24;
    this.hintCount= 3;
  }
  display(){
    stroke(0);
    rectMode(CORNER);
    fill(196,212,242);
    rect(this.x, this.y, this.w, this.h);
    textAlign(CENTER);
    fill(0);
    noStroke();
    textFont(mainFont);
    textSize(height / 30);
    text("남은 힌트: " + this.hintCount, this.x + this.w / 2, this.y + this.h /2 + height / 90);
  }
}