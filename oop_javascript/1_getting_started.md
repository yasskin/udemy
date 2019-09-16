# Object Oriented Programming in JavaScript

* Mosh Hamedani
* codewithmosh.codewithmosh

## Four Pillars of Object-Oriented Programming

1. Encapsulation
2. Abstraction
3. Inheritance
4. Polymorphism

## Procedural Programming program with functions and data
```
let baseSalary = 30000;
let overTime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + (overTime * rate);
}
```

* We combine related functions and variables. In OOP we refer to variables as properties and functions as methods.

## Encapsulation.

* In OOP we group related variables and functions that act on them in an object. This is encapsulation.
* reduces complexity + increase reusability

```
let employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage: function() {
    return this.baseSalary + (this.overtime * this.rate);
  }
};
employee.getWage();
```

* OOP results in functions with fewer parameters. "The best functions are those with no parameters!" - Robert C. Martin

## Abstraction

* complexity is hidden. it makes the interface simpler. helps reduce the impact of change. r
* properties and methods are hidden from the outside
* helps reduce the impact of change
* isolates the impact of change

## Inheritance.

* allows you to reduce redundant code.
* other objects can inherit functions and properties

## Polymorphism (Many Form)

* refactors ugly switch / case statements
* a technique that allows you to get rid of if / else or switch and case statements
