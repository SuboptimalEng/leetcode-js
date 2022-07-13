/*
200. Number of Islands
Medium

14793
349

Given an m x n 2D binary grid grid which represents a map of '1's (land)
and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent
lands horizontally or vertically. You may assume all four edges of the
grid are all surrounded by water.

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1


Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/

let dfs = (grid, i, j) => {
  // out of bounds checks
  if (i < 0 || i > grid.length - 1) {
    return;
  }
  if (j < 0 || j > grid[0].length - 1) {
    return;
  }
  // only recurse if the value represents the island
  if (grid[i][j] === "0") {
    return;
  }
  grid[i][j] = "0";
  dfs(grid, i + 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i - 1, j);
  dfs(grid, i, j - 1);
};

let numberOfIslands = (grid) => {
  let islandCount = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        // mutate grid
        islandCount++;
        dfs(grid, i, j);
      }
    }
  }

  return islandCount;
};
