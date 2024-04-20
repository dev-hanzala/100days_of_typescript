function doMathOperation(operation: (num1,num2) => number, num1: number, num2: number){
	return operation(num1, num2);
};

const addTwoNumbers = (num1: number, num2: number): number => num1 + num2;

const subtractTwoNumbers = (num1: number, num2: number): number => num1 - num2;

const multiplyTwoNumbers = (num1: number, num2: number): number => num1 * num2;

const divideTwoNumbers = (num1: number, num2: number): number => num1 / num2;



console.log(doMathOperation(addTwoNumbers, 1, 6));
console.log(doMathOperation(subtractTwoNumbers, 3, 4));
console.log(doMathOperation(multiplyTwoNumbers, 4, 5));
console.log(doMathOperation(divideTwoNumbers, 10, 2));
