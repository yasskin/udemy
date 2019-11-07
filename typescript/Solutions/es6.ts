// let and const
console.log('Let and Const');
// let has block-level scope
// var has global scope
// const has a constant value that can't channge; immutable data structures
let variable = 'test';
const maxLevels = 100;
console.log(maxLevels);
//maxLevels = 99;  // const is immutable -- this won't work

// Block scope
function reset() {
  // console.log(variable); // no access to this variable
  let variable = null;
  console.log(variable);
}
reset();
console.log(variable);

// Arrow Functions
console.log('ARROW FUNCTIONS');
const addNumbers = function(number1: number, numlber2: number): number {
  return number1 + numlber2;
};
console.log(addNumbers(10, 3));
const multiplyNumbers = (number1: number, number2: number) => {
  return number1 * number2;
};
console.log(multiplyNumbers(10, 3));

const greet = () => {
  console.log('Hello!');
};

const greetFriend = friend => console.log(friend);
console.log(greetFriend('Manu'));

// Default Parameters
console.log('DEFAULT PARAMETERS');

// set default parameters
const countdown = (start: number = 10): void => {
  while (start > 0) {
    start--;
  }
  console.log('Done!', start);
};
console.log(); // no value/argument passed

// Rest & Spread Operators
console.log('REST & SPREAD');

// Allows you to work with arrays and list of data
const numbers = [1, 10, 9, 95, -5];
console.log(Math.max(33, 99, -10, 1)); // 99

// spread operator - it spreads out the array into single values
// allows you to transform your array without looping through them
console.log(Math.max(...numbers)); // 99

// rest parameter - turns the arguments into an array
function makeArray(...args: number[]) {
  return args; // returns an array
}

// Since TypeScript 3, you can also use tuples as types for rest expressions.
// For example, these two function signatures are equal:

function printInfo(name: string, age: number) {
  console.log('My name is ' + name + ' and I am ' + age + ' years old!');
}

function printInfo2(...info: [string, number]) {
  console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}

// DESTRUCTURING ARRAYS
console.log('DESTRUCTURING');
const myHobbies = ['Cooking', 'Sports'];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
// console.log(myHobbies[0], myHobbies[1]);
const [hobby1, hobby2] = myHobbies;

const userData2 = { userName2: 'Max', age2: 27 };
const { userName2: myName2, age2: myAge2 } = userData2; // with aliases
// const userName2 = userData2.userName;
// const age2 = userData2.age;
console.log(myName2, myAge2);

// Template Literals
console.log('TEMPLATE LITERALS');
// Template Literals are strings with more features
const userName3 = 'Noah';
const greeting = `This is a heading!
  I'm ${userName3}
  This is cool!
`;
//const greeting = "Hello, I'm " + userName3;
console.log(greeting);
