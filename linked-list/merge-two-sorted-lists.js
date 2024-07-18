function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 */
const displayValues = (head) => {
  console.log(head);
  while (head) {
    console.log(head.val);
    head = head.next;
  }
};

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let res = null;
  let head = null;

  if (list1 === null && list2 === null) {
    return new ListNode(undefined, undefined);
  }

  while (list1 && list2) {
    let val = null;
    if (list1.val <= list2.val) {
      val = list1.val;
      list1 = list1.next;
    } else {
      val = list2.val;
      list2 = list2.next;
    }
    if (res) {
      res.next = new ListNode(val, null);
      res = res.next;
    } else {
      res = new ListNode(val, null);
    }
    if (head === null) {
      head = res;
    }
  }

  while (list1) {
    let val = list1.val;
    if (res) {
      res.next = new ListNode(val, null);
      res = res.next;
    } else {
      res = new ListNode(val, null);
    }
    list1 = list1.next;

    if (head === null) {
      head = res;
    }
  }

  while (list2) {
    let val = list2.val;
    if (res) {
      res.next = new ListNode(val, null);
      res = res.next;
    } else {
      res = new ListNode(val, null);
    }
    list2 = list2.next;
    if (head === null) {
      head = res;
    }
  }

  return head;
};

/* const l1 = new ListNode(1, new ListNode(2, new ListNode(4, null)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4, null))); */
const l1 = new ListNode(0, null);
const l2 = null;

displayValues(mergeTwoLists(l1, l2));
