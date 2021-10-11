class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const car1 = new CarCl("Ford", 120);

console.log(car1.speedUS);
car1.speedUS = 60;
console.log(car1);

car1.accelerate();
car1.accelerate();
car1.brake();
car1.brake();
car1.brake();
