function divdeAndGiveRemainder(dividend, divisor) {
    var quotitent = Math.floor(dividend / divisor);
    var remainder = dividend % divisor;
    return { quotitent: quotitent, remainder: remainder };
}
;
console.log(divdeAndGiveRemainder(10, 3));
