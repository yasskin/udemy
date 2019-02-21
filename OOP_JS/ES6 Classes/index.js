const Circle = function() {
  this.draw = function() { console.log(this); }
};

const c = new Circle();
c.draw();

const draw = c.draw;
draw();

// class Math2 {
//   static abs(value) {
//     //....
//   }
// }
//
// Math2.abs()
//
// // class declaration
// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }
//   // instance method
//   draw() {
//   }
//
//   // static method
//   static parse(str) {
//     const radius = JSON.parse(str).radius;
//     return new Circle(radius);
//   }
// }
//
// const circle = Circle.parse('{"radius": 1}');
// console.log(circle);


// // class declaration - not hoisted
// class Circle {
//
// }
//
// const c = new Circle();
//
// // class expression [not recommended]
// const Square = class {
//
// };

// sayHello();
// // function declaration - these functions are hoisted
// function sayHello() {}
//
// // function expression - not hoisted
// const sayGoodbye = function() {};
// const number = 1;

// expressions take a semi-colon;


// function Circle(radius) {
//   this.radius = radius;
//
//   this.draw = function() {
//     console.log('draw');
//   }
// }

// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//     this.move = function() {
//     }
//   }
//
//   draw() {
//     console.log('draw');
//   }
// }
//
// const c = new Circle(1);

// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }

//   // instance method
//   draw() {
//   }

//   // static method
//   static parse(str) {
//     const radius = JSON.parse(str).radius;
//     return new Circle(radius);
//   }
// }

// const circle = Circle.parse('{ "radius": 1 }')
// Circle.parse();
// console.log(circle);

// class Math2 {
//   static abs(value) {
//     // ..
//   }
// }

const Circle = function() {
  this.draw = function() { console.log(this); }
};

const c = new Circle();
c.draw();

const draw = c.draw;
console.log(draw);












