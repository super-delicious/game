class Mask {
  constructor() {
    this.r = 30;
    this.x = random(w);
    this.y = 0 - this.r;
  }



    display() {
      image(maskImg, this.x, this.y, this.r, this.r);
      image(maskImg, this.x, this.y, this.r, this.r);
      //rect(this.x, this.y, this.r, this.r);
    }

    move() {
      this.y++;
    }

  }
