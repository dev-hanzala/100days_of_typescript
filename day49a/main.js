function doMathOperation(operation, num1, num2) {
    return operation(num1, num2);
}
;
var addTwoNumbers = function (num1, num2) { return num1 + num2; };
var subtractTwoNumbers = function (num1, num2) { return num1 - num2; };
var multiplyTwoNumbers = function (num1, num2) { return num1 * num2; };
var divideTwoNumbers = function (num1, num2) { return num1 / num2; };
console.log(doMathOperation(addTwoNumbers, 1, 6));
console.log(doMathOperation(subtractTwoNumbers, 3, 4));
console.log(doMathOperation(multiplyTwoNumbers, 4, 5));
console.log(doMathOperation(divideTwoNumbers, 10, 2));
