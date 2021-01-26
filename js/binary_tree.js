
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
      if (node.value > value) {
        if (node.leftNode == null) {
          node.leftNode = nd;
        } else {
          insert(node.leftNode, value);
        }
      } else {
        if (node.rightNode == null) {
          node.rightNode = nd;
        } else {
          insert(node.rightNode, value)
        }
      }
    }

    if (!this.root) {
      this.root = new Node(value);
      this.nodeNum++;
      return;
    } else {
      insert(this.root, value)
    }
  },

  preOrder: function () {
    function pre(node) {
      if (node.leftNode) {
        pre(node.leftNode)
      }
      console.log(node.value)
      if (node.rightNode) {
        pre(node.rightNode);
      }
    }
    pre(this.root);
  },
  midOrder: function () {
    function mid(node) {
      if (node !== null) {
        console.log(node.value)
        mid(node.leftNode)
        mid(node.rightNode)
      }
    }
    mid(this.root)
  }
}

let tree = new BinaryTree();

tree.insertNode(8);
tree.insertNode(7);
tree.insertNode(10);
tree.insertNode(11);
tree.insertNode(9);
tree.insertNode(6);


tree.preOrder();
tree.midOrder();








