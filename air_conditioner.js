function AirConditioner() {
  this.currentTemperature = null;
  this.on = false;
}

AirConditioner.prototype.turnOn = function () {
  this.on = true;
}

AirConditioner.prototype.turnOff = function () {
  this.on = false;
}

AirConditioner.prototype.setTemperature = function (temp) {
  this.currentTemperature = temp;
  if (temp < 60) {
    this.currentTemperature = 60;
  }
  if (temp > 82) {
    this.currentTemperature = 82;
  }
}



module.exports = AirConditioner;

// function Car(make, model) {
// // what can we use to create variables for the instance?
//   this.make = make;
//   this.model = model;
//   this.gas = 0;
//   this.isOn = false;
// }
//
// Car.prototype.start = function () {
//   this.isOn = true;
// }
//
// var prius = new Car ('toyota', 'prius');
//
// console.log(prius);
//
// prius.start();
//
// console.log(prius);
//
// Car.prototype.refuel = function () {
//   this.gas = 100;
// }
//
// prius.refuel();
//
// console.log(prius);
