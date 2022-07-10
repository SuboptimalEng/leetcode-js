/*
32. Longest Valid Parentheses
Hard

9019
291

Given a string containing just the characters '(' and ')', find the
length of the longest valid (well-formed) parentheses substring.

Example 1:

Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".

Example 2:

Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".
*/

// dynamic programming solution
var longestValidParentheses = function (s) {
  console.log("hi");
};

longestValidParentheses("helloWorld");

// too slow!!!
// time - O(n^3) - find all substrings and check validity
// space - O(n^2) - store each substring
var longestValidParentheses = function (s) {
  let isValidParen = (sub) => {
    let openParens = 0;
    for (let i = 0; i < sub.length; i++) {
      let currChar = sub[i];
      if (currChar === "(") {
        openParens += 1;
      } else {
        openParens -= 1;
      }
      if (openParens < 0) {
        return false;
      }
    }
    if (openParens > 0) {
      return false;
    }
    return true;
  };
  let longestValidParens = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      let currSubstring = s.substring(i, j);
      if (isValidParen(currSubstring)) {
        if (currSubstring.length > longestValidParens.length) {
          longestValidParens = currSubstring;
        }
      }
    }
  }
  return longestValidParens;
};

// longestValidParentheses("helloWorld");
