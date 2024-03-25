function mixedTypeAdder (number:number, string:string){
	let result = number + Number(string);
	return result;
};

console.log(mixedTypeAdder(54,"6"));
