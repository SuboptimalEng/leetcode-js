/*
75. Sort Colors
Medium

10938
431

Given an array nums with n objects colored red, white,
or blue, sort them in-place so that objects of the same
color are adjacent, with the colors in the order red,
white, and blue.

We will use the integers 0, 1, and 2 to represent the
color red, white, and blue, respectively.

You must solve this problem without using the library's
sort function.

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
*/

// time - O(n) - one-pass solution
// space - O(1)
var sortColors2 = function (nums) {
  console.log(nums);
  let i = 0;
  let left = 0;
  let maxLen = nums.length - 1;
  let right = maxLen;

  while (true) {
    // if i greater than right, then we don't need to do more checks
    if (i > right) {
      break;
    }
    if (nums[i] === 0) {
      let tmp = nums[i];
      nums[i] = nums[left];
      nums[left] = tmp;
      left++;
      i++;
    } else if (nums[i] === 2) {
      let tmp = nums[i];
      nums[i] = nums[right];
      nums[right] = tmp;
      right--;
    } else {
      i++;
    }
  }

  console.log(nums);
  return nums;
};

// time - O(n) - two-pass solution
// space - O(1)
var sortColors = function (nums) {
  console.log(nums);
  let zeros = 0;
  let ones = 0;
  let twos = 0;
  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    if (curr === 0) {
      zeros++;
    } else if (curr === 1) {
      ones++;
    } else {
      twos++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (zeros > 0) {
      nums[i] = 0;
      zeros--;
    } else if (ones > 0) {
      nums[i] = 1;
      ones--;
    } else {
      nums[i] = 2;
      twos--;
    }
  }
  console.log(nums);
  return nums;
};

let nums = [2, 0, 2, 1, 1, 0];
// sortColors(nums);
sortColors2(nums);
