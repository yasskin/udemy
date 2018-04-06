function greet(name, formatter) {
  return "Hello, " + formatter(name);
}

greet("Tim", function(name) {
  return name.toUpperCase();
});

greet("Tim", function(name) {
  return name + "!!!!!";
});

////////

// higher order function
function greet(name, formatter) {
  return "Hello, " + formatter(name);
}

// declared function
function upperCaseName(name) {
  return name.toUpperCase();
}

greet("Tim", upperCaseName);
