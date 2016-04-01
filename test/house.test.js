var assert = require('assert');
var chai = require('chai');
var should = chai.should();
var House = require('../house');
var house = new House();

describe('house', function () {
  describe('properties', function () {
    describe('address', function () {
      it('returns an object with the provided defaults', function () {
        house.address.should.be.a('object');
        assert.equal(house.address.street, '1234 Made Up Lane');
        assert.equal(house.address.city, 'Boulder');
        assert.equal(house.address.state, 'CO');
        assert.equal(house.address.zip, 80302);
      });
    });

    describe('color', function () {
      it('returns the color of the house', function () {
        assert.equal(house.color, 'yellow');
      });
    });
  });

  describe('methods', function () {
    describe('#paint', function () {
      it('changes the color of the house to the provided argument', function () {
        house.paint('green');

        assert.equal(house.color, 'green');
      });

      it('does not allow for red houses', function () {
        house.paint('green');
        house.paint('red');

        assert.equal(house.color, 'green');
      });
    });
  });
});
