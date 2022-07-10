/*
33. Search in Rotated Sorted Array
Medium

15544
965

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly
rotated at an unknown pivot index k (1 <= k < nums.length)
such that the resulting array is [nums[k], nums[k+1], ...,
nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
For example, [0,1,2,4,5,6,7] might be rotated at pivot index
3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer
target, return the index of target if it is in nums, or -1
if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
*/

// time - O(logn) - find pivot, search correct side
// space - O(1) - no extra space is used
var findPivot = function (nums) {
  let pivot = 0;
  let low = 0;
  let high = nums.length - 1;

  // if the first num is less than last num, we
  // know that the sorted array is not rotated
  if (nums[low] < nums[high]) {
    return pivot;
  }

  while (true) {
    if (low >= high) {
      break;
    }

    let mid = Math.floor((low + high) / 2);

    // if the # at the high index is lower than the # at the middle index
    // then we know the pivot exists on the right side
    if (nums[high] < nums[mid]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
};

var search = function (nums, target) {
  let pivot = findPivot(nums);
  let left = 0;
  let right = nums.length - 1;

  // find which side of the pivot to run binary search
  if (target >= nums[pivot] && target <= nums[right]) {
    left = pivot;
  } else {
    right = pivot;
  }

  while (true) {
    if (left > right) {
      break;
    }
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

let nums = [4, 5, 6, 7, 0, 1, 2];

console.log(search(nums, 0));
