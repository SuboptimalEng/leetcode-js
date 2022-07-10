/*
19. Remove Nth Node From End of List
Medium

10619
501

Given the head of a linked list, remove the nth node
from the end of the list and return its head.

Example 1:

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
*/

var removeNthFromEnd = function (head, n) {
  let sizeOfList = 0;
  let ptr = head;

  // first determine the size of the entire list
  while (ptr !== null) {
    ptr = ptr.next;
    sizeOfList++;
  }

  // determine how many nodes to move forward based on size of list
  let moveForwardCount = sizeOfList - n + 1;

  // edge case: when the node you want to remove is the first one
  if (moveForwardCount === 1) {
    return head.next;
  }

  // keep track of prev, curr nodes until you find node to delete
  let prev = null;
  let curr = head;
  while (moveForwardCount > 1) {
    prev = curr;
    curr = curr.next;
    moveForwardCount--;
  }

  // remove link to current node
  prev.next = curr.next;
  // remove current node's
  curr.next = null;

  return head;
};
