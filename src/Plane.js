
function Plane(){
  this._landed = false
};

Plane.prototype.land = function(airport){
  airport.okToLand(this);
};

Plane.prototype.takeoff = function(airport){
  airport.okToTakeOff(this);
};
