class Enemy {
  constructor() {
    this.r = 60;
    this.x = random(w);
    this.y = 0 - this.r;
    this.speed = 7;
  }
  display() {
    //ellipse(this.x, this.y, this.r, this.r)
    image(enemyImg, this.x, this.y, this.r, this.r)
  }
  move() {
    this.y += this.speed;
  }
}
