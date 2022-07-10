/*
34. Find First and Last Position of Element in Sorted Array
Medium

11533
310

Given an array of integers nums sorted in non-decreasing order,
find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
*/

// algo - modify binary search to keep searching after initial find
// time - O(logn) - perform two binary searches, for first/last
// space - O(1) - only a few constant sized variables for indices
var searchRange = function (nums, target) {
  // search for the starting index of the target
  let searchForFirst = (nums, target) => {
    let firstIndex = -1;
    let left = 0;
    let right = nums.length - 1;
    while (true) {
      if (left > right) {
        break;
      }
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] < target) {
        left = mid + 1;
      } else if (nums[mid] > target) {
        right = mid - 1;
      } else {
        firstIndex = mid;
        right = mid - 1;
      }
    }
    return firstIndex;
  };

  // search for the last index where the target exists
  let searchForLast = (nums, target) => {
    let lastIndex = -1;
    let left = 0;
    let right = nums.length - 1;
    while (true) {
      if (left > right) {
        break;
      }
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] < target) {
        left = mid + 1;
      } else if (nums[mid] > target) {
        right = mid - 1;
      } else {
        lastIndex = mid;
        left = mid + 1;
      }
    }
    return lastIndex;
  };

  let first = searchForFirst(nums, target);
  if (first === -1) {
    return [-1, -1];
  }
  let last = searchForLast(nums, target);
  return [first, last];
};

let nums = [5, 7, 7, 8, 8, 10];
let target = 8;
console.log(searchRange(nums, target));
