
function Node(value) {
  this.value = value;
  this.leftNode = null
  this.rightNode = null;
}

function BinaryTree() {
  this.root = null;
  this.nodeNum = 0;
}

BinaryTree.prototype = {
  insertNode: function (node, value) {
    if (!node) {
      let nd = new Node(value)
      node = nd;
      return nd;
    }
    if (node) {
      if (value < node.value) {
        this.insertNode(node.left, value)
      } else {
        this.insertNode(node.right, value)
      }
    }
  }
}

let tree = new BinaryTree();

let node =tree.insertNode(tree.root,1);
node =tree.insertNode(node,2);
node =tree.insertNode(node,3);
console.log(node)








