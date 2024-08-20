function doOperation(operation, op1, op2) {
  return operation(op1, op2);
}

console.log(doOperation((a, b) => a + b, 10, 20));

const bio = { name: "Same" };
const obj = { a: "", b: 120, bio };

const obj3 = { ...obj };

const obj4 = JSON.parse(JSON.stringify(obj));

const arr = [1, 1, 2, 2, 2, 3, 4, -1, -3];

function giveRepeated() {
  const map = {};
  // const arrRepeated = [];
  for (let v of arr) {
    // if (map[v] === 1) {
    //   arrRepeated.push(v);
    //   map[v] += 1;
    // } else
    if (map[v]) {
      map[v] += 1;
    } else {
      map[v] = 1;
    }
  }
  console.log(map);
  for (let key in map) {
    if (map[key] > 1) {
      console.log(key);
    }
  }
}

giveRepeated();
