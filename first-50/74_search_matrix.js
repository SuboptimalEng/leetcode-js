/*
74. Search a 2D Matrix
Medium

8451
286

Write an efficient algorithm that searches for a value target in an
m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted from left to right. The first integer
of each row is greater than the last integer of the previous row.


Example 1:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
*/

var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;

  let left = 0;
  let right = m * n - 1;
  let mid = 0;

  while (true) {
    if (left > right) {
      return false;
    }

    mid = Math.floor((left + right) / 2);
    let row = Math.floor(mid / n);
    let col = Math.floor(mid % n);
    if (matrix[row][col] < target) {
      left = mid + 1;
    } else if (matrix[row][col] > target) {
      right = mid - 1;
    } else {
      return true;
    }
  }
};

let matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
let target = 3;

searchMatrix(matrix, target);

// var searchMatrix = function (matrix, target) {
//   // find row of interest
//   let rowOfInterest = 0;
//   for (let row = 0; row < matrix.length; row++) {
//     let col = matrix[row].length - 1;
//     if (matrix[row][col] >= target) {
//       rowOfInterest = row;
//       break;
//     }
//   }
//   let binarySearch = (matrix, rowOfInterest, target) => {
//     let left = 0;
//     let right = matrix[rowOfInterest].length - 1;
//     while (true) {
//       if (left > right) {
//         break;
//       }
//       let mid = Math.floor((left + right) / 2);
//       if (matrix[rowOfInterest][mid] > target) {
//         right = mid;
//       } else if (matrix[rowOfInterest][mid] < target) {
//         left = mid + 1;
//       } else {
//         return true;
//       }
//     }
//     return false;
//   };
//   // time - O(n + logm);
//   return binarySearch(matrix, rowOfInterest, target);
//   // time - O(n + m);
//   // for (let col = 0; col < matrix[rowOfInterest].length; col++) {
//   //   // todo: binary search
//   //   if (matrix[rowOfInterest][col] === target) {
//   //     return true;
//   //   }
//   // }
//   // return false;
// };
// let matrix = [
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 60],
// ];
// let target = 3;
// searchMatrix(matrix, target);
