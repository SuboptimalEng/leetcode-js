/*
72. Edit Distance
Hard

9024
106

Given two strings word1 and word2, return the minimum number
of operations required to convert word1 to word2.

You have the following three operations permitted on a word:

Insert a character
Delete a character
Replace a character

Example 1:

Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation:
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
*/

var minDistance = function (word1, word2) {
  let dp = [];

  // initialize an dp array of size row = word1 + 1, col = word2 + 1
  for (let row = 0; row < word1.length + 1; row++) {
    let subRes = [];
    for (let col = 0; col < word2.length + 1; col++) {
      subRes.push(0);
    }
    dp.push(subRes);
  }

  // base case example - word1 = "horse", word2 = ""
  for (let row = 0; row < word1.length + 1; row++) {
    dp[row][0] = row;
  }

  // base case example - word1 = "", word2 = "horse"
  for (let col = 0; col < word2.length + 1; col++) {
    dp[0][col] = col;
  }

  // can take 30-60 minutes to fully understand why this works
  for (let row = 1; row < word1.length + 1; row++) {
    for (let col = 1; col < word2.length + 1; col++) {
      if (word1[row - 1] === word2[col - 1]) {
        dp[row][col] = dp[row - 1][col - 1];
      } else {
        dp[row][col] =
          Math.min(dp[row - 1][col], dp[row - 1][col - 1], dp[row][col - 1]) +
          1;
      }
    }
  }

  // console.log(dp);
  return dp[word1.length][word2.length];
};

let word1 = "horse";
let word2 = "ros";
console.log(minDistance(word1, word2));
