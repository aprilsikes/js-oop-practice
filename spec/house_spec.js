var house = require('../house');

describe('house', function () {
  describe('properties', function () {
    describe('address', function () {
      it('returns an object with the provided defaults', function () {
        expect(house.address).toEqual(jasmine.any(Object));
        expect(house.address.street).toEqual('1234 Made Up Lane');
        expect(house.address.city).toEqual('Boulder');
        expect(house.address.state).toEqual('CO');
        expect(house.address.zip).toEqual(80302);
      });
    });

    describe('color', function () {
      it('returns the color of the house', function () {
        expect(house.color).toEqual('yellow');
      });
    });
  });

  describe('methods', function () {
    describe('#paint', function () {
      it('changes the color of the house to the provided argument', function () {
        house.paint('green');

        expect(house.color).toEqual('green');
      });

      it('does not allow for red houses', function () {
        house.paint('green');
        house.paint('red');

        expect(house.color).toEqual('green');
      });
    });
  });
});