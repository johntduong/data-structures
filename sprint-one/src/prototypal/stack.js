var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
	var someInstance = Object.create(stackMethods);
	someInstance.storage = {};
	someInstance.size = 0;
	
	return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
	this.storage[this.size] = value;
	this.size++;
};

stackMethods.pop = function() {
	this.size--;
	if (this.size < 0) {
		this.size = 0;
	}
	return this.storage[this.size];
};

stackMethods.size = function() {
	return this.size;	
};
