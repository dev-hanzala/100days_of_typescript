function daysUntillNextYear() {
    var today = new Date();
    var nextYear = new Date(today.getFullYear() + 1, 0, 1);
    var diff = nextYear.getTime() - today.getTime();
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return days;
}
;
console.log(daysUntillNextYear());
