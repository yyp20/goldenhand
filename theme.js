class Theme {
  constructor() {
    this.B1 = false;
    this.B2 = false;
    this.B3 = false;
    this.B4 = false;
    this.B5 = false;
  }

  display() {
    image(
      theme1,
      (width * 3) / 24,
      (height * 11) / 48,
      (width * 2) / 24,
      (height * 3) / 48
    );
    image(
      theme2,
      (width * 11) / 48,
      (height * 11) / 48,
      (width * 2) / 24,
      (height * 3) / 48
    );
    image(
      theme3,
      (width * 8) / 24,
      (height * 11) / 48,
      (width * 2) / 24,
      (height * 3) / 48
    );
    image(
      theme4,
      (width * 21) / 48,
      (height * 11) / 48,
      (width * 2) / 24,
      (height * 3) / 48
    );
    image(
      theme5,
      (width * 13) / 24,
      (height * 11) / 48,
      (width * 2) / 24,
      (height * 3) / 48
    );
  }

  open_theme1() {
    if (
      mouseX > (width * 3) / 24 &&
      mouseX < (width * 3) / 24 + (width * 2) / 24 &&
      mouseY > (height * 11) / 48 &&
      mouseY < (height * 11) / 48 + (height * 3) / 48
    ) {
      return true;
    } else {
      return false;
    }
  }

  open_theme2() {
    if (
      mouseX > (width * 11) / 48 &&
      mouseX < (width * 11) / 48 + (width * 2) / 24 &&
      mouseY > (height * 11) / 48 &&
      mouseY < (height * 11) / 48 + (height * 3) / 48
    ) {
      return true;
    } else {
      return false;
    }
  }

  open_theme3() {
    if (
      mouseX > (width * 8) / 24 &&
      mouseX < (width * 8) / 24 + (width * 2) / 24 &&
      mouseY > (height * 11) / 48 &&
      mouseY < (height * 11) / 48 + (height * 3) / 48
    ) {
      return true;
    } else {
      return false;
    }
  }

  open_theme4() {
    if (
      mouseX > (width * 21) / 48 &&
      mouseX < (width * 21) / 48 + (width * 2) / 24 &&
      mouseY > (height * 11) / 48 &&
      mouseY < (height * 11) / 48 + (height * 3) / 48
    ) {
      return true;
    } else {
      return false;
    }
  }

  open_theme5() {
    if (
      mouseX > (width * 13) / 24 &&
      mouseX < (width * 13) / 24 + (width * 2) / 24 &&
      mouseY > (height * 11) / 48 &&
      mouseY < (height * 11) / 48 + (height * 3) / 48
    ) {
      return true;
    } else {
      return false;
    }
  }

  show_theme1() {
    if (this.B1 == 1) {
      image(
        theme1,
        (width * 2) / 24,
        (height * 8) / 24,
        (width * 17) / 24,
        (height * 13) / 24
      );
    }
  }

  show_theme2() {
    if (this.B2 == 1) {
      image(
        theme2,
        (width * 2) / 24,
        (height * 8) / 24,
        (width * 17) / 24,
        (height * 13) / 24
      );
    }
  }

  show_theme3() {
    if (this.B3 == 1) {
      image(
        theme3,
        (width * 2) / 24,
        (height * 8) / 24,
        (width * 17) / 24,
        (height * 13) / 24
      );
    }
  }

  show_theme4() {
    if (this.B4 == 1) {
      image(
        theme4,
        (width * 2) / 24,
        (height * 8) / 24,
        (width * 17) / 24,
        (height * 13) / 24
      );
    }
  }

  show_theme5() {
    if (this.B5 == 1) {
      image(
        theme5,
        (width * 2) / 24,
        (height * 8) / 24,
        (width * 17) / 24,
        (height * 13) / 24
      );
    }
  }
}
