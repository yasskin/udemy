// Decorators
// functions you can add to methods or classes
// allow you to add extra functionality to a class or property

// decorators function: it get one argument/parameter that
function logged(constructorFn: Function) {
  console.log(constructorFn);
}

// add a decorator that logs information about that class or its constructor
@logged
class Person {
  constructor() {
    console.log('Hi!');
  }
}

// Factory
function logging(value: boolean) {
  return value ? logged : null;
}

@logging(true)
class Car {}
