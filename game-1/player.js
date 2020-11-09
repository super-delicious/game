class Player {
  constructor() {
    this.r = 70;
    this.x = w / 2;
    this.y = h - this.r;
    this.direction = 'still';
  }

  display() {
    rect(this.x, this.y, this.r, this.r);
  }
  move() {

  }

}
