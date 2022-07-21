/*
116. Populating Next Right Pointers in Each Node
Medium

7086
243

You are given a perfect binary tree where all leaves are on
the same level, and every parent has two children. The binary
tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node.  If
there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

Input: root = [1,2,3,4,5,6,7]
Output: [1,#,2,3,#,4,5,6,7,#]
Explanation: Given the above perfect binary tree (Figure A), your
function should populate each next pointer to point to its next
right node, just like in Figure B. The serialized output is in
level order as connected by the next pointers, with '#' signifying
the end of each level.
*/

// key insight here is that root.next is connected
// time - O(n) - recursive solution
// space - O(1) - dfs stack doesn't count here!!!
var connect = function (root) {
  if (root === null) {
    return root;
  }
  if (root.left !== null) {
    root.left.next = root.right;
  }
  if (root.next !== null && root.right !== null) {
    root.right.next = root.next.left;
  }
  connect(root.left);
  connect(root.right);
  return root;
};

// time - O(n) - bfs solution
// space - O(n) - queue length
var connect = function (root) {
  if (root === null) {
    return root;
  }

  let l1 = [root];

  while (true) {
    if (l1.length === 0) {
      break;
    }

    let l2 = [];

    while (true) {
      if (l1.length === 0) {
        break;
      }

      let currNode = l1.shift();
      if (currNode === null) {
        continue;
      }

      if (l1.length === 0) {
        currNode.next = null;
      } else {
        currNode.next = l1[0];
      }

      l2.push(currNode.left);
      l2.push(currNode.right);
    }

    l1 = [...l2];
  }

  return root;
};
