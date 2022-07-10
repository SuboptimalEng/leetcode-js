/*
21. Merge Two Sorted Lists
Easy

12880
1172


You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should
be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
*/

// iterative + recursive solutions
// time - O(n + m) - lists are basically same size
// space - O(1) - for both recursive + iterative
var mergeTwoLists = function (list1, list2) {
  // recurisive solution
  // if (list1 === null) return list2;
  // if (list2 === null) return list1;
  // if (list1.val < list2.val) {
  //   list1.next = mergeTwoLists(list1.next, list2);
  //   return list1;
  // } else {
  //   list2.next = mergeTwoLists(list1, list2.next);
  //   return list2;
  // }

  // iterative solution
  let res = new ListNode(0);
  let ptr = res;
  let l1 = list1;
  let l2 = list2;
  while (true) {
    if (l1 === null) {
      ptr.next = l2;
      break;
    }

    if (l2 === null) {
      ptr.next = l1;
      break;
    }

    if (l1.val < l2.val) {
      ptr.next = l1;
      ptr = ptr.next;
      l1 = l1.next;
    } else {
      ptr.next = l2;
      ptr = ptr.next;
      l2 = l2.next;
    }
  }

  return res.next;
};
