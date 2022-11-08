var studentName1 = "Frank";
var studentName2 = `${studentName1}`;

var workshopEnrollment1 = 16;
var workshopEnrollment2 = workshopEnrollment1 + 0;

// when types are same, both == and === works same
studentName1 == studentName2; // true
studentName1 === studentName2; // true

workshopEnrollment1 == workshopEnrollment2; // true
workshopEnrollment1 === workshopEnrollment2; // true
