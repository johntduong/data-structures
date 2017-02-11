var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  Object.assign(newTree, treeMethods);
  return newTree;
};

treeMethods.insert = function(value) {
  var newNodeTree = new BinarySearchTree(value);

  //if this.right is undefined AND value is greater than this.value
  if (!this.right && newNodeTree.value > this.value) {
    //the right child node of the parent node
    this.right = newNodeTree;
  //if this.right left is undefined AND value is less than this.value
  } else if (!this.left && newNodeTree.value < this.value) {
    //set this.left to newNodeTree (which is new instance)
    this.left = newNodeTree;
  }
  //if previous conditions are not met
  //if value is greater than this.value
  if (value > this.value) {
    //call insert on this.right recursively
    this.right.insert(value);
  //else if value is less than this.value
  } else if (value < this.value) {
    //call insert on this.left recursively
    this.left.insert(value);
  }
};

treeMethods.contains = function(value) {
  if (value === this.value) {
    return true;
  }
  if (!this.left) {
    return false;
  } 
  if (!this.right) {
    return false;
  }
  if (value < this.value) {
    return this.left.contains(value);
  } else {
    return this.right.contains(value);
  }
  return false;
  
};

treeMethods.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  } 
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 The time complexity of the BinarySearchTree is constant
 The time complexity of treeMethods.insert is linear
 The time complexity of contains is logarithmic
 */
