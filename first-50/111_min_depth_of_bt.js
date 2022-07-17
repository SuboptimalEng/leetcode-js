/*
111. Minimum Depth of Binary Tree
Easy

4449
973

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest
path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 2

Example 2:

Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5
*/

var minDepth = function (root) {
  if (root === null) {
    return 0;
  }
  if (root.left === null && root.right === null) {
    return 1;
  }
  if (root.left === null) {
    return 1 + minDepth(root.right);
  }
  if (root.right === null) {
    return 1 + minDepth(root.left);
  }
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};
