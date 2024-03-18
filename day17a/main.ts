function printHobbies(...hobbies:string[]){
	hobbies.forEach(hobby => {
		console.log(`I enjoy ${hobby}.`);
		
	});
};

printHobbies("Coding", "Journaling", "Reading");