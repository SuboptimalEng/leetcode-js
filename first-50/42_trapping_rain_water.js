/*
42. Trapping Rain Water
Hard

19984
282

Given n non-negative integers representing an elevation
map where the width of each bar is 1, compute how much
water it can trap after raining.

Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is
represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case,
6 units of rain water (blue section) are being trapped.

Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
*/

var trap = function (heights) {
  // keep track of maximum values seen on left/right sides of array
  let maxLeft = 0;
  let maxRight = 0;

  let res = 0;
  let leftIndex = 0;
  let rightIndex = heights.length - 1;

  while (true) {
    if (leftIndex === rightIndex) {
      break;
    }

    let leftValue = heights[leftIndex];
    let rightValue = heights[rightIndex];

    if (leftValue < rightValue) {
      let sum = maxLeft - leftValue;
      if (sum < 0) {
        // if sum is less than zero, then we need to update the left max
        maxLeft = leftValue;
        sum = 0;
      }
      res += sum;
      leftIndex++;
    } else {
      let sum = maxRight - rightValue;
      if (sum < 0) {
        // if sum is less than zero, then we need to update the right max
        maxRight = rightValue;
        sum = 0;
      }
      res += sum;
      rightIndex--;
    }
  }

  console.log(res);
  return res;
};

let heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
trap(heights);

// time - O(n) - 3 pass algorithm for creating 2 arrays
// space - O(n) - keep track of max left/right arrays
var trap = function (heights) {
  // left/right are set to 0 initially for out of bounds
  let leftMax = [0];
  let rightMax = [0];

  // find the max value to the right of the current index
  for (let i = 0; i < heights.length - 1; i++) {
    let max = Math.max(heights[i], leftMax[leftMax.length - 1]);
    leftMax.push(max);
  }

  // find the max value to the left of the current index
  for (let i = heights.length - 1; i >= 1; i--) {
    let max = Math.max(heights[i], rightMax[0]);
    rightMax = [max, ...rightMax];
  }

  // console.log(leftMax);
  // console.log(rightMax);
  // console.log(heights);

  let res = 0;
  for (let i = 0; i < heights.length; i++) {
    let sum = Math.min(leftMax[i], rightMax[i]) - heights[i];
    if (sum < 0) {
      sum = 0;
    }
    res += sum;
  }

  console.log(res);
  return res;
};
