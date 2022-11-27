/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let sum = 0; 
    const VisitStack = [this.root]; 

    while(VisitStack.length){
      const current = VisitStack.shift();

      if (current === null){
        continue;
      } else {
        sum += current.val; 
  
        for(let child of current.children){
          VisitStack.push(child); 
        }
      }
    }

    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let evenCount = 0; 
    const VisitStack = [this.root]; 

    while(VisitStack.length){
      const current = VisitStack.shift();

      if (current === null){
        continue;
      } else {
        if(current.val % 2 === 0) evenCount++;  
  
        for(let child of current.children){
          VisitStack.push(child); 
        }
      }
    }

    return evenCount;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let largerCount = 0; 
    const VisitStack = [this.root]; 

    while(VisitStack.length){
      const current = VisitStack.shift();

      if (current === null){
        continue;
      } else {
        if(current.val > lowerBound) largerCount++;  
  
        for(let child of current.children){
          VisitStack.push(child); 
        }
      }
    }

    return largerCount;
  }
}

module.exports = { Tree, TreeNode };
