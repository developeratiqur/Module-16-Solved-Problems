// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
// Bangla of a student.

var Mathematics = 75.25;
var Biology = 65;
var Chemistry = 80;
var Physics = 35.45;
var Bangla = 99.50;

var total = Mathematics + Biology + Chemistry + Physics + Bangla;

var averageMarks = total / 5;
var finalMarks = averageMarks.toFixed(2);

console.log(finalMarks);

// Average Marks is 71.04