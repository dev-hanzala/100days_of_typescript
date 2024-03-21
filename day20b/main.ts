function makeAdder(valueToAdd: number): (number) => number{
	return function (number:number): number {
		return number + valueToAdd;
	};
};

let fiveAdder = makeAdder(5);
console.log(fiveAdder(23));
