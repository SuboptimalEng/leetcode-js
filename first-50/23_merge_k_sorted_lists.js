/*
23. Merge k Sorted Lists

Hard

12707
487

You are given an array of k linked-lists lists, each
linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list
and return it.

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
*/

// time - O(n^2) - slow merge with 1 * Array.pop()
// time - O(nlogn) - fast merge with 2 * Array.shift()
// space - O(1) - not creating any new nodes
var mergeKLists = function (lists) {
  // in the case that the length of the lists array is less <= 1,
  // we can return early and not worry about merging
  if (lists.length === 0) {
    return null;
  }

  if (lists.length === 1) {
    return lists[0];
  }

  // this helper method is from leetcode 21 - merge two sorted lists
  let mergeTwoLists = (l1, l2) => {
    let p1 = l1;
    let p2 = l2;
    let mergedList = new ListNode(0);
    let tail = mergedList;
    while (true) {
      if (p1 === null && p2 === null) {
        break;
      }
      if (p1 === null) {
        tail.next = p2;
        break;
      }
      if (p2 === null) {
        tail.next = p1;
        break;
      }
      if (p1.val < p2.val) {
        tail.next = p1;
        tail = tail.next;
        p1 = p1.next;
      } else {
        tail.next = p2;
        tail = tail.next;
        p2 = p2.next;
      }
    }
    return mergedList.next;
  };

  // fast merge - merge 2 different lists on each loop (similar to merge sort)
  // let lists = [
  //   [13, 14, 15, 16],
  //   [9, 10, 11, 12],
  //   [5, 6, 7, 8],
  //   [1, 2, 3, 4],
  // ];
  // assuming 'm' is max size of each list
  // loop 1
  // lists = [
  //   [5, 6, 7, 8],
  //   [1, 2, 3, 4],
  //   [9, 10, 11, 12, 13, 14, 15, 16],
  // ];
  // (m comparisons)
  // loop 2
  // lists = [
  //   [1, 2, 3, 4, 5, 6, 7, 8],
  //   [9, 10, 11, 12, 13, 14, 15, 16],
  // ];
  // (m comparisons)
  // loop 3
  // lists = [
  //   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  // ];
  // (2 * m comparisons)
  //

  while (lists.length > 1) {
    let l1 = lists.shift();
    let l2 = lists.shift();
    let res = mergeTwoLists(l1, l2);
    lists.push(res);
  }
  return lists[0];

  // slow merge - create one result list and append every list to it one at a time
  // let lists = [
  //   [13, 14, 15, 16],
  //   [9, 10, 11, 12],
  //   [5, 6, 7, 8],
  //   [1, 2, 3, 4],
  // ];
  // assuming 'm' is max size of each list
  // loop 0 - res => [0]
  //          (0 comparisons)
  // loop 1 - res => [0, 1, 2, 3, 4]
  //          (1 comparison, append to end)
  // loop 2 - res => [0, 1, 2, 3, 4, 5, 6, 7, 8]
  //          (1 + m comparisons, append to end)
  // loop 3 - res => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  //          (1 + 2*m comparisons, append to end)
  // loop 4 - res => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  //          (1 + 3*m comparisons, append to end)
  // let res = null;
  // while (lists.length !== 0) {
  //   let l1 = lists.pop();
  //   if (l1 === null) {
  //     continue;
  //   }
  //   res = mergeTwoLists(res, l1);
  // }
  // return res;
};
