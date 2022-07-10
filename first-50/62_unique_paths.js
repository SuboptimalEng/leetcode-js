/*
62. Unique Paths
Medium

9573
310

There is a robot on an m x n grid. The robot is initially located
at the top-left corner (i.e., grid[0][0]). The robot tries to move
to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot
can only move either down or right at any point in time.

Given the two integers m and n, return the number of
possible unique paths that the robot can take to reach
the bottom-right corner.

The test cases are generated so that the answer will be
less than or equal to 2 * 109.
*/

// time - O(m*n) - fill out 2d array one coord at a time
// space - O(m*n) - create a 2d array
// if you draw out the diagram for this code, you should
// see quite easily it is possible to decrease the space
// complexity to O(min(m, n))
var uniquePaths = function (m, n) {
  let res = [];

  // initialize an m*n array and fill it with 1s
  // ---
  // why?
  // the robot can only go right or bottom, if the 2d array
  // has row of len 1 or col of len 1, then there is only
  // one way for the robot to travel down that 2d array
  // ---
  // initializing the 2d array like this handles those
  // two base cases
  for (let i = 0; i < m; i++) {
    let subRes = [];
    for (let j = 0; j < n; j++) {
      subRes.push(1);
    }
    res.push(subRes);
  }

  // iterate through the array starting at (1, 1) not (0, 0)
  // initial row and column are already correct
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      res[i][j] = res[i - 1][j] + res[i][j - 1];
    }
  }

  // console.log(res);
  return res[m - 1][n - 1];
};

uniquePaths(7, 3);
uniquePaths(4, 5);
