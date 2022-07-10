/*
2. Add Two Numbers
Medium

19133
3862

You are given two non-empty linked lists representing two
non-negative integers.  The digits are stored in reverse
order, and each of their nodes contains a single digit.
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading
zero, except the number 0 itself.

Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
*/

// time - O(n + m) - iterate 2 lists of size n, m
// space - O(n + m) - create list of size n + m
var addTwoNumbers = function (l1, l2) {
  let p1 = l1;
  let p2 = l2;
  let carry = 0;
  let resHead = new ListNode(0);
  let resPtr = resHead;
  while (true) {
    if (p1 === null && p2 === null && carry === 0) {
      break;
    }
    let curr = 0;
    curr += carry;
    if (p1 !== null) {
      curr += p1.val;
      p1 = p1.next;
    }
    if (p2 !== null) {
      curr += p2.val;
      p2 = p2.next;
    }
    if (curr >= 10) {
      curr -= 10;
      carry = 1;
    } else {
      carry = 0;
    }
    resPtr.next = new ListNode(curr);
    resPtr = resPtr.next;
  }
  return resHead.next;
};
