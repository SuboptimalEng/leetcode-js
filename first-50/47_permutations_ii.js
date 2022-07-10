/*
47. Permutations II
Medium

5924
103

Given a collection of numbers, nums, that might
contain duplicates, return all possible unique
permutations in any order.

Example 1:

Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]

Example 2:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

*/

// var permuteUnique = function (nums) {
//   let m = {};
//   for (let i = 0; i < nums.length; i++) {
//     let currNum = nums[i];
//     if (m[currNum] === undefined) {
//       m[currNum] = 0;
//     }
//     m[currNum]++;
//   }

//   let res = [];
//   let helper = (res, m, curr, sizeOfNums) => {
//     if (curr.length === sizeOfNums) {
//       res.push([...curr]);
//       return;
//     }

//     let keys = Object.keys(m);
//     for (let i = 0; i < keys.length; i++) {
//       let key = keys[i];
//       if (m[key] === 0) {
//         continue;
//       }

//       m[key]--;
//       curr.push(key);
//       console.log(m, curr);
//       helper(res, m, curr, sizeOfNums);
//       curr.pop();
//       m[key]++;
//       console.log(m, curr);
//     }
//   };
//   helper(res, m, [], nums.length);

//   return res;
// };

// slow solution with hashmap check
var permuteUnique = function (nums) {
  const helper = (res, nums, curr, m) => {
    if (nums.length === 0) {
      let key = curr.join(",");
      if (m[key] === true) {
        return;
      }
      m[key] = true;
      res.push([...curr]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      curr.push(nums[i]);
      console.log(curr);
      let numsWithoutIndex = nums.filter((num, index) => index !== i);
      helper(res, numsWithoutIndex, curr, m);
      curr.pop();
      console.log(curr);
    }
  };
  nums.sort((a, b) => a - b);
  let m = {};
  let res = [];
  helper(res, nums, [], m);
  return res;
};

let example1 = permuteUnique([1, 1, 2]);
console.log(example1);

// let example2 = permuteUnique([4, 1, 1, 1]);
// console.log(example2);
