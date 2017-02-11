var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.head = 0;
  someInstance.tail = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail+=1;
};

queueMethods.dequeue = function() {
  var val = this.storage[this.head];
  delete this.storage[this.head];
  this.head+=1;
  return val;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};
