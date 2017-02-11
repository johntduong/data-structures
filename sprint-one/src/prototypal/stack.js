var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {}
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.size()] = value;
}

stackMethods.pop = function() {
  var val = this.storage[this.size()-1];
  delete this.storage[this.size()-1];
  return val;
}

stackMethods.size = function() {
  return Object.keys(this.storage).length;
}
