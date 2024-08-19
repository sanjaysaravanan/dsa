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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let temp = head;

  let len = 0;

  while (temp) {
    temp = temp.next;
    len++;
  }

  const removeIndex = len - n;

  let prev = null;

  temp = head;

  if (removeIndex === 0) {
    head = head.next;
  } else {
    let i = 0;
    while (i <= removeIndex) {
      if (i === removeIndex) {
        prev.next = temp.next;
      } else {
        prev = temp;
        temp = temp.next;
      }
      i++;
    }
  }

  return head;
};

/* const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
); */

const head = new ListNode(1, new ListNode(2));

//displayValues(head);
// reverseList(head);
displayValues(removeNthFromEnd(head, 1));
