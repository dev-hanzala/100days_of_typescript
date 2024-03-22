var vehicles;
(function (vehicles) {
    vehicles[vehicles["car"] = 0] = "car";
    vehicles[vehicles["bus"] = 1] = "bus";
    vehicles[vehicles["motorcycle"] = 2] = "motorcycle";
})(vehicles || (vehicles = {}));
;
console.log(vehicles);
