var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (list.head == null) {
      list.head = newNode;
    } 
    if (list.tail == null) {
      list.tail = newNode;
    }
    if (list.tail) {
      list.tail.next = newNode;
      list.tail = newNode;
    }

  };

  list.removeHead = function() {
    if (list.head) {
      var formerHead = list.head;
      list.head = list.head.next;
      return formerHead.value;
    }
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode != null) {
      if (currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 The list.addToTail works on a constant time complexity
 The list.removeHead works on a constant time complexity
 The list.contains works on a linear time complexity
 The Node function works on a constant time complexity
 The linkedList function is also constant time complexity
 */
