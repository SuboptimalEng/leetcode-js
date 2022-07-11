/*
25. Reverse Nodes in k-Group
Hard

7937
512

Given the head of a linked list, reverse the nodes of the list
k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length
of the linked list. If the number of nodes is not a multiple
of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

Example 1:

Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]

Example 2:

Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
*/

// TODO: Not yet complete
// return first node, last node

// code from leetcode #206 (reverse a linked list)
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

let reverseKGroup = function (head, k) {
  if (k === 0 || k === 1 || head === null || head.next === null) {
    return head;
  }

  let res = new ListNode(0);
  res.next = head;

  let count = k;
  let prev = res;
  let curr = head;
  let next = head.next;

  while (true) {
    if (ptr === null) {
      break;
    }

    count--;
    if (count === 0) {
      curr.next = null;

      // reverse list
      let newList = reverseList(prev.next);
      prev.next = newList;

      // update prev.next
      // update prev

      // reset count
      count = k;
    }

    ptr = ptr.next;
  }

  return res.next;
};
