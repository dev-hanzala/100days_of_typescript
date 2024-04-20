let dontSayHello = false;

const helloPromise = new Promise<string>((resolve, reject) => {
	setTimeout(() => {
		resolve("Hello world!");
	}, 2000);
	if (dontSayHello){
		reject("Can't say hello");
	};
});

helloPromise.then((message) => {
   console.log(message);
}).catch((err) => {
	console.log(err);
});