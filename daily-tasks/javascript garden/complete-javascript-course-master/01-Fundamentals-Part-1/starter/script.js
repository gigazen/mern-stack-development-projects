// Call the hoisted function
addition(4, 7); // => 11
// The variable is hoisted, but is undefined
substraction(10, 7); // TypeError: substraction is not a function
// Function declaration
function addition(num1, num2) {
  return num1 + num2;
}
// Function expression
var substraction = function (num1, num2) {
  return num1 - num2;
};
