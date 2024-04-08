const map = new Map<string, string>();

map.set("Japan:", "Tokyo");

map.set("China", "Beijing");

map.set("USA", "Washington DC");

map.set("Canada", "Quebec City");

console.log(map);

function hasCanada(map: Map<string, string>){
	if(map.has("Canada")){
		console.log(`The capital of canada is ${map.get("Canada")}`);
	} else {
		console.log("Canada is not in the map.");
	}
};

hasCanada(map);