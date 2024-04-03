"use strict";
function getCurrentDate() {
    const current = new Date();
    const date = String(current.getDate()).padStart(2, '0');
    const month = String(current.getMonth() + 1).padStart(2, '0');
    const year = String(current.getFullYear());
    return `${date}-${month}-${year}`;
}
;
console.log(getCurrentDate());
