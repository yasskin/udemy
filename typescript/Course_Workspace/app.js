function greet(person) {
    console.log('Hello, ' + person.firstName);
}
function changeName(person) {
    person.firstName = 'Anna';
}
var person = {
    firstName: 'Max',
    age: 27,
    hobbies: ['Cooking', 'Sports'],
    greet: function (lastName) {
        console.log('Hi, I am ' + this.firstName + ' ' + lastName);
    }
};
greet(person);
changeName(person);
greet(person);
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastName) {
        console.log('Hi, I am ' + this.firstName + ' ' + lastName);
    };
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = 'Maximilian';
myPerson.lastName = 'Anything';
greet(myPerson);
myPerson.greet('Anything');
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 27,
    firstName: 'Max',
    lastName: 'Awesome',
    greet: function (firstName) {
        console.log('Hello ' + firstName);
    }
};
console.log(oldPerson.greet('World'));
