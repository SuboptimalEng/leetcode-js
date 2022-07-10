/*
14. Longest Common Prefix
Easy

8586
3123

Write a function to find the longest common prefix
string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
*/

// time - O(n * m) - n strings, m size of smallest string
// space - O(m) - store string of m size
var longestCommonPrefix = function (strs) {
  // O(n) - find the shortest string for comparing
  let shortestStr = strs[0];
  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length < shortestStr.length) {
      shortestStr = strs[i];
    }
  }

  // O(n * m) => n = num of strings, m = size of shortest string
  // iterate through all strings and check how many characters
  // match with the current result. if a characer does not match,
  // then shrink the result string based on index.
  let res = shortestStr;
  for (let i = 0; i < strs.length; i++) {
    let currStr = strs[i];
    for (let j = 0; j < res.length; j++) {
      if (res[j] !== currStr[j]) {
        res = res.substring(0, j);
        break;
      }
    }
  }

  return res;
};
