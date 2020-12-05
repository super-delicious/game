class Coin {
  constructor() {
    this.r = 73;
    this.x = random(w);
    this.y = 0 - this.r;
    this.speed = 5;
  }



  display() {
    image(coinImg, this.x, this.y, this.r, this.r);
    //rect(this.x, this.y, this.r, this.r);
  }

  move() {
    this.y++;
  }

}
