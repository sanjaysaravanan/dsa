function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const displayValues = (head) => {
  while (head) {
    console.log(head.val);
    head = head.next;
  }
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  var temp = head;
  let prev = null;
  let next;
  while (temp !== null) {
    next = temp.next;
    temp.next = prev;
    prev = temp;
    temp = next;
  }

  return prev;
};

const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

//displayValues(head);
// reverseList(head);
displayValues(reverseList(head));
