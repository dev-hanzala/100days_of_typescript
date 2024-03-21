var profile = (function () {
    var name = "Hanzala";
    var age = 17;
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        }
    };
})();
profile.displayInfo();
