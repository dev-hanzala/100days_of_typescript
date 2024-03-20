let items = ["apple", true, 18, "mango", "banana", 94, 32, false, "orange"];

let itemsFilterdForStrings = items.filter(item => typeof item === "string");

console.log(itemsFilterdForStrings);
