var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  Object.assign(newTree, treeMethods);
  newTree.children = []; 
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = new Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 The time complexity of Tree is constant
 The time complexity of treeMethds.addChild is constant
 The time complexity of treeMethods.contains is linear
 */
