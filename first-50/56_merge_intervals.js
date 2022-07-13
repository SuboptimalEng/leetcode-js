/*
56. Merge Intervals
Medium

14698
547

Given an array of intervals where intervals[i] = [starti, endi],
merge all overlapping intervals, and return an array of the
non-overlapping intervals that cover all the intervals in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/

var merge = function (intervals) {
  if (intervals.length === 0) {
    return intervals;
  }

  console.log(intervals);
  // sort based on first value in each subArray
  intervals.sort((a, b) => a[0] - b[0]);
  console.log(intervals);

  let res = [];
  res.push([...intervals[0]]);

  for (let i = 1; i < intervals.length; i++) {
    let prev = res.pop();
    let curr = intervals[i];

    console.log(prev);

    if (prev[1] >= curr[0]) {
      let min = prev[0];
      let max = Math.max(prev[1], curr[1]);

      res.push([min, max]);
    } else {
      res.push([...prev]);
      res.push([...curr]);
    }
  }

  console.log(res);

  return res;
};

let intervals = [
  [15, 18],
  [2, 6],
  [1, 3],
  [8, 10],
];
merge(intervals);
