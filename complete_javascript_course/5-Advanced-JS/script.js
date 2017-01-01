// Function Constructor
/*
var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge =
function() {
  console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

// instantiation
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

Inheritance & Prototype chain
*/

// Object.create

/*
var personProto = {
  calculateAge: function() {
    console.log(2016 - this.yearOfBirth)
  }
}

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
  name: { value: 'jane' },
  yearOfBirth: { value: 1969 },
  job: { value: 'designer' }
});
*/

// Primiteves vs Objects

var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var object1 = {
  name: 'John',
  age: 26
}

var object2 = object1;
object1 = 30;
console.log(object1.age);
console.log(object2.age);
