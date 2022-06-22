class BonoIsGone{
  constructor(){
    this.firstTime = 0;
    this.opacity = 1;
    this.timer =0;
  }
  display(){
    image(
    bonoIcon,
    (11.5 * width) / 24,
    (11 * height) / 24,
    ((bonoIcon.width / bonoIcon.height) * 10 * height) / 24,
    (10 * height) / 24
  );
  }
  fadeOut() {
  drawingContext.globalAlpha = this.opacity;
    image(
      bonoIcon,
      (11.5 * width) / 24,
      (11 * height) / 24,
      ((bonoIcon.width / bonoIcon.height) * 10 * height) / 24,
      (10 * height) / 24
    );
  drawingContext.globalAlpha = 1;
    if (this.opacity>0.01) {
    this.opacity-=0.01;
    }else{
      this.opacity = 0;
      picture.inserted = 0;
      this.firstTime =1;
    }
  }
  speech(){
    image(bonoSpeech,19.5*width/24,9*height/24,3*width/24,5*height/24);
    textAlign(CENTER,CENTER)
    fill(0,0,0);
    noStroke();
    textSize(19);
    text("난 \n자유를 찾아 \n떠나고 싶어",21*width/24,11*height/24);
    textAlign(CENTER,BASELINE)
  }
  
  speechFadeOut(){
  drawingContext.globalAlpha = this.opacity;
  image(bonoSpeech,19.5*width/24,9*height/24,3*width/24,5*height/24);
  textAlign(CENTER,CENTER)
  fill(0,0,0);
  noStroke();
  textSize(19);
  text("난 \n자유를 찾아 \n떠나고 싶어",21*width/24,11*height/24);
  textAlign(CENTER,BASELINE)
  drawingContext.globalAlpha = 1;
  }
}
