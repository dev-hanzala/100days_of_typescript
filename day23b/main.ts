function productOfTwoFloats (num1: number, num2: number): number{
	let result = Math.round((num1*num2)*100)/100;
	return result;
};

console.log(productOfTwoFloats(1.4,2.123));
