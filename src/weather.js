function Weather(){};

Weather.prototype._isStormy = function () {
  number = Math.random()
  if(number > 0.7) {
    return true;
  } else{
    return false;
  }

};
