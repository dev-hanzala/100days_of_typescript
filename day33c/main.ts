function getNextBirthday(month: number, day: number) {
	const today = new Date();
	let year = today.getFullYear();
	const birthday = new Date(year, month - 1, day);
	if (birthday < today){
		birthday.setFullYear(birthday.getFullYear() + 1);
	}
	return birthday;
}

console.log(getNextBirthday(9, 28).toLocaleDateString());
