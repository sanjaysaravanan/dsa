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
  var temp = head;
  let prev = null;
  let next;
  while (temp !== null) {
    next = temp.next;
    temp.next = prev;
    prev = temp;
    temp = next;
  }

  let i = 1;

  let p = null;

  while (i <= n) {
    let t = prev;
    prev = prev.next;
    if (p && i === n) {
      p.next = prev;
    } else {
      p = t;
    }
    i++;
  }

  var temp = p;
  prev = null;
  next = undefined;
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
displayValues(removeNthFromEnd(head, 2));
