# Async JS

## Callback Functions

* Define callback function and higher order functions
* use a callback function to make our code more general
* create callbacks using anonymous Functions

* A callback function is a function that is passed into another function as a parameter then invoked by that other function

* Callback Example

```

function callback() {
  console.log("Coming from callback");
}

function higherOrder(fn) {
  console.log("About to call callback");
  fn(); // callback function is invoked
  console.log("callback has been invoked");
}

higherOrder(callback);

```

* a higher order function is a function that accepts a function as a parameter

## What are callbacks used for?

* Advanced array methods
* Browser events
* AJAX Requests use callbacks
* React Development
