let person = {
	name: "Alice",
	getName: function(){
		return this.name
	}
};

console.log(person.getName());