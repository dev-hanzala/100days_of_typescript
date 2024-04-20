// This program demonstrates how promises work by creating a new promise that is resolved half the time ad rejected the other half.

//The following is the promise declaration.
const promise = new Promise<string>((resolve, reject) => {
	const resolved = Math.random() > 0.5;
	if (resolved) {
      resolve("Resolved!");
   } else {
      reject("Rejected!");
   };
});

//The following is the promise chain.

promise.then((value) => {
   console.log(value);
}).catch((reason) => {
   console.log(reason);
});