"use strict";
const vowels = "aeiouAEIOU";
let str = "Hello, world";
for (const char of str) {
    if (vowels.includes(char)) {
        console.log(`First vowel found: ${char}`);
        break;
    }
    console.log(char);
}
;
