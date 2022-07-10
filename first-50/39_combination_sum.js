/*
39. Combination Sum
Medium

11621
248

Given an array of distinct integers candidates and a target integer
target, return a list of all unique combinations of candidates where
the chosen numbers sum to target. You may return the combinations
in any order.

The same number may be chosen from candidates an unlimited number of
times. Two combinations are unique if the frequency of at least one
of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up
to target is less than 150 combinations for the given input.

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
*/

var combinationSum = function (candidates, target) {
  let subsets = (res, candidates, target, curr, index) => {
    if (target < 0) {
      return;
    }
    if (target === 0) {
      res.push([...curr]);
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      curr.push(candidates[i]);
      subsets(res, candidates, target - candidates[i], curr, i);
      curr.pop(candidates[i]);
    }
  };
  let res = [];
  subsets(res, candidates, target, [], 0);
  return res;
};
