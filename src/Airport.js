function Airport(){
  this._hangar = []
};

Airport.prototype.planes = function () {
  return this._hangar
};

Airport.prototype.okToLand = function (plane) {
  plane._landed = true
  this._hangar.push(plane);
};

Airport.prototype.okToTakeOff = function (plane) {
  if(weather._isStormy == true)
    {throw new Error ("Plane can't take off as the weather is stormy");
  }
  else {
  this._hangar.pop(plane)
  plane._landed = false;
  }
};
