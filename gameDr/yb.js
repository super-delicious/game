class Yb {
  constructor() {
    this.r = 73;
    this.x = random(w);
    this.y = 0 - this.r;
  }



    display() {
      image(ybImg, this.x, this.y, this.r, this.r);
      image(ybImg, this.x, this.y, this.r, this.r);
      //rect(this.x, this.y, this.r, this.r);
    }

    move() {
      this.y++;
    }

  }
