var airConditioner = require('../air_conditioner');

describe('airConditioner', function () {
  describe('properties', function () {
    describe('currentTemperature', function () {
      it('is initially null', function () {
        expect(airConditioner.currentTemperature).toBe(null);
      });
    });

    describe('on', function () {
      it('is initially false', function () {
        expect(airConditioner.on).toBe(false);
      });
    });
  });

  describe('methods', function () {
    describe('turnOn', function () {
      it('sets the on state to true', function () {
        airConditioner.turnOn();
        expect(airConditioner.on).toBe(true);
      });
    });

    describe('turnOff', function () {
      it('sets the on state to false', function () {
        airConditioner.turnOff();
        expect(airConditioner.on).toBe(false);
      });
    });

    describe('setTemperature', function () {
      it('sets the temperature to the provided temperature', function () {
        airConditioner.setTemperature(76);
        expect(airConditioner.currentTemperature).toEqual(76);
      });

      it('does not allow the end user to turn the temperate below 60', function () {
        airConditioner.setTemperature(60);
        airConditioner.setTemperature(59);
        expect(airConditioner.currentTemperature).toEqual(60);
      });

      it('does not allow the end user to turn the temperate above 82', function () {
        airConditioner.setTemperature(82);
        airConditioner.setTemperature(83);
        expect(airConditioner.currentTemperature).toEqual(82);
      });
    });
  });
});