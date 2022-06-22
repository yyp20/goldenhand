class Hint {
  constructor(content, contentH,mouseover,xpos){
    this.x=20*width/24+xpos;
    this.y=6*height/24-height/96;
    this.w=width/24+width/48;
    this.h=height/24;
    this.B=false;
    this.dclosed=0;
    this.content = content;
    this.contentH = contentH;
    this.mouseover = mouseover;
    this.hintLeft = 1;
  }
  display(){
    if (this.open() ==1 && this.dclosed == 0)
      fill(200);
    else if (this.open() == 0 && this.dclosed == 0) 
      fill(220);
    else if (this.open() == 1 && this.dclosed == 1)
      fill(153, 175, 242);
    else if (this.open() == 0 && this.dclosed == 1){
      fill(153, 175, 242);}
    stroke(0);
    rectMode(CORNER);
    rect(this.x, this.y, this.w, this.h);
    textAlign(CENTER);
    fill(0);
    noStroke();
    textFont(mainFont);
    textSize(height / 30);
    text("Hint", this.x + this.w / 2, this.y + this.h / 2 + height / 90);
  }
  
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

  disclosed() {
    if (this.open()==true && mouseIsPressed==true&&this.hintLeft==1){
      this.dclosed=1
    }
    return this.dclosed
  }
  
  popUp() {
    if(this.open()==true && this.disclosed()==1){
      textAlign(CENTER);
      fill(0);
      noStroke();
      textSize(height / 30);
      text(this.content, this.x + this.w / 2, this.y + this.h / 2 -this.contentH);
    }
    else if (this.open()==true && this.disclosed()==0){
      textAlign(CENTER);
      fill(0);
      stroke(255);
      strokeWeight(1);
      textSize(height / 30);
      text(this.mouseover, this.x + this.w / 2, this.y + this.h / 2 -this.contentH);
    }
  }
}