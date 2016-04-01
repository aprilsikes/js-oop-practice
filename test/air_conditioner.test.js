var assert = require('assert');
var airConditioner = require('../air_conditioner');

describe('airConditioner', function () {
  describe('properties', function () {
    describe('currentTemperature', function () {
      xit('is initially null', function () {
        assert.equal(airConditioner.currentTemperature, null);
      });
    });

    describe('on', function () {
      xit('is initially false', function () {
        assert.equal(airConditioner.on, false);
      });
    });
  });

  describe('methods', function () {
    describe('turnOn', function () {
      xit('sets the on state to true', function () {
        airConditioner.turnOn();
        assert.equal(airConditioner.on, true);
      });
    });

    describe('turnOff', function () {
      xit('sets the on state to false', function () {
        airConditioner.turnOff();
        assert.equal(airConditioner.on, false);
      });
    });

    describe('setTemperature', function () {
      xit('sets the temperature to the provided temperature', function () {
        airConditioner.setTemperature(76);
        assert.equal(airConditioner.currentTemperature, 76);
      });

      xit('does not allow the end user to turn the temperate below 60', function () {
        airConditioner.setTemperature(60);
        airConditioner.setTemperature(59);
        assert.equal(airConditioner.currentTemperature, 60);
      });

      xit('does not allow the end user to turn the temperate above 82', function () {
        airConditioner.setTemperature(82);
        airConditioner.setTemperature(83);
        assert.equal(airConditioner.currentTemperature, 82);
      });
    });
  });
});
