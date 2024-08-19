//Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const displayValues = (head) => {
  while (head) {
    console.log(head.val);
    head = head.next;
  }
};

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  // storing the next node value
  const nextNode = node.next;

  // changing the value of the node
  node.val = nextNode.val;

  // move the node to next to next
  node.next = nextNode.next;
};

const head = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);

head.next = node2;
node2.next = node3;

deleteNode(node2);

displayValues(head);
