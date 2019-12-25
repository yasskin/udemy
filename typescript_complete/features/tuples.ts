// tuples

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// type alias
type Drink = [string, boolean, number];

// color / carbonated / sugar
//const pepsi: [string, boolean, number] = ['brown', true, 40];
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 45];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354
};
