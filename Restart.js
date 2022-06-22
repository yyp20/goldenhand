class Restart{
  constructor(){
  }
  
  display1() { //네모 없는 버전
      if (this.open1()==1) {
        stroke(252, 235, 177);
        strokeWeight(2);
      } else {
        noStroke();
        strokeWeight(1);
      }
      image(house, 37, 34, 18.5, 18);
      textSize(14);
      textFont(mainFont);
      fill(0);
      text("RESTART  ", 96, 48);
      strokeWeight(1);
  }
  
  display2() { //뒤에 네모 있는 버전
      if (this.open2()==1) {
        fill(255,150);
      } else {
        fill(255,150);
      }
      strokeWeight(1);
      noStroke();
      rectMode(CORNER);
      rect(15, 15, 107, 27, 5);

      image(house, 22, 19, 18.5, 18);
      textFont(mainFont);
      textAlign(CENTER, BASELINE);
      textSize(14);
      fill(0);
      noStroke();
      text("RESTART", 81, 33);

  }

  open1(){
    if (mouseX > 36 && mouseX < 132 && mouseY > 31 && mouseY < 52){
      return true;
    }else return false;
  }  

  open2(){
    if (mouseX > 15 && mouseX < 120 && mouseY > 14 && mouseY < 41){
      return true;
    }else return false;
  }

}