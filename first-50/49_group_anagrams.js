/*
49. Group Anagrams
Medium

10040
337
Given an array of strings strs, group the anagrams together.
You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the
letters of a different word or phrase, typically using
all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/

// time -  O(n * klogk)
// it takes klogk to sort a word of len k
// there are n such words inserted into hash map
// space - O(n) - hash map of size n
var groupAnagrams = function (strs) {
  let m = new Map();
  let res = [];
  for (let i = 0; i < strs.length; i++) {
    let curr = strs[i];
    let sorted = curr.split("").sort().join("");
    if (!m.has(sorted)) {
      m.set(sorted, []);
    }
    m.get(sorted).push(curr);
    // let subRes = m.get(sorted).push(curr);
    // subRes.push(curr);
    // console.log(m);
  }

  m.forEach((value, key) => res.push(value));

  console.log(res);
  return res;
};

// slow solution uses object
// var groupAnagrams = function (strs) {
//   let m = {};
//   let res = [];
//   for (let i = 0; i < strs.length; i++) {
//     let curr = strs[i];
//     let sorted = curr.split("").sort().join("");
//     if (m[sorted] === undefined) {
//       m[sorted] = [];
//     }
//     m[sorted].push(curr);
//   }
//   Object.keys(m).forEach((i) => res.push(m[i]));
//   console.log(res);
//   return res;
// };

let strs = ["bat", "cat", "tac", "asdf", "fdsa"];
let res = groupAnagrams(strs);
