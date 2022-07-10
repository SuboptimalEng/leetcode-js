/*
16. 3Sum Closest
Medium

6117
267

Given an integer array nums of length n and an integer target,
find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

// time - O(n^2 + nlog(n)) -  sort nums + iterate through all of them
// space - O(1) - return one closest sum
var threeSumClosest = function (nums, target) {
  // similar to 3sum, we first sort the numbers.
  nums.sort((a, b) => a - b);

  // define a default closest number
  let closest = nums[0] + nums[1] + nums[2];

  // O(n^2) - iterate through all combinations
  for (let i = 0; i < nums.length - 1; i++) {
    let low = i + 1;
    let high = nums.length - 1;

    while (true) {
      if (low >= high) {
        break;
      }

      let currSum = nums[i] + nums[low] + nums[high];
      let currDistance = Math.abs(target - currSum);
      let closestDistance = Math.abs(target - closest);

      if (currDistance < closestDistance) {
        closest = nums[i] + nums[low] + nums[high];
      }

      if (currSum < target) {
        low++;
        continue;
      }

      if (currSum > target) {
        high--;
        continue;
      }

      // unlike 3sum, which looks for all number combinations that sum to '0'
      // and requires us to continue iterating, this one can just return early
      if (currSum === target) {
        closest = currSum;
        break;
      }
    }
  }

  return closest;
};
