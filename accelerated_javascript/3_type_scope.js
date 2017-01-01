Types & Scope

Primitive Types:
numbers
strings
booleans

var a = 5;
var b = a;

variables directly hold the value

Reference Types:
objects
arrays

var a = {a: 5};

objects point to a value in memory.

var aNumber =

Scope

it is like a registry for the variables

JS knows two scopes:
Global Scope(Window). Global Scope is the topmost level. The Window object. By default all variables are registered in the global scope and are available throughout the application.

Local scope. Inside a function. Variables inside a function are kind of independent outside of that function.
It is possible to use global scope elements inside local scope.

Arrays

a collection of items. has square brackets.
[1, 2, 3]
length: 3
index: 0, 1, 2

var array = [1, 2, 3, 4];

var array = [1, 2, 3, 4];

console.log(array.reduce(function(total, value) {
  console.log('Total:' + total + 'Value: ' + value;
}));

console.log(array);
