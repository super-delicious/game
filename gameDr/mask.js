class Mask {
  constructor() {
    this.r = 40;
    this.x = random(w);
    this.y = 0 - this.r;
    this.speed = 8;
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
