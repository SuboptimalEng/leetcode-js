/*
449. Serialize and Deserialize BST
Medium

2813
133

Serialization is converting a data structure or object into a sequence of
bits so that it can be stored in a file or memory buffer, or transmitted
across a network connection link to be reconstructed later in the same or
another computer environment.

Design an algorithm to serialize and deserialize a binary search tree. There
is no restriction on how your serialization/deserialization algorithm should
work. You need to ensure that a binary search tree can be serialized to a
string, and this string can be deserialized to the original tree structure.

The encoded string should be as compact as possible.

Example 1:

Input: root = [2,1,3]
Output: [2,1,3]
*/

var serialize = function (root) {
  let res = [];

  let helper = (res, root) => {
    if (root === null) {
      res.push("n");
      return;
    }
    res.push(root.val);
    helper(res, root.left);
    helper(res, root.right);
  };

  helper(res, root);

  res = res.reverse().join(",");
  // console.log(res);

  return res;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let arr = data.split(",");

  let helper = (arr) => {
    if (arr.length === 0) {
      return null;
    }

    let curr = arr.pop();
    if (curr === "n") {
      return null;
    }

    let root = new TreeNode(curr);
    root.left = helper(arr);
    root.right = helper(arr);

    return root;
  };

  let root = helper(arr);

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
