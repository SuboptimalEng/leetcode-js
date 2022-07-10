/*
48. Rotate Image
Medium

9912
514

You are given an n x n 2D matrix representing an image,
rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you
have to modify the input 2D matrix directly. DO NOT allocate
another 2D matrix and do the rotation.

Example 1:

Input: matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
Output: [
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
*/

// time - O(n^2) - iterate through entire matrix
// clockwise - transpose, then flip vertically
// counter-clockwise - flip vertically, then transpose
var rotate = function (matrix) {
  // transpose
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j <= i; j++) {
      // swap (i,j) with (j,i)
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }

  // flip vertically around center column
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length / 2; j++) {
      // swap (i, j) with (i, matrix.length - j - 1);
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix.length - j - 1];
      matrix[i][matrix.length - j - 1] = tmp;
    }
  }
};
