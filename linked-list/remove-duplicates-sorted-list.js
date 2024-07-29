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
  const tempArr = [];
  let currNum = null;

  while (head) {
    if (currNum !== head.val) {
      currNum = head.val;
      tempArr.push(currNum);
    }
    head = head.next;
  }

  // 1 => currNum = 1, tempArr = [1]
  // 1 => currNum = 1, tempArr = [1]
  // 2 => currNum = 2, tempArr = [1,2]

  let tempHead = null;
  let permanentHead = null;
  for (let v of tempArr) {
    if (tempHead === null) {
      permanentHead = new ListNode(v);
      tempHead = permanentHead;
    } else {
      tempHead.next = new ListNode(v);
      tempHead = tempHead.next;
    }
  }

  // 1 => permanentHead = ListNode(1, null); tempHead = permanent;
  // 2 => ListNode(1, ListNode(2, null)); tempHead = ListNode(2, null);
  return permanentHead;
};

const displayHead = deleteDuplicates(nodeOne);

displayValues(displayHead);
