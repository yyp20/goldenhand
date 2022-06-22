let mainStage = 0; // 전체 switch 변수
let bgms = [];
let current_bgm;
let warning;
let plag;
let home;
let insert;
let design;
let saving;
let fontselect;
let fontsize;
let picture;
let figure;
let theme1;
let theme2;
let theme3;
let theme4;
let theme5;
let theme;
let mainFont;
let figure1;
let figure2;
let figure3;
let figure4;
let figure1_1;
let figure2_1;
let figure3_1;
let figure4_1;
let arr = [];
let trigger1 = 0;
let trigger2 = 0;
let wallpaper;
let font1;
let font2;
let font3;
let font4;
let font5;
let bonoIcon;
let windows;
let pptIcon;
let exit;
let hint_font;
let hint_size;
let hint_pic;
let hint_fig;
let hint_des;
let selected_font;
let leted_size;
let hintcount1;
let hintcount2;
let hintcount3;
let addHint = 0;
let score = 0;
let ending0;
let ending1;
let ending2;
let ending3;
let ending4;
let ending5;
let ending6;
let ending7;
let ending8;
let ending9;
let ending10;
let ending11;
let ending12;
let mouseCount_E = 0;
let hintArr = [];
let image_goppt;
let bonoIsGone;
let bonoSpeech;
let timer = 0;
let timer2 = 0;
let restart;
let tutorial;

// bonobletnigame
let bonoface;
let bonobonominigame;
let bonobackground;
let clam;
let bonoScore = 0;
let getBonoBack;

// 오프닝
let img = [];
let current = 0;
let mouseCount = 0;
let skipopening;
let goppt;

// 교수님 면담 미니게임
let minigame;
let gameFont;
let minigameNo = false;

function preload() {
  //오프닝 이미지
  opening0 = loadImage("assets/opening0.jpg");
  opening1 = loadImage("assets/opening1.jpg");
  opening2 = loadImage("assets/opening2.jpg");
  opening3 = loadImage("assets/opening3.png");
  opening4 = loadImage("assets/opening4.png");
  opening5 = loadImage("assets/opening5.png");
  opening6 = loadImage("assets/opening6.png");
  opening7 = loadImage("assets/opening7.jpg");
  opening8 = loadImage("assets/opening8.png");
  notebook1 = loadImage("assets/notebook1.png");
  notebookEdge = loadImage("assets/notebookEdge.png");
  tutorial = loadImage("assets/tutorial.jpg");

  image_goppt = loadImage("assets/메인화면.png");
  theme1 = loadImage("assets/배경1.jpg");
  theme2 = loadImage("assets/배경2.jpg");
  theme3 = loadImage("assets/배경3.jpg");
  theme4 = loadImage("assets/배경4.jpg");
  theme5 = loadImage("assets/배경5.jpg");
  wallpaper = loadImage("assets/wallpaper.jpg");
  mainFont = loadFont("assets/ice.otf");
  figure1 = loadImage("assets/도형1.png");
  figure2 = loadImage("assets/도형2.png");
  figure3 = loadImage("assets/도형3.png");
  figure4 = loadImage("assets/도형4.png");
  figure1_1 = loadImage("assets/도형1_1.png");
  figure2_1 = loadImage("assets/도형2_1.png");
  figure3_1 = loadImage("assets/도형3_1.png");
  figure4_1 = loadImage("assets/도형4_1.png");
  font1 = loadFont("assets/NanumSquare.ttf");
  bonoIcon = loadImage("assets/bonobonoIcon.png");
  windows = loadImage("assets/WindowsIcon.png");
  pptIcon = loadImage("assets/PngItem_4640490.png");
  font2 = loadFont("assets/궁서.ttf");
  font3 = loadFont("assets/도장체.ttf");
  font4 = loadFont("assets/손편지체.ttf");
  font5 = loadFont("assets/와일드.ttf");

  // 교수님 면담 미니게임
  gameFont = loadFont("assets/dunggeunmo.otf");
  normalProfessor = loadImage("assets/normalProfessor.png");
  badProfessor = loadImage("assets/badProfessor.png");
  goodProfessor = loadImage("assets/goodProfessor.png");
  startGame = loadImage("assets/startGame.jpg");
  endGame = loadImage("assets/endGame.png");

  // bonobono minigame
  bonoface = loadImage("assets/bonoface.png");
  bonobackground = loadImage("assets/bonobackground.jpg");
  clam = loadImage("assets/조개.png");
  bonoSpeech = loadImage("assets/speech.png");

  //bgm
  soundFormats("mp3", "ogg");
  bgms[0] = loadSound("assets/emart.mp3");
  bgms[1] = loadSound("assets/Happy Mistake.mp3");
  bgms[2] = loadSound("assets/Pastoral.mp3");
  bgms[3] = loadSound("assets/보노보노.mp3");

  ending0 = loadImage("assets/ending.png");
  ending1 = loadImage("assets/score4.png");
  ending2 = loadImage("assets/score3.png");
  ending3 = loadImage("assets/score2.png");
  ending4 = loadImage("assets/score1.png");
  ending5 = loadImage("assets/hidden1.png");
  ending6 = loadImage("assets/score5.png");
  ending7 = loadImage("assets/ending1.png");
  ending8 = loadImage("assets/ending2.png");
  ending9 = loadImage("assets/ending3.png");
  ending10 = loadImage("assets/ending4.png");
  ending11 = loadImage("assets/hidden3.png");
  ending12 = loadImage("assets/hidden2.png");

  house = loadImage("assets/house.png");
}

function setup() {
  createCanvas(800, 600);
  frameRate(60);
  setInterval(timePlus, 1000);
  setInterval(timePlus2, 50);

  //bgm
  current_bgm = bgms[0];
  current_bgm.loop();

  // 오프닝 클래스
  skipopening = new Skipopening();
  goppt = new Goppt();

  // 교수님 면담 미니게임 클래스
  minigame = new Minigame();

  // bonobono minigame
  bonoIsGone = new BonoIsGone();
  bonobono = new Bonobono();
  getBonoBack = new GetBonoBack();

  restart = new Restart();
  warning = new Warning();
  plag = new Plag();
  home = new Home();
  insert = new Insert();
  design = new Design();
  saving = new Saving();
  fontselect = new Fontselect();
  fontsize = new Fontsize();
  picture = new Picture();
  figure = new Figure();
  theme = new Theme();
  minimize = new Minimize();
  exit = new Exit();
  hint_font = new Hint(
    "교수님은 \n진지한 걸 \n좋아해!",
    (-2 * height) / 24,
    "폰트 힌트\n받기",
    (-2 * width) / 24
  );
  hint_size = new Hint(
    "교수님 \n안경이 \n두꺼웠어!",
    (-2 * height) / 24,
    "크기 힌트\n받기",
    0
  );
  hint_pic = new Hint(
    "귀여운 \n캐릭터는 \n필수랬어!",
    (-2 * height) / 24,
    "그림 힌트\n받기",
    (-2 * width) / 24
  );
  hint_fig = new Hint(
    "교수님의 \n바지가 \n특이했는데...",
    (-2 * height) / 24,
    "도형 힌트\n받기",
    0
  );
  hint_des = new Hint(
    "교수님 옷이\n무슨 \n색깔이었더라?",
    (-2 * height) / 24,
    "디자인 힌트\n받기",
    0
  );
  hintcount1 = new HintCount(0);
  hintcount2 = new HintCount((2 * width) / 24);
  hintcount3 = new HintCount((4 * width) / 24);
  moreHint = new MoreHint();
  arr = [theme1];
  selected_font = "나눔스퀘어";
  arr[2] = font1;
  arr[1] = 0;
  arr[3] = 25;
  selected_size = "28";
  submit = new Submit();
  replay = new Replay();
  selected_size = "28";
}

function draw() {
  //console.log(frameRate(),timer,frameCount);
  bgm_loop();
  switch (mainStage) {
    //표지
    case 0:
      image(opening0, 0, 0, width, height);
      //noStroke();
      //fill(255,150);
      //rect(width / 2 - width * 4 / 24, height / 2 + height * 5 / 24, width * 8 / 24, height * 3 / 24);
      textAlign(CENTER);
      textFont(gameFont);
      fill(0);
      stroke(255);
      strokeWeight(10);
      textSize(30);
      text("마우스를 클릭하세요!", width / 2, (height * 19) / 24);
      strokeWeight(1);
      break;

    //오프닝
    case 1:
      textSize(25);
      image(opening1, 0, 0, width, height);
      textFont(mainFont);
      textSize(30);
      text("▶NEXT", width - 58, height - 20);

      if (mouseCount == 1) {
        image(opening2, 0, 0, width, height);
        textFont(mainFont);
        textSize(30);
        text("▶NEXT", width - 58, height - 20);
      }
      if (mouseCount == 2) {
        image(opening3, 0, 0, width, height);
        textFont(mainFont);
        textSize(30);
        text("▶NEXT", width - 58, height - 20);
      }
      if (mouseCount == 3) {
        image(opening4, 0, 0, width, height);
        textFont(mainFont);
        textSize(30);
        text("▶NEXT", width - 58, height - 20);
      }
      if (mouseCount == 4) {
        image(opening5, 0, 0, width, height);
        textFont(mainFont);
        textSize(30);
        text("▶NEXT", width - 58, height - 20);
      }

      if (mouseCount == 5) {
        image(opening6, 0, 0, width, height);
        textFont(mainFont);
        textSize(30);
        text("▶NEXT", width - 58, height - 20);
      }
      if (mouseCount == 6) {
        image(opening7, 0, 0, width, height);
        textFont(mainFont);
        textSize(30);
        text("▶NEXT", width - 58, height - 20);
      }
      if (mouseCount == 7) {
        image(opening8, 0, 0, width, height);
        textFont(mainFont);
        textSize(30);
        text("▶NEXT", width - 58, height - 20);
      }

      skipopening.display();

      if (mouseCount > 7) {
        image(notebook1, 0, 0);
        goppt.display();
      }

      restart.display2();

      break;

    //메인
    case 2:
      //남은 힌트 수 계산 시작
      hintArr = [hint_font, hint_size, hint_des, hint_pic, hint_fig];
      let usedHintArr = [];
      let usedHint = 0;
      for (let i = 0; i < 5; i += 1) {
        if (hintArr[i].dclosed == 1) {
          usedHintArr[i] = 1;
        } else usedHintArr[i] = 0;
      }
      for (let i = 0; i < 5; i += 1) {
        usedHint = usedHint + usedHintArr[i];
      }
      hintcount1.hintCount = 3 + addHint - usedHint;
      hintcount2.hintCount = 3 + addHint - usedHint;
      hintcount3.hintCount = 3 + addHint - usedHint;
      if (hintcount1.hintCount <= 0) {
        for (a of hintArr) {
          a.hintLeft = 0;
        }
      } else {
        for (a of hintArr) {
          a.hintLeft = 1;
        }
      }
      //남은 힌트 수 계산 끝
      background(250, 246, 235);
      image(notebookEdge, 0, 0);
      fill(255);
      stroke(0);
      rect(
        (width * 2) / 24,
        (height * 8) / 24,
        (width * 17) / 24,
        (height * 13) / 24
      );
      noStroke();
      fill(237, 126, 91);
      rect(width / 24 - 2, height / 24 + 5, (22 * width) / 24 + 6, height / 24);
      fill(220);
      rect(
        width / 24 - 2,
        (22 * height) / 24 - 5,
        (22 * width) / 24 + 6,
        height / 24
      );
      image(
        windows,
        width / 24 + 5,
        (22 * height) / 24 - 5,
        width / 24 - width / 96,
        (width / 24 - width / 96) * (windows.width / windows.height)
      );
      fill(240);
      rect(
        (2 * width) / 24 + width / 48,
        (22 * height) / 24 - 5,
        (7 * width) / 24,
        height / 24
      );
      image(
        pptIcon,
        (10 * width) / 24,
        (22 * height) / 24 - 3,
        width / 24 - width / 96 - 3,
        (width / 24 - width / 96 - 5) * (windows.width / windows.height)
      );
      //메인파트 버튼
      home.display();
      insert.display();
      design.display();
      saving.display();
      minimize.display();
      exit.display();
      moreHint.display();
      submit.display();
      getBonoBack.display();
      fill(166, 166, 166);
      stroke(0);
      rect(
        (width * 2) / 24,
        (height * 5) / 24,
        (width * 20) / 24,
        (height * 5) / 48,
        10
      );
      hintcount3.display();

      //메인파트 ppt 요소 저장된 배열
      //arr[0] = 배경
      if (
        arr[0] == theme1 ||
        arr[0] == theme2 ||
        arr[0] == theme3 ||
        arr[0] == theme4 ||
        arr[0] == theme5
      ) {
        image(
          arr[0],
          (2 * width) / 24,
          (8 * height) / 24,
          (17 * width) / 24,
          (13 * height) / 24
        );
      }
      if (picture.inserted == 1 && bonoIsGone.firstTime == 0) {
        if (timer <= bonoIsGone.timer) {
          bonoIsGone.display();
        } else if (timer <= bonoIsGone.timer + 1) {
          bonoIsGone.display();
          bonoIsGone.speech();
        } else if (timer >= bonoIsGone.timer + 2 && bonoIsGone.opacity > 0) {
          bonoIsGone.fadeOut();
          bonoIsGone.speechFadeOut();
        } else if (bonoIsGone.opacity == 0) {
          bonoIsGone.opacity = 1;
        }
      } else if (picture.inserted == 1 && bonoIsGone.firstTime == 2) {
        bonoIsGone.display();
      }

      //arr[1] = 도형
      if (
        arr[1] == figure1 ||
        arr[1] == figure2 ||
        arr[1] == figure3 ||
        arr[1] == figure4
      ) {
        image(
          arr[1],
          (width * 5) / 48,
          (height * 11) / 24,
          (width * 11) / 24,
          (height * 9) / 48
        );
      }

      //디자인 버튼 눌렀을 때
      if (design.B == true) {
        fill(166, 166, 166);
        stroke(0);
        rect(
          (width * 2) / 24,
          (height * 5) / 24,
          (width * 20) / 24,
          (height * 5) / 48,
          10
        );
        theme.display();
        hint_des.display();
        hint_des.popUp();

        //선택하는 테마 적용
        if (theme.B1 == true) {
          // theme.show_theme1();
          arr[0] = theme1;
        }

        if (theme.B2 == true) {
          // theme.show_theme2();
          arr[0] = theme2;
        }

        if (theme.B3 == true) {
          //theme.show_theme3();
          arr[0] = theme3;
        }

        if (theme.B4 == true) {
          //theme.show_theme4();
          arr[0] = theme4;
        }

        if (theme.B5 == true) {
          //theme.show_theme5();
          arr[0] = theme5;
        }
      }
      //삽입 버튼 눌렀을 때
      if (insert.B == true) {
        fill(166, 166, 166);
        stroke(0);
        rect(
          (width * 2) / 24,
          (height * 5) / 24,
          (width * 20) / 24,
          (height * 5) / 48,
          10
        );
        hint_fig.display();
        hint_fig.popUp();
        hint_pic.display();
        hint_pic.popUp();

        //선택하는 도형 삽입

        if (
          figure.B1 == false &&
          figure.B2 == false &&
          figure.B3 == false &&
          figure.B4 == false
        ) {
          arr[1] = 0;
        }
        if (figure.B1 == true) {
          // figure.show_figure1();
          arr[1] = figure1;
        }

        if (figure.B2 == true) {
          // figure.show_figure2();
          arr[1] = figure2;
        }

        if (figure.B3 == true) {
          // figure.show_figure3();
          arr[1] = figure3;
        }

        if (figure.B4 == true) {
          // figure.show_figure4();
          arr[1] = figure4;
        }

        picture.display();
        picture.show();
        figure.display();
        figure.show();
      } else {
        picture.B = 0;
        figure.B = 0;
      }

      //폰트 적용
      textFont(font1);

      if (fontselect.B1 == true) {
        textFont(font1);
      }
      if (fontselect.B2 == true) {
        textFont(font2);
      }
      if (fontselect.B3 == true) {
        textFont(font3);
      }
      if (fontselect.B4 == true) {
        textFont(font4);
      }
      if (fontselect.B5 == true) {
        textFont(font5);
      }

      //폰트 적용

      textFont(font1);

      if (
        arr[2] == font1 ||
        arr[2] == font2 ||
        arr[2] == font3 ||
        arr[2] == font4 ||
        arr[2] == font5
      ) {
        textFont(arr[2]);
      }

      if (fontselect.B == true) {
        if (fontselect.B1 == true) {
          arr[2] = font1;
          selected_font = "나눔스퀘어";
        }
        if (fontselect.B2 == true) {
          arr[2] = font2;
          selected_font = "궁서";
        }
        if (fontselect.B3 == true) {
          arr[2] = font3;
          selected_font = "도장체";
        }
        if (fontselect.B4 == true) {
          arr[2] = font4;
          selected_font = "손편지체";
        }
        if (fontselect.B5 == true) {
          arr[2] = font5;
          selected_font = "와일드";
        }
      } else {
        fontselect.B = 0;
        fontselect.B1 = 0;
        fontselect.B2 = 0;
        fontselect.B3 = 0;
        fontselect.B4 = 0;
        fontselect.B5 = 0;
      }

      //폰트사이즈
      textSize(25);

      if (
        arr[3] == 15 ||
        arr[3] == 20 ||
        arr[3] == 25 ||
        arr[3] == 30 ||
        arr[3] == 35 ||
        arr[3] == 40
      ) {
        textSize(arr[3]);
      }

      if (fontsize.B == true) {
        if (fontsize.B1 == true) {
          arr[3] = 15;
          selected_size = "20";
        }

        if (fontsize.B2 == true) {
          arr[3] = 20;
          selected_size = "24";
        }

        if (fontsize.B3 == true) {
          arr[3] = 25;
          selected_size = "28";
        }

        if (fontsize.B4 == true) {
          arr[3] = 30;
          selected_size = "32";
        }

        if (fontsize.B5 == true) {
          arr[3] = 35;
          selected_size = "36";
        }

        if (fontsize.B6 == true) {
          arr[3] = 40;
          selected_size = "40";
        }
      } else {
        fontsize.B = 0;
        fontsize.B1 = 0;
        fontsize.B2 = 0;
        fontsize.B3 = 0;
        fontsize.B4 = 0;
        fontsize.B5 = 0;
        fontsize.B6 = 0;
      }

      fill(0);
      noStroke();
      textAlign(CENTER);
      text("2022 정보문화학 과제전", (width * 17) / 48, (height * 13) / 24);

      textSize(12);

      if (
        arr[4] == 6 ||
        arr[4] == 9 ||
        arr[4] == 12 ||
        arr[4] == 15 ||
        arr[4] == 18 ||
        arr[4] == 21
      ) {
        textSize(arr[4]);
      }

      if (fontsize.B == true) {
        if (fontsize.B1 == true) {
          arr[4] = 6;
        }

        if (fontsize.B2 == true) {
          arr[4] = 9;
        }

        if (fontsize.B3 == true) {
          arr[4] = 12;
        }

        if (fontsize.B4 == true) {
          arr[4] = 15;
        }

        if (fontsize.B5 == true) {
          arr[4] = 18;
        }

        if (fontsize.B6 == true) {
          arr[4] = 21;
        }
      }

      text(
        "강효정, 권정유, 김소영, 김솔지, 박윤유",
        (width * 17) / 48,
        (height * 17) / 24
      );

      //홈 버튼 눌렀을 때
      //다른 버튼 눌렀을 때 작동하지 않도록 else 처리
      if (home.B == true) {
        fill(166, 166, 166);
        stroke(0);
        rect(
          (width * 2) / 24,
          (height * 5) / 24,
          (width * 20) / 24,
          (height * 5) / 48,
          10
        );
        fontselect.display();
        textAlign(CENTER);
        fill(0);
        noStroke();
        textFont(arr[2]);
        textSize(height / 30);
        text(
          selected_font,
          (width * 3) / 24 + (width * 9) / 96,
          (height * 11) / 48 + (height * 3) / 96 + height / 90
        );
        fontsize.display();
        textFont(mainFont);
        text(
          selected_size,
          (width * 19) / 48 + (width * 5) / 96,
          (height * 11) / 48 + (height * 3) / 96 + height / 90
        );
        fontselect.show();
        fontsize.show();
        hint_font.display();
        hint_font.popUp();
        hint_size.display();
        hint_size.popUp();
      } else {
        fontsize.B = 0;
        fontselect.B = 0;
      }
      if (home.B == true || insert.B == true) {
        hintcount1.display();
      } else if (design.B == true) {
        hintcount2.display();
      }
      //최소화 버튼 눌렀을 때
      //팝업창들
      exit.popUp((8 * width) / 24, (10 * height) / 24);
      minimize.popUp((8 * width) / 24, (10 * height) / 24);
      saving.popUp((8 * width) / 24, (10 * height) / 24);
      //컴퓨터 꺼지려고 하는 상황 발생시키기: trigger1 변수를 1로
      if (trigger1 == 1) {
        warning.display();
        saving.countdown = 2;
        warning.popUp((8 * width) / 24, (10 * height) / 24);
        if (saving.click == 1 && warning.countdown > 0) {
          warning.saved = 1;
        }
      }
      //동기 훔쳐보는 상황 발생시키기 : trigger2 변수를 1로
      picture.popUp((8 * width) / 24, (10 * height) / 24);
      if (trigger2 == 1) {
        minimize.plag = 1;
        plag.display();
        plag.popUp((8 * width) / 24, (10 * height) / 24);
        if (trigger2 == 1 && minimize.click > 0 && plag.countdown > 0.2) {
          plag.minimized = 1;
        }
        if (plag.minimized == 1 && minimize.click == 0) {
          minimize.plag = 0;
          trigger2 = 0;
        }
      }
      /*
      //settimeout로 카운트다운 내려보기
      if (minimize.click >= 1 && minimize.countdown > 0) {
      setTimeout(zero,2000);}
      console.log(minimize.countdown,frameCount)*/

      restart.display1();

      break;

    //교수님 면담 미니게임
    case 3:
      minigame.display();
      if (minigame.end == true) {
        mainStage = 2;
        minigame.end = false;
      }

      restart.display2();

      break;

    //엔딩
    case 4:
      image(ending0, 0, 0, width, height);
      image(
        arr[0],
        (width * 6) / 24 - 5,
        (-height * 1) / 24,
        (width * 9) / 24 + 10,
        (height * 7) / 24
      );
      if (picture.inserted == 1) {
        image(
          bonoIcon,
          (width * 11) / 24 - 5,
          5,
          (width * 4) / 24,
          (height * 6) / 24 - 5
        );
      }
      if (arr[1] != 0) {
        image(arr[1], (width * 6) / 24, 5, (width * 5) / 24, (height * 3) / 24);
      }
      if (arr[3] == 25) {
        textSize(12);
      } else if (arr[3] == 20) {
        textSize(9);
      } else if (arr[3] == 15) {
        textSize(6);
      } else if (arr[3] == 30) {
        textSize(15);
      } else if (arr[3] == 35) {
        textSize(18);
      } else if (arr[3] == 40) {
        textSize(21);
      }
      textFont(arr[2]);
      text("2022 정보문화학 과제전", (width * 9) / 24 + 9, (height * 2) / 24);
      if (arr[3] == 25) {
        textSize(6);
      } else if (arr[3] == 20) {
        textSize(5);
      } else if (arr[3] == 15) {
        textSize(4);
      } else if (arr[3] == 30) {
        textSize(8);
      } else if (arr[3] == 35) {
        textSize(10);
      } else if (arr[3] == 40) {
        textSize(12);
      }
      text(
        "강효정, 권정유, 김소영, 김솔지, 박윤유",
        (width * 9) / 24 + 9,
        (height * 4) / 24
      );
      textSize(25);
      fill(0);
      textFont(mainFont);
      text("▶NEXT", width - 58, height - 20);
      if (mouseCount_E == 1) {
        image(ending6, 0, 0, width, height);
        textSize(25);
        fill(0);
        textFont(mainFont);
        text("▶NEXT", width - 58, height - 20);
      }
      if (mouseCount_E > 1) {
        image(ending5, 0, 0, width, height);
        replay.display();
      }

      restart.display2();

      break;

    case 5:
      image(ending0, 0, 0, width, height);
      image(
        arr[0],
        (width * 6) / 24 - 5,
        (-height * 1) / 24,
        (width * 9) / 24 + 10,
        (height * 7) / 24
      );
      if (picture.inserted == 1) {
        image(
          bonoIcon,
          (width * 11) / 24 - 5,
          5,
          (width * 4) / 24,
          (height * 6) / 24 - 5
        );
      }
      if (arr[1] != 0) {
        image(arr[1], (width * 6) / 24, 5, (width * 5) / 24, (height * 3) / 24);
      }
      if (arr[3] == 25) {
        textSize(12);
      } else if (arr[3] == 20) {
        textSize(9);
      } else if (arr[3] == 15) {
        textSize(6);
      } else if (arr[3] == 30) {
        textSize(15);
      } else if (arr[3] == 35) {
        textSize(18);
      } else if (arr[3] == 40) {
        textSize(21);
      }
      textFont(arr[2]);
      text("2022 정보문화학 과제전", (width * 9) / 24 + 9, (height * 2) / 24);
      if (arr[3] == 25) {
        textSize(6);
      } else if (arr[3] == 20) {
        textSize(5);
      } else if (arr[3] == 15) {
        textSize(4);
      } else if (arr[3] == 30) {
        textSize(8);
      } else if (arr[3] == 35) {
        textSize(10);
      } else if (arr[3] == 40) {
        textSize(12);
      }
      text(
        "강효정, 권정유, 김소영, 김솔지, 박윤유",
        (width * 9) / 24 + 9,
        (height * 4) / 24
      );
      textSize(25);
      fill(0);
      textFont(mainFont);
      text("▶NEXT", width - 58, height - 20);
      if (mouseCount_E == 1) {
        image(ending1, 0, 0, width, height);
        textSize(25);
        fill(0);
        textFont(mainFont);
        text("▶NEXT", width - 58, height - 20);
      }
      if (mouseCount_E > 1) {
        image(ending7, 0, 0, width, height);
        replay.display();
      }

      restart.display2();

      break;

    case 6:
      image(ending0, 0, 0, width, height);
      image(
        arr[0],
        (width * 6) / 24 - 5,
        (-height * 1) / 24,
        (width * 9) / 24 + 10,
        (height * 7) / 24
      );
      if (picture.inserted == 1) {
        image(
          bonoIcon,
          (width * 11) / 24 - 5,
          5,
          (width * 4) / 24,
          (height * 6) / 24 - 5
        );
      }
      if (arr[1] != 0) {
        image(arr[1], (width * 6) / 24, 5, (width * 5) / 24, (height * 3) / 24);
      }
      if (arr[3] == 25) {
        textSize(12);
      } else if (arr[3] == 20) {
        textSize(9);
      } else if (arr[3] == 15) {
        textSize(6);
      } else if (arr[3] == 30) {
        textSize(15);
      } else if (arr[3] == 35) {
        textSize(18);
      } else if (arr[3] == 40) {
        textSize(21);
      }
      textFont(arr[2]);
      text("2022 정보문화학 과제전", (width * 9) / 24 + 9, (height * 2) / 24);
      if (arr[3] == 25) {
        textSize(6);
      } else if (arr[3] == 20) {
        textSize(5);
      } else if (arr[3] == 15) {
        textSize(4);
      } else if (arr[3] == 30) {
        textSize(8);
      } else if (arr[3] == 35) {
        textSize(10);
      } else if (arr[3] == 40) {
        textSize(12);
      }
      text(
        "강효정, 권정유, 김소영, 김솔지, 박윤유",
        (width * 9) / 24 + 9,
        (height * 4) / 24
      );
      textSize(25);
      fill(0);
      textFont(mainFont);
      text("▶NEXT", width - 58, height - 20);
      if (mouseCount_E == 1) {
        image(ending2, 0, 0, width, height);
        textSize(25);
        fill(0);
        textFont(mainFont);
        text("▶NEXT", width - 58, height - 20);
      }
      if (mouseCount_E > 1) {
        image(ending8, 0, 0, width, height);
        replay.display();
      }

      restart.display2();

      break;

    case 7:
      image(ending0, 0, 0, width, height);
      image(
        arr[0],
        (width * 6) / 24 - 5,
        (-height * 1) / 24,
        (width * 9) / 24 + 10,
        (height * 7) / 24
      );
      if (picture.inserted == 1) {
        image(
          bonoIcon,
          (width * 11) / 24 - 5,
          5,
          (width * 4) / 24,
          (height * 6) / 24 - 5
        );
      }
      if (arr[1] != 0) {
        image(arr[1], (width * 6) / 24, 5, (width * 5) / 24, (height * 3) / 24);
      }
      if (arr[3] == 25) {
        textSize(12);
      } else if (arr[3] == 20) {
        textSize(9);
      } else if (arr[3] == 15) {
        textSize(6);
      } else if (arr[3] == 30) {
        textSize(15);
      } else if (arr[3] == 35) {
        textSize(18);
      } else if (arr[3] == 40) {
        textSize(21);
      }
      textFont(arr[2]);
      text("2022 정보문화학 과제전", (width * 9) / 24 + 9, (height * 2) / 24);
      if (arr[3] == 25) {
        textSize(6);
      } else if (arr[3] == 20) {
        textSize(5);
      } else if (arr[3] == 15) {
        textSize(4);
      } else if (arr[3] == 30) {
        textSize(8);
      } else if (arr[3] == 35) {
        textSize(10);
      } else if (arr[3] == 40) {
        textSize(12);
      }
      text(
        "강효정, 권정유, 김소영, 김솔지, 박윤유",
        (width * 9) / 24 + 9,
        (height * 4) / 24
      );
      textSize(25);
      fill(0);
      textFont(mainFont);
      text("▶NEXT", width - 58, height - 20);
      if (mouseCount_E == 1) {
        image(ending3, 0, 0, width, height);
        textSize(25);
        fill(0);
        textFont(mainFont);
        text("▶NEXT", width - 58, height - 20);
      }
      if (mouseCount_E > 1) {
        image(ending9, 0, 0, width, height);
        replay.display();
      }

      restart.display2();

      break;

    case 8:
      image(ending0, 0, 0, width, height);
      image(
        arr[0],
        (width * 6) / 24 - 5,
        (-height * 1) / 24,
        (width * 9) / 24 + 10,
        (height * 7) / 24
      );
      if (picture.inserted == 1) {
        image(
          bonoIcon,
          (width * 11) / 24 - 5,
          5,
          (width * 4) / 24,
          (height * 6) / 24 - 5
        );
      }
      if (arr[1] != 0) {
        image(arr[1], (width * 6) / 24, 5, (width * 5) / 24, (height * 3) / 24);
      }
      if (arr[3] == 25) {
        textSize(12);
      } else if (arr[3] == 20) {
        textSize(9);
      } else if (arr[3] == 15) {
        textSize(6);
      } else if (arr[3] == 30) {
        textSize(15);
      } else if (arr[3] == 35) {
        textSize(18);
      } else if (arr[3] == 40) {
        textSize(21);
      }
      textFont(arr[2]);
      text("2022 정보문화학 과제전", (width * 9) / 24 + 9, (height * 2) / 24);
      if (arr[3] == 25) {
        textSize(6);
      } else if (arr[3] == 20) {
        textSize(5);
      } else if (arr[3] == 15) {
        textSize(4);
      } else if (arr[3] == 30) {
        textSize(8);
      } else if (arr[3] == 35) {
        textSize(10);
      } else if (arr[3] == 40) {
        textSize(12);
      }
      text(
        "강효정, 권정유, 김소영, 김솔지, 박윤유",
        (width * 9) / 24 + 9,
        (height * 4) / 24
      );
      textSize(25);
      fill(0);
      textFont(mainFont);
      text("▶NEXT", width - 58, height - 20);
      if (mouseCount_E == 1) {
        image(ending4, 0, 0, width, height);
        textSize(25);
        fill(0);
        textFont(mainFont);
        text("▶NEXT", width - 58, height - 20);
      }
      if (mouseCount_E > 1) {
        image(ending10, 0, 0, width, height);
        replay.display();
      }

      restart.display2();

      break;

    case 9:
      image(ending6, 0, 0, width, height);
      textSize(25);
      fill(0);
      textFont(mainFont);
      text("▶NEXT", width - 58, height - 20);
      if (mouseCount_E > 0) {
        image(ending11, 0, 0, width, height);
        replay.display();
      }

      restart.display2();

      break;

    case 10:
      image(ending6, 0, 0, width, height);
      textSize(25);
      fill(0);
      textFont(mainFont);
      text("▶NEXT", width - 58, height - 20);
      if (mouseCount_E > 0) {
        image(ending12, 0, 0, width, height);
        replay.display();
      }

      restart.display2();

      break;

    // bonobono minigame
    case 11:
      bonobono.display();
      bonobono.move();
      bonobono.open();

      if (bonobono.B == true) {
        bonobono.stop();
      }
      if (bonoScore >= 3) {
        bonobono.popup();
      }

      restart.display2();

      break;

    case 12:
      image(tutorial, 0, 0, width, height);

    default:
  }
}

function mouseClicked() {
  switch (mainStage) {
    //표지
    case 0:
      mainStage = 12;
      break;

    //오프닝
    case 1:
      mouseCount += 1;

      if (skipopening.open()) {
        mainStage = 2;
      }

      if (mouseCount > 8 && goppt.open()) {
        mainStage = 2;
      }
      if (restart.open2()) {
        mouseCount = 0;
        mainStage = 0;
      }

      break;

    // 메인
    case 2:
      if (getBonoBack.open() == 1 && bonoIsGone.firstTime == 1) {
        mainStage = 11;
      }
      if (home.open()) {
        home.B = true;
        insert.B = false;
        design.B = false;
      }

      if (fontselect.open()) {
        fontselect.B = !fontselect.B;
        fontsize.B = false;
      }

      if (fontsize.open()) {
        fontsize.B = !fontsize.B;
        fontselect.B = false;
      }

      if (design.open()) {
        design.B = true;
        insert.B = false;
        home.B = false;
      }
      if (design.B == 1) {
        if (theme.open_theme1()) {
          theme.B1 = true;
          theme.B2 = false;
          theme.B3 = false;
          theme.B4 = false;
          theme.B5 = false;
        }

        if (theme.open_theme2()) {
          theme.B2 = true;
          theme.B1 = false;
          theme.B3 = false;
          theme.B4 = false;
          theme.B5 = false;
        }

        if (theme.open_theme3()) {
          theme.B3 = true;
          theme.B1 = false;
          theme.B2 = false;
          theme.B4 = false;
          theme.B5 = false;
        }

        if (theme.open_theme4()) {
          theme.B4 = true;
          theme.B1 = false;
          theme.B2 = false;
          theme.B3 = false;
          theme.B5 = false;
        }

        if (theme.open_theme5()) {
          theme.B5 = true;
          theme.B1 = false;
          theme.B2 = false;
          theme.B3 = false;
          theme.B4 = false;
        }
      }

      if (insert.open()) {
        insert.B = true;
        home.B = false;
        design.B = false;
      }

      if (picture.open()) {
        picture.B = !picture.B;
        figure.B = false;
      }

      if (figure.open()) {
        figure.B = !figure.B;
        picture.B = false;
      }

      if (insert.B == 1) {
        if (figure.open_figure1()) {
          figure.B1 = !figure.B1;
          figure.B2 = false;
          figure.B3 = false;
          figure.B4 = false;
        }

        if (figure.open_figure2()) {
          figure.B2 = !figure.B2;
          figure.B1 = false;
          figure.B3 = false;
          figure.B4 = false;
        }

        if (figure.open_figure3()) {
          figure.B3 = !figure.B3;
          figure.B1 = false;
          figure.B2 = false;
          figure.B4 = false;
        }

        if (figure.open_figure4()) {
          figure.B4 = !figure.B4;
          figure.B1 = false;
          figure.B2 = false;
          figure.B3 = false;
        }
      }

      if (home.B == 1) {
        if (fontselect.open_font1()) {
          fontselect.B1 = true;
          fontselect.B2 = false;
          fontselect.B3 = false;
          fontselect.B4 = false;
          fontselect.B5 = false;
        }

        if (fontselect.open_font2()) {
          fontselect.B2 = true;
          fontselect.B1 = false;
          fontselect.B3 = false;
          fontselect.B4 = false;
          fontselect.B5 = false;
        }

        if (fontselect.open_font3()) {
          fontselect.B3 = true;
          fontselect.B1 = false;
          fontselect.B2 = false;
          fontselect.B4 = false;
          fontselect.B5 = false;
        }

        if (fontselect.open_font4()) {
          fontselect.B4 = true;
          fontselect.B1 = false;
          fontselect.B2 = false;
          fontselect.B3 = false;
          fontselect.B5 = false;
        }

        if (fontselect.open_font5()) {
          fontselect.B5 = true;
          fontselect.B1 = false;
          fontselect.B2 = false;
          fontselect.B3 = false;
          fontselect.B4 = false;
        }

        if (fontsize.open_size1()) {
          fontsize.B1 = true;
          fontsize.B2 = false;
          fontsize.B3 = false;
          fontsize.B4 = false;
          fontsize.B5 = false;
          fontsize.B6 = false;
        }

        if (fontsize.open_size2()) {
          fontsize.B2 = true;
          fontsize.B1 = false;
          fontsize.B3 = false;
          fontsize.B4 = false;
          fontsize.B5 = false;
          fontsize.B6 = false;
        }

        if (fontsize.open_size3()) {
          fontsize.B3 = true;
          fontsize.B1 = false;
          fontsize.B2 = false;
          fontsize.B4 = false;
          fontsize.B5 = false;
          fontsize.B6 = false;
        }

        if (fontsize.open_size4()) {
          fontsize.B4 = true;
          fontsize.B1 = false;
          fontsize.B2 = false;
          fontsize.B3 = false;
          fontsize.B5 = false;
          fontsize.B6 = false;
        }

        if (fontsize.open_size5()) {
          fontsize.B5 = true;
          fontsize.B1 = false;
          fontsize.B2 = false;
          fontsize.B3 = false;
          fontsize.B4 = false;
          fontsize.B6 = false;
        }

        if (fontsize.open_size6()) {
          fontsize.B6 = true;
          fontsize.B1 = false;
          fontsize.B2 = false;
          fontsize.B3 = false;
          fontsize.B4 = false;
          fontsize.B5 = false;
        }
      }
      if (moreHint.open() && minigameNo == false) {
        mainStage = 3;
      }

      //if (submit.open()) {
      //  submit.B = true;
      //}

      if (submit.open()) {
        if (arr[0] == theme3) {
          score += 1;
        }
        if (arr[1] == figure4) {
          score += 1;
        }
        if (arr[2] == font2) {
          score += 1;
        }
        if (arr[3] == 35 || arr[3] == 40) {
          score += 1;
        }
        if (picture.inserted == 1) {
          score += 1;
        }
      }
      //console.log(score);

      if (
        submit.open() &&
        arr[0] == theme1 &&
        arr[1] == 0 &&
        arr[2] == font1 &&
        arr[3] == 25 &&
        picture.inserted == 0
      ) {
        mainStage = 4;
      } else if (submit.open() && score < 2) {
        mainStage = 5;
      } else if (submit.open() && score < 4) {
        mainStage = 6;
      } else if (submit.open() && score == 4) {
        mainStage = 7;
      } else if (submit.open() && score == 5) {
        mainStage = 8;
      }

      if (insert.B == true) {
        if (figure.open()) {
          trigger1 = 1;
          warning.timer = timer;
        }
      }

      if (home.B == true) {
        if (fontselect.open()) {
          trigger2 = 1;
          plag.timer = timer;
        }
      }

      if (exit.F == 1) {
        mainStage = 9;
      }

      if (warning.countdown == 0) {
        mainStage = 9;
      }

      if (plag.countdown == 0) {
        mainStage = 10;
      }

      if (restart.open1()) {
        arr[0] = theme1;
        arr[1] = 0;
        arr[2] = font1;
        arr[3] = 25;
        arr[4] = 15;
        selected_size = "28";
        selected_font = "나눔스퀘어";
        hintArr[0].dclosed = 0;
        hintArr[1].dclosed = 0;
        hintArr[2].dclosed = 0;
        hintArr[3].dclosed = 0;
        hintArr[4].dclosed = 0;
        hintcount1.hintCount = 3;
        hintcount2.hintCount = 3;
        exit.F = 0;
        exit.B = 0;
        picture.inserted = 0;
        design.B = 0;
        theme.B1 = 0;
        theme.B2 = 0;
        theme.B3 = 0;
        theme.B4 = 0;
        theme.B5 = 0;
        insert.B = 0;
        warning.countdown = 5;
        warning.saved = 0;
        figure.B1 = 0;
        figure.B2 = 0;
        figure.B3 = 0;
        figure.B4 = 0;
        figure.B = 0;
        plag.countdown = 5;
        plag.minimized = 0;
        minimize.plag = 0;
        minimize.countdown = 2;
        picture.B = 0;
        fontselect.B1 = 0;
        fontselect.B2 = 0;
        fontselect.B3 = 0;
        fontselect.B4 = 0;
        fontselect.B5 = 0;
        fontselect.B = 0;
        fontsize.B = 0;
        fontsize.B1 = 0;
        fontsize.B2 = 0;
        fontsize.B3 = 0;
        fontsize.B4 = 0;
        fontsize.B5 = 0;
        fontsize.B6 = 0;
        home.B = 0;
        trigger1 = 0;
        trigger2 = 0;
        minigameNo = 0;
        mouseCount = 0;
        mouseCount_E = 0;
        plag.x = 0;
        bonoScore = 0;
        bonoIsGone.firstTime = 0;
        saving.countdown = 0;
        saving.click = 0;
        minimize.countdown = 0;
        score = 0;
        minigame.stage = 0;
        minigame.n = 0;
        mainStage = 0;
      }

      break;

    // 교수님 면담 미니게임
    case 3:
      if (restart.open2()) {
        arr[0] = theme1;
        arr[1] = 0;
        arr[2] = font1;
        arr[3] = 25;
        arr[4] = 15;
        selected_size = "28";
        selected_font = "나눔스퀘어";
        hintArr[0].dclosed = 0;
        hintArr[1].dclosed = 0;
        hintArr[2].dclosed = 0;
        hintArr[3].dclosed = 0;
        hintArr[4].dclosed = 0;
        hintcount1.hintCount = 3;
        hintcount2.hintCount = 3;
        exit.F = 0;
        exit.B = 0;
        picture.inserted = 0;
        design.B = 0;
        theme.B1 = 0;
        theme.B2 = 0;
        theme.B3 = 0;
        theme.B4 = 0;
        theme.B5 = 0;
        insert.B = 0;
        warning.countdown = 5;
        warning.saved = 0;
        figure.B1 = 0;
        figure.B2 = 0;
        figure.B3 = 0;
        figure.B4 = 0;
        figure.B = 0;
        plag.countdown = 5;
        plag.minimized = 0;
        minimize.plag = 0;
        minimize.countdown = 2;
        picture.B = 0;
        fontselect.B1 = 0;
        fontselect.B2 = 0;
        fontselect.B3 = 0;
        fontselect.B4 = 0;
        fontselect.B5 = 0;
        fontselect.B = 0;
        fontsize.B = 0;
        fontsize.B1 = 0;
        fontsize.B2 = 0;
        fontsize.B3 = 0;
        fontsize.B4 = 0;
        fontsize.B5 = 0;
        fontsize.B6 = 0;
        home.B = 0;
        trigger1 = 0;
        trigger2 = 0;
        minigameNo = 0;
        mouseCount = 0;
        mouseCount_E = 0;
        plag.x = 0;
        bonoScore = 0;
        bonoIsGone.firstTime = 0;
        saving.countdown = 0;
        saving.click = 0;
        minimize.countdown = 0;
        score = 0;
        minigame.stage = 0;
        minigame.n = 0;
        mainStage = 0;
      }

      break;

    case 4:
      mouseCount_E += 1;
      if (mouseCount_E > 2 && replay.open()) {
        arr[0] = theme1;
        arr[1] = 0;
        arr[2] = font1;
        arr[3] = 25;
        arr[4] = 15;
        selected_size = "28";
        selected_font = "나눔스퀘어";
        hintArr[0].dclosed = 0;
        hintArr[1].dclosed = 0;
        hintArr[2].dclosed = 0;
        hintArr[3].dclosed = 0;
        hintArr[4].dclosed = 0;
        hintcount1.hintCount = 3;
        hintcount2.hintCount = 3;
        exit.F = 0;
        exit.B = 0;
        picture.inserted = 0;
        design.B = 0;
        theme.B1 = 0;
        theme.B2 = 0;
        theme.B3 = 0;
        theme.B4 = 0;
        theme.B5 = 0;
        insert.B = 0;
        warning.countdown = 5;
        warning.saved = 0;
        figure.B1 = 0;
        figure.B2 = 0;
        figure.B3 = 0;
        figure.B4 = 0;
        figure.B = 0;
        plag.countdown = 5;
        plag.minimized = 0;
        minimize.plag = 0;
        minimize.countdown = 2;
        picture.B = 0;
        fontselect.B1 = 0;
        fontselect.B2 = 0;
        fontselect.B3 = 0;
        fontselect.B4 = 0;
        fontselect.B5 = 0;
        fontselect.B = 0;
        fontsize.B = 0;
        fontsize.B1 = 0;
        fontsize.B2 = 0;
        fontsize.B3 = 0;
        fontsize.B4 = 0;
        fontsize.B5 = 0;
        fontsize.B6 = 0;
        home.B = 0;
        trigger1 = 0;
        trigger2 = 0;
        minigameNo = 0;
        mouseCount = 0;
        mouseCount_E = 0;
        plag.x = 0;
        bonoScore = 0;
        bonoIsGone.firstTime = 0;
        saving.countdown = 0;
        saving.click = 0;
        minimize.countdown = 0;
        score = 0;
        minigame.stage = 0;
        minigame.n = 0;
        mainStage = 1;
      }

      if (restart.open2()) {
        arr[0] = theme1;
        arr[1] = 0;
        arr[2] = font1;
        arr[3] = 25;
        arr[4] = 15;
        selected_size = "28";
        selected_font = "나눔스퀘어";
        hintArr[0].dclosed = 0;
        hintArr[1].dclosed = 0;
        hintArr[2].dclosed = 0;
        hintArr[3].dclosed = 0;
        hintArr[4].dclosed = 0;
        hintcount1.hintCount = 3;
        hintcount2.hintCount = 3;
        exit.F = 0;
        exit.B = 0;
        picture.inserted = 0;
        design.B = 0;
        theme.B1 = 0;
        theme.B2 = 0;
        theme.B3 = 0;
        theme.B4 = 0;
        theme.B5 = 0;
        insert.B = 0;
        warning.countdown = 5;
        warning.saved = 0;
        figure.B1 = 0;
        figure.B2 = 0;
        figure.B3 = 0;
        figure.B4 = 0;
        figure.B = 0;
        plag.countdown = 5;
        plag.minimized = 0;
        minimize.plag = 0;
        minimize.countdown = 2;
        picture.B = 0;
        fontselect.B1 = 0;
        fontselect.B2 = 0;
        fontselect.B3 = 0;
        fontselect.B4 = 0;
        fontselect.B5 = 0;
        fontselect.B = 0;
        fontsize.B = 0;
        fontsize.B1 = 0;
        fontsize.B2 = 0;
        fontsize.B3 = 0;
        fontsize.B4 = 0;
        fontsize.B5 = 0;
        fontsize.B6 = 0;
        home.B = 0;
        trigger1 = 0;
        trigger2 = 0;
        minigameNo = 0;
        mouseCount = 0;
        mouseCount_E = 0;
        plag.x = 0;
        bonoScore = 0;
        bonoIsGone.firstTime = 0;
        saving.countdown = 0;
        saving.click = 0;
        minimize.countdown = 0;
        score = 0;
        minigame.stage = 0;
        minigame.n = 0;
        mainStage = 0;
      }

      break;

    case 5:
      mouseCount_E += 1;
      if (mouseCount_E > 2 && replay.open()) {
        arr[0] = theme1;
        arr[1] = 0;
        arr[2] = font1;
        arr[3] = 25;
        arr[4] = 15;
        selected_size = "28";
        selected_font = "나눔스퀘어";
        hintArr[0].dclosed = 0;
        hintArr[1].dclosed = 0;
        hintArr[2].dclosed = 0;
        hintArr[3].dclosed = 0;
        hintArr[4].dclosed = 0;
        hintcount1.hintCount = 3;
        hintcount2.hintCount = 3;
        exit.F = 0;
        exit.B = 0;
        picture.inserted = 0;
        design.B = 0;
        theme.B1 = 0;
        theme.B2 = 0;
        theme.B3 = 0;
        theme.B4 = 0;
        theme.B5 = 0;
        insert.B = 0;
        warning.countdown = 5;
        warning.saved = 0;
        figure.B1 = 0;
        figure.B2 = 0;
        figure.B3 = 0;
        figure.B4 = 0;
        figure.B = 0;
        plag.countdown = 5;
        plag.minimized = 0;
        minimize.plag = 0;
        minimize.countdown = 2;
        picture.B = 0;
        fontselect.B1 = 0;
        fontselect.B2 = 0;
        fontselect.B3 = 0;
        fontselect.B4 = 0;
        fontselect.B5 = 0;
        fontselect.B = 0;
        fontsize.B = 0;
        fontsize.B1 = 0;
        fontsize.B2 = 0;
        fontsize.B3 = 0;
        fontsize.B4 = 0;
        fontsize.B5 = 0;
        fontsize.B6 = 0;
        home.B = 0;
        trigger1 = 0;
        trigger2 = 0;
        minigameNo = 0;
        mouseCount = 0;
        mouseCount_E = 0;
        plag.x = 0;
        bonoScore = 0;
        bonoIsGone.firstTime = 0;
        saving.countdown = 0;
        saving.click = 0;
        minimize.countdown = 0;
        score = 0;
        minigame.stage = 0;
        minigame.n = 0;
        mainStage = 1;
      }

      if (restart.open2()) {
        arr[0] = theme1;
        arr[1] = 0;
        arr[2] = font1;
        arr[3] = 25;
        arr[4] = 15;
        selected_size = "28";
        selected_font = "나눔스퀘어";
        hintArr[0].dclosed = 0;
        hintArr[1].dclosed = 0;
        hintArr[2].dclosed = 0;
        hintArr[3].dclosed = 0;
        hintArr[4].dclosed = 0;
        hintcount1.hintCount = 3;
        hintcount2.hintCount = 3;
        exit.F = 0;
        exit.B = 0;
        picture.inserted = 0;
        design.B = 0;
        theme.B1 = 0;
        theme.B2 = 0;
        theme.B3 = 0;
        theme.B4 = 0;
        theme.B5 = 0;
        insert.B = 0;
        warning.countdown = 5;
        warning.saved = 0;
        figure.B1 = 0;
        figure.B2 = 0;
        figure.B3 = 0;
        figure.B4 = 0;
        figure.B = 0;
        plag.countdown = 5;
        plag.minimized = 0;
        minimize.plag = 0;
        minimize.countdown = 2;
        picture.B = 0;
        fontselect.B1 = 0;
        fontselect.B2 = 0;
        fontselect.B3 = 0;
        fontselect.B4 = 0;
        fontselect.B5 = 0;
        fontselect.B = 0;
        fontsize.B = 0;
        fontsize.B1 = 0;
        fontsize.B2 = 0;
        fontsize.B3 = 0;
        fontsize.B4 = 0;
        fontsize.B5 = 0;
        fontsize.B6 = 0;
        home.B = 0;
        trigger1 = 0;
        trigger2 = 0;
        minigameNo = 0;
        mouseCount = 0;
        mouseCount_E = 0;
        plag.x = 0;
        bonoScore = 0;
        bonoIsGone.firstTime = 0;
        saving.countdown = 0;
        saving.click = 0;
        minimize.countdown = 0;
        score = 0;
        minigame.stage = 0;
        minigame.n = 0;
        mainStage = 0;
      }

      break;

    case 6:
      mouseCount_E += 1;
      if (mouseCount_E > 2 && replay.open()) {
        arr[0] = theme1;
        arr[1] = 0;
        arr[2] = font1;
        arr[3] = 25;
        arr[4] = 15;
        selected_size = "28";
        selected_font = "나눔스퀘어";
        hintArr[0].dclosed = 0;
        hintArr[1].dclosed = 0;
        hintArr[2].dclosed = 0;
        hintArr[3].dclosed = 0;
        hintArr[4].dclosed = 0;
        hintcount1.hintCount = 3;
        hintcount2.hintCount = 3;
        exit.F = 0;
        exit.B = 0;
        picture.inserted = 0;
        design.B = 0;
        theme.B1 = 0;
        theme.B2 = 0;
        theme.B3 = 0;
        theme.B4 = 0;
        theme.B5 = 0;
        insert.B = 0;
        warning.countdown = 5;
        warning.saved = 0;
        figure.B1 = 0;
        figure.B2 = 0;
        figure.B3 = 0;
        figure.B4 = 0;
        figure.B = 0;
        plag.countdown = 5;
        plag.minimized = 0;
        minimize.plag = 0;
        minimize.countdown = 2;
        picture.B = 0;
        fontselect.B1 = 0;
        fontselect.B2 = 0;
        fontselect.B3 = 0;
        fontselect.B4 = 0;
        fontselect.B5 = 0;
        fontselect.B = 0;
        fontsize.B = 0;
        fontsize.B1 = 0;
        fontsize.B2 = 0;
        fontsize.B3 = 0;
        fontsize.B4 = 0;
        fontsize.B5 = 0;
        fontsize.B6 = 0;
        home.B = 0;
        trigger1 = 0;
        trigger2 = 0;
        minigameNo = 0;
        mouseCount = 0;
        mouseCount_E = 0;
        plag.x = 0;
        bonoScore = 0;
        bonoIsGone.firstTime = 0;
        saving.countdown = 0;
        saving.click = 0;
        minimize.countdown = 0;
        score = 0;
        minigame.stage = 0;
        minigame.n = 0;
        mainStage = 1;
      }

      if (restart.open2()) {
        arr[0] = theme1;
        arr[1] = 0;
        arr[2] = font1;
        arr[3] = 25;
        arr[4] = 15;
        selected_size = "28";
        selected_font = "나눔스퀘어";
        hintArr[0].dclosed = 0;
        hintArr[1].dclosed = 0;
        hintArr[2].dclosed = 0;
        hintArr[3].dclosed = 0;
        hintArr[4].dclosed = 0;
        hintcount1.hintCount = 3;
        hintcount2.hintCount = 3;
        exit.F = 0;
        exit.B = 0;
        picture.inserted = 0;
        design.B = 0;
        theme.B1 = 0;
        theme.B2 = 0;
        theme.B3 = 0;
        theme.B4 = 0;
        theme.B5 = 0;
        insert.B = 0;
        warning.countdown = 5;
        warning.saved = 0;
        figure.B1 = 0;
        figure.B2 = 0;
        figure.B3 = 0;
        figure.B4 = 0;
        figure.B = 0;
        plag.countdown = 5;
        plag.minimized = 0;
        minimize.plag = 0;
        minimize.countdown = 2;
        picture.B = 0;
        fontselect.B1 = 0;
        fontselect.B2 = 0;
        fontselect.B3 = 0;
        fontselect.B4 = 0;
        fontselect.B5 = 0;
        fontselect.B = 0;
        fontsize.B = 0;
        fontsize.B1 = 0;
        fontsize.B2 = 0;
        fontsize.B3 = 0;
        fontsize.B4 = 0;
        fontsize.B5 = 0;
        fontsize.B6 = 0;
        home.B = 0;
        trigger1 = 0;
        trigger2 = 0;
        minigameNo = 0;
        mouseCount = 0;
        mouseCount_E = 0;
        plag.x = 0;
        bonoScore = 0;
        bonoIsGone.firstTime = 0;
        saving.countdown = 0;
        saving.click = 0;
        minimize.countdown = 0;
        score = 0;
        minigame.stage = 0;
        minigame.n = 0;
        mainStage = 0;
      }

      break;

    case 7:
      mouseCount_E += 1;
      if (mouseCount_E > 2 && replay.open()) {
        arr[0] = theme1;
        arr[1] = 0;
        arr[2] = font1;
        arr[3] = 25;
        arr[4] = 15;
        selected_size = "28";
        selected_font = "나눔스퀘어";
        hintArr[0].dclosed = 0;
        hintArr[1].dclosed = 0;
        hintArr[2].dclosed = 0;
        hintArr[3].dclosed = 0;
        hintArr[4].dclosed = 0;
        hintcount1.hintCount = 3;
        hintcount2.hintCount = 3;
        exit.F = 0;
        exit.B = 0;
        picture.inserted = 0;
        design.B = 0;
        theme.B1 = 0;
        theme.B2 = 0;
        theme.B3 = 0;
        theme.B4 = 0;
        theme.B5 = 0;
        insert.B = 0;
        warning.countdown = 5;
        warning.saved = 0;
        figure.B1 = 0;
        figure.B2 = 0;
        figure.B3 = 0;
        figure.B4 = 0;
        figure.B = 0;
        plag.countdown = 5;
        plag.minimized = 0;
        minimize.plag = 0;
        minimize.countdown = 2;
        picture.B = 0;
        fontselect.B1 = 0;
        fontselect.B2 = 0;
        fontselect.B3 = 0;
        fontselect.B4 = 0;
        fontselect.B5 = 0;
        fontselect.B = 0;
        fontsize.B = 0;
        fontsize.B1 = 0;
        fontsize.B2 = 0;
        fontsize.B3 = 0;
        fontsize.B4 = 0;
        fontsize.B5 = 0;
        fontsize.B6 = 0;
        home.B = 0;
        trigger1 = 0;
        trigger2 = 0;
        minigameNo = 0;
        mouseCount = 0;
        mouseCount_E = 0;
        plag.x = 0;
        bonoScore = 0;
        bonoIsGone.firstTime = 0;
        saving.countdown = 0;
        saving.click = 0;
        minimize.countdown = 0;
        score = 0;
        minigame.stage = 0;
        minigame.n = 0;
        mainStage = 1;
      }

      if (restart.open2()) {
        arr[0] = theme1;
        arr[1] = 0;
        arr[2] = font1;
        arr[3] = 25;
        arr[4] = 15;
        selected_size = "28";
        selected_font = "나눔스퀘어";
        hintArr[0].dclosed = 0;
        hintArr[1].dclosed = 0;
        hintArr[2].dclosed = 0;
        hintArr[3].dclosed = 0;
        hintArr[4].dclosed = 0;
        hintcount1.hintCount = 3;
        hintcount2.hintCount = 3;
        exit.F = 0;
        exit.B = 0;
        picture.inserted = 0;
        design.B = 0;
        theme.B1 = 0;
        theme.B2 = 0;
        theme.B3 = 0;
        theme.B4 = 0;
        theme.B5 = 0;
        insert.B = 0;
        warning.countdown = 5;
        warning.saved = 0;
        figure.B1 = 0;
        figure.B2 = 0;
        figure.B3 = 0;
        figure.B4 = 0;
        figure.B = 0;
        plag.countdown = 5;
        plag.minimized = 0;
        minimize.plag = 0;
        minimize.countdown = 2;
        picture.B = 0;
        fontselect.B1 = 0;
        fontselect.B2 = 0;
        fontselect.B3 = 0;
        fontselect.B4 = 0;
        fontselect.B5 = 0;
        fontselect.B = 0;
        fontsize.B = 0;
        fontsize.B1 = 0;
        fontsize.B2 = 0;
        fontsize.B3 = 0;
        fontsize.B4 = 0;
        fontsize.B5 = 0;
        fontsize.B6 = 0;
        home.B = 0;
        trigger1 = 0;
        trigger2 = 0;
        minigameNo = 0;
        mouseCount = 0;
        mouseCount_E = 0;
        plag.x = 0;
        bonoScore = 0;
        bonoIsGone.firstTime = 0;
        saving.countdown = 0;
        saving.click = 0;
        minimize.countdown = 0;
        score = 0;
        minigame.stage = 0;
        minigame.n = 0;
        mainStage = 0;
      }

      break;

    case 8:
      mouseCount_E += 1;
      if (mouseCount_E > 2 && replay.open()) {
        arr[0] = theme1;
        arr[1] = 0;
        arr[2] = font1;
        arr[3] = 25;
        arr[4] = 15;
        selected_size = "28";
        selected_font = "나눔스퀘어";
        hintArr[0].dclosed = 0;
        hintArr[1].dclosed = 0;
        hintArr[2].dclosed = 0;
        hintArr[3].dclosed = 0;
        hintArr[4].dclosed = 0;
        hintcount1.hintCount = 3;
        hintcount2.hintCount = 3;
        exit.F = 0;
        exit.B = 0;
        picture.inserted = 0;
        design.B = 0;
        theme.B1 = 0;
        theme.B2 = 0;
        theme.B3 = 0;
        theme.B4 = 0;
        theme.B5 = 0;
        insert.B = 0;
        warning.countdown = 5;
        warning.saved = 0;
        figure.B1 = 0;
        figure.B2 = 0;
        figure.B3 = 0;
        figure.B4 = 0;
        figure.B = 0;
        plag.countdown = 5;
        plag.minimized = 0;
        minimize.plag = 0;
        minimize.countdown = 2;
        picture.B = 0;
        fontselect.B1 = 0;
        fontselect.B2 = 0;
        fontselect.B3 = 0;
        fontselect.B4 = 0;
        fontselect.B5 = 0;
        fontselect.B = 0;
        fontsize.B = 0;
        fontsize.B1 = 0;
        fontsize.B2 = 0;
        fontsize.B3 = 0;
        fontsize.B4 = 0;
        fontsize.B5 = 0;
        fontsize.B6 = 0;
        home.B = 0;
        trigger1 = 0;
        trigger2 = 0;
        minigameNo = 0;
        mouseCount = 0;
        mouseCount_E = 0;
        plag.x = 0;
        bonoScore = 0;
        bonoIsGone.firstTime = 0;
        saving.countdown = 0;
        saving.click = 0;
        minimize.countdown = 0;
        score = 0;
        minigame.stage = 0;
        minigame.n = 0;
        mainStage = 1;
      }

      if (restart.open2()) {
        arr[0] = theme1;
        arr[1] = 0;
        arr[2] = font1;
        arr[3] = 25;
        arr[4] = 15;
        selected_size = "28";
        selected_font = "나눔스퀘어";
        hintArr[0].dclosed = 0;
        hintArr[1].dclosed = 0;
        hintArr[2].dclosed = 0;
        hintArr[3].dclosed = 0;
        hintArr[4].dclosed = 0;
        hintcount1.hintCount = 3;
        hintcount2.hintCount = 3;
        exit.F = 0;
        exit.B = 0;
        picture.inserted = 0;
        design.B = 0;
        theme.B1 = 0;
        theme.B2 = 0;
        theme.B3 = 0;
        theme.B4 = 0;
        theme.B5 = 0;
        insert.B = 0;
        warning.countdown = 5;
        warning.saved = 0;
        figure.B1 = 0;
        figure.B2 = 0;
        figure.B3 = 0;
        figure.B4 = 0;
        figure.B = 0;
        plag.countdown = 5;
        plag.minimized = 0;
        minimize.plag = 0;
        minimize.countdown = 2;
        picture.B = 0;
        fontselect.B1 = 0;
        fontselect.B2 = 0;
        fontselect.B3 = 0;
        fontselect.B4 = 0;
        fontselect.B5 = 0;
        fontselect.B = 0;
        fontsize.B = 0;
        fontsize.B1 = 0;
        fontsize.B2 = 0;
        fontsize.B3 = 0;
        fontsize.B4 = 0;
        fontsize.B5 = 0;
        fontsize.B6 = 0;
        home.B = 0;
        trigger1 = 0;
        trigger2 = 0;
        minigameNo = 0;
        mouseCount = 0;
        mouseCount_E = 0;
        plag.x = 0;
        bonoScore = 0;
        bonoIsGone.firstTime = 0;
        saving.countdown = 0;
        saving.click = 0;
        minimize.countdown = 0;
        score = 0;
        minigame.stage = 0;
        minigame.n = 0;
        mainStage = 0;
      }

      break;

    case 9:
      mouseCount_E += 1;
      if (mouseCount_E > 1 && replay.open()) {
        arr[0] = theme1;
        arr[1] = 0;
        arr[2] = font1;
        arr[3] = 25;
        arr[4] = 15;
        selected_size = "28";
        selected_font = "나눔스퀘어";
        hintArr[0].dclosed = 0;
        hintArr[1].dclosed = 0;
        hintArr[2].dclosed = 0;
        hintArr[3].dclosed = 0;
        hintArr[4].dclosed = 0;
        hintcount1.hintCount = 3;
        hintcount2.hintCount = 3;
        exit.F = 0;
        exit.B = 0;
        picture.inserted = 0;
        design.B = 0;
        theme.B1 = 0;
        theme.B2 = 0;
        theme.B3 = 0;
        theme.B4 = 0;
        theme.B5 = 0;
        insert.B = 0;
        warning.countdown = 5;
        warning.saved = 0;
        figure.B1 = 0;
        figure.B2 = 0;
        figure.B3 = 0;
        figure.B4 = 0;
        figure.B = 0;
        plag.countdown = 5;
        plag.minimized = 0;
        minimize.plag = 0;
        minimize.countdown = 2;
        picture.B = 0;
        fontselect.B1 = 0;
        fontselect.B2 = 0;
        fontselect.B3 = 0;
        fontselect.B4 = 0;
        fontselect.B5 = 0;
        fontselect.B = 0;
        fontsize.B = 0;
        fontsize.B1 = 0;
        fontsize.B2 = 0;
        fontsize.B3 = 0;
        fontsize.B4 = 0;
        fontsize.B5 = 0;
        fontsize.B6 = 0;
        home.B = 0;
        trigger1 = 0;
        trigger2 = 0;
        minigameNo = 0;
        mouseCount = 0;
        mouseCount_E = 0;
        plag.x = 0;
        bonoScore = 0;
        bonoIsGone.firstTime = 0;
        saving.countdown = 0;
        saving.click = 0;
        minimize.countdown = 0;
        score = 0;
        minigame.stage = 0;
        minigame.n = 0;
        mainStage = 1;
      }

      if (restart.open2()) {
        arr[0] = theme1;
        arr[1] = 0;
        arr[2] = font1;
        arr[3] = 25;
        arr[4] = 15;
        selected_size = "28";
        selected_font = "나눔스퀘어";
        hintArr[0].dclosed = 0;
        hintArr[1].dclosed = 0;
        hintArr[2].dclosed = 0;
        hintArr[3].dclosed = 0;
        hintArr[4].dclosed = 0;
        hintcount1.hintCount = 3;
        hintcount2.hintCount = 3;
        exit.F = 0;
        exit.B = 0;
        picture.inserted = 0;
        design.B = 0;
        theme.B1 = 0;
        theme.B2 = 0;
        theme.B3 = 0;
        theme.B4 = 0;
        theme.B5 = 0;
        insert.B = 0;
        warning.countdown = 5;
        warning.saved = 0;
        figure.B1 = 0;
        figure.B2 = 0;
        figure.B3 = 0;
        figure.B4 = 0;
        figure.B = 0;
        plag.countdown = 5;
        plag.minimized = 0;
        minimize.plag = 0;
        minimize.countdown = 2;
        picture.B = 0;
        fontselect.B1 = 0;
        fontselect.B2 = 0;
        fontselect.B3 = 0;
        fontselect.B4 = 0;
        fontselect.B5 = 0;
        fontselect.B = 0;
        fontsize.B = 0;
        fontsize.B1 = 0;
        fontsize.B2 = 0;
        fontsize.B3 = 0;
        fontsize.B4 = 0;
        fontsize.B5 = 0;
        fontsize.B6 = 0;
        home.B = 0;
        trigger1 = 0;
        trigger2 = 0;
        minigameNo = 0;
        mouseCount = 0;
        mouseCount_E = 0;
        plag.x = 0;
        bonoScore = 0;
        bonoIsGone.firstTime = 0;
        saving.countdown = 0;
        saving.click = 0;
        minimize.countdown = 0;
        score = 0;
        minigame.stage = 0;
        minigame.n = 0;
        mainStage = 0;
      }

      break;

    case 10:
      mouseCount_E += 1;
      if (mouseCount_E > 1 && replay.open()) {
        arr[0] = theme1;
        arr[1] = 0;
        arr[2] = font1;
        arr[3] = 25;
        arr[4] = 15;
        selected_size = "28";
        selected_font = "나눔스퀘어";
        hintArr[0].dclosed = 0;
        hintArr[1].dclosed = 0;
        hintArr[2].dclosed = 0;
        hintArr[3].dclosed = 0;
        hintArr[4].dclosed = 0;
        hintcount1.hintCount = 3;
        hintcount2.hintCount = 3;
        exit.F = 0;
        exit.B = 0;
        picture.inserted = 0;
        design.B = 0;
        theme.B1 = 0;
        theme.B2 = 0;
        theme.B3 = 0;
        theme.B4 = 0;
        theme.B5 = 0;
        insert.B = 0;
        warning.countdown = 5;
        warning.saved = 0;
        figure.B1 = 0;
        figure.B2 = 0;
        figure.B3 = 0;
        figure.B4 = 0;
        figure.B = 0;
        plag.countdown = 5;
        plag.minimized = 0;
        minimize.plag = 0;
        minimize.countdown = 2;
        picture.B = 0;
        fontselect.B1 = 0;
        fontselect.B2 = 0;
        fontselect.B3 = 0;
        fontselect.B4 = 0;
        fontselect.B5 = 0;
        fontselect.B = 0;
        fontsize.B = 0;
        fontsize.B1 = 0;
        fontsize.B2 = 0;
        fontsize.B3 = 0;
        fontsize.B4 = 0;
        fontsize.B5 = 0;
        fontsize.B6 = 0;
        home.B = 0;
        trigger1 = 0;
        trigger2 = 0;
        minigameNo = 0;
        mouseCount = 0;
        mouseCount_E = 0;
        plag.x = 0;
        bonoScore = 0;
        bonoIsGone.firstTime = 0;
        saving.countdown = 0;
        saving.click = 0;
        minimize.countdown = 0;
        score = 0;
        minigame.stage = 0;
        minigame.n = 0;
        mainStage = 1;
      }

      if (restart.open2()) {
        arr[0] = theme1;
        arr[1] = 0;
        arr[2] = font1;
        arr[3] = 25;
        arr[4] = 15;
        selected_size = "28";
        selected_font = "나눔스퀘어";
        hintArr[0].dclosed = 0;
        hintArr[1].dclosed = 0;
        hintArr[2].dclosed = 0;
        hintArr[3].dclosed = 0;
        hintArr[4].dclosed = 0;
        hintcount1.hintCount = 3;
        hintcount2.hintCount = 3;
        exit.F = 0;
        exit.B = 0;
        picture.inserted = 0;
        design.B = 0;
        theme.B1 = 0;
        theme.B2 = 0;
        theme.B3 = 0;
        theme.B4 = 0;
        theme.B5 = 0;
        insert.B = 0;
        warning.countdown = 5;
        warning.saved = 0;
        figure.B1 = 0;
        figure.B2 = 0;
        figure.B3 = 0;
        figure.B4 = 0;
        figure.B = 0;
        plag.countdown = 5;
        plag.minimized = 0;
        minimize.plag = 0;
        minimize.countdown = 2;
        picture.B = 0;
        fontselect.B1 = 0;
        fontselect.B2 = 0;
        fontselect.B3 = 0;
        fontselect.B4 = 0;
        fontselect.B5 = 0;
        fontselect.B = 0;
        fontsize.B = 0;
        fontsize.B1 = 0;
        fontsize.B2 = 0;
        fontsize.B3 = 0;
        fontsize.B4 = 0;
        fontsize.B5 = 0;
        fontsize.B6 = 0;
        home.B = 0;
        trigger1 = 0;
        trigger2 = 0;
        minigameNo = 0;
        mouseCount = 0;
        mouseCount_E = 0;
        plag.x = 0;
        bonoScore = 0;
        bonoIsGone.firstTime = 0;
        saving.countdown = 0;
        saving.click = 0;
        minimize.countdown = 0;
        score = 0;
        minigame.stage = 0;
        minigame.n = 0;
        mainStage = 0;
      }

      break;

    case 11:
      if (bonobono.open()) {
        bonobono.B = !bonobono.B;
      }
      if (
        bonobono.bono > bonobono.C - (width * 1) / 24 &&
        bonobono.bono < bonobono.C &&
        bonobono.B == true
      ) {
        bonoScore += 1;
      }
      if (bonoScore > 3) {
        bonoScore = 3;
      }
      //console.log(bonoScore);
      if (bonobono.B == false) {
        bonobono.clam();
      }

      if (mouseX > 10 && mouseX < 127 && mouseY > 559 && mouseY < 590) {
        mainStage = 2;
      }

      if (bonobono.popupOpen() && bonoScore == 3) {
        mainStage = 2;
        bonoIsGone.firstTime = 2;
        picture.inserted = 1;
      }

      if (restart.open2()) {
        arr[0] = theme1;
        arr[1] = 0;
        arr[2] = font1;
        arr[3] = 25;
        arr[4] = 15;
        selected_size = "28";
        selected_font = "나눔스퀘어";
        hintArr[0].dclosed = 0;
        hintArr[1].dclosed = 0;
        hintArr[2].dclosed = 0;
        hintArr[3].dclosed = 0;
        hintArr[4].dclosed = 0;
        hintcount1.hintCount = 3;
        hintcount2.hintCount = 3;
        exit.F = 0;
        exit.B = 0;
        picture.inserted = 0;
        design.B = 0;
        theme.B1 = 0;
        theme.B2 = 0;
        theme.B3 = 0;
        theme.B4 = 0;
        theme.B5 = 0;
        insert.B = 0;
        warning.countdown = 5;
        warning.saved = 0;
        figure.B1 = 0;
        figure.B2 = 0;
        figure.B3 = 0;
        figure.B4 = 0;
        figure.B = 0;
        plag.countdown = 5;
        plag.minimized = 0;
        minimize.plag = 0;
        minimize.countdown = 2;
        picture.B = 0;
        fontselect.B1 = 0;
        fontselect.B2 = 0;
        fontselect.B3 = 0;
        fontselect.B4 = 0;
        fontselect.B5 = 0;
        fontselect.B = 0;
        fontsize.B = 0;
        fontsize.B1 = 0;
        fontsize.B2 = 0;
        fontsize.B3 = 0;
        fontsize.B4 = 0;
        fontsize.B5 = 0;
        fontsize.B6 = 0;
        home.B = 0;
        trigger1 = 0;
        trigger2 = 0;
        minigameNo = 0;
        mouseCount = 0;
        mouseCount_E = 0;
        plag.x = 0;
        bonoScore = 0;
        bonoIsGone.firstTime = 0;
        saving.countdown = 0;
        saving.click = 0;
        minimize.countdown = 0;
        score = 0;
        minigame.stage = 0;
        minigame.n = 0;
        mainStage = 0;
      }

      break;

    case 12:
      mainStage = 1;
      break;

    default:
  }
}

function bgm_loop() {
  let bgm;
  if (mainStage == 2) {
    bgm = bgms[0];
  } else if (mainStage == 1) {
    bgm = bgms[1];
  } else if (mainStage == 0) {
    bgm = bgms[1];
  } else if (mainStage == 3) {
    bgm = bgms[2];
  } else if (mainStage == 11) {
    bgm = bgms[3];
  } else if (mainStage == 4) {
    bgm = bgms[1];
  } else if (mainStage == 5) {
    bgm = bgms[1];
  } else if (mainStage == 6) {
    bgm = bgms[1];
  } else if (mainStage == 7) {
    bgm = bgms[1];
  } else if (mainStage == 8) {
    bgm = bgms[1];
  } else if (mainStage == 9) {
    bgm = bgms[1];
  } else if (mainStage == 10) {
    bgm = bgms[1];
  } else if (mainStage == 12) {
    bgm = bgms[1];
  }
  if (bgm) {
    if (bgm != current_bgm) {
      current_bgm.stop();
      current_bgm = bgm;
      current_bgm.loop();
    }
  }
}

function timePlus() {
  timer += 1;
}
function timePlus2() {
  timer2 += 0.05;
}
