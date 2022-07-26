/*
207. Course Schedule
Medium

10434
412

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0. So it is possible.

Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
*/

var canFinish = function (numCourses, prerequisites) {
  let m = new Map();

  for (let i = 0; i < numCourses; i++) {
    m.set(i, []);
  }

  for (let i = 0; i < prerequisites.length; i++) {
    let [course, prereq] = prerequisites[i];

    let prereqs = m.get(course);
    prereqs.push(prereq);
  }

  console.log({ m });

  let dfs = (m, currNode, visited) => {
    if (visited.includes(currNode)) {
      console.log("node already visited");
      return false;
    }

    visited.push(currNode);
    let children = m.get(currNode);
    for (let i = 0; i < children.length; i++) {
      let subRes = dfs(m, children[i], visited);
      if (subRes === false) {
        return false;
      }
    }
    visited.pop();

    return true;
  };

  let visited = [];
  let res = true;
  m.forEach((value, key) => {
    let currNode = key;
    // let currChildren = value;
    console.log(key, value);
    let subRes = dfs(m, currNode, visited);
    if (subRes === false) {
      res = false;
    }
  });

  return res;
};

let numCourses = 5;
let arr = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
  [3, 4],
];
canFinish(numCourses, arr);

numCourses = 3;
arr = [
  [0, 1],
  [1, 2],
  [2, 0],
];
canFinish(numCourses, arr);
