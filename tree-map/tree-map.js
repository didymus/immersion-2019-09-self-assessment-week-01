/**
  *
  * Implement a `map` method on this Tree class, using pseudoclassical instantiation.
  *
  * Map accepts a mapping function as its only argument. It traverses the tree,
  * passing each node's value into the mapping function, and generates a new
  * tree containing the results.
  *
  * So `map` should return a tree with the same structure, and different values,
  * but it should NOT modify the tree that was passed in.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   var newTree = root1.map(function (value) {
  *     return value * 2;
  *   })
  *  newTree.value // 2
  *  newTree.children[0].value // 4
  *  newTree.children[1].value // 6
  *  newTree.children[0].children[1].value // 10
  *  newTree.children[1].children[1].value // 14
  *  root1.value // still 1
  */

const Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.map = function(callback){
//make new instance of tree
let node = Array.from(arguments)[1] || new Tree(callback(this.value));
  //loop over child array
  this.children.forEach((tree, i) => {
    //call addChild on new tree
    node.addChild(callback(tree.value));
    //check length
    if(tree.children.length){
      //use map on new tree instance -> adds to all children
      tree.map(callback, node.children[i]);
    };
})
//return new tree
return node;
};

//create addChild function
Tree.prototype.addChild = function(value){
//define newChild / node
let node = new Tree(value);
//push newChild / node into children array
this.children.push(node);
//return newChild / node
return node;

};

window.Tree = Tree;
