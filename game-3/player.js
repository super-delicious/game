class Player {
  constructor() {
    this.r = 120;
    this.x = w / 2;
    this.y = h - this.r;
    this.speed = 2;
    this.direction = 'still';
  }

  display() {
    image(playerImg, this.x, this.y, this.r, this.r);
    //rect(this.x, this.y, this.r, this.r);
  }
  move(){

		switch(this.direction){
			case 'still':
			//dont move anything
			break;
			case 'up':
			if (this.y > 0){
			//decrease y pos
			this.y -= this.speed;
		}
			break;
			case 'down':
			if (this.y < h - this.r){
			//increase y pos
			this.y += this.speed;
		}
			break;
			case 'right':
			if (this.x < w - this.r){
			//increase x pos
			this.x += this.speed;
		}
			break;
			case 'left':
			if (this.x > 0){
			//decrease x pos
			this.x -= this.speed;
		}
			break;
			default:
			break;

		}

	}

}
