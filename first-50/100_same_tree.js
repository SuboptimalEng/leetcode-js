/*
100. Same Tree
Easy

6288
143

Given the roots of two binary trees p and q, write a function
to check if they are the same or not.

Two binary trees are considered the same if they are structurally
identical, and the nodes have the same value.

Example 1:

Input: p = [1,2,3], q = [1,2,3]
Output: true
*/

var isSameTree = function (p, q) {
  if (p === null && q === null) {
    return true;
  }

  if (p === null || q === null) {
    return false;
  }

  if (p.val !== q.val) {
    return false;
  }

  let leftSideIsSame = isSameTree(p.left, q.left);
  let rightSideIsSame = isSameTree(p.right, q.right);

  return leftSideIsSame && rightSideIsSame;
};
