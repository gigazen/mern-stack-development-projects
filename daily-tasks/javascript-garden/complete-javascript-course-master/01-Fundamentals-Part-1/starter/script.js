// precision error for by default number type, because of values larger than safe limit 2^{53} - 1
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// precision correctly maintained for bigInt type
console.log(9007199254740991n + 1n); // 9007199254740992n
console.log(9007199254740991n + 2n); // 9007199254740993n

// bigInt can be used for numbers both within or outside safe limit, here 10 can grow infinitely large within storage space
let x = 10n;
console.log(x); // 10n
console.log(typeof x); // bigint

// first convert bigInt to desired type then operate with other types
let z = Number(30n) + 2;
console.log(z); // 32

// bigInt cannot be used to do operation with other types, only can be operated with bigInt
let y = 20n + 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
const zi = "ok";
console.log(zi);
console.log(y);


// ourModule.js
import { getX } from "./file.js";
import { setX } from "./script.js";

console.log(getX()); // 1
setX(2);
console.log(getX()); // 2
console.log(9007199254740991n + 2n); // 9007199254740993n
