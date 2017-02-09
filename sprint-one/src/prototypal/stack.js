var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.number = 0;
  someInstance.storage = {};

  return someInstance;
};


//some instance
//set equal to Object.create(stackMethods)
//push pop size are methods we need

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
