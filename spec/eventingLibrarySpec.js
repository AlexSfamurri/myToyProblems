/* global toyproblems, describe, it, expect, should */

describe('mixEvents()', function () {
  'use strict';

  it('exists', function () {
    expect(mixEvents).to.be.a('function');

  });

  it('should call the callback we pass into `on`', function () {
    var car = { color: "red", speed: 0 };
    mixEvents(car);
    car.on('green-light', function () {
      car.speed = 100; // FLOOR IT!
    });
    car.trigger('green-light');
    car.speed.should.eql(100); // Did our callback actually get called?
  });

  it('should be able to have multiple callbacks', function () {
    var car = mixEvents({
      color: "red",
      "insurance-premium": "costly",
      speed: 0,
      radio: "off"
    });
    // Both of these should get called when we trigger 'green-light'.
    car.on('green-light', function () {
      car.speed = 100;
    });
    car.on('green-light', function () {
      car.radio = "blaring";
    });
    car.speed.should.equal(0);
    car.radio.should.equal("off");
    car.trigger('green-light');
    car.speed.should.equal(100);
    car.radio.should.equal("blaring");
  });

  it('should ignore events that don\'t have listeners without erroring', function(){
    (function () {
      mixEvents({ "abc": 1234 }).trigger('reticulate-splines');
    }).should.not.throw();
  });
  
  it('should pass any additional arguments in `trigger` to the listeners', function(){
    var dinner = mixEvents({});
    var result;
    dinner.on('order', function (dish, side) {
      result = dish + " with a side of " + side;
    });
    dinner.trigger('order', "spam", "spinach");
    result.should.equal("spam with a side of spinach");
  });

  // Add more assertions here
});
