function divdeAndGiveRemainder(dividend: number, divisor: number): {quotitent: number, remainder: number}{
	let quotitent = Math.floor(dividend/divisor);
	let remainder = dividend%divisor;
	return {quotitent, remainder}
};

console.log(divdeAndGiveRemainder(10,3));
