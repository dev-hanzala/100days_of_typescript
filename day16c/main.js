var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var priceset1 = [1200, 1500, 1800];
var priceset2 = [1275, 1660, 1100];
var combinedPrices = __spreadArray(__spreadArray([], priceset1, true), priceset2, true).sort(function (a, b) { return a - b; });
console.log(combinedPrices);
