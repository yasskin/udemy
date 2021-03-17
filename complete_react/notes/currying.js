// currying
// technique of translating the evaluation of a function that takes multiple arguments
// take a function with multiple parameters, modify it to a function that takes one parameter at a time

const multiple = (a, b) => a * b;
multiply(3, 4);
//12

const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(5)(3);
// 15

const curriedMultiplyBy5 = curriedMultiply(5);

curriedMultiplyBy5(10);
// 50
