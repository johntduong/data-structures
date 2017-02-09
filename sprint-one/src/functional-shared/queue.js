var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.head = 0;
  someInstance.tail = 0;
  extend(someInstance, queueMethods);

  return someInstance;
};

var extend = function(target, source) {
  for (var key in source) {
    target[key] = source[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail++;
};

queueMethods.dequeue = function() {
  var val = this.storage[this.head];
  delete this.storage[this.head];
  this.head++;
  return val;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};