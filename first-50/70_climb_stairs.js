/*
70. Climbing Stairs
Easy

12971
388

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct
ways can you climb to the top?

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/
let climbStairs = (n) => {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  let res = 0;
  let prev = 2;
  let prevprev = 1;
  for (let i = 3; i <= n; i++) {
    res = prev + prevprev;
    prevprev = prev;
    prev = res;
  }
  return res;
};
