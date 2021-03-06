const assert = require('assert');
const Flight = require('../flightEntity');

describe('Flight', function(){

let flight1

beforeEach(function() {

flightDetails = {"origin": "LAX",
                "destination": "LON",
                "departureTime": "2018-03-16T12:50",
                "arrivalTime": "2018-03-16T17:10"}
flight1 = new Flight(flightDetails);

});

  it('should have an origin', function(){
    const actual = flight1.origin;
    assert.strictEqual(actual, 'LAX');
  });

  it('should have a destination', function(){
    const actual = flight1.destination;
    assert.strictEqual(actual, 'LON');
  });

  it('should have a departure time', function(){
    const actual = flight1.departureTime;
    assert.strictEqual(actual, "2018-03-16T12:50");
  });

  it('should have an arrival time', function(){
    const actual = flight1.arrivalTime;
    assert.strictEqual(actual, "2018-03-16T17:10");
  });
});
