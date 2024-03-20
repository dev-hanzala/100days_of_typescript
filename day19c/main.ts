let percentages = [89, 87, 94, 54, 55, 35, 88, 67];

let averagePercentage = percentages.reduce((total, percentage) => total + percentage, 0) / percentages.length;

console.log(averagePercentage);
