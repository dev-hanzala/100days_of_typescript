let priceset1 = [1200, 1500, 1800];
let priceset2 = [1275, 1660, 1100];

let combinedPrices = [...priceset1, ...priceset2].sort((a,b) => a - b);
console.log(combinedPrices);
