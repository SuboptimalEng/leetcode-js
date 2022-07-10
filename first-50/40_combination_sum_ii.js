/*
40. Combination Sum II
Medium

5790
148

Given a collection of candidate numbers (candidates)
and a target number (target), find all unique combinations
in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output:
[
    [1,1,6],
    [1,2,5],
    [1,7],
    [2,6]
]
*/

var combinationSum2 = function (candidates, target) {
  const helper = (res, candidates, target, arr, index) => {
    if (target < 0) {
      return;
    }
    if (target === 0) {
      res.push([...arr]);
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      let curr = candidates[i];
      if (i > index && curr === candidates[i - 1]) {
        continue;
      }
      arr.push(curr);
      helper(res, candidates, target - curr, arr, i + 1);
      arr.pop();
    }
  };
  candidates.sort((a, b) => a - b);
  let res = [];
  // console.log(candidates);
  helper(res, candidates, target, [], 0);
  return res;
};
