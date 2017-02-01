
describe('Plane',function(){
  var plane;
  var airport
  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['okToLand']);
  });

  it('can land at an airport', function(){
    plane.land(airport)
    expect(airport.okToLand).toHaveBeenCalledWith(plane)
  });
});

describe('Plane',function(){
  var plane;
  var airport
  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['okToTakeOff']);
  });

  it('can take off from an airport', function(){
    plane.takeoff(airport)
    expect(airport.okToTakeOff).toHaveBeenCalledWith(plane)
  });
});
