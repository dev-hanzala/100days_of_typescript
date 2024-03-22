type shape = {
	kind: "Circle" | "Rectangle"
	radius?: number,
	height?: number,
	width?: number
};

let circle: shape = {
	kind: "Circle",
	radius: 5
};

console.log(circle);

let rectangle: shape = {
	kind: "Rectangle",
	height: 5,
	width: 23
};

console.log(rectangle);

