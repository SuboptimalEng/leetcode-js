/*
46. Permutations
Medium

11256
201

Given an array nums of distinct integers, return all the
possible permutations. You can return the answer in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
*/

var permutations = function (nums) {
  let helper = (res, nums, curr) => {
    if (nums.length === 0) {
      res.push([...curr]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      curr.push(nums[i]);
      let numsWithoutCurrentIndex = nums.filter((num, index) => index !== i);
      helper(res, numsWithoutCurrentIndex, curr);
      curr.pop();
    }
  };
  let res = [];
  helper(res, nums, []);
  return res;
};

let example1 = permutations([1, 2, 3]);
// console.log(example1);

let example2 = permutations([0, 1]);
// console.log(example2);

let example3 = permutations([1, 1, 2]);
console.log(example3);
