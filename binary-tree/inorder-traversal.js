//  Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const tree = new TreeNode(1);

var arr = [];
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const inOrderTravesal = (root, prefix = "") => {
  if (!root) {
    console.log(prefix);
    return;
  }

  if (root.left || root.right) {
    prefix = `${prefix}${root.val}->`;
    root.left && inOrderTravesal(root.left, prefix);
    root.right && inOrderTravesal(root.right, prefix);
  } else {
    prefix = `${prefix}${root.val}`;
    arr.push(prefix);
  }
  return arr;
};

console.log(inOrderTravesal(tree));
