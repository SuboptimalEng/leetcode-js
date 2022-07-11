/*

Given the head of a singly linked list, reverse the list,
and return the reversed list.

Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
*/

// time - O(n) - one pass
// space - O(1) - create 3 pointer variables
var reverseList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  let prev = null;
  let curr = head;
  let next = head.next;

  while (true) {
    curr.next = prev;
    prev = curr;

    if (next === null) {
      break;
    }

    curr = next;
    next = next.next;
  }

  return curr;
};
