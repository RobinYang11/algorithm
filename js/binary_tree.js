
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
  insertNode: function (value) {
    function insert(node, value) {
      let nd = new Node(value)
      if (!node) {
        node = nd;
      } else {

        if (node.value < value) {
          insert(node.right, value);
        } else {
          insert(node.left, value)
        }
      }
    }

    if (!this.root) {
      this.root = new Node(value);
      return;
    } else {
      insert(this.root, value)
    }
  }
}

let tree = new BinaryTree();

let node = tree.insertNode(tree.root, 1);
node = tree.insertNode(node, 2);
node = tree.insertNode(node, 3);
console.log(node)








