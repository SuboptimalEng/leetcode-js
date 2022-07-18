/*
110. Balanced Binary Tree
Easy

6525
341

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:
a binary tree in which the left and right subtrees of every
node differ in height by no more than 1.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: true
*/

// TODO: Redo this one?
var isBalanced = function (root) {
  let check = (root) => {
    if (root === null) {
      return 0;
    }
    let left = check(root.left);
    let right = check(root.right);
    let difference = Math.abs(left - right);
    if (difference > 1 || left === -1 || right === -1) {
      return -1;
    }
    return 1 + Math.max(left, right);
  };
  return check(root) !== -1;

  // this works as well
  // let helper = (root) => {
  //   if (root === null) {
  //     return 0;
  //   }
  //   let left = helper(root.left);
  //   let right = helper(root.right);
  //   let diff = Math.abs(left - right);
  //   if (left === -1 || right === -1 || diff > 1) {
  //     return -1;
  //   }
  //   return 1 + Math.max(left, right);
  // };
  // return helper(root) === -1 ? false : true;
};
