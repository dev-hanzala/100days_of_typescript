var laptop = {
    maker: "Lenovo",
    brand: "Thinkpad",
    series: "X1 Carbon",
    generation: "Gen 3",
    year: "2013",
    describer: function () {
        console.log("My laptop is a ".concat(laptop.maker, " ").concat(laptop.brand, " ").concat(laptop.series, " ").concat(laptop.generation, " from ").concat(laptop.year, "."));
    }
};
laptop.describer();
