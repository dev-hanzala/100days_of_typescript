function combineTextAndNumber(text: string, number: number): string {
	let combinedString = text + number;
	return combinedString;
};

let age = combineTextAndNumber("age: ", 17);
console.log(age);
