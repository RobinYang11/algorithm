

function Node(value, index, parent) {
  this.value = value;
  this.index = index;
  this.parent = parent;
}

function ParentTree() {
  this.nodes = []
  this.nodeNum = 0;
}

ParentTree.prototype = {
  insertNode: function (value, parent) {
    this.nodes.push({
      value,
      parent,
      index: this.nodeNum
    })

    this.nodeNum ++;
  },
  treeDepth: function () {
    let maxDepth = 0;
    this.nodes.forEach((i, index) => {
      let depth = 0;
      for (let j = index; j > 0; j = this.nodes[j].parent) {
        depth++;
      }
      if (depth > maxDepth) {
        maxDepth = depth;
      }
    })
    return maxDepth;
  },
  display: function () {
    const RDisplay = (node, gap) => {
      let space = "",
        i = 0;
      while (i < gap) {
        space += ' ';
        i++
      }
      console.log(space+node.value)
      for (let j = 0; j < this.nodeNum; j++) {
        if (this.nodes[j].parent === node.index) {
          let tempGap = gap + 1;
          RDisplay(this.nodes[j], tempGap);
        }
      }
      return;
    }
    RDisplay(this.nodes[0], 0);
  }
}

var tree = new ParentTree();

tree.insertNode('A',-1);
tree.insertNode('B',0);
tree.insertNode('C',0);
tree.insertNode('D',0);
tree.insertNode('E',1);
tree.insertNode('F',1);
tree.insertNode('G',1);
tree.insertNode('H',2);
tree.insertNode('I',2);
tree.insertNode('J',3);
tree.insertNode('L',4);

tree.display();




