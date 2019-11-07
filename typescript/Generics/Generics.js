// Simple Generic
function echo(data) {
    return data;
}
console.log(echo('Max').length);
console.log(echo(27));
console.log(echo({ name: 'Max', age: '27' }));
// Better Generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho('Max').length);
console.log(betterEcho(27));
console.log(betterEcho({ name: 'Max', age: '27' }));
// Built-in Generics
var testResults2 = [1.94, 2.33];
testResults2.push(-2.99);
testResults2.push('String');
// Arrays
function printAll(agrs) {
    agrs.forEach(function (element) { return console.log(element); });
}
printAll(['Apple', 'Bannana']);
