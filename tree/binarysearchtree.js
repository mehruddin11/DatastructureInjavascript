const treeify = require('treeify')
class Node{
    constructor(data){
      this.data= data,
      this.left = null;
      this.right = null;
    }
  }
  class BST{
    constructor(){
      this.root= null;
    }
    add(data){
      let node= new Node(data);
      let root= this.root
      if(root == null){this.root= node 
        return ;}
      else{
        const searchTree= function(root){
           if (data < root.data){
              if (root.left === null){
                root.left = node;
                return;
              }
             else if (root.left !== null){ return searchTree(root.left)}
           }
          else if(data > root.data){
            if(root.right === null){
              root.right = node;
              return;
            }
            else if (root.right !== null){return searchTree(root.right)}
            }
          else{
            return null;
          }
        }
        return searchTree(root)
      }
    }
    findMin(){
      let curr= this.root;
      while(curr.left !== null){
        curr= curr.left;
      }
      return curr.data
    }
    findMax(){
      let curr= this.root;
      while(curr.right  !== null){
        curr= curr.right;
      }
      return curr.data
    }
  }
  const bst= new BST();
  bst.add(100)
  bst.add(30)
  bst.add(120)
 bst.add(4)
 bst.add(200)
console.log(bst.findMin())
console.log(bst.findMax())
console.log(treeify.asTree(bst, true));
  
  