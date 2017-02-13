// Instantiate a new graph
var Graph = function() {
  this.nodeList = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodeList[node] = { 'val': node, 'edgeList': {} };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return Boolean(this.nodeList[node]);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodeList[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //
  if (this.nodeList[toNode] && this.nodeList[fromNode]) {
    return Boolean(this.nodeList[fromNode].edgeList[toNode] && this.nodeList[toNode].edgeList[fromNode]);
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodeList[fromNode].edgeList[toNode] = toNode;
  this.nodeList[toNode].edgeList[fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodeList[fromNode].edgeList[toNode];
  delete this.nodeList[toNode].edgeList[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodeList) {
    cb(this.nodeList[key].val);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */