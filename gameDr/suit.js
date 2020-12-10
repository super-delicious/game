class Suit {
  constructor() {
    this.r = 110;
    this.x = random(w);
    this.y = 0 - this.r;
    this.speed = 7;
  }



    display() {
      image(suitImg, this.x, this.y, this.r, this.r);

      //rect(this.x, this.y, this.r, this.r);
    }

    move() {
          this.y += this.speed;
    }

  }
