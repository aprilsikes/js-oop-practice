var assert = require('assert');
var chai = require('chai');
var should = chai.should();
var refrigerator = require('../refrigerator');

describe('refrigerator', function () {
  describe('properties', function () {
    describe('isRunning', function() {
      xit('is a Boolean value', function() {
        refrigerator.isRunning.should.be.a('boolean');
      });
    });
  });

  describe('methods', function () {
    describe('#startRunning', function() {
      xit('sets the isRunning property to true', function() {
        refrigerator.startRunning();

        assert.equal(refrigerator.isRunning, true);
      });
    });

    describe('#stopRunning', function() {
      xit('sets the isRunning property to false', function() {
        refrigerator.stopRunning();

        assert.equal(refrigerator.isRunning, false);
      });
    });

    describe('#wittyFridge', function() {
      xit('returns a whitty statement when it is running', function() {
        refrigerator.startRunning();
        assert.equal(refrigerator.wittyFridge(),'Your refrigerator is running, you better go catch it!')
      });

      xit('returns an empty string when it is not running', function() {
        refrigerator.stopRunning();
        assert.equal(refrigerator.wittyFridge(), '');
      });
    });
  });
});
