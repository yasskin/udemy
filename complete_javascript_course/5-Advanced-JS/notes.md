Objects & Functions

Inheritance & Proto

Everything is an object (Well, almost everything)

Primitives :
- numbers
- strings
- booleans
- undefined
- null values

Everything Else is an Object
- arrays
- functions
- objects
- dates
- wrappers for numbers, strings, booleans

Object-Oriented Programming

Objects interacting with one another through methods and properties

Used to store data, structure applications into modules and keep code clean

Constructors and Instances in JavaScript

Person
name
yearOfBirth
job
calculateAge()

Other languages may call this a class, in JS it is called a Constructor or Prototype.

Inheritance in General

an object is based on another object with access to its properties and methods.

JS is protoype-based language which means inheritance works by using prototypes.

Inheritance is made possible by the Prototype property that each object has.

Person object is constructor. John is an instance.

Summary

Every JS object has a prototype property, which makes inheritance possible in JS;

The prototype property of an object is where we put methods and properties that we want other object to inherit;

The Constructor's prototype property is NOT the prototype of the Constructor itself, it's the prototype of ALL instances that are created through it;

When a certain method (or property) is called, the search starts in the object itself, and if it cannot be found, the search moves on to the object's prototype. This continues until the method is found: prototype chain.
