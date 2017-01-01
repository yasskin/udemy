///////////////////////////////////////
// Lecture: Hoisting

// functions

calculateAge(1965);

function calculateAge(year) {
  console.log(2016 - year);
}

var retirement = function(year) {
  console.log(65 - (2016 - year));
}

retirement(1971);

// variables

var age = 23;
console.log(age);

function foo() {
  var age = 65;
  console.log(age);
}

foo();
console.log(age);

///////////////////////////////////////
// Lecture: Scoping


// First scoping example
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}

*/

///////////////////////////////////////
// Lecture: The this keyword

/*
calculateAge(1985);

function calculateAge(year) {
  console.log(2016 - year);
  console.log(this);
}
*/

var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);
    console.log(2016 - this.yearOfBirth);
/*
    function innerFunction() {
      console.log(this);
    }
    innerFunction();
*/

  }
}

john.calculateAge();

var Mike = {
  name: "Mike",
  yearOfBirth: 1984
}

// method borrowing

mike.calculateAge = john.calculateAge;
mike.calculateAge();

// this variable is only assigned a value when the object calls a method.
