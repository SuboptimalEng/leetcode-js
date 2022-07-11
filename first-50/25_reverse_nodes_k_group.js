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
// modify reverseList to return first + last nodes of list
var reverseList = function (head) {
  // this check is done in main function no need to rerun this
  // if (head === null || head.next === null) {
  //   return head;
  // }

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

  // return the tail of the reversed list to make
  // it easier to re-attach into the parent list
  let tail = curr;
  while (true) {
    if (tail.next === null) {
      break;
    }

    tail = tail.next;
  }

  // return first + last nodes of the reversed linked list
  return {
    first: curr,
    last: tail,
  };
};

let reverseKGroup = function (head, k) {
  // return early if these base cases are not met
  if (k === 0 || k === 1 || head === null || head.next === null) {
    return head;
  }

  // adding a node to the beginning of the list like this makes
  // it so we don't have to handle nasty edge case when reversing
  // the first K group
  let res = new ListNode(0);
  res.next = head;

  // keep count of how many nodes we've seen so far
  let count = 1;
  let prev = res;
  let curr = head;
  let next = head.next;

  while (true) {
    // if the number of nodes we've seen reaches 'k', then we
    // need to reverse the list starting from 'prev' to 'next'
    if (count === k) {
      // the head of the list we need to reverse
      let headOfListToReverse = prev.next;

      // detach the sublist from the complete list
      prev.next = null;
      curr.next = null;

      // pass in the sublist you need to fully reverse to helper function
      // get the references to the first/last nodes of reversed list
      let { first, last } = reverseList(headOfListToReverse);

      // re-attach reversed list into parent list
      prev.next = first;
      last.next = next;

      // update the previous + current + next pointers
      // note that it is possible that next is at the end
      // of the list. this means we have just performed
      // the final reveral and can break from the loop
      prev = last;
      curr = last.next;
      if (next === null || next.next === null) {
        break;
      }
      next = next.next;

      // reset count to 1, in the situation that we are not at the
      // end of the list
      count = 1;
    } else {
      // break if there are no more nodes to traverse
      if (next === null) {
        break;
      }

      // move current + next pointers forward
      curr = curr.next;
      next = next.next;

      // keep track of how many nodes we've visited so far
      count++;
    }
  }

  return res.next;
};
