const product = (...numbers) => {
	return numbers.reduce((a, b) => a * b);
};

console.log(product(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));