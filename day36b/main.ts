function isNumberDivisibleByTwoAndThree(value: number): boolean{
	return value % 2 === 0 && value % 3 === 0;
};

console.log(isNumberDivisibleByTwoAndThree(12));