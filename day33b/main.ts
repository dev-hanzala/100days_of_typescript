function daysUntillNextYear(){
	let today = new Date();
   let nextYear = new Date(today.getFullYear() + 1, 0, 1);
   let diff = nextYear.getTime() - today.getTime();
   let days = Math.floor(diff / (1000 * 60 * 60 * 24));
   return days;
};

console.log(daysUntillNextYear());