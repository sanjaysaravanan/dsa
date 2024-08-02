const btn = document.querySelector("button");

const promise = new Promise((resolve) => {
  btn.addEventListener("click", () => {
    resolve("Some Resolvement");
  });
});

Promise.resolve();

async function myFn() {
  return await promise;
}

const res = myFn();

console.log(await res);
