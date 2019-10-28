//string
var myName = 'Max';
// myName = 28;
// number
var myAge = 27.5;
// myAge = 'Max';
// boolean
var hasHobbies = true;
// hasHobbies = 1;
// ts doesn't care if a number is an integer or float -- both are typed numbers
// assign types
var myRealAge; // type any
myRealAge = 27;
myRealAge = '27';
// assign types
var myTruthyAge; // type any
myTruthyAge = 27;
// myTruthyAge = '27';
// array
var hobbies = ['cooking', 'sports'];
// hobbies = [100];
// tuples -- arrays with mixed types and limited # of items
var address = ['Superstreet', 99];
// enums -- make numbers more expressive
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // 2
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor); // 100
// any
var car = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);
// functions = : string only refers to the return value
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log('Hello!');
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, 'Max'));
console.log(multiply(2, 10));
// function types
// in functions, the order is important
var myMultiply; // function type, not executable
//myMultiply = sayHello;
//myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects
var userData = {
    name: 'Max',
    age: 27
};
// in objects, the order isn't important but the names are
// types match but name of properties don't match
// userData = {
//   a: 'Hello',
//   b: 22
// };
// complex objects
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 27;
myRealRealAge = '27';
//myRealRealAge = true; // error
// check types
var finalValue = 300;
// put the type between quotation marks
if (typeof finalValue == 'number') {
    console.log('Final value is a number');
}
// never -- it doesn't return void, it returns an error -- it never returns anything
// probably not very frequently used
function neverReturns() {
    throw new Error('An error');
}
// nullable types
var cannotBeNull = 12;
// cannotBeNull = null // throws an error
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull; // type any by default, also has the value undefined
// all uninitialized js variables are undefined by default
canAlsoBeNull = null; // used to reset or clear a value
var canThisBeAny = null; // infers type nullable
//canThisBeAny = 12; // throws error, it can only be null
