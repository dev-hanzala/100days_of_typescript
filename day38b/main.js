"use strict";
const map = new Map();
map.set("Japan:", "Tokyo");
map.set("China", "Beijing");
map.set("USA", "Washington DC");
map.set("Canada", "Quebec City");
console.log(map);
function hasCanada(map) {
    if (map.has("Canada")) {
        console.log(`The capital of canada is ${map.get("Canada")}`);
    }
    else {
        console.log("Canada is not in the map.");
    }
}
;
hasCanada(map);
