// Simple Generic Function
function echo(data) {
    return data;
}
console.log(echo('Max').length);
console.log(echo(27));
console.log(echo({ name: 'Max', age: '27' }));
// Better Generic Function
function betterEcho(data) {
    return data;
}
console.log(betterEcho('Max').length);
console.log(betterEcho(27));
console.log(betterEcho({ name: 'Max', age: '27' }));
// Built-in Generic
var testResults2 = [1.94, 2.33];
testResults2.push(-2.99);
//testResults2.push('String'); // error
// Arrays
function printAll(agrs) {
    agrs.forEach(function (element) { return console.log(element); });
}
printAll(['Apple', 'Bannana']);
// Generic Types
var echoTwo = echo;
// <T>(data: T) is a type assignment -- input is one argument of type T
// Generic Classes
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return this.baseValue * this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
