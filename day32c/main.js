function sumOfArray(array) {
    return array.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
