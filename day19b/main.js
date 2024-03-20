var items = ["apple", true, 18, "mango", "banana", 94, 32, false, "orange"];
var itemsFilterdForStrings = items.filter(function (item) { return typeof item === "string"; });
console.log(itemsFilterdForStrings);
