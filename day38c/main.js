"use strict";
const students = new Map();
students.set(1, "Alice");
students.set(2, "Bob");
students.set(3, "Charlie");
students.forEach((name, id) => {
    console.log(`ID: ${id}, Name: ${name}`);
});
