var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
    }
    if (list.tail) {
    	list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    var formerHead = list.head;
    list.head = list.head.next;
    return formerHead.value;
  };

  list.contains = function(target) {
    var curNode = list.head;
    while(curNode != null) {
    	// check something
      if (curNode.value===target) {
        // return true if something
        return true;
      } else {
        curNode = curNode.next;
      }
    }
    // never found. return false
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