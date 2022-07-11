var inorderTraversal = function (root) {
  let helper = (root, res) => {
    if (root === null) {
      return;
    }

    helper(root.left, res);
    res.push(root.val);
    helper(root.right, res);
  };

  let res = [];
  return res;
};
