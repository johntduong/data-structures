var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  set._size = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = 1;
  this._size++;
};

setPrototype.contains = function(item) {
  if (this._storage[item]) {
    return true;
  } 
  return false;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
  this._size--;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
