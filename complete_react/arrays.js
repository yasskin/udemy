/*  Array Methods */

const myArray = [1, 2, 3, 4];

map();
// returns a new array based on existing array
myArray.map(el => el + 1);
myArray.map(() => 'b');

filter();

// Filter gives us back a new array

const myArray = [1, 3, 5, 7, 9];

// whatver return true is kept, false is omitted
myArray.filter(el => el > 4)[(5, 7, 9)];
myArray = [1, 3, 5, 7, 9];

reduce();

find();

includes();

const myArray = [1, 2, 3, 4, 5];

myArray.includes(3);
true;
myArray.includes(9);
false;
myArray.includes(2, 3);
false;
myArray.includes(2, 1);
true;

const newArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
newArray[2];
{
  id: 3;
}

newArray.includes({ id: 2 });
false;

// takes a single element  and checks to see if it exists
