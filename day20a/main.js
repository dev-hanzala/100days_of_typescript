var scores = [100, 128, 99, 98, 101];
var agverageScore = scores.reduce(function (total, score) { return total + score; }) / scores.length;
console.log(agverageScore);
