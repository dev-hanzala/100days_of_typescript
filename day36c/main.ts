function areTwoStringsIdentical(a: string, b: string): boolean{
	return a.toLowerCase() === b.toLowerCase();
};

console.log(areTwoStringsIdentical("Hello", "hello"));