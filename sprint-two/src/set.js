var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  set.size = 0
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = 1;
  this.size+=1;
};

setPrototype.contains = function(item) {
  return !! this._storage[item];
};

setPrototype.remove = function(item) {
  delete this._storage[item];
  this.size-=1;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
