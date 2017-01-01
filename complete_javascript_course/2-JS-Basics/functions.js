// Lecture: Functions

function calculateAge(yearOfBirth) {
  var age = 2016 - yearOfBirth;
  return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
console.log(ageJohn);

function yearsUntilRetirement(name, year) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement >= 0) {
    console.log(name + ' retires in ' + retirement + ' years.');
  } else {
    console.log(name = " has already retired.");
  }
}

yearsUntilRetirement('John,' 1990);
yearsUntilRetirement('Mike,' 1969);
yearsUntilRetirement('Mary', 1948);

// values we assign to parameters are arguments

// Lecture: Statements and Expressions

// function statement
function someFunction(parameter) {
  // code
}

// function expression
var someFunction = function(parameter) {
  // code
}

// the difference is that an expression produces a value, an outcome. statements perform an action but do not produce an immediate value

// Expressions
3 + 4;
var x = 3;

// statements
if (x === 5) {
  // do something
}

// nothing is stored as a result of this statements

// expression produces a value ; statement does an action
