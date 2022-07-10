/*
5. Longest Palindromic Substring
Medium

19183
1106

Given a string s, return the longest palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
*/

// time - O(n^2) - expand palindrome from each index
// space - O(n) - longest palindrome can be of size 'n'
var longestPalindrome = function (s) {
  let pal = "";
  for (let i = 0; i < s.length; i++) {
    let oddPal = helper(s, i, i, "");
    let evenPal = helper(s, i, i + 1, "");
    if (oddPal.length > pal.length) {
      pal = oddPal;
    }
    if (evenPal.length > pal.length) {
      pal = evenPal;
    }
  }
  return pal;
};

var helper = function (s, left, right, pal) {
  while (true) {
    // index out of bounds check
    if (left < 0 || right >= s.length) {
      break;
    }

    // both characters need to be matching
    if (s[left] !== s[right]) {
      break;
    }

    // handle edge case for when palindrome is of odd size
    // and this is the initial run of the while-loop
    if (left === right) {
      pal = s[left];
    } else {
      pal = s[left] + pal + s[right];
    }

    left--;
    right++;
  }
  return pal;
};
