class Player {
  constructor() {
    this.r = 60;
    this.x = w / 2;
    this.y = h - this.r;
    this.direction = 'still';
    this.speed = 2;
  }

  display() {
    image(playerImg, this.x, this.y, this.r, this.r);
    //rect(this.x, this.y, this.r, this.r);
  }

  move() {

    switch (this.direction) {
      case 'still':
        //don't move anything
        break;
      case 'up':
        //decrease y position
        if (this.y > 0){
        this.y -= this.speed;
      }
        break;
      case 'down':
        //increasee y position
        if (this.y < h - this.r){
        this.y += this.speed;
      }
        break;
      case 'right':
        //increasing x position
        if (this.x < w - this.r){
        this.x += this.speed;
      }
        break;
      case 'left':
        //decreasing x position
        if (this.x > 0){
        this.x -= this.speed;
      }
        break;
        default:
        break;
    }

  }

}
