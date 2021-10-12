class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(this.speed);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
    return this;
  }
}

class RVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  charge(chargeTo) {
    this.#charge = chargeTo;
    console.log(`Charge to: ${this.#charge}%`);
    return this;
  }

  accelerate() {
    this.speed += 10;
    this.#charge--;
    console.log(this.speed, this.#charge);
    return this;
  }
}

const car = new RVCl("Rivian", 120, 23);
car
  .accelerate()
  .accelerate()
  .charge(50)
  .brake()
  .accelerate()
  .brake()
  .accelerate();
console.log(car);
// console.log(car.#charge);   // check if private
