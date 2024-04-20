// Example of using Promise.all to handle multiple promises simultaneously
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve) => {
  setTimeout(resolve, 100, "foo");
});

// Using Promise.all to execute and gather results from multiple promises
Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // Expected output: [3, 42, "foo"]
});
// This code snippet illustrates the use of Promise.all to wait for all the promises to resolve before logging their values.