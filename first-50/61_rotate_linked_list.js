/*
61. Rotate List
Medium

5703
1290

Given the head of a linked list, rotate the list to the
right by k places.

Example 1:

Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
*/

// time - O(n) - convert to cycle, change head, remove cycle
// space - O(1) - keep track of number of nodes
var rotateRight = function (head, k) {
  if (head === null || k === 0) {
    return head;
  }

  let count = 1;

  // turn linked list into a circular linked list
  let tail = head;
  while (true) {
    if (tail.next === null) {
      break;
    }
    tail = tail.next;
    count++;
  }
  tail.next = head;

  // determine how many steps to move forward
  let newHeadNum = count - (k % count);
  let prev = tail;
  let next = head;
  while (true) {
    if (newHeadNum === 0) {
      // remove cycle from linked list
      prev.next = null;
      break;
    }
    prev = next;
    next = next.next;
    newHeadNum--;
  }

  // return the updated head of the linkedlist
  return next;
};
