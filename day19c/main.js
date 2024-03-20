var percentages = [89, 87, 94, 54, 55, 35, 88, 67];
var averagePercentage = percentages.reduce(function (total, percentage) { return total + percentage; }, 0) / percentages.length;
console.log(averagePercentage);
