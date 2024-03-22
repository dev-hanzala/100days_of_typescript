interface Student{
	name: string;
	age: number;
	subjects: string[];
};

let student: Student = {
	name: "Aukasha",
	age: 18,
	subjects: ["Physics", "Islamiat", "Urdu", "Maths", "Computer", "English"]
};

console.table(student);
