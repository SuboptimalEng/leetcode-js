/*
54. Spiral Matrix
Medium

7663
859

Given an m x n matrix, return all elements of
the matrix in spiral order.

Example 1:

Input: matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
Output: [1,2,3,6,9,8,7,4,5]

Input: matrix = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

// time - O(n^2) - iterate through the entire matrix once
// space - O(1) - no extra space required
var spiralOrder = function (matrix) {
  let rowBegin = 0;
  let rowEnd = matrix.length - 1;
  let colBegin = 0;
  let colEnd = matrix[0].length - 1;

  let res = [];

  while (true) {
    // topLeft to topRight
    for (let j = colBegin; j <= colEnd; j++) {
      res.push(matrix[rowBegin][j]);
    }

    rowBegin++;

    // topRight to bottomRight
    for (let i = rowBegin; i <= rowEnd; i++) {
      res.push(matrix[i][colEnd]);
    }

    colEnd--;

    // bottomRight to bottomLeft
    if (rowBegin <= rowEnd) {
      for (let j = colEnd; j >= colBegin; j--) {
        res.push(matrix[rowEnd][j]);
      }
    }
    rowEnd--;

    // bottomLeft to topRight
    if (colBegin <= colEnd) {
      for (let i = rowEnd; i >= rowBegin; i--) {
        res.push(matrix[i][colBegin]);
      }
    }

    colBegin++;

    if (rowBegin > rowEnd) {
      break;
    }
    if (colBegin > colEnd) {
      break;
    }
    // if (rowBegin >= rowEnd && colBegin >= colEnd) {
    //   break;
    // }
  }

  console.log(res);
  return res;
};

let m1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(m1);
spiralOrder(m1);

let m2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.log(m2);
spiralOrder(m2);

let m3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];
console.log(m3);
spiralOrder(m3);
