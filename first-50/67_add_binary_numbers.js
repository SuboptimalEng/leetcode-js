/*
67. Add Binary
Easy

5306
573

Given two binary strings a and b, return their sum as a binary string.

Example 1:

Input: a = "11", b = "1"
Output: "100"

Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
*/

// time - O(a.length + b.length)
// space - O(1) - only storing a few extra variables
var addBinary = function (a, b) {
  let p1 = a.length - 1;
  let p2 = b.length - 1;
  let carry = 0;
  let res = "";
  while (true) {
    if (p1 === -1 && p2 === -1 && carry === 0) {
      break;
    }

    let currSum = carry;
    if (p1 !== -1) {
      // convert string to int
      currSum += parseInt(a[p1]);
      p1--;
    }
    if (p2 !== -1) {
      // convert string to int
      currSum += parseInt(b[p2]);
      p2--;
    }

    if (currSum % 2 === 1) {
      res = "1" + res;
    } else {
      res = "0" + res;
    }

    // if sum is 2 or more, then we need to carry a 1
    if (currSum >= 2) {
      carry = 1;
    } else {
      carry = 0;
    }

    // console.log({ currSum, res, carry });
  }
  return res;
};
