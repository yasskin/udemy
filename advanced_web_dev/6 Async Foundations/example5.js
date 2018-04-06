// function greet(name, formatter) {
//   return "Hello, " + formatter(name);
// }
//
// function upperCaseName(name) {
//   return name.toUpperCase();
// }
//
// greet("Tim", upperCaseName);

function greet(name, formatter) {
  return "Hello, " + formatter(name);
}

function upperCaseName(name) {
  return name.toUpperCase();
}

greet("Tim", upperCaseName);
