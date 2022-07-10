/*
20. Valid Parentheses
Easy

13743
629

Given a string s containing just the characters
'(', ')', '{', '}', '[' and ']', determine if the
input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true
*/

// time - O(n) - iterate through string
// space - O(n) - keep track of open parens
var isValid = function (s) {
  let st = [];

  let open = ["(", "[", "{"];

  let parenMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    let currChar = s[i];

    if (Object.keys(parenMap).includes(currChar)) {
      // if current char is an open paren, add to stack
      st.push(s[i]);
    } else {
      if (st.length === 0) {
        return false;
      }

      let openParen = st.pop();
      if (parenMap[openParen] !== currChar) {
        return false;
      }
    }

    //     // another way to solve this problem
    //     if (open.includes(s[i])) {
    //       // if current char is an open paren, add to stack
    //       st.push(s[i]);
    //     } else {
    //       // if there is a closing paren without any open parens,
    //       // then we know that this is not a valid configuration
    //       if (st.length === 0) {
    //         return false;
    //       }
    //       // pop open paren from the stack and confirm it matches
    //       // with the current close paren
    //       let openParen = st.pop();
    //       if (openParen === '(' && s[i] !== ')') {
    //         return false;
    //       }
    //       if (openParen === '[' && s[i] !== ']') {
    //         return false;
    //       }
    //       if (openParen === '{' && s[i] !== '}') {
    //         return false;
    //       }
    //     }
  }

  // if the stack length is greater than 0, that means there are still
  // some open parens which don't have matching close paren
  return st.length === 0;
};
