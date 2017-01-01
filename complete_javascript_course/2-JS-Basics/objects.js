// Lecture : objects
/*
var array = [1, 2, 3];
arr[0];

// Objects have key value pairs

// object literal
var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false
};

// use dot notation
console.log(john.lastName);
// use brackets notation with key
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

// data mutation

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = "retired";
jane['isMarried'] = true;

console.log(jane);
*/
// Object Methods
/*
var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function() {
    return 2016 - this.yearOfBirth;
  }
};

console.log(john.family[2]);
> Bob
*/

console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);

// Objects can contain functions - these functions are called Methods - Methods are functions associated with Objects

// v2.0

var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function() {
    this.age = 2016 - this.yearOfBirth;
  }
};

// each object can have properties and methods
// each key / value pair is a property
// calculateAge is a method

john.calculateAge();
console.log(john);
