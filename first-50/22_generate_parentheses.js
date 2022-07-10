/*
22. Generate Parentheses
Medium

13531
515

Given n pairs of parentheses, write a function to generate
all combinations of well-formed parentheses.

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
*/

// time - O(4^n/√n) - catalan number (combinatorics)
// space - O(n) - to store the string of size 2 * n
var generateParenthesis = function (n) {
  var helper = function (res, n, str, open, close) {
    if (str.length === 2 * n) {
      res.push(str);
      return;
    }
    if (open < n) {
      helper(res, n, str + "(", open + 1, close);
    }
    if (close < open) {
      helper(res, n, str + ")", open, close + 1);
    }
  };

  let res = [];
  helper(res, n, "", 0, 0);
  return res;
};
