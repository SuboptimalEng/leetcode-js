/*
15. 3Sum
Medium

18758
1804

Given an integer array nums, return all the triplets
[nums[i], nums[j], nums[k]] such that i != j, i != k,
and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
*/

// time - O(n^2 + nlog(n)) -  sort nums + iterate through all of them
// space - O(3n)? - largest size of result
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    // avoid duplicates for the first value
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let low = i + 1;
    let high = nums.length - 1;

    while (true) {
      if (low >= high) {
        break;
      }

      let currSum = nums[i] + nums[low] + nums[high];

      if (currSum < 0) {
        low++;
        continue;
      }

      if (currSum > 0) {
        high--;
        continue;
      }

      if (currSum === 0) {
        res.push([nums[i], nums[low], nums[high]]);

        // skip all duplicate values for 'low'
        while (true) {
          if (low >= high) break;
          if (nums[low] !== nums[low + 1]) break;
          low++;
        }

        // skip all duplicate values for 'high'
        while (true) {
          if (high <= low) break;
          if (nums[high] !== nums[high - 1]) break;
          high--;
        }

        // move one forward
        low++;
        high--;
      }
    }
  }
  return res;
};

// slow solution with 'alreadyExists' check
var threeSum = (nums) => {
  const alreadyExists = (res, maybeRes) => {
    if (res.length === 0) {
      return false;
    }
    for (let i = 0; i < res.length; i++) {
      let currRes = res[i];
      if (
        currRes[0] === maybeRes[0] &&
        currRes[1] === maybeRes[1] &&
        currRes[2] === maybeRes[2]
      ) {
        return true;
      }
    }
    return false;
  };

  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length - 1; i++) {
    let low = i + 1;
    let high = nums.length - 1;
    while (true) {
      if (low >= high) {
        break;
      }

      let currSum = nums[i] + nums[low] + nums[high];

      if (currSum < 0) {
        low++;
        continue;
      }

      if (currSum > 0) {
        high--;
        continue;
      }

      if (currSum === 0) {
        let maybeRes = [nums[i], nums[low], nums[high]];
        // slow solution checks every single previous result to see
        // if the current result already exists in the list
        if (!alreadyExists(res, maybeRes)) {
          res.push(maybeRes);
        }
        low++;
        high--;
      }
    }
  }
  return res;
};
