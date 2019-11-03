//string
//let myName = 'Max';
// myName = 28;

// number
//let myAge = 27.5;
// myAge = 'Max';

// boolean
let hasHobbies = true;
// hasHobbies = 1;

// ts doesn't care if a number is an integer or float -- both are typed numbers

// assign types
let myRealAge; // type any
myRealAge = 27;
myRealAge = '27';

// assign types
let myTruthyAge: number; // type any
myTruthyAge = 27;
// myTruthyAge = '27';

// array
let hobbies: any[] = ['cooking', 'sports'];
// hobbies = [100];

// tuples -- arrays with mixed types and limited # of items
let address: [string, number] = ['Superstreet', 99];

// enums -- make numbers more expressive
enum Color {
  Gray, // 0
  Green = 100, // 1
  Blue // 2
}
let myColor: Color = Color.Green;
console.log(myColor); // 100

// any
let car: any = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);

// functions = : string only refers to the return value
function returnMyName(): string {
  return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
  console.log('Hello!');
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
// console.log(multiply(2, 'Max'));
console.log(multiply(2, 10));

// function types
// in functions, the order is important
let myMultiply: (val1: number, val2: number) => number; // function type, not executable
//myMultiply = sayHello;
//myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));

// objects
let userData: { name: string; age: number } = {
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
let complex: { data: number[]; output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],

  output: function(all: boolean): number[] {
    return this.data;
  }
};

// complex = {}; // error

// type alias
type Complex = { data: number[]; output: (all: boolean) => number[] };

let complex2: Complex = {
  data: [100, 3.99, 10],

  output: function(all: boolean): number[] {
    return this.data;
  }
};

// union types
let myRealRealAge: number | string = 27;
myRealRealAge = '27';
//myRealRealAge = true; // error

// check types
let finalValue = 300;
// put the type between quotation marks
if (typeof finalValue == 'number') {
  console.log('Final value is a number');
}

// never -- it doesn't return void, it returns an error -- it never returns anything
// probably not very frequently used
function neverReturns(): never {
  throw new Error('An error');
}

// nullable types
let cannotBeNull = 12;
// cannotBeNull = null // throws an error
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull; // type any by default, also has the value undefined
// all uninitialized js variables are undefined by default
canAlsoBeNull = null; // used to reset or clear a value
let canThisBeAny = null; // infers type nullable
//canThisBeAny = 12; // throws error, it can only be null

let myName: string = 'Max';
let myAge: number = 27;
let anything;
anything = 12;

// myName = 30;

function controlMe(isTrue: boolean, somethingElse: boolean) {
  let result: number;
  if (isTrue) {
    result = 12;
  }
  result = 33;
  return result;
}
