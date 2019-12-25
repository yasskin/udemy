// annotate the argument list
// annotate the return value
const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

/// annotations for named functions
function divide(a: number, b: number): number {
  return a / b;
}

// anonymous function assigned to a variable
const multiply = function(a: number, b: number): number {
  return a * b;
};

// void and never
const logger = (message: string): void => {
  console.log(message);
  //return null;
  //return undefined;
};

// for void, return null or return undefined are permitteed

// never - edge case
// never exits the function without ever returning a value
const throwError = (message: string): never => {
  throw new Error(message);
};

// best practice
const throwErrorBestPractice = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }

  return message;
};

// destructuring with annotations
const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

// ES2015
const logWeather2015 = ({ date, weather }) => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);

// Annotations and Inference: Objects
