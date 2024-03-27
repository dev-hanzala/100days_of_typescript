function squareDeclaration(number:number) {
	return number*number;
};

const squareExpression = function(number):number {
	return number*number;
};

console.log(squareDeclaration(9));
console.log(squareExpression(9));
