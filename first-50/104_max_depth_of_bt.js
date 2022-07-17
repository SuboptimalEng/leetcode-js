/*
104. Maximum Depth of Binary Tree
Easy

7678
131

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the
longest path from the root node down to the farthest leaf node.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:

Input: root = [1,null,2]
Output: 2
*/

var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }
  // this is not necessary
  // if (root.left === null && root.right === null) {
  //   return 1;
  // }
  let maxLeft = 1 + maxDepth(root.left);
  let maxRight = 1 + maxDepth(root.right);
  return Math.max(maxLeft, maxRight);
};
