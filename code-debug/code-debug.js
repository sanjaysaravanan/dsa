const p = new Promise((resolve) => {
  resolve();
});

setTimeout(() => {
  console.log("Hi");
}, 0);

p.then(() => console.log("Hello"));

console.log("Simple Log");

(function () {
  var x = 30;
  (function () {
    console.log(x++);
    var x = 100;
  })();
})();
