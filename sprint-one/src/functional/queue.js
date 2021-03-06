var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var head = 0
  var tail = 0

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[tail] = value;
    tail+=1;
  };

  someInstance.dequeue = function() {
  	var val = storage[head];
    delete storage[head]
    head+=1;
    return val;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
