# Async JS

# Objectives

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


* Code refactored with callbacks
```
function sendMessage(message, callback) {
  return callback(message);
}

sendMessage("message for console", console.log);

sendMessage("message for alert", alert);

var answer = sendMessage("Are you sure?", confirm);
```

callbacks with function declarations
```
function greet(name, formatter) {
  return "Hello, " + formatter(name);
}

function upperCaseName(name) {
  return name.toUpperCase();
}

greet("Tim", upperCaseName);

```

callbacks with anonymous Functions

```
function greet(name, formatter) {
  return "Hello, " + formatter(name);
}

greet("Tim", function(name) {
  return name.toUpperCase();
  });

greet("Timmy", function(name) {
  return name + "!!!!";
  });
  ```

print array values doubled
```
var arr = [1,2,3,4,5,6];
function double(arr) {
  for(var i = 0; i < arr.length; i++) {
    console.log(arr[i] * 2);
  }
}
double(arr);
```
double with forEach
```
var arr = [1,2,3,4,5,6];
forEach(arr, function(number) {
  console.log(number * 2);
  });
function forEach(array, callback) {
  //To be implemented
}
// callback signature
function callback(curElement, currentIndex, array) {
  // implemented by the caller of forEach
}
```

findIndex Definition
```
function findIndex(arr, callback) {
    for (var i =0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
}

```

returns the index of the first element in the array for which the callback returns a truthy value. -1 is the returned if the callback never returns a truthy value.
```
function findIndex(array, callback) {
  // findIndex code to be implemented
}

function callback(curElement, curIndex, array) {
  // callback implemented by caller of function
}

var arr = [3,4,6,2,1];
findIndex(arr, function(num, index, array) {
  return num === 6;
  });

  var arr = [5, 11, 13, 8, 6, 7];
  findIndex (arr, function(num, index, array) {
    return num % 2 === 0;
    });


```

## The Stack

* Stack is an ordered data structure
* Keeps track of function invocations
* part of the JS runtime (you don't access it directly)
* The Heap is an area in memory where your data is stored

## setTimeout

* A function that asynchronously invokes a callback after a delay in milliseconds
```
// setTimeout usage
function callback() {
  console.log("callback function");
}

var delay = 1000; // delay in ms

setTimeout(callback, delay);
```
```
setTimeout(function() {
  console.log("Runs in approx. 2000mx");
  }, 2000);

```
```
var timerId = setTimeout(function() {
  console.log("This function runs in 30 seconds");
  }, 30000);

setTimeout(function() {
  console.log("Cancelling the first setTimeout", timerId);
  clearTimeout(timerId);
  }, 2000);  
```
## setInterval
```
// setInterval usage
function callback() {
  console.log("callback is called continuously");
}

var repeat = 3000;
setInterval(callback, repeat);
```
```
var num = 0;
setInterval(function() {
  num++;
  console.log("Num: ", num);
  }, 1000)
```
```
var num = 0;
var intervalId = setInterval(function() {
  num++;
  console.log("num:", num);
    if (num === 3) {
      clearInterval(intervalId);
    }
  }, 1000);

```
## The Queue

* An ordered list of functions waiting to be placed on the Stack
* Functions on the Stack are processed in a first in first out order FIFO

## The Event Loop

* Functionality in the JavaScript runtime that checks the queue when the stack is empty
* If the stack is empty, the front of the queue is placed in the Stack

```
setTimeout(function() {
  console.log("Hello World!");
  }, 0);
```
```
function square(n) {
  return n * n;
}

setTimeout(function() {
  console.log("callback was placed on the the queue");
  }, 0);

console.log(square(2));

```
## JavaScript is single threaded. Code execution is linear. Code that is running cannot be interrupted by something else going on in the program.

```
setTimeout(function() {
  console.log("Hello from the timeout");
  }, 0);

for (var i = 0; i < 1000000000; i++ ) {
  var x = i * 2;
}  

console.log("Done with the loop");
```
# Promise Basics

* .then callbacks
* .catch

* A promise is an object that represents a task that will be completed in the future.

```
// creating a promise with the Promise constructor

var p1 = new Promise(function(resolve, reject) {
  resolve([1,2,3,4]);
  });

  p1.then(function(arr) {
    console.log("Promise p1 resolved with data:", arr);
    });

```
## Promise : Handling Errors
```
var p1 = new Promise(function(resolve, reject) {
  reject("ERROR");
});

p1.then(function(data) {
  console.log("Promise p1 resolved with data:", data);
}).catch(function(data) {
  console.log("Promise p1 was rejected with data:", data);
});

```
## Promise : With Randomly Occurring Errors
```
var p1 = new Promise(function(resolve, reject) {
  var num = Math.random();
    if (num < 0.5) {
      resolve(num);
    } else {
      reject(num);
    }
});

p1.then(function(result) {
  console.log("Success:", result);
}).catch(function(error) {
  console.log("Error:", error);
});

```
```
var promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    var randomInt = Math.floor(Math.random() * 10);
    resolve(randomInt);
    }, 4000)
  });

promise.then(function(data) {
  console.log("Random int passed to resolve:", data);
});

```

## Promise Chaining

* Nested Async callbacks
```
var counter = 0;

setTimeout(function() {
  counter++;
  console.log("Counter:", counter);
  setTimeout(function() {
    counter++;
    console.log("Counter:", counter);
    setTimeout(function() {
      counter++;
      console.log("Counter:", counter);
    }, 3000);
  }, 2000);
}, 1000);
```
## Returning a promise
```
var promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    randomInt = Math.floor(Math.random() * 10);
    resolve(randomInt);
    }, 500);
});

promise.then(function(data) {
  console.log("Random int passed to resolve:", data);
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(Math.floor(Math.random() * 10));
      }, 3000);
    });
}).then(function(data) {
    console.log("Second random int passed to resolve:", data);
});

```
Promise Chaining Returning data
```
var promise = new Promise(function(resolve, reject) {
  resolve(5);
  });

promise.then(function(data) {
    return data * 2;
}).then(function(data) {
    return data + 20;
}).then(function(data) {
    console.log(data);
});
```

## Refactored Code
```
var counter = 0;

function incCounter() {
  counter++;
  console.log("Counter:", counter);
}

function runLater(callback, timeInMs) {
  var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
      var res = callback();
      resolve(res);
      }, timeInMs);
    });
    return p;
}

runLater(incCounter, 100).then(function() {
    return runLater(incCounter, 2000);
}).then(function() {
    return runLater(incCounter, 3000);
}).then(function() {
    // final .then not necessary  
});

```
