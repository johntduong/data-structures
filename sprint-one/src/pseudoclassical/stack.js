
var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
	this.storage = {}
};

Stack.prototype.push(value) {
  this.storage[this.size()] = value;
};

Stack.prototype.pop() {
	var val = this.peek();
  delete this.storage[this.size()-1];
  return val;
};

Stack.prototype.peek() {
	return this.storage[this.size()-1];
};

Stack.prototype.size() {
  return Object.keys(this.storage).length;
};
