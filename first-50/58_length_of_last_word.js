/*
58. Length of Last Word
Easy

1233
83

Given a string s consisting of words and spaces, return
the length of the last word in the string.

A word is a maximal substring consisting of non-space
characters only.

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
*/

var lengthOfLastWord = function (s) {
  let strs = s.split(" ");
  for (let i = strs.length - 1; i >= 0; i--) {
    if (strs[i].length > 0) {
      return strs[i].length;
    }
  }
  return 0;
};

let s1 = "hello world";
console.log(lengthOfLastWord(s1));

let s2 = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(s2));
