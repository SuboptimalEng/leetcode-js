/*
11. Container With Most Water
Medium

17812
975

You are given an integer array height of length n.
There are n vertical lines drawn such that the two
endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a
container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by
array [1,8,6,2,5,4,8,3,7]. In this case, the max area of
water (blue section) the container can contain is 49.
*/

// time - O(n) - one iteration of array
// space - O(1)
var maxArea = function (height) {
  let leftIndex = 0;
  let rightIndex = height.length - 1;
  let absoluteMax = 0;
  while (true) {
    if (leftIndex === rightIndex) {
      break;
    }

    // the max amount of water in this region can only by contained
    // by smaller pole
    let currentHeightCapacity = Math.min(height[leftIndex], height[rightIndex]);
    let currentMax = currentHeightCapacity * (rightIndex - leftIndex);

    if (currentMax > absoluteMax) {
      absoluteMax = currentMax;
    }

    if (height[leftIndex] < height[rightIndex]) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }
  return absoluteMax;
};
