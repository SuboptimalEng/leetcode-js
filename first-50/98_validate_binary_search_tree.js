/*
98. Validate Binary Search Tree
Medium

10648
925

Given the root of a binary tree, determine if it is a valid
binary search tree (BST).

A valid BST is defined as follows:

- The left subtree of a node contains only nodes with keys less than the node's key.
- The right subtree of a node contains only nodes with keys greater than the node's key.
- Both the left and right subtrees must also be binary search trees.
*/

var isValidBST = function (root) {
  if (root === null) {
    return true;
  }

  if (root.left === null && root.right === null) {
    return true;
  }

  if (root.left !== null) {
    let leftValue = root.left.val;
    if (leftValue >= root.val) {
      return false;
    }

    // check right most node in left subtree
    let rightMost = root.left;
    while (rightMost.right !== null) {
      rightMost = rightMost.right;
    }
    if (rightMost.val >= root.val) {
      return false;
    }
  }

  if (root.right !== null) {
    let rightValue = root.right.val;
    if (rightValue <= root.val) {
      return false;
    }

    // check left most node in right subtree
    let leftMost = root.right;
    while (leftMost.left !== null) {
      leftMost = leftMost.left;
    }
    if (leftMost.val <= root.val) {
      return false;
    }
  }

  return isValidBST(root.left) && isValidBST(root.right);
};
