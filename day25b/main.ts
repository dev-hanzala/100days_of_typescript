function swapValues(){
	let a =5, b=10;
	console.log(`Initial values: a = ${a}, b = ${b}.`);
	let temp = a;
	a = b;
	b = temp;
	console.log(`Final values: a = ${a}, b = ${b}`);
	
};

swapValues();