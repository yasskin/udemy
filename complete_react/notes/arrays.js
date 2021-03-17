// /*  Array Methods */

// const { filter, reduce, find } = require("async");

// const myArray = [1, 2, 3, 4];

// map();
// // returns a new array based on existing array
// myArray.map(el => el + 1);
// myArray.map(() => 'b');

// filter();

// // Filter gives us back a new array

// const myArray = [1, 3, 5, 7, 9];

// // whatver return true is kept, false is omitted
// myArray.filter(el => el > 4)[(5, 7, 9)];
// myArray = [1, 3, 5, 7, 9];

// reduce();

// find();

// includes();

// const myArray = [1, 2, 3, 4, 5];

// myArray.includes(3);
// true;
// myArray.includes(9);
// false;
// myArray.includes(2, 3);
// false;
// myArray.includes(2, 1);
// true;

// const newArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
// newArray[2];
// {
//   id: 3;
// }

// newArray.includes({ id: 2 });
// false;

// takes a single element  and checks to see if it exists

// Array Methods

const myArray = [1, 2, 3, 4, 5];

map();
// returns a new array based on existing array
myArray.map((el) => el + 1);
// [2, 3, 4, 5, 6]
myArray.map(() => 'b');
// ['b', 'b', 'b', 'b', 'b']

// return a new array of elements that meet the condition
filter();
myArray.filter((el) => el > 2);
// [3, 4]

// find the first element that returns true, based on the condition we provide
find();
myArray.find((el) => el === 5);
// 5
myArray.find((el) => el > 4);
// 5
const peopleArray = [{ id: 1 }, { id: 4 }, { id: 7 }];
peopleArray.find((person) => person.id === 4);
// {id: 4}

reduce();
myArray.reduce(
  (accumulator, currentElement) => accumulator + currentElement,
  0
);

// returns true or false - takes a single argument, which is the element that we want
includes();
myArray.includes(3);
// true
myArray.includes(9);
// false
myArray.includes(3, 4); // includes 3, starting at index 4
// false
const newArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
newArray.includes();
