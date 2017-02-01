

describe('Airport',function(){
  var airport;
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj('plane',['land', 'takeoff']);
    weather = new Weather();
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([])
  });

  describe('when landing planes', function(){
    it ('can accepts and stores plane in the hangar', function(){
      airport.okToLand(plane);
      expect(plane._landed).toEqual(true);
      expect(airport._hangar).toContain(plane);
    });

  });

  describe('when sending planes', function(){
    it ('can release a plane from the hangar', function(){
      airport.okToTakeOff(plane);
      expect(plane._landed).toEqual(false);
      expect(airport._hangar).not.toContain(plane);
    });

    it ('prevent a release  of a plane from the hangar when stormy', function(){
      spyOn(weather,'_isStormy').and.returnValue(true);

      expect(function(){airport.okToTakeOff(plane); }).toThrowError("Plane can't take off as the weather is stormy");
    });

  });

});
