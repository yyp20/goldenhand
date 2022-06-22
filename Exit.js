class Exit {
  constructor() {
    this.x = 20*width/24+width/48;
    this.y = 3*height/24;
    this.w = width/24+width/48;
    this.h = height/24
    this.B = false;
    this.click = 0;
    this.clickY = 0;
    this.clickN = 0;
    this.popUpY = 0;
    this.popUpN = 0;
    this.bF=0;
    this.F=0;
  }
  //나가기 버튼
  display() {
    if (this.open() == 1) fill(200);
    else fill(220);
    stroke(0);
    rectMode(CORNER);
    rect(this.x,this.y,this.w,this.h,5);
    textFont(font1);
    textAlign(CENTER,CENTER);
    noStroke();
    fill(0);
    text('X',this.x+this.w/2,this.y+this.h/2-height/192+2);
    textAlign(CENTER,BASELINE);
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
      let w = (8 * width) / 24;
      let h = (4 * height) / 24;
    if (this.open() == 1 && mouseIsPressed == 1) {
      this.click = 1;
    }
    if (this.click >= 1) {
      stroke(0);
      rectMode(CORNER);
      fill(240);
      rect(x, y, w, h);
      fill(210);
      rect(x, y, w, h / 5);
      rectMode(CENTER);
      textAlign(CENTER);
      textFont(font2);
      textSize(17);
      noStroke();
      fill(255,0,0);
      text("정말 끄시겠습니까?", x + w / 2, y + h / 2  );
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
          if (this.popUpY == 1 && mouseIsPressed) {
      this.clickY = 1;
      if (this.clickY == 1 && this.click != 0) {
        this.click = 0;
        this.F = 1;
        this.clickY = 0;
        this.B = 0;
      }
    } else if (this.popUpN==1 && mouseIsPressed){
      this.clickN = 2;
      if (this.clickN == 2 && this.click != 0) {
        this.click = 0;
        this.clickN = 0;
        this.B = 0;
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
      mouseX > x + (4.5 * width) / 24 &&
      mouseX < x + (4.5 * width) / 24 + (2 * width) / 24 &&
      mouseY > y + h - height / 24 - height / 48 &&
      mouseY < y + h - height / 24 - height / 48 + height / 24
    ) {
      return (this.popUpN = true);
    } else return (this.popUpN = false);
    }
}