/*
230. Kth Smallest Element in a BST
Medium

7801
137

Given the root of a binary search tree, and an integer k, return the
kth smallest value (1-indexed) of all the values of the nodes in the tree.

Example 1:

Input: root = [3,1,4,null,2], k = 1
Output: 1

Example 2:

Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3
*/

// iteratively with stack
var kthSmallest = function (root, k) {
  let s = [];
  let count = 0;
  while (true) {
    if (root === null && s.length === 0) {
      break;
    }

    while (true) {
      if (root === null) {
        break;
      }
      s.push(root);
      root = root.left;
    }

    let curr = s.pop();
    // console.log(curr.val);
    count++;
    if (count === k) {
      return curr.val;
    }

    if (curr.right) root = curr.right;
    // s.push(curr.right);
  }
};

// recursively
var kthSmallest = (root, k) => {
  let res = [];
  let helper = (res, root) => {
    if (root === null) {
      return;
    }
    helper(res, root.left);
    res.push(root.val);
    helper(res, root.right);
  };
  helper(res, root);
  return res[k - 1];
};
