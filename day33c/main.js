function getNextBirthday(month, day) {
    var today = new Date();
    var year = today.getFullYear();
    var birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(birthday.getFullYear() + 1);
    }
    return birthday;
}
console.log(getNextBirthday(9, 28).toLocaleDateString());
