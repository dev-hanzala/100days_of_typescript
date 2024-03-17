let laptop = {
	maker: "Lenovo",
	brand: "Thinkpad",
	series: "X1 Carbon",
	generation: "Gen 3",
	year: "2013",
	describer: function(){
		console.log(`My laptop is a ${laptop.maker} ${laptop.brand} ${laptop.series} ${laptop.generation} from ${laptop.year}.`);
	}
};
laptop.describer();
