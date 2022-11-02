if (true) {
  // Declare name block variable
  let month;
  console.log(month); // => undefined
  // Declare and initialize year block variable
  let year = 1994;
  console.log(year); // => 1994
}
// name and year or not accessible here, outside the block
console.log(year); // ReferenceError: year is not defined
