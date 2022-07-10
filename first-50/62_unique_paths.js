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

var uniquePaths = function (m, n) {
  let res = [];
  for (let i = 0; i < m; i++) {
    let subRes = [];
    for (let j = 0; j < n; j++) {
      subRes.push(1);
    }
    res.push(subRes);
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      res[i][j] = res[i - 1][j] + res[i][j - 1];
    }
  }
  console.log(res);

  return res[m - 1][n - 1];
};

uniquePaths(7, 3);
uniquePaths(4, 5);
