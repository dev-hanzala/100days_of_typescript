function greet(name) {
    if (name === void 0) { name = "Anonymous"; }
    console.log("Hello ".concat(name));
}
;
console.log(greet());
console.log(greet("Adil"));
