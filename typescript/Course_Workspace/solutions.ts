// Exercise 1 - As Arrow Function
// var double = function(value) {
//   return value * 2;
// };
const double = (value: number) => value * 2;

console.log(double(10));

// Exercise 2
// var greet = function(name) {
//   if (name === undefined) {
//     name = 'Max';
//   }
//   console.log('Hello, ' + name);
// };

const greet2 = (name = 'Max') => {
  console.log('Hello, ' + name);
};

greet2();
greet2('Anna');

// Exercise 3
var numbers2 = [-3, 33, 38, 5];
//console.log(Math.min.apply(Math, numbers2));
console.log(Math.min(...numbers2));

// Exercise 4 = Spread Operator
var newArray = [55, 20];
//Array.prototype.push.apply(newArray, numbers);
newArray.push(...numbers2);
console.log(newArray);

// Exercise 5 = Destructuring Arrays
var testResults = [3.89, 2.99, 1.38];
// var result1 = testResults[0];
// var result2 = testResults[1];
// var result3 = testResults[2];
// console.log(result1, result2, result3);
const [result1, result2, result3] = testResults;
console.log([result1, result2, result3]);

// Exercise 6 - Destructuring
var scientist = { firstName: 'Will', experience: 12 };
// var firstName = scientist.firstName;
// var experience = scientist.experience;
const { firstName, experience } = scientist;
console.log(firstName, experience);
