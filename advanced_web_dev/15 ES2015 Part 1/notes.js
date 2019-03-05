// ES2015 Part 1
// Part One

// let, const
// template strings
// arow functions
// default parameters
// rest and spread operators
// for .. of loops
// object shorthand notation
// computer property names
// object destructuring
// array desructuring
// class keyword
// super and extends keywords
// Maps / Sets
// Promises
// Generators
// Object, Number, Array methods

// const

// you can't change the value of a primitive: string, bool, number, undefined, null and simple
// you can change the value of an object.
// const does not make objects immutable
// constants - values that cannot be redeclared, cannot create new variable for the same name

// let 
// new keyword for declaring variables
// creates block level scope
// before ES6, two scope: global and function-level scope
// if / for / while / do / try / catch create scope
// hoisting - var declaration is lifted to the top of the scope
// TDZ : Temporal Dead Zone

// Template Strings - String Interpolation

`Hello ${firstName} ${lastName}`

// Arrow Functions

var add = function(a, b) {
    return a + b;
}

var add = (a,b) => { return a + b; }
const add = (a,b) => a + b; // single line

[1,2,3].map(function(value){
    return value * 2;
}); // [2,4,6]

[1,2,3].map(value => value * 2);

// arrow function do not get their own 'this' keyword

// arrow functions should never be used as methods in objects, since we will get the incorrect value of the keyword this.

// default parameters
function add(a,b ) {
    if (a == undefined) {
        a = 0;
    }
    return a + b;
}

add();

function add(a=0, b=0) {
    return a+b;
}

// for .. of loops

var arr = [1,2,3,4,5];

for(let val of arr) {
    console.log(val);
}

// Rest

function printRest(a, b, ...c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

printRest(1, 2, 3, 4, 5);

// ES5
function sumArguments() {
    var total = 0;
    for(var i=0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

// a little fancier ES5
function sumArguments() {
    var argumentsArray = [].slice.call(arguments);
    return argumentsArray.reduce(function(accumulator,nextValue) {
        return accumulator + nextValue;
    })
}

//ES2015
var sumArguments = (...args) => args.reduce((acc, next) => acc + next );

// SPREAD

// ES5
var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [7,8,9];

var combined = arr1.concat(arr2).concat(arr3);

// ES2015
var combined = [...arr1, ...arr2, ...arr3];

var arr = [3,2,4,1,7];

Math.max(arr); // NaN

// ES5
Math.max.apply(this, arr); // 5

//ES2015
Math.max(...arr); // 5

// another example

function sumValues(a,b,c) {
    return a + b + c;
}

var nums = [12,15,20];

// ES5
sumValues.apply(this, nums); // 47

// ES2015
sumValues(...nums); // 47









