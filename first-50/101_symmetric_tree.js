/*
101. Symmetric Tree
Easy

10124
242

Given the root of a binary tree, check whether it is a mirror
of itself (i.e., symmetric around its center).

Example 1:

Input: root = [1,2,2,3,4,4,3]
Output: true
*/

var isSymmetric = function (root) {
  if (root === null) {
    return true;
  }

  let helper = (left, right) => {
    if (left === null && right === null) {
      return true;
    }
    if (left === null) {
      return false;
    }
    if (right === null) {
      return false;
    }
    if (left.val !== right.val) {
      return false;
    }

    return helper(left.left, right.right) && helper(left.right, right.left);
  };

  return helper(root.left, root.right);
};
