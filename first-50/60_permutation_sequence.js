/*
60. Permutation Sequence
Hard

4261
403

The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get
the following sequence for n = 3:

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Example 1:

Input: n = 3, k = 3
Output: "213"

Example 2:

Input: n = 4, k = 9
Output: "2314"
*/

// time - O(n!) - suboptimal solution (better one exists)
// space - size of call stack
var getPermutation = function (n, k) {
  let res = {
    k,
    val: null,
  };
  let nums = [];

  for (let i = 0; i < n; i++) {
    nums.push(i + 1);
  }

  let helper = (res, curr, nums) => {
    if (nums.length === 0) {
      res.k--;
      if (res.k === 0) {
        res.val = [...curr];
      }
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      curr.push(nums[i]);
      let numsWithoutCurrentIndex = nums.filter((num, index) => index !== i);
      helper(res, curr, numsWithoutCurrentIndex);
      if (res.k === 0) {
        break;
      }
      curr.pop();
    }
  };

  helper(res, [], nums);

  console.log(res);
  return res.val.join("");
};

var getPermutationOld = function (n, k) {
  let res = [];
  let nums = [];
  for (let i = 0; i < n; i++) {
    nums.push(i + 1);
  }
  // console.log(nums);

  let helper = (res, curr, nums, obj) => {
    if (nums.length === 0) {
      obj.k--;
      if (obj.k === 0) {
        res.push([...curr]);
      }
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      curr.push(nums[i]);
      let numsWithoutCurrentIndex = nums.filter((num, index) => index !== i);
      helper(res, curr, numsWithoutCurrentIndex, obj);
      if (obj.k === 0) {
        break;
      }
      curr.pop();
    }
  };

  let obj = {
    k: k,
  };

  helper(res, [], nums, obj);

  // console.log(res[k - 1]);
  console.log(res);
  return res[0].join("");
};

getPermutation(4, 9);
