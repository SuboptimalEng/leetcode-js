/*
77. Combinations
Medium

4564
154

Given two integers n and k, return all possible combinations
of k numbers out of the range [1, n].

You may return the answer in any order.

Example 1:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
*/

let combine = function (n, k) {
  let helper = (res, curr, nums, k, index) => {
    if (curr.length === k) {
      res.push([...curr]);
      return;
    }
    for (let i = index; i < nums.length + 1; i++) {
      curr.push(i);
      helper(res, curr, nums, k, i + 1);
      curr.pop();
    }
  };

  let res = [];
  let nums = [];
  for (let i = 0; i < n; i++) {
    nums.push(i + 1);
  }
  helper(res, [], nums, k, 1);
  console.log(res);
  return res;
};

combine(4, 2);
