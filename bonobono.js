class Bonobono {
  constructor() {
    this.x = (width * 6) / 24;
    this.y = (height * 16) / 24;
    this.w = (width * 8) / 24;
    this.h = (height * 3) / 24;
    this.bono = (width * 2) / 24;
    this.B = false;
    this.M = true;
    this.C = (width * 9) / 24;
    this.trans = 50; // 조개 3번 잡은 후 뜨는 팝업창 위치 y축 옮기기: 해당 픽셀만큼 위로 올라감
  }

  display() {
    image(bonobackground, 0, 0, width, height);

    fill(32, 56, 100);
    textFont(gameFont);
    textAlign(CENTER);
    textSize(50);
    noStroke();
    text("보노보노를 조개로 유인하자!", width / 2, 100);
    fill(32, 56, 80);
    textSize(20);
    noStroke();
    text(
      "조개가 있는 곳에서 'STOP'을 눌러서 보노보노를 멈춰야 한다.\n 보노보노에게 조개를 총 3번 주면 성공!",
      width / 2,
      150
    );

    //STOP
    noStroke();
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h &&
      bonoScore < 3
    ) {
      fill(241, 31, 141);
    } else {
      fill(245, 167, 219);
    }
    rect(this.x, this.y, this.w, this.h, 10);
    fill(255);
    textSize(50);
    if (this.B == false) {
      text("STOP", this.x + this.w / 2, this.y + this.h / 2 + 15);
    } else {
      text("START", this.x + this.w / 2, this.y + this.h / 2 + 15);
    }

    //bonobono
    stroke(255);
    fill(183, 204, 211);
    rect(
      (width * 2) / 24,
      (height * 10) / 24,
      (width * 16) / 24,
      (height * 2) / 24,
      60
    );

    //clam
    image(
      clam,
      this.C,
      (height * 21) / 48,
      (width * 1) / 24,
      (height * 1) / 24
    );

    image(
      bonoface,
      this.bono,
      (height * 19) / 48 + 2,
      (width * 2) / 24,
      (height * 3) / 24
    );

    //호감도
    fill(255);
    stroke(0);
    rect(
      (width * 20) / 24,
      (height * 7) / 24 - 2,
      (width * 2) / 24,
      (height * 12) / 24 + 4,
      20
    );
    fill(255, 0, 0);
    noStroke();
    rect(
      (width * 20) / 24 + 2,
      (height * 7) / 24 + ((height * 12) / 24 - (bonoScore * height * 4) / 24),
      (width * 2) / 24 - 4,
      (bonoScore * height * 4) / 24,
      20
    );
    textSize(20);
    text("호감도", (width * 21) / 24, (height * 20) / 24);

    //뒤로가기
    if (mouseX > 10 && mouseX < 127 && mouseY > 559 && mouseY < 590) {
      strokeWeight(2);
      stroke(121, 214, 247);
    } else {
      noStroke();
    }
    textSize(20);
    fill(0);
    text("← 뒤로 가기", 70, height - 20);
    strokeWeight(1);
  }

  move() {
    if (this.bono > (width * 16) / 24 || this.bono < (width * 2) / 24) {
      this.M = !this.M;
    }

    if (this.M) {
      this.bono += 3;
    } else {
      this.bono -= 3;
    }
  }

  open() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h &&
      bonoScore < 3
    ) {
      return true;
    } else {
      return false;
    }
  }

  stop() {
    if (this.M) {
      this.bono -= 3;
    } else {
      this.bono += 3;
    }
  }

  clam() {
    this.C = random((width * 2) / 24, (width * 15) / 24);
  }

  popup() {
    let x = this.trans;
    stroke(0);
    fill(222, 241, 255);
    rect(width / 4, height / 4 - x, width / 2, height / 2);

    if (mouseX > 276 && mouseX < 523 && mouseY > 399 - x && mouseY < 429 - x) {
      fill(101, 143, 219);
    } else {
      fill(148, 210, 255);
    }
    //console.log(mouseX, mouseY);

    rect(width / 3 + 10, (height / 3) * 2 - x, width / 3 - 20, height / 20, 5);

    fill(148, 210, 255);
    rect(width / 4, height / 4 - x, width / 2, height / 20);

    image(
      bonoIcon,
      width / 2.5 + 15,
      height / 2.5 - 27 - x,
      width / 6,
      width / 6
    );

    fill(0);
    noStroke();
    text("보노보노를 데려왔습니다.", width / 2, (height / 3) * 2 - 20 - x);
    textSize(17);
    text("다시 PPT 만들러 가기", width / 2, (height / 3) * 2 + 20 - x);
    textSize(15);
    text("나 왔어.", width / 2 + 70, height / 3 + 15 - x);
  }

  popupOpen() {
    let x = this.trans;
    if (mouseX > 276 && mouseX < 523 && mouseY > 399 - x && mouseY < 429 - x) {
      return true;
    } else {
      return false;
    }
  }
}
