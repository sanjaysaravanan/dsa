function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const nodeOne = new ListNode(1, new ListNode(1, new ListNode(2)));

const displayValues = (head) => {
  while (head) {
    console.log(head.val);
    head = head.next;
  }
};

// displayValues(nodeOne);

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let currNum = null;

  let permanentHead = null;

  while (head) {
    if (permanentHead === null) {
      permanentHead = head;
      currNum = head.val;
    } else if (currNum === head.val) {
      head.next = head.next.next;
    } else {
      currNum = head.val;
    }
  }

  return permanentHead;
};

const displayHead = deleteDuplicates(nodeOne);

displayValues(displayHead);
