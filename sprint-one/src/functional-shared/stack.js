var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not to reference your old code in writing the new style.
  var someInstance = {};
  someInstance.number = 0;
  someInstance.storage = {};
  extend(someInstance, stackMethods);

  return someInstance;
};

var extend = function(target, source) {
  for (var key in source) {
    target[key] = source[key];
  }
};

var stackMethods = {};


stackMethods.push = function(value) {
  this.storage[this.number] = value;
  this.number++;

};

stackMethods.pop = function() {
  this.number--;
  if (this.number < 0) {
    this.number = 0;
  }
  return this.storage[this.number];
};

stackMethods.size = function() {
  return this.number;
};