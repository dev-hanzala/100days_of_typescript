function swapValues() {
    var a = 5, b = 10;
    console.log("Initial values: a = ".concat(a, ", b = ").concat(b, "."));
    var temp = a;
    a = b;
    b = temp;
    console.log("Final values: a = ".concat(a, ", b = ").concat(b));
}
;
swapValues();
