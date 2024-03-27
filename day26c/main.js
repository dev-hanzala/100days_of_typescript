function squareDeclaration(number) {
    return number * number;
}
;
var squareExpression = function (number) {
    return number * number;
};
console.log(squareDeclaration(9));
console.log(squareExpression(9));
