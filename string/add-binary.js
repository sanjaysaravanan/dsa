const simpleAdd = (p1, p2, c) => {
  if (p1 === "1" && p2 === "1" && c === "1") {
    return { res: "1", c: "1" };
  } else if (p1 === "1" && p2 === "1" && c === "0") {
    return { res: "0", c: "1" };
  } else if (p1 === "0" && p2 === "1" && c === "0") {
    return { res: "1", c: "0" };
  } else if (p1 === "0" && p2 === "1" && c === "1") {
    return { res: "0", c: "1" };
  } else if (p1 === "1" && p2 === "0" && c === "0") {
    return { res: "1", c: "0" };
  } else if (p1 === "1" && p2 === "0" && c === "1") {
    return { res: "0", c: "1" };
  } else if (p1 === "0" && p2 === "0" && c === "1") {
    return { res: "1", c: "0" };
  } else {
    return { res: "0", c: "0" };
  }
};

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // find the item which less in length
  // a or b

  let iterStr = "";
  let maxStr = "";
  let l1;
  let l2;

  if (a.length >= b.length) {
    iterStr = b;
    maxStr = a;
    l1 = a.length - 1;
    l2 = b.length - 1;
  } else {
    iterStr = a;
    maxStr = b;
    l1 = b.length - 1;
    l2 = a.length - 1;
  }

  let resChar = "";
  let carry = "0";

  console.log(maxStr, iterStr);

  while (l1 >= 0 || l2 >= 0) {
    let result;
    if (l2 < 0) {
      result = simpleAdd(maxStr[l1], "0", carry);
    } else {
      result = simpleAdd(maxStr[l1], iterStr[l2], carry);
    }

    carry = result.c;

    resChar = result.res + resChar;

    l1--;
    l2--;
  }

  if (carry === "1") {
    return "1" + resChar;
  }
  return resChar;
};

console.log(addBinary("1010", "1011"));
