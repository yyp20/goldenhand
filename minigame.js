class Minigame {
  constructor() {
    this.x = 0;
    this.y = (height / 3) * 2;
    this.w = width;
    this.h = height / 3;
    this.stage = 0;
    this.n = 0;
    this.black = color(0);
    this.blue = color(255, 181, 33);
    this.white = color(255, 255, 230);
    this.end = false;
  }

  display() {
    switch (this.stage) {
      case 0:
        image(startGame, 0, 0);

        if (mouseX < 605 && mouseX > 472 && mouseY > 311 && mouseY < 370) {
          fill(this.blue);
        } else {
          fill(this.white);
        }

        stroke(0);
        rectMode(CENTER);
        rect(
          width / 2 + 140,
          (height / 3) * 2 - 60,
          width / 6,
          height / 10,
          10,
          10,
          10,
          10
        );

        if (mouseX < 445 && mouseX > 313 && mouseY > 312 && mouseY < 369) {
          fill(this.blue);
        } else {
          fill(this.white);
        }
        rect(
          width / 2 - 20,
          (height / 3) * 2 - 60,
          width / 6,
          height / 10,
          10,
          10,
          10,
          10
        );

        noStroke();
        textFont(gameFont);
        textAlign(CENTER, CENTER);
        textSize(40);
        fill(this.black);
        text("교수님과의 즐거운 면담 시간", width / 2 + 50, height / 3 - 50);
        textSize(21);
        fill(30);
        text(
          "교수님의 마음에 드는 답변을 하고\n최대 2개의 힌트를 더 획득하자!",
          width / 2 + 50,
          height / 2 - 60
        );

        fill(this.black);
        textSize(18);
        text("교수님과\n대화하기", width / 2 + 140, (height / 3) * 2 - 62);
        text("연구실\n나가기", width / 2 - 20, (height / 3) * 2 - 62);

        if (
          mouseIsPressed &&
          mouseX < 605 &&
          mouseX > 472 &&
          mouseY > 311 &&
          mouseY < 370
        ) {
          this.stage = 1;
        }
        if (
          mouseIsPressed &&
          mouseX < 445 &&
          mouseX > 313 &&
          mouseY > 312 &&
          mouseY < 369
        ) {
          textAlign(CENTER, BASELINE);
          this.end = true;
        }
        break;

      case 1:
        if (
          mouseIsPressed &&
          mouseX > 477 &&
          mouseX < 529 &&
          mouseY > 495 &&
          mouseY < 520
        ) {
          this.stage = 2;
        } else if (
          mouseIsPressed &&
          mouseX > 477 &&
          mouseX < 529 &&
          mouseY > 536 &&
          mouseY < 561
        ) {
          this.n += 1;
          this.stage = 3;
        }

        image(normalProfessor, 0, 0);

        stroke(0);
        fill(255);
        rectMode(CORNER);
        rect(this.x, this.y, this.w, this.h);

        if (mouseX > 477 && mouseX < 529 && mouseY > 495 && mouseY < 520) {
          fill(this.blue);
        } else {
          fill(this.white);
        }

        rectMode(CENTER);
        rect(503, 508, 52, 25, 5, 5, 5, 5);

        if (mouseX > 477 && mouseX < 529 && mouseY > 536 && mouseY < 561) {
          fill(this.blue);
        } else {
          fill(this.white);
        }
        rect(503, 548, 52, 25, 5, 5, 5, 5);

        noStroke();
        textFont(gameFont);
        textAlign(LEFT, CENTER);
        textSize(23);
        fill(this.black);
        text("반갑네. 과제는 잘 돼가고 있나?", width / 20, (height / 4) * 3);
        textSize(20);
        text(
          "· 오늘도 밤새우고 왔어요. 너무 힘들어요...",
          width / 20,
          (height / 4) * 3 + 57
        );
        text(
          "· 네! 정말 재밌고 유익한 과제인 것 같아요!",
          width / 20,
          (height / 4) * 3 + 97
        );

        fill(this.black);
        textAlign(CENTER, CENTER);
        textSize(13);
        text("답하기", 503, 508);
        text("답하기", 503, 548);

        break;

      case 2:
        image(badProfessor, 0, 0);

        stroke(0);
        fill(255);
        rectMode(CORNER);
        rect(this.x, this.y, this.w, this.h);

        if (mouseX > 283 && mouseX < 336 && mouseY > 505 && mouseY < 530) {
          fill(this.blue);
        } else {
          fill(this.white);
        }
        rectMode(CENTER);
        rect(310, 518, 52, 25, 5, 5, 5, 5);

        if (mouseX > 368 && mouseX < 420 && mouseY > 377 && mouseY < 570) {
          fill(this.blue);
        } else {
          fill(this.white);
        }
        rect(395, 558, 52, 25, 5, 5, 5, 5);

        noStroke();
        fill(this.black);
        textAlign(LEFT, CENTER);
        textSize(23);
        textFont(gameFont);
        text(
          "허허, 그것 참 안 됐네. 그런데 이번 팀 프로젝트가 끝나면 개인 \n과제가 하나 더 있네.",
          width / 20,
          (height / 4) * 3 + 5
        );
        textSize(20);
        text("· 그게 무슨 말씀이세요?", width / 20, (height / 4) * 3 + 67);
        text(
          "· 하하, 그래도 전 너무 좋습니다!",
          width / 20,
          (height / 4) * 3 + 107
        );

        fill(this.black);
        textAlign(CENTER, CENTER);
        textSize(13);
        text("답하기", 310, 518);
        text("답하기", 395, 558);

        if (
          mouseIsPressed &&
          mouseX > 283 &&
          mouseX < 336 &&
          mouseY > 505 &&
          mouseY < 530
        ) {
          this.stage = 4;
        } else if (
          mouseIsPressed &&
          mouseX > 368 &&
          mouseX < 420 &&
          mouseY > 377 &&
          mouseY < 570
        ) {
          this.n += 1;
          this.stage = 5;
        }

        break;

      case 3:
        image(goodProfessor, 0, 0);
        stroke(0);
        fill(255);
        rectMode(CORNER);
        rect(this.x, this.y, this.w, this.h);

        if (mouseX > 282 && mouseX < 335 && mouseY > 506 && mouseY < 530) {
          fill(this.blue);
        } else {
          fill(this.white);
        }
        rectMode(CENTER);
        rect(310, 518, 52, 25, 5, 5, 5, 5);

        if (mouseX > 306 && mouseX < 356 && mouseY > 546 && mouseY < 570) {
          fill(this.blue);
        } else {
          fill(this.white);
        }
        rect(330, 558, 52, 25, 5, 5, 5, 5);

        noStroke();
        fill(this.black);
        textAlign(LEFT, CENTER);
        textSize(23);
        textFont(gameFont);
        text(
          "허허, 다행이네. 그럼 이번 팀 프로젝트가 끝나면 개인 과제를 하나\n더 내줘야겠군.",
          width / 20,
          (height / 4) * 3 + 5
        );

        fill(this.black);
        textSize(20);
        text("· 그게 무슨 말씀이세요?", width / 20, (height / 4) * 3 + 67);
        text("· 하하, 전 너무 좋습니다!", width / 20, (height / 4) * 3 + 107);

        fill(this.black);
        textAlign(CENTER, CENTER);
        textSize(13);
        text("답하기", 310, 518);
        text("답하기", 330, 558);

        if (
          mouseIsPressed &&
          mouseX > 282 &&
          mouseX < 335 &&
          mouseY > 506 &&
          mouseY < 530
        ) {
          this.stage = 4;
        } else if (
          mouseIsPressed &&
          mouseX > 306 &&
          mouseX < 356 &&
          mouseY > 546 &&
          mouseY < 570
        ) {
          this.n += 1;
          this.stage = 5;
        }

        break;

      case 4:
        image(badProfessor, 0, 0);
        stroke(0);
        fill(255);
        rectMode(CORNER);
        rect(this.x, this.y, this.w, this.h);

        if (mouseX > 216 && mouseX < 277 && mouseY > 496 && mouseY < 520) {
          fill(this.blue);
        } else {
          fill(this.white);
        }
        rectMode(CENTER);
        rect(252, 508, 52, 25, 5, 5, 5, 5);

        if (mouseX > 583 && mouseX < 636 && mouseY > 535 && mouseY < 560) {
          fill(this.blue);
        } else {
          fill(this.white);
        }
        rect(610, 548, 52, 25, 5, 5, 5, 5);

        noStroke();
        fill(this.black);
        textAlign(LEFT, CENTER);
        textSize(23);
        textFont(gameFont);
        text(
          "열정이 부족해 보여 조금 아쉽네. 자네 혹시 대학원은 생각 있나?",
          width / 20,
          (height / 4) * 3
        );
        textSize(20);
        text("· 네, 당연하죠^^!", width / 20, (height / 4) * 3 + 57);
        text(
          "· 대학원은 잘못을 저지른 대학생만 가는 곳 아니었나요?",
          width / 20,
          (height / 4) * 3 + 97
        );

        fill(this.black);
        textAlign(CENTER, CENTER);
        textSize(13);
        text("답하기", 252, 508);
        text("답하기", 610, 548);

        if (
          mouseIsPressed &&
          mouseX > 216 &&
          mouseX < 277 &&
          mouseY > 496 &&
          mouseY < 520
        ) {
          this.n += 1;
          this.stage = 6;
        } else if (
          mouseIsPressed &&
          mouseX > 583 &&
          mouseX < 636 &&
          mouseY > 535 &&
          mouseY < 560
        ) {
          this.stage = 6;
        }

        break;

      case 5:
        image(goodProfessor, 0, 0);
        stroke(0);
        fill(255);
        rectMode(CORNER);
        rect(this.x, this.y, this.w, this.h);

        if (mouseX > 216 && mouseX < 277 && mouseY > 496 && mouseY < 520) {
          fill(this.blue);
        } else {
          fill(this.white);
        }
        rectMode(CENTER);
        rect(252, 508, 52, 25, 5, 5, 5, 5);

        if (mouseX > 583 && mouseX < 636 && mouseY > 535 && mouseY < 560) {
          fill(this.blue);
        } else {
          fill(this.white);
        }
        rect(610, 548, 52, 25, 5, 5, 5, 5);

        noStroke(0);
        fill(this.black);
        textAlign(LEFT, CENTER);
        textSize(23);
        textFont(gameFont);
        text(
          "열정적인 모습 너무 보기 좋네. 자네 대학원은 생각 있나?",
          width / 20,
          (height / 4) * 3
        );
        textSize(20);
        text("· 네, 당연하죠^^!", width / 20, (height / 4) * 3 + 57);
        text(
          "· 대학원은 잘못을 저지른 대학생만 가는 곳 아니었나요?",
          width / 20,
          (height / 4) * 3 + 97
        );

        fill(this.black);
        textAlign(CENTER, CENTER);
        textSize(13);
        text("답하기", 252, 508);
        text("답하기", 610, 548);

        if (
          mouseIsPressed &&
          mouseX > 216 &&
          mouseX < 277 &&
          mouseY > 496 &&
          mouseY < 520
        ) {
          this.n += 1;
          this.stage = 6;
        } else if (
          mouseIsPressed &&
          mouseX > 583 &&
          mouseX < 636 &&
          mouseY > 535 &&
          mouseY < 560
        ) {
          this.stage = 6;
        }
        break;

      case 6:
        image(endGame, 0, 0);

        strokeWeight(20);
        stroke(255, 247, 204);
        noFill();
        rectMode(CENTER);
        rect(width / 2, height / 2, width - 100, height - 100, 2);

        stroke(0);
        if (
          mouseX < width / 2 + width / 8 &&
          mouseX > width / 2 - width / 8 &&
          mouseY > (height / 3) * 2 - height / 20 &&
          mouseY < (height / 3) * 2 + height / 20
        ) {
          fill(this.blue);
        } else {
          fill(this.white);
        }
        rectMode(CENTER);
        strokeWeight(1);
        rect(
          width / 2,
          (height / 3) * 2,
          width / 4,
          height / 10,
          10,
          10,
          10,
          10
        );

        noStroke();
        fill(this.black);
        textFont(gameFont);
        textAlign(CENTER, CENTER);
        textSize(35);
        if (this.n == 3) {
          text("힌트를 2개 더 획득하였습니다.", width / 2, height / 3 + 90);
          addHint = 2;
        } else if (this.n == 2) {
          text("힌트를 1개 더 획득하였습니다.", width / 2, height / 3 + 90);
          addHint = 1;
        } else if (this.n <= 1) {
          text("힌트를 획득하지 못하였습니다.", width / 2, height / 3 + 90);
          addHint = 0;
        }

        textFont(gameFont);
        textSize(22);
        text("수고했네.", width / 2 + 70, height / 3 - 40);

        fill(this.black);
        textFont(gameFont);
        textSize(18);
        text("다시 PPT 만들러 가기", width / 2, (height / 3) * 2 - 3);
        if (
          mouseIsPressed &&
          mouseX < width / 2 + width / 8 &&
          mouseX > width / 2 - width / 8 &&
          mouseY > (height / 3) * 2 - height / 20 &&
          mouseY < (height / 3) * 2 + height / 20
        ) {
          textAlign(CENTER, BASELINE);
          minigameNo = true;
          this.end = true;
        }
        break;

      default:
    }
  }
}
