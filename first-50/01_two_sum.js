/*
1. Two Sum
Easy

33705
1064

Given an array of integers nums and an integer target,
return indices of the two numbers such that they
add up to target.

You may assume that each input would have exactly one
solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

// time - O(n)
// space - O(n) - hashmap
var twoSum = function (nums, target) {
  let m = {};
  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];

    // current target is the compliment of the number
    // e.g. curr = 2, target = 9, currTarget = 7
    let currTarget = target - nums[i];

    // if currTarget already exists in the map, then we return early
    if (m[currTarget] !== undefined) {
      return [m[currTarget], i];
    }

    // otherwise, we can add the current value to the map
    m[curr] = i;
  }
};
