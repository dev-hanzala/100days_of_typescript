let a = 5;
a =6;
console.log(a);

const b = 5;
try {
	name = "Bob"; // This line will cause an error
} catch (error) {
	console.log("Error: Can't reassign a `const`-declared variable."); // This message is shown
};
