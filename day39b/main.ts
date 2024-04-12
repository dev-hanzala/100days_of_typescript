function findSeason(month: number){
	switch(month){
      case 1:
      case 2:
      case 3:
         return "spring";
      case 4:
      case 5:
      case 6:
         return "summer";
      case 7:
      case 8:
      case 9:
         return "fall";
      case 10:
      case 11:
      case 12:
         return "winter";
      default:
         return "error";
   }
}

console.log(findSeason(3));