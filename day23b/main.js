function productOfTwoFloats(num1, num2) {
    var result = Math.round((num1 * num2) * 100) / 100;
    return result;
}
;
console.log(productOfTwoFloats(1.4, 2.123));
