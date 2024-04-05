function randomBool() {
    var random = Math.random();
    if (random < 0.5) {
        return true;
    }
    else {
        return false;
    }
    ;
}
;
console.log(randomBool());
