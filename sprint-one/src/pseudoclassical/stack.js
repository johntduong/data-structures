var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.number = 0;
  this.storage = {};
};


Stack.prototype.push = function(value) {
  this.storage[this.number] = value;
  this.number++;
};

Stack.prototype.pop = function() {
  this.number--;
  if (this.number < 0) {
    this.number = 0;
  }
  return this.storage[this.number];
};

Stack.prototype.size = function() {
  return this.number;
};