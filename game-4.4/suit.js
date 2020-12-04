class Suit {
  constructor() {
    this.r = 100;
    this.x = random(w);
    this.y = 0 - this.r;
  }



    display() {
      image(suitImg, this.x, this.y, this.r, this.r);
      image(suitImg, this.x, this.y, this.r, this.r);
      //rect(this.x, this.y, this.r, this.r);
    }

    move() {
      this.y++;
    }

  }
