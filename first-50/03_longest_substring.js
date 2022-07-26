/*
3. Longest Substring Without Repeating Characters
Medium

25650
1113

Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

// time - O(n)
// space - O(n) - map of unique chars
var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) {
    return s.length;
  }

  let left = 0;
  let longest = 0;
  let m = new Set();

  for (let right = 0; right < s.length; right++) {
    let ch = s[right];

    while (true) {
      if (!m.has(ch)) {
        break;
      }
      m.delete(s[left]);
      left++;
    }

    m.add(ch);
    longest = Math.max(longest, m.size);
  }

  return longest;
};

var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  let m = new Map();

  for (let i = 0; i < s.length; i++) {
    let curr = s[i];

    if (curr === undefined) {
      m.set(curr, i);
    } else {
      // The size of the map represents the size of the current
      // longest substring without repeating characters.
      if (m.size > longest) {
        longest = m.size;
      }

      // 'abcb' - when the second 'b' is found, we want to remove
      // all letters up-to and including 'b'
      let removeUpToIndex = m.get(curr);
      m.forEach((value, key) => {
        if (value <= removeUpToIndex) {
          m.delete(key);
        }
      });

      // don't forget to track the current new value of 'b'
      m.set(curr, i);
    }
  }

  // this check handles the edge case where the entire string is unique.
  // in this case, longest will still be initialized to '0'
  if (m.size > longest) {
    longest = m.size;
  }

  return longest;
};

// time - O(n^2)
// space - O(n^2) - substrings array
// result - failure - 986/987 test cases passed
// failure - generating all substrings caused runtime error
var lengthOfLongestSubstring = function (s) {
  // generate all possible substrings of 's'
  let substrings = [];
  for (let i = 0; i < s.length; i++) {
    for (j = i + 1; j < s.length + 1; j++) {
      substrings.push(s.substring(i, j));
    }
  }

  // check each substring and see which one is the longest
  // by using a hashmap to detect duplicates
  let longest = 0;
  substrings.forEach((str) => {
    let m = {};
    let containsDuplicate = false;
    for (let i = 0; i < str.length; i++) {
      if (m[str[i]] !== undefined) {
        containsDuplicate = true;
      }
      m[str[i]] = 1;
    }
    if (!containsDuplicate && str.length > longest) {
      longest = str.length;
    }
  });

  return longest;
};
