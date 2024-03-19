function createDynamicObject(key, value) {
    var dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
;
console.log(createDynamicObject("color", "blue"));
