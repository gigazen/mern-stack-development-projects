// Use == when types are different or when implicit type coercion is required and for shorter code. To compare different items, if types are different then == allows implicit type coercion of those items, thus for ==, comparing types becomes immaterial, == only compares values

// Use === when types are same or when implicit type coercion is not required, but it creates lengthy code. To compare different items, === disallows any implicit type coercion of those items, thus === compares both types and values

var workshop1 = { topic: null };
var workshop2 = {};

if (
  (workshop1.topic === null || workshop1.topic === undefined) &&
  (workshop2.topic === null || workshop2.topic === undefined)
) {
  console.log(
    "validated using === that topics of workshop1 and workshop2 are empty"
  );
}

if (workshop1.topic == null && workshop2.topic == null) {
  console.log(
    "validated using == that topics of workshop1 and workshop2 are empty"
  );
}
