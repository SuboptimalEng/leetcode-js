/*
17. Letter Combinations of a Phone Number
Medium

11086
713

Given a string containing digits from 2-9 inclusive, return
all possible letter combinations that the number could represent.
Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons)
is given below. Note that 1 does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
*/

// time - O(4^n) - each digit can have 4 chars
// space - recursive
var letterCombinations = function (digits) {
  const helper = (res, m, digits, i, currStr) => {
    if (i === digits.length) {
      if (currStr.length > 0) {
        res.push(currStr);
      }
      return;
    }

    let currDigit = digits[i];
    let currChars = m[currDigit];

    for (let j = 0; j < currChars.length; j++) {
      currStr = currStr + currChars[j];
      helper(res, m, digits, i + 1, currStr);
      currStr = currStr.substring(0, currStr.length - 1);
    }
  };
  let m = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let res = [];
  helper(res, m, digits, 0, "");
  return res;
};
