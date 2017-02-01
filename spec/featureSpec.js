// As an air traffic controller
// To get passengers to a destination
// I want to instruct a plane to land at
// an airport and confirm that it has landed


describe('Feature Test:', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  it('planes can be instructed to land an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
});

// As an air traffic controller
// To get passengers to a destination
// I want to instruct a plane to take off from
//   an airport and confirm that it is no longer in the airport


describe('Feature Test:', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  it('planes can be instructed to take offf from airport', function(){
    plane.takeoff(airport);
    expect(airport.planes()).not.toContain(plane);
  });
});
//
// As an air traffic controller
// To ensure safety
// I want to prevent takeoff when weather is stormy

describe('Feature Test:', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
    weather = new Weather();
  });

  it('planes should not be allowed to take off when the weather is stormy', function(){
    plane.land(airport);
    plane.takeoff(airport);
    expect(airport.planes()).toContain(plane);
  });
});
