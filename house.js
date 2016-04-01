var House = function () {
  this.address = {
    street: '1234 Made Up Lane',
    city : 'Boulder',
    state : 'CO',
    zip : 80302
  }
  this.color = 'yellow';

  House.prototype.paint = function (color) {
    this.color = color;
    if (color === 'red') {
      this.color = 'green';
    }
  }
};

// DO NOT MODIFY BELOW THIS LINE
module.exports = House;
