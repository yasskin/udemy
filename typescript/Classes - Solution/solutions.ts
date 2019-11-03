// Exercise 1 - Class
class Car {
    name: string;
    acceleration: number = 0;

    constructor(name: string) {
        this.name = name;
    }

    honk() {
        console.log("Toooooooot!");
    }

    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }
}

const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(20);
console.log(car.acceleration);

// Exercise 2 - Inheritance
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
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());

// Exercise 3 - Getters & Setters
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
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);