/*
102. Binary Tree Level Order Traversal
Medium

9660

190

Given the root of a binary tree, return the level order traversal of
its nodes' values. (i.e., from left to right, level by level).

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
*/

var levelOrder = function (root) {
  if (root === null) {
    return [];
  }

  let curr = [root];
  let subTree = [];
  let subRes = [];
  let res = [];

  while (true) {
    while (true) {
      if (curr.length === 0) {
        break;
      }

      let i = curr.shift();
      if (i === null) {
        continue;
      }

      subRes.push(i.val);
      subTree.push(i.left);
      subTree.push(i.right);
    }

    if (subRes.length > 0) {
      res.push([...subRes]);
    }
    // console.log(...subTree);
    curr.push(...subTree);
    // console.log(res, curr)
    subRes = [];
    subTree = [];
    if (curr.length === 0) {
      break;
    }
  }

  return res;
};
