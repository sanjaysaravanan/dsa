const p = new Promise((resolve) => {
  resolve();
});

setTimeout(() => {
  console.log("Hi");
}, 0);

p.then(() => console.log("dsds"));

console.log("line 7");
