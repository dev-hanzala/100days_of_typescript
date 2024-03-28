function displayEachProperty(object) {
    for (var property in object) {
        console.log("".concat(property, ": ").concat(object[property]));
    }
    ;
}
;
displayEachProperty({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });
