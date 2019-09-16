# Syntax Changes and Additions

# Global Scope
# Local or Function Scope
## ES6 allows Block Scope

## Block scope contains the variable 

## Arrays like Objects are Reference Types. It holds a pointer to the space in memory. We only change the values to which the pionter points.

### let and const don't hoist variables, like var; they have to be declared before initializing them.

10. Fat Arrow

### Long and Short Ways to do the same thing
```

var fn = () => {
    console.log('Hello!');
}

var fn = () => console.log('Hello!');

```
```

var fn = function() {
    return 'Hello';
}

function fn() {
    return 'Hello';
}


var fn = () => 'Hello';

```
## you can leave out the parenthesis if there is only one argument
```
var fn = a => a + 5;

console.log(fn(3)); // return 8

var fn = (a, b) => a + b;

```
## fat arrow function and the this keyword

```
// this refers to the global scope, which is the window object

function fn() {
  console.log(this);
}

//fn();

var fn2 = () => console.log(this);

fn2();

```

## with fat arrow functions, this keeps the context in which it is defined

11. Functions and Default Parameters

```
function isEqualTo(number = 10, compare) {
  console.log(number);
  console.log(compare);
  return number == compare;
}

console.log(isEqualTo(11, "11"));
```
12. Object Literal Extensions
```
let name = 'Anna';
let age = 25;

let obj = {
  name,
  age,
  greet () {
      console.log(this.name + ", " + this.age);
  }
}

console.log(obj); // { age: 25, name: 'Anna' }

obj.greet(); // "Anna, 25"

```
## The rest operator - takes a list of values and makes it into an array
```
// let numbers = [1,2,3,4,5];

function sumUp(...toAdd) {   
    for (let i = 0; i < toAdd.length; i++>) {
        result += toAdd[i];
    }
    return result;
}

console.log(sumUp(10, 20, 100)); // 130

```
### The spread operator - takes an array and makes a list of values
```
let numbers = [1,2,3,4,5];

console.log(Math.max(...numbers)); // 5
```
## the for-of-loop
```
let testResults = [1.23, 1.10, 4.1];

for (let testResult of testResults) {
    console.log(testResult);
}

```
## Template literals
```
let name = 'Max';

let description = `
    I'm ${name + '!!!'}, a
    multi-line
    string
`;

console.log(description);
```
## Destructuring Arrays
```
let numbers = [1,2,3];

let [a, b] = numbers;
let [a, ...b] = numbers;

```
```
let a = 5;
let b = 10

[b, a] = [a, b];
```
## Destructuring Objects
```
let obj = {
    name: 'Max',
    age: 27,
    greet: function() {
        console.log('Hello');
    }
};

let { name, greet: hello } = obj; // hello is an alias

console.log(name, greet);

hello();

```
## Destructuring Summary

* Tool to get certain values from an array or object
* For object destructuring, you pull out values by property name
* For array destructuring, you pull them out by position

## Wrap Up

