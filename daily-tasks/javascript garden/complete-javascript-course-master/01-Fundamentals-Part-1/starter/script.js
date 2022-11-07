var v;
typeof v; // 'undefined'
typeof doesnotExist; // 'undefined'
v = "1";
typeof v; // 'string'
v = 2;
typeof v; // 'number'
v = true;
typeof v; // 'boolean'
v = {};
typeof v; // 'object'
v = Symbol();
typeof v; // 'symbol'
var v = null;
typeof v; // 'object' OOPS, bug!! should be null type
v = function () {};
typeof v; // 'function' why?? function is subtype of object, so it should be object, although it is useful
v = [1, 2, 3];
typeof v; // 'object'  why?? function is subtype of object, typeof returns the subtype; array is also subtype of object, but typeof returns main type object
