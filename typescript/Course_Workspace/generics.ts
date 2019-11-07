// Simple Generic Function
function echo(data: any) {
  return data;
}

console.log(echo('Max').length);
console.log(echo(27));
console.log(echo({ name: 'Max', age: '27' }));

// Better Generic Function
function betterEcho<T>(data: T) {
  return data;
}

console.log(betterEcho<string>('Max').length);
console.log(betterEcho<number>(27));
console.log(betterEcho<object>({ name: 'Max', age: '27' }));

// Built-in Generic
const testResults2: Array<number> = [1.94, 2.33];
testResults2.push(-2.99);
//testResults2.push('String'); // error

// Arrays
function printAll<T>(agrs: T[]) {
  agrs.forEach(element => console.log(element));
}

printAll<string>(['Apple', 'Bannana']);

// Generic Types
const echoTwo: <T>(data: T) => T = echo;

// <T>(data: T) is a type assignment -- input is one argument of type T

// Generic Classes
// has two types : the first should be a number or string, the second is used for multiplyValue
class SimpleMath<T extends number | string, U extends number | string> {
  baseValue: T;
  multiplyValue: U;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}

//
const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = '10';
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
