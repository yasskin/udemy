// public by default
// private means you can only access it from within this object
// protected are private but are also accessible by objects that inherit from this class = the child class also has access to the protected property but not to a private one

class Person {
  name: string;
  private type: string;
  protected age: number = 27;

  constructor(name: string, public username: string) {
    this.name = name;
  }

  printAge() {
    console.log(this.age);
    this.setType('Old Guy');
  }

  setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

const person = new Person('Max', 'max');
console.log(person.name, person.username);
person.printAge();
person.setType('Cool guy');

// Inheritance
class Noah extends Person {
  //name = 'Noah';

  constructor(username: string) {
    super('Noah', username); // calls the parent class
    this.age = 31;
  }
}

const noah = new Noah('Noah');
console.log(noah);

// Getters & Setters
class Plant {
  private _species: string = 'Default';

  get species() {
    return this._species;
  }
  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = 'Default';
    }
  }
}

let plant = new Plant();
console.log(plant.species);
plant.species = 'Green Plant';

// Static Properties and Methods
class Helpers {
  static PI: number = 3.14;
  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

// Abstract Classes - cannot be instantiated directly; must be inherited from
abstract class Project {
  projectName: string = 'Default';
  budget: number;

  // needs to be overwritten or implemented in a child class
  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super IT Project');
console.log(newProject);

// private constructors
class OnlyOne {
  private static instance: OnlyOne;
  public readonly name: string;

  private constructor(name: string) {
    this.name = name;
  }

  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('The Only One');
    }
    return OnlyOne.instance;
  }
}

//let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
console.log(right.name);
//right.name = 'Something else'; - cannot assign property in read only
