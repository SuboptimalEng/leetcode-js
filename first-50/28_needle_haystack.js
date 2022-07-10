/*

*/

// time - O(kn) - k is size of needle, n is length of haystack
// space - O(1)
var strStr = function (haystack, needle) {
  // no need to check this because for this leetcode problem
  // the needle will always be smaller than the haystack
  // if (needle.length > haystack) {
  //   return -1;
  // }

  let needleLength = needle.length;
  for (let i = 0; i < haystack.length - needleLength + 1; i++) {
    let curr = haystack.substring(i, i + needleLength);
    if (needle === curr) {
      return i;
    }
  }

  return -1;
};
