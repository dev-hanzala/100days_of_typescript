var product = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (a, b) { return a * b; });
};
console.log(product(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
