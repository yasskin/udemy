// interfaces

// describes the shape of very different objects
interface Reportable {
  //name: string;
  //year: Date;
  //broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const softdrink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
  //console.log(vehicle.name);
};

printSummary(oldCivic);
printSummary(softdrink);

// interfaces encourages us to write more generic functions, more reusable code
