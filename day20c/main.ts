let profile = (function(){
	let name = "Hanzala";
	let age = 17;
	return{
		displayInfo: function(){
			console.log(`Name: ${name}, Age: ${age}`);
			
		}
	};
})();

profile.displayInfo()