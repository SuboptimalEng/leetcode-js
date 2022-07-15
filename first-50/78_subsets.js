/*
78. Subsets
Medium

10724
164

Given an integer array nums of unique elements, return
all possible subsets (the power set).

The solution set must not contain duplicate subsets.
Return the solution in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
*/

// easier way to solve subsets?
let subsets2 = (nums) => {
  let res = [];
  let helper = (res, nums, curr, i) => {
    if (i === nums.length) {
      res.push([...curr]);
      return;
    }

    helper(res, nums, curr, i + 1);
    helper(res, nums, [...curr, nums[i]], i + 1);
  };
  helper(res, nums, [], 0);
  console.log(res);
  return res;
};

subsets2([1, 2, 3]);

var subsets = function (nums) {
  let res = [];

  let helper = (res, nums, curr, index) => {
    res.push([...curr]);

    for (let i = index; i < nums.length; i++) {
      curr.push(nums[i]);
      helper(res, nums, curr, i + 1);
      curr.pop();
    }
  };

  helper(res, nums, [], 0);

  console.log(res);
  return res;
};

// subsets([1, 2, 3]);
