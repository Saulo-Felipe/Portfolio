export class SpaceShip {
  currentVelocity: number;
  element: Phaser.Physics.Matter.Image;

  constructor(element: Phaser.Physics.Matter.Image) {
    this.element = element;
    this.currentVelocity = 0;
  }

  incrementVelocityX() { // update method
    this.element.x += this.currentVelocity;
    if (this.currentVelocity < 5) {
      this.currentVelocity += 0.5;
    }
  }

  decrementVelocity() { // update method
    this.element.x -= this.currentVelocity;

    if (this.currentVelocity > 0) {
      this.currentVelocity -= 0.5;
    }
  }
}
