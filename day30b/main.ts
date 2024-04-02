function parseStrOrParseFloat(str: string){
	// This function is used to parse a string as a integer or float value.
	let result;
	if(isNaN(parseFloat(str))){
      result = 0;
   } else if(str.indexOf(".") === -1){
		result = parseInt(str);
   } else {
		result = parseFloat(str);
	};
   return result;
}

console.log(parseStrOrParseFloat("200.66"));
