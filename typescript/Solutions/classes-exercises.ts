// Exercise 1
// function Car(name) {
//   this.name = name;
//   this.acceleration = 0;

//   this.honk = function() {
//     console.log('Toooooooooot!');
//   };

//   this.accelerate = function(speed) {
//     this.acceleration = this.acceleration + speed;
//   };
// }

// var car = new Car('BMW');
// car.honk();
// console.log(car.acceleration);
// car.accelerate(10);
// console.log(car.acceleration);

// Excercise 1 - ts
class Car {
  name: string;
  acceleration: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  honk() {
    console.log('Toot!');
  }

  accelerate(speed: number) {
    this.acceleration = this.acceleration + speed;
  }
}

const car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(20);
console.log(car.acceleration);

// Exercise 2
// Extend or implement inheritance
// var baseObject = {
//   width: 0,
//   length: 0
// };

// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//   return this.width * this.length;
// };
// console.log(rectangle.calcSize());

class BaseObject {
  width = 0;
  length = 0;
}

class Rectangle extends BaseObject {
  calcSize() {
    return this.width * this.length;
  }
}

const rectangle = new Rectangle();
rectangle.length = 10;
rectangle.width = 5;
console.log(rectangle.calcSize());

// Exercise 3
var person = {
  _firstName: ''
};
Object.defineProperty(person, 'firstName', {
  get: function() {
    return this._firstName;
  },
  set: function(value) {
    if (value.length > 3) {
      this._firstName = value;
    } else {
      this._firstName = '';
    }
  },
  enumerable: true,
  configurable: true
});
console.log(person.firstName);
person.firstName = 'Ma';
console.log(person.firstName);
person.firstName = 'Maximilian';
console.log(person.firstName);

// Excercie 3 - Getters and Setters

class Person {
  private _firstName: string = "";

  get firstName() {
    return this._firstName;
  }

  set firstName(value: string) {
    if (value.length > 3) {
      this._firstName = value;
    } else {
      this._firstName = "";
    }
  }
}

const person = new Person();
console.log(person.firstName);
person.firstName = "Ma";
person.firstName = "Maximilian";