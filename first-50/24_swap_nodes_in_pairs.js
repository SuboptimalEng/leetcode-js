/*
24. Swap Nodes in Pairs
Medium

7293
303

Given a linked list, swap every two adjacent nodes
and return its head. You must solve the problem
without modifying the values in the list's nodes
(i.e., only nodes themselves may be changed.)

Example 1:

Input: head = [1,2,3,4]
Output: [2,1,4,3]
*/
var swapPairs = function (head) {
  // return early if the list is max 1 in length
  if (head === null || head.next === null) {
    return head;
  }

  // need to keep track of three nodes
  let first = null;
  let middle = head;
  let last = head.next;

  // we know that the first node will be swapped, so
  // we can just move the head forward and return it
  // at the end
  head = head.next;

  while (true) {
    // in the beginning, first node will be null start
    // updating this from the second run
    if (first !== null) {
      first.next = last;
    }

    // the logic is too complicated to explain, feel
    // free to draw it to get a better understanding
    middle.next = last.next;
    last.next = middle;

    first = middle;
    middle = middle.next;
    if (middle === null) {
      break;
    }
    last = middle.next;
    if (last === null) {
      break;
    }
  }

  return head;
};
