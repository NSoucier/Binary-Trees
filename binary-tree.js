/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    // pniw vs perm
    // pniw based on full time work, part-time does not count towards 5 years of work
    // perm - only need to work 35hours/week when the green card gets in hand
    // Nov1-Feb1
    // employer needs to state any breaks to UCIS, they advise adding that unpaid maternity time back on
    function getMinDepth(node, depth = 0) {
      if (!node) return depth;

      depth++;

      if (!node.left || !node.right) {return depth;}

      return Math.min(getMinDepth(node.left, depth), getMinDepth(node.right, depth))

    }

    return getMinDepth(this.root)
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    function getMaxDepth(node, depth = 0) {
      if (!node) return depth;

      depth++;

      if (!node.left || !node.right) return depth;

      return Math.max(getMaxDepth(node.left, depth), getMaxDepth(node.right, depth))

    }

    return getMaxDepth(this.root)
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let sum = 0;
    function getSum(node) {
      if (!node) return 0;
      const leftSum = getSum(node.left);
      const rightSum = getSum(node.right);
      sum = Math.max(sum, node.val + leftSum + rightSum);
      return Math.max(0, node.val + leftSum, node.val + rightSum);
    }

    getSum(this.root)
    
    return sum
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let result = null;
    let stack = [this.root];

    while (stack.length && this.root) {
      let current = stack.pop();

      if (current.val > lowerBound) {
        if (!result) {
          result = current.val;
        } else if (current.val < result) {
          result = current.val;
        }
      }

      if (current.left) stack.push(current.left);
      if (current.right) stack.push(current.right);
    }

    return result
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }}

module.exports = { BinaryTree, BinaryTreeNode };
