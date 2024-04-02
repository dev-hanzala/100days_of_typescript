var fruits = ["apple", "orange", "banana", "cherry"];
function replaceBananaWithMango(array) {
    array[array.indexOf("banana")] = "mango";
}
replaceBananaWithMango(fruits);
console.log(fruits);
