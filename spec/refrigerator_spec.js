var refrigerator = require('../refrigerator');

describe('refrigerator', function () {
  describe('properties', function () {
    describe('isRunning', function() {
      it('is a Boolean value', function() {
        expect(refrigerator.isRunning).toEqual(jasmine.any(Boolean));
      });
    });
  });

  describe('methods', function () {
    describe('#startRunning', function() {
      it('sets the isRunning property to true', function() {
        refrigerator.startRunning();

        expect(refrigerator.isRunning).toBe(true);
      });
    });

    describe('#stopRunning', function() {
      it('sets the isRunning property to false', function() {
        refrigerator.stopRunning();

        expect(refrigerator.isRunning).toBe(false);
      });
    });

    describe('#wittyFridge', function() {
      it('returns a whitty statement when it is running', function() {
        refrigerator.startRunning();
        expect(refrigerator.wittyFridge()).toEqual('Your refrigerator is running, you better go catch it!')
      });

      it('returns an empty string when it is not running', function() {
        refrigerator.stopRunning();
        expect(refrigerator.wittyFridge()).toEqual('');
      });
    });
  });
});