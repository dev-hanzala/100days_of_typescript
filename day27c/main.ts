function displayEachProperty(object: object){
	for(let property in object){
		console.log(`${property}: ${object[property]}`);
		
	};
};

displayEachProperty({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });