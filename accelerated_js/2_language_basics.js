JSBin
http://jsbin.com/?js,console

Plunker
http://plnkr.co/

variables are data structures that allow you to store data.

types of variables:
number
string
boolean
array - collection of values
undefined
null
NaN

variables cannot start with a number
var is also a reserved keyword

undefined is a javascript error message. variables should not be set to undefined.
null has the same value as undefined internally in javascript. But it is a different type.
NaN could be a result of a mathematical calculation. Error message from operations that cannot be carried out. It is a kind of undefined number.

Syntax
"use strict" - requires strict Syntax - requires ; and var keywords

var is only needed when declaring a new variable.

hoisting.

var var1; // declaration
var1 = 5; // initialization

Functions

some kind of enclosed code you can execute multiple times.

{} generally just mean we are creating a block.

functions are not called automatically.
parentheses are important to call a function.

function keyword + name

Control Section: If Statements

Control structures allow you to tell the browser when to

If statement. Only accepts true or false.
1 = true
0 = false
JavaScript translates number into a boolean.

var condition = null;
var anotherCondition = false;

if (condition) {
  console.log('Executed');
} else if (anotherCondition) {
  console.log('Still Executed');
} else {
  console.log('Not Executed');
}

Another control structure is the switch statement:

var luckyNumber = 8;

switch (luckyNumber) {
  case 1:
    console.log('Is 1');
    break;
  case 8:
    console.log('Is 8');
    break;
  default:
    console.log('Default');
    break;
}

For Loop:

for (var i = 0; i <= 5; i++) {
  console.log(i);
}

for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 2; j++) {
  console.log(i * j);
  }
}

for (var i = 0; i < 5; i++) {
  if (i == 1) {
    continue;
  }
    console.log(i);
}

continue (only finishes the current iteration)

to loop through an array:

var array = [1, 2, 3, 4]

for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

while loop

var condition = true;
var i = 0;

while (condition) {
  if (i == 3) {
    condition = false;
  }
  console.log(i);
  i++;
}

var condition = false;

do loop.

do {
  console.log('Executed')
}

while (condition);

Operators

Floating point number require a .toFixed() method to avoid a bug.

(a / b).toFixed(2)

var a = 10;
var b = 3;

console.log(a % b);

modulus returns the remaining value.
