function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
;
var fiveAdder = makeAdder(5);
console.log(fiveAdder(23));
